import { generateMultipleLineComments, indentTxt, linesOfText } from "./helper.ts";
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

/**
 * generate document for rate
 */
function generateSchema(name: string, schema: ISchemaObject | IReferenceObject, indent: number, optionalThenUndefined?: boolean): string {
  // "#/components/schemas/Address"
  if (isReferenceObject(schema)) {
    const schemaPropertyPaths = schema.$ref.replace(/^#\/components/, "").split("/");

    const refSchemaName = schemaPropertyPaths[schemaPropertyPaths.length - 1];

    return refSchemaName;
  } else {
    const isRequired = schema.required;
    const isNullable = schema.nullable;

    function generateLiteral(...types: string[]) {
      let stringResult = `${name ? `type ${name} = ` : ""}${types.join(" | ")}`;
      if (!isRequired) {
        if (!optionalThenUndefined) {
          stringResult += " | undefined";
        }
      }

      if (isNullable) {
        stringResult += " | null";
      }

      return stringResult;
    }

    switch (schema.type) {
      case "string":
        if (schema.format === "binary") return generateLiteral("File", "Blob");
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
          outputObject.push(`${prop}${!propSchema.required ? "?" : ""}: ${generateSchema("", propSchema, indent, true)}`);
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
  return generateSchema("", param.schema!, indent, true);
}

function generateComponent(swagger: ISwagger, indent: number): string {
  const output: string[] = [];

  if (swagger.components) {
    if (swagger.components.schemas) {
      for (const componentName in swagger.components.schemas) {
        const schema = swagger.components.schemas[componentName];

        let componentOutput = "";

        if (!isReferenceObject(schema)) {
          const comments: string[] = [];

          if (schema.title) {
            comments.push(`${schema.title}`);
          }

          if (schema.description) {
            comments.push(`@description ${schema.description}`);
          }

          const jsdocComments = generateMultipleLineComments(comments).trim()

          if (jsdocComments) {
            componentOutput += jsdocComments + "\n";
          }

        }

        componentOutput += `export ${generateSchema(componentName, schema, indent)}`;

        output.push(componentOutput);
      }
    }
  }

  return output.join("\n");
}

function generateBody(body: IRequestBodyObject | IResponseObject, indent: number) {
  if (!body.content) return "null";
  const jsonBody = body.content["application/json"];
  const xmlBody = body.content["application/xml"];
  const streamBody = body.content["application/octet-stream"];
  const formBody = body.content["multipart/form-data"];
  const anyBody = body.content["*/*"];

  const mediaSchema = jsonBody || xmlBody || streamBody || formBody || anyBody;

  if (!mediaSchema || !mediaSchema.schema) return "null";

  if (formBody && mediaSchema === formBody) {
    if (!formBody.schema) return "RuntimeForm";
    return `RuntimeForm<${generateSchema("", formBody.schema, 0)}>`;
  }

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
            const isRequired = param.required === true;
            const suffix = !isRequired ? "?" : "";
            switch (param.in) {
              case "path":
                paramsPath[param.name + suffix] = generateParams(param, indent);
                break;
              case "header":
                paramsHeader[param.name + suffix] = generateParams(param, indent);
                break;
              case "query":
                paramsQuery[param.name + suffix] = generateParams(param, indent);
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
        } else {
          paramsBody = generateSchema("", operation.requestBody, 0, true);
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
        "signal?: AbortSignal",
      ].filter((v) => v);

      const docs: string[] = [];

      if (operation.tags) {
        for (const tag of operation.tags) {
          docs.push(`@tag ${tag}`);
        }
      }

      if (operation.summary) {
        linesOfText(operation.summary)
          .filter((v) => v.trim())
          .forEach((line) => {
            docs.push(`@summary ${line}`);
          });
      }

      if (operation.description) {
        linesOfText(operation.description)
          .filter((v) => v.trim())
          .forEach((line) => {
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
