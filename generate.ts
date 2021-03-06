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
  comments: string[];
}

/**
 * generate js docs with comments
 * @param comments
 * @param indent
 * @returns
 */
function generateJSDocs(comments: string[], indent: number): string {
  const paddingStr = " ".repeat(indent);

  const rows = comments
    .filter((v) => v)
    .map((v) => {
      return "\n" + paddingStr + " * " + v;
    })
    .join("");

  return `${paddingStr}/**${rows}\n${paddingStr} */`;
}

/**
 * 生成一个 schema 的 ts interface
 * @param name schema(interface) 的名称
 * @param c schema
 * @param indent Object 嵌套时的锁进
 * @param parent 父级
 */
function generateComponent(name: string | void, c: IComponent, indent: number, parent: IComponent | void): string {
  const comments: string[] = [];

  const getComment = () => {
    // return `/* ${JSON.stringify(c)} */`;
    return c.description ? ` /* ${c.description || ""} */` : "";
  };

  if (isRefComponent(c)) {
    const componentName = c.$ref.replace(/#\/components\/schemas\//, "");
    if (name) {
      return `type name = ${componentName}`;
    } else {
      return `${componentName}`;
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
        comments: [
          // description
          propSchema.description ? propSchema.description : "",
          // format
          (propSchema as any).format ? "format: " + (propSchema as any).format : "",
        ],
      });
    }

    if (c.additionalProperties && isComponent(c.additionalProperties)) {
      output.push({
        key: `[key: string]`,
        readonly: c.additionalProperties.readOnly,
        value: generateComponent(void 0, c.additionalProperties, indent + 2, c),
        optional: !!c.additionalProperties.nullable,
        comments: [
          // description
          c.additionalProperties.description ? c.additionalProperties.description : "",
          // format
          (c.additionalProperties as any).format ? "format: " + (c.additionalProperties as any).format : "",
        ],
      });
    }

    c.description && comments.push(c.description);

    if (name) {
      return `${generateJSDocs(comments, 0)}
export interface ${name} {
${output
  .map((v) => {
    const padding = " ".repeat(indent);

    return `${generateJSDocs(v.comments, indent)}
${padding}${v.readonly ? "readonly " : ""}${v.key}${v.optional ? "?" : ""}: ${v.value}`;
  })
  .join("\n")}
${" ".repeat(indent - 2)}}`;
    } else {
      return `{${output
        .map((v) => {
          return `\n${generateJSDocs(v.comments, indent)}
${" ".repeat(indent)}${v.readonly ? "readonly " : ""}${v.key}${v.optional ? "?" : ""}: ${v.value}`;
        })
        .join("\n")}
${" ".repeat(indent - 2)}}`;
    }
  } else if (isArrayComponent(c)) {
    return `Array<${generateComponent(void 0, c.items, indent, c)}>`;
  } else if (isStringComponent(c)) {
    return `string`;
  } else if (isIntegerComponent(c) || isNumberComponent(c)) {
    // if it's top level type
    const comments: string[] = [
      // description
      c.description!,
      // format
      c.format ? "format: " + c.format : "",
    ];
    if (!parent) {
      const comment = `${generateJSDocs(comments, 0)}`;
      if (c.enum) {
        return `${comment}
export type ${name} = ${c.enum.join(" | ")}`;
      }
      return `${comment}
export type ${name} = number`;
    } else {
      if (c.enum) {
        return `${c.enum.join(" | ")}`;
      }
      return `number`;
    }
  } else if (isBooleanComponent(c)) {
    return `boolean`;
  }

  return `unknown`;
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

    const component = swaggerJSON.components.schemas[componentName];

    if (isRefComponent(component)) {
      return extraSchema(component.$ref);
    } else {
      return component;
    }
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
        const indent = 2;

        const queryArr: IOutput[] = [];
        for (const params of instance.parameters) {
          if (params.in !== "query") {
            continue;
          }
          let isOptional = params.required ?? params.schema.nullable;
          if (isOptional == void 0 && isRefComponent(params.schema)) {
            const component = extraSchema(params.schema.$ref);
            isOptional = !!component.nullable;
          }

          const type = generateComponent(void 0, params.schema, indent, params.schema);

          queryArr.push({
            key: params.name,
            value: type,
            optional: isOptional,
            comments: [
              // description
              params.schema.description ? params.schema.description : "",
              // format
              (params.schema as any).format ? "format: " + (params.schema as any).format : "",
            ],
          });
        }

        const padding = " ".repeat(indent);

        params = `{
${queryArr
  .map((v) => {
    return `${generateJSDocs(v.comments, indent + 2)}
${" ".repeat(indent + 2)}${v.key}${v.optional ? "?" : ""}: ${v.value}`;
  })
  .join("\n")}
${padding}}`;
      }

      // 请求的 Body
      if (instance.requestBody as IRequestBody) {
        const formData = (instance.requestBody as IRequestBody).content["multipart/form-data"];
        const json = (instance.requestBody as IRequestBody).content["application/json"];

        if (formData) {
          body = "FormData";
        } else if (json) {
          body = generateComponent(void 0, json.schema, 4, json.schema);
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
            response = generateComponent(void 0, json.schema, 4, json.schema);
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
        paramsAndBody = `${params ? ", query: " + params : ""}`;
      } else {
        paramsAndBody = `${body ? ", body: " + body : ""}`;
      }

      routers.push(
        `//${tag ? " " + tag + " -" : ""}${instance.summary ? " " + instance.summary : ""}
  ${method}(url: "${url}"${paramsAndBody}, config?: ${options.requestConfig}): Promise<${response}>`
      );
    }
  }

  const template = `// Generate by https://github.com/axetroy/swagger2ts. DO NOT MODIFY IT.

${components.join("\n\n")}

export interface SwaggerApi {
${routers.map((v) => "  " + v).join("\n")}
}`;

  return template;
}
