import { generateMultipleLineComments, indentTxt } from "./helper.ts";
import {
  IOperationObject,
  IParameterObject,
  IReferenceObject,
  IRequestBodyObject,
  IResponseObject,
  ISchemaObject,
  isReferenceObject,
  isRequestBodyObject,
  ISwagger,
} from "./types.ts";

function generateSchema(name: string, schema: ISchemaObject | IReferenceObject, indent: number): string {
  // "#/components/schemas/Address"
  if (isReferenceObject(schema)) {
    const schemaPropertyPaths = schema.$ref.replace(/^#\/components/, "").split("/");

    const refSchemaName = schemaPropertyPaths[schemaPropertyPaths.length - 1];

    return refSchemaName;
  } else {
    const isRequired = schema.required;
    const isNullable = schema.nullable;

    function generateLiteral(type: string) {
      let stringResult = `${name ? `type ${name} = ` : ""}${type}`;
      if (!isRequired) {
        stringResult += " | undefined";
      }

      if (isNullable) {
        stringResult += " | null";
      }

      return stringResult;
    }

    switch (schema.type) {
      case "string":
        if (schema.format === "binary") return generateLiteral("File");
        if (schema.enum) {
          return generateLiteral(schema.enum.map((v) => `"${v}"`).join(" | "));
        }
        return generateLiteral("string");
      case "boolean":
        if (schema.enum) {
          return generateLiteral(schema.enum.join(" | "));
        }
        return generateLiteral("boolean");
      case "integer":
      case "number":
        if (schema.enum) {
          return generateLiteral(schema.enum.join(" | "));
        }
        return generateLiteral("number");
      case "array":
        if (!schema.items) return "any[]";
        return `Array<${generateSchema("", schema.items, indent)}>`;
      case "object":
        const outputObject: string[] = [];
        for (const prop in schema.properties) {
          const propSchema = schema.properties[prop];
          outputObject.push(`${prop}: ${generateSchema("", propSchema, indent)}`);
        }
        return `${name ? `interface ${name} ` : ""}{${outputObject.join(", ")}}`;
      default:
        return `${name ? `type ${name} = ` : ""}any`;
    }
  }
}

function generateParams(param: IParameterObject | IReferenceObject, indent: number): string {
  if (isReferenceObject(param)) {
    // TODO
    return "";
  }
  return generateSchema("", param.schema!, indent);
}

function generateComponent(swagger: ISwagger, indent: number): string {
  const output: string[] = [];

  if (swagger.components) {
    if (swagger.components.schemas) {
      for (const componentName in swagger.components.schemas) {
        const schema = swagger.components.schemas[componentName];

        output.push("export " + generateSchema(componentName, schema, indent));
      }
    }
  }

  return output.join("\n");
}

function generateBody(body: IRequestBodyObject | IResponseObject, indent: number) {
  if (!body.content) return "null";
  const jsonBody = body.content["application/json"];
  const streamBody = body.content["application/octet-stream"];
  const formBody = body.content["application/x-www-form-urlencoded"];

  const mediaSchema = jsonBody || streamBody || formBody;

  if (!mediaSchema || !mediaSchema.schema) return "null";

  return generateSchema("", mediaSchema.schema, 0);
}

function generateApi(swagger: ISwagger, indent: number): string {
  const urlBlock: string[] = [];
  const methods = ["get", "post", "delete", "put", "head", "options", "trace", "patch"];

  for (const url in swagger.paths) {
    const pathItemObject = swagger.paths[url];

    for (const method of methods) {
      // @ts-expect-error ignore error
      const operation = pathItemObject[method] as IOperationObject;
      if (!operation) continue;

      const paramsPath: { [key: string]: string } = {};
      const paramsHeader: { [key: string]: string } = {};
      const paramsQuery: { [key: string]: string } = {};
      let paramsBody: string = "";
      let responseBody: string = "";

      if (operation.parameters) {
        for (const param of operation.parameters) {
          if (!isReferenceObject(param)) {
            switch (param.in) {
              case "path":
                paramsPath[param.name] = generateParams(param, indent);
                break;
              case "header":
                paramsHeader[param.name] = generateParams(param, indent);
                break;
              case "query":
                paramsQuery[param.name] = generateParams(param, indent);
                break;
            }
          } else {
            console.warn("ignore params");
          }
        }
      }

      function generateParamsStr(name: string, obj: { [key: string]: string }) {
        const keys = Object.keys(obj);
        if (!keys.length) return `${name}?: {}`;

        const str = keys.map((key) => `${key}: ${obj[key]}`).join(", ");

        return `${name}: {${str}}`;
      }

      if (operation.requestBody) {
        if (isRequestBodyObject(operation.requestBody)) {
          paramsBody = generateBody(operation.requestBody, 0);
        }
      }

      if (operation.responses) {
        if (operation.responses["200"] || operation.responses.default) {
          const successResponse = operation.responses["200"] || operation.responses.default;
          if (isReferenceObject(successResponse)) {
            responseBody = generateSchema("", successResponse, 0);
          } else {
            responseBody = generateBody(successResponse, 0);
          }
        } else {
          responseBody = "unknown";
        }
      }

      const routerParams: string[] = [
        generateParamsStr("path", paramsPath) === "path?: {}" ? "path?: MapString" : generateParamsStr("path", paramsPath),
        generateParamsStr("query", paramsQuery) === "query?: {}" ? "query?: MapString" : generateParamsStr("query", paramsQuery),
        generateParamsStr("header", paramsHeader) === "header?: {}" ? "header?: MapString" : generateParamsStr("header", paramsHeader),
        paramsBody ? `body: ${paramsBody}` : "body?: any",
      ].filter((v) => v);

      const docs: string[] = [];

      if (operation.tags) {
        for (const tag of operation.tags) {
          docs.push(`@tag ${tag}`);
        }
      }

      if (operation.summary) {
        operation.summary.split("\n").filter(v => v.trim()).forEach((line) => {
          docs.push(`@summary ${line}`);
        });
      }

      if (operation.description) {
        operation.description.split("\n").filter(v => v.trim()).forEach((line) => {
          docs.push(`@description ${line}`);
        });
      }

      const rows = [
        generateMultipleLineComments(docs),
        `${method}(url: "${url}", options: {${routerParams.join(", ")}}): Promise<${responseBody}>`,
        //
      ]
        .filter((v) => v)
        .join("\n");

      urlBlock.push(rows);
    }
  }

  urlBlock.push("/* default methods */");

  for (const method of methods) {
    const rule = `${method}<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any }): Promise<T>`;
    urlBlock.push(rule);
  }

  return `export interface SwaggerApi{
${indentTxt(urlBlock.join("\n"), indent)}
}`;
}

function generateDefaultTypes(): string {
  return `/* default type by generation start */
interface MapAny {
  [key: string]: any
}
interface MapString {
  [key: string]: string | undefined
}
/* default type by generation end */`;
}

// generate HTTP definition for swagger api
export function generateDefinition(content: string): string {
  const indent = 2;

  const swagger = JSON.parse(content) as ISwagger;

  const output: string[] = [generateDefaultTypes(), generateComponent(swagger, indent), generateApi(swagger, indent)];

  return output.join("\n\n");
}
