import {
  IComponent,
  IRequestBody,
  isComponent,
  isArrayComponent,
  isBooleanComponent,
  isIntegerComponent,
  isNumberComponent,
  isObjectComponent,
  isRefComponent,
  isStringComponent,
  ISwagger,
} from "./types/swagger.ts";

interface IOutput {
  key: string;
  value: string;
  optional?: boolean;
  readonly?: boolean;
}

/**
 * 生成一个 schema 的 ts interface
 * @param name schema(interface) 的名称
 * @param c schema
 * @param indent Object 嵌套时的锁进
 * @param parent 父级
 */
function generateComponent(name: string | void, c: IComponent, indent: number, parent: IComponent | void): string {
  const getComment = () => {
    // return `/* ${JSON.stringify(c)} */`;
    return c.description ? ` /* ${c.description || ""} */` : "";
  };

  if (isRefComponent(c)) {
    const componentName = c.$ref.replace(/#\/components\/schemas\//, "");
    if (name) {
      return `type name = ${componentName}${getComment()}`;
    } else {
      return `${componentName}${getComment()}`;
    }
  } else if (isObjectComponent(c)) {
    const propertiesMap = c.properties;

    const output: IOutput[] = [];

    for (const prop in propertiesMap) {
      const propSchema = propertiesMap[prop];

      output.push({
        key: prop,
        readonly: propSchema.readOnly,
        value: generateComponent(void 0, propSchema, indent + 2, c),
        optional: !!propSchema.nullable,
      });
    }

    if (c.additionalProperties && isComponent(c.additionalProperties)) {
      output.push({
        key: `[key: string]`,
        readonly: c.additionalProperties.readOnly,
        value: generateComponent(void 0, c.additionalProperties, indent + 2, c),
        optional: !!c.additionalProperties.nullable,
      });
    }

    if (name) {
      return `//${c.description ? " " + c.description : ""}
export interface ${name} {
${output.map((v) => `${" ".repeat(indent)}${v.readonly ? "readonly " : ""}${v.key}${v.optional ? "?" : ""}: ${v.value}`).join("\n")}
${" ".repeat(indent - 2)}}`;
    } else {
      return `{
${output.map((v) => `${" ".repeat(indent)}${v.readonly ? "readonly " : ""}${v.key}${v.optional ? "?" : ""}: ${v.value}`).join("\n")}
${" ".repeat(indent - 2)}}`;
    }
  } else if (isArrayComponent(c)) {
    return `Array<${generateComponent(void 0, c.items, indent, c)}>${getComment()}`;
  } else if (isStringComponent(c)) {
    return `string${getComment()}`;
  } else if (isIntegerComponent(c) || isNumberComponent(c)) {
    // if it's top level type
    if (!parent) {
      if (c.enum) {
        return `//${c.description ? " " + c.description : ""}
export type ${name} = ${c.enum.join(" | ")}${getComment()}`;
      }
      return `//${c.description ? " " + c.description : ""}
export type ${name} = number${getComment()}`;
    } else {
      if (c.enum) {
        return `${c.enum.join(" | ")}${getComment()}`;
      }
      return `number${getComment()}`;
    }
  } else if (isBooleanComponent(c)) {
    return `boolean${getComment()}`;
  }

  return "unknown";
}

export interface IOption {
  requestConfig?: string; // the config of the request. recommend `AxiosRequestConfig`. defaults to 'unknown'
}

function mergeOptions(option: IOption): IOption {
  return {
    requestConfig: "unknown",
    ...option,
  };
}

/**
 * Generate api file from swagger json
 * @param swaggerJSONStr
 * @returns
 */
export function generate(swaggerJSONStr: string, options: IOption = {}): string {
  options = mergeOptions(options);

  const swaggerJSON = JSON.parse(swaggerJSONStr) as ISwagger;

  function extraSchema(ref: string): IComponent {
    const componentName = ref.replace(/#\/components\/schemas\//, "");

    return swaggerJSON.components.schemas[componentName];
  }

  const components: string[] = []; // 公共的 interface 模型

  for (const schemaName in swaggerJSON.components.schemas) {
    const component = swaggerJSON.components.schemas[schemaName];

    components.push(generateComponent(schemaName, component, 2, void 0));
  }

  const routers: string[] = []; // 所有的请求方法

  for (const url in swaggerJSON.paths) {
    for (const method in swaggerJSON.paths[url]) {
      const instance = swaggerJSON.paths[url][method];
      let params = "";
      let body = "";
      let response = "unknown";
      let tag = "";

      //请求的 URL 参数
      if (instance.parameters?.length) {
        const queryArr: string[] = [];
        for (const params of instance.parameters) {
          if (params.in !== "query") {
            continue;
          }
          let isOptional = params.required ?? params.schema.nullable;
          if (isOptional == void 0 && isRefComponent(params.schema)) {
            const component = extraSchema(params.schema.$ref);
            isOptional = !!component.nullable;
          }

          const type = generateComponent(void 0, params.schema, 2, params.schema);

          queryArr.push(`${params.name}${isOptional ? "?" : ""}: ${type}`);
        }

        params = `{ ${queryArr.join(", ")} }`;
      }

      // 请求的 Body
      if (instance.requestBody as IRequestBody) {
        const formData = (instance.requestBody as IRequestBody).content["multipart/form-data"];
        const json = (instance.requestBody as IRequestBody).content["application/json"];

        if (formData) {
          body = "FormData";
        } else if (json) {
          body = generateComponent(void 0, json.schema, 2, json.schema);
        } else {
          body = "";
        }
      }

      // 请求的 response
      if (instance.responses) {
        const successInstance = instance.responses["200"];

        if (!successInstance || !successInstance.content) {
          response = "unknown";
        } else {
          const json = successInstance.content["application/json"];

          if (json) {
            response = generateComponent(void 0, json.schema, 2, json.schema);
          } else {
            response = "unknown";
          }
        }
      }

      // 标签(模块)
      if (instance.tags) {
        const tags: string[] = [];

        for (const tag of instance.tags) {
          const definedTag = swaggerJSON.tags.find((t) => t.name === tag);

          if (definedTag) {
            tags.push(definedTag.description);
          }
        }

        tag = tags.join(" - ");
      }

      let paramsAndBody = ``;

      if (["get", "delete", "head", "option"].includes(method)) {
        paramsAndBody = `${params ? ", params: " + params : ""}`;
      } else {
        paramsAndBody = `${body ? ", body: " + body : ""}`;
      }

      routers.push(
        `//${tag ? " " + tag + " -" : ""}${instance.summary ? " " + instance.summary : ""}
  ${method}(url: "${url}"${paramsAndBody}, config?: ${options.requestConfig}): Promise<${response}>`
      );
    }
  }

  const template = `// Generate from swagger. DO NOT MODIFY IT.
${components.join("\n\n")}

export interface SwaggerApi {
${routers.map((v) => "  " + v).join("\n")}
}`;

  return template;
}
