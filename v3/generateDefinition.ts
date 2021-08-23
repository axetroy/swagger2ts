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

function generateParamsComment(schema: ISchemaObject) {
  return schema.description ? ` /* ${schema.description} */` : "";
}

/**
 * generate document for rate
 */
function generateSchema(name: string, schema: ISchemaObject | IReferenceObject | undefined, indent: number, optionalThenUndefined?: boolean): string {
  if (!schema) return "any";

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

      stringResult += generateParamsComment(schema as ISchemaObject);

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
        return `Array<${generateSchema("", schema.items, indent)}>${generateParamsComment(schema)}`;
      case "object":
        const outputObject: string[] = [];
        for (const prop in schema.properties) {
          const propSchema = schema.properties[prop];
          outputObject.push(`${" ".repeat(indent + 2)}${prop}${!propSchema.required ? "?" : ""}: ${generateSchema("", propSchema, indent, true)}`);
        }
        if (!outputObject.length) return name ? `interface ${name} {}` : "{}";
        return [name ? `interface ${name} {` : "{", ...outputObject, "}"].filter((v) => v.trim()).join("\n");
      default:
        return `${name ? `type ${name} = ` : ""}any${generateParamsComment(schema)}`;
    }
  }
}

function generateParamsArray(params: Array<IParameterObject | IReferenceObject>, indent: number): string {
  const output: string[] = [];
  for (const param of params) {
    if (isReferenceObject(param)) {
      throw new Error("not support ref param");
    }

    output.push(`${param.name}${!param.required ? "?" : ""}: ${generateSchema("", param.schema, 0, true)}`);
  }

  if (!output.length) return "{}";

  return ["{", ...output.map((v) => " ".repeat(indent + 2) + v), "}"].join("\n");
}

function generateParams(param: IParameterObject | IReferenceObject, indent: number): string {
  if (isReferenceObject(param)) {
    const schemaPropertyPaths = param.$ref.replace(/^#\/components/, "").split("/");

    const refSchemaName = schemaPropertyPaths[schemaPropertyPaths.length - 1];

    return refSchemaName;
  } else if (!param.schema) {
    return "any";
  } else {
    return generateSchema("", param.schema, indent, true);
  }
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

          const jsdocComments = generateMultipleLineComments(comments).trim();

          if (jsdocComments) {
            componentOutput += jsdocComments + "\n";
          }
        }

        componentOutput += `export ${generateSchema(componentName, schema, indent)}`;

        output.push(componentOutput);
      }
    }
  }

  return output.join("\n\n");
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

      const paramsArray: string[] = [];

      let paramsBody: string = "";
      let responseBody: string = "";

      if (operation.parameters) {
        const inTypes = ["path", "query", "header"];
        const parameters = operation.parameters;

        inTypes.forEach((action) => {
          const paths = parameters.filter((v) => !isReferenceObject(v)).filter((v) => (v as IParameterObject).in === action);

          const pathsType = generateParamsArray(paths, 0);

          paramsArray.push(`${action}${pathsType === "{}" ? "?" : ""}: ${pathsType}`);
        });
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

      const options: string[] = [
        ...paramsArray,
        paramsBody ? `body: ${paramsBody}` : "body?: any",
        "timeout?: number",
        //
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
        `${method}(url: "${url}", options: {${options.join(", ")}} & IDefaultOptions): Promise<${responseBody}>`,
        //
      ]
        .filter((v) => v)
        .join("\n");

      urlBlock.push(rows);
    }
  }

  return `export interface SwaggerApi{
${indentTxt(urlBlock.join("\n\n"), indent)}
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

type IDefaultOptions = Omit<RequestInit, "body" | "method">
/* default type by generation end */`;
}

// generate HTTP definition for swagger api
export function generateDefinition(content: string): string {
  const indent = 2;

  const swagger = JSON.parse(content) as ISwagger;

  const output: string[] = [generateDefaultTypes(), generateComponent(swagger, 0), generateApi(swagger, indent)];

  return output.join("\n\n");
}
