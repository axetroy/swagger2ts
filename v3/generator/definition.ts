import {
  IReferenceObject,
  ISchemaObject,
  isReferenceObject,
  ISwagger,
} from "../types.ts";
import { DefinitionGenerator } from "./generator.ts";

function getRealType(type?: string) {
  if (type === undefined) return "unknown";

  const typeMapper: { [key: string]: string } = {
    integer: "number",
  };

  return typeMapper[type] || type;
}

/**
 * 获取引用名称
 */
function getRefName(ref: IReferenceObject): string {
  const schemaPropertyPaths = ref.$ref.replace(/^#\/components/, "").split("/");

  return schemaPropertyPaths[schemaPropertyPaths.length - 1].trim();
}

/**
 * 生成节点
 */
export function traverse(
  g: DefinitionGenerator,
  schema: IReferenceObject | ISchemaObject,
) {
  if (isReferenceObject(schema)) {
    g.write(`${getRefName(schema)}`);
    return;
  }

  // 递归生成
  switch (schema.type) {
    case "object":
      traverseObject(g, schema);
      break;
    case "array":
      traverseArray(g, schema);
      break;
    default:
      if (schema.format && schema.format === "binary") {
        g.write("Blob | Uint8Array");
      } else if (schema.enum) {
        if (schema.type === "string") {
          g.write(schema.enum.map((v) => `'${v}'`).join(" | "));
        } else {
          g.write(schema.enum.join(" | "));
        }
      } else {
        g.write(getRealType(schema.type));
      }

      if (schema.nullable) {
        g.write(" | null");
      }
  }
}

/**
 * 生成 Object
 */
function traverseObject(g: DefinitionGenerator, object: ISchemaObject) {
  if (isReferenceObject(object)) {
    g.write(`${getRefName(object)}`);
    return;
  }

  const objectInterface = g.createInterfaceBlock();

  objectInterface.start();

  object.required;

  if (object.properties) {
    for (const attr in object.properties) {
      const propertyType = object.properties[attr];

      const comment = g.createCommentBlock();

      if (propertyType.description) {
        comment.start();
        comment.write("description", propertyType.description);
        comment.end();
      }

      const isPropertyRequired = typeof propertyType.required === "boolean"
        ? propertyType.required
        : Array.isArray(object.required)
        ? object.required.includes(attr)
        : false;

      if (isReferenceObject(propertyType)) {
        objectInterface.writeProperty(
          attr,
          getRefName(propertyType),
          !isPropertyRequired,
          propertyType.nullable,
        );
        continue;
      }

      // 递归生成
      switch (propertyType.type) {
        case "object":
          g.write(`${g.indentStr}${attr}${isPropertyRequired ? "" : "?"}: `);
          traverse(g, propertyType);

          if (propertyType.nullable) {
            g.dropLastEmptyLine(1);
            g.write(" | null");
            g.write(g.EOL);
          }

          break;
        case "array":
          g.write(`${g.indentStr}${attr}${isPropertyRequired ? "" : "?"}: `);
          traverse(g, propertyType);

          if (propertyType.nullable) {
            g.write(" | null");
          }

          g.write(g.EOL);
          break;
        default:
          g.write(`${g.indentStr}${attr}${isPropertyRequired ? "" : "?"}: `);
          traverse(g, propertyType);
          g.write(g.EOL);
      }
    }
  }

  if (object.additionalProperties) {
    g.write(`${g.indentStr}[key: string]: `);
    traverse(g, object.additionalProperties!);
    g.write(g.EOL);
  }

  // 如果是一个空对象
  if (!object.properties && !object.additionalProperties) {
    g.writeln(`[key: string]: unknown`);
  }

  objectInterface.end();
}

/**
 * 生成数组
 */
function traverseArray(g: DefinitionGenerator, array: ISchemaObject) {
  if (isReferenceObject(array.items)) {
    g.write(`Array<${getRefName(array.items)}>`);
  } else {
    g.write(`Array<`);
    switch (array.items?.type) {
      case "object":
        traverseObject(g, array.items);
        break;
      case "array":
        traverseArray(g, array.items);
        break;
      default:
        g.write(getRealType(array.items?.type));
    }

    g.write(">");
  }
}

/**
 * 生成组件
 */
function generateComponent(swagger: ISwagger): string {
  const g = new DefinitionGenerator();

  if (swagger.components) {
    if (swagger.components.schemas) {
      for (const componentName in swagger.components.schemas) {
        const schema = swagger.components.schemas[componentName];

        const comment = g.createCommentBlock();

        if (isReferenceObject(schema)) {
          g.write("export ");
          g.declareType(componentName, getRefName(schema));
          continue;
        }

        if (schema.description) {
          comment.start();
          comment.write("description", schema.description);
          comment.end();
        }

        switch (schema.type) {
          case "object":
            g.write(`export interface ${componentName} `);
            traverse(g, schema);
            g.write(g.EOL);

            break;
          case "array":
            g.write(`export type ${componentName} = Array<`);
            traverse(g, schema.items!);
            g.writeln(">");
            break;
          default:
            g.write("export ");
            if (schema.enum) {
              g.declareEnum(componentName, schema.enum);
              g.write(g.EOL);
            } else {
              g.declareType(componentName, getRealType(schema.type));
              g.write(g.EOL);
            }

            g.write(g.EOL);
        }
      }
    }
  }

  return g.toString();
}

// generate HTTP definition for swagger api
export function generateDefinition(content: string): string {
  const swagger = JSON.parse(content) as ISwagger;

  return generateComponent(swagger);
}
