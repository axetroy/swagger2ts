import {
  IComponentsObject,
  IReferenceObject,
  ISchemaObject,
  isReferenceObject,
} from "../types.ts";
import { DefinitionGenerator } from "./generator.ts";
import { isValidVarName } from "../helper.ts";

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

  if (object.properties) {
    for (const attr in object.properties) {
      const propertyType = object.properties[attr];

      const comment = g.createCommentBlock();

      if (propertyType.description) {
        if (!comment.started) comment.start();
        comment.writeTag("description", propertyType.description);
      }

      if (propertyType.format) {
        if (!comment.started) comment.start();
        comment.writeTag("format", propertyType.format);
      }

      if (comment.started) {
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
        default: {
          const propertyName = isValidVarName(attr) ? attr : `'${attr}'`;
          g.write(
            `${g.indentStr}${propertyName}${isPropertyRequired ? "" : "?"}: `,
          );
          traverse(g, propertyType);
          g.write(g.EOL);
        }
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
export function generateDefinition(components: IComponentsObject): string {
  const g = new DefinitionGenerator();

  if (components.schemas) {
    for (const componentName in components.schemas) {
      const schema = components.schemas[componentName];

      const comment = g.createCommentBlock();

      if (isReferenceObject(schema)) {
        g.declareType(componentName, getRefName(schema), true);
        continue;
      }

      if (schema.description) {
        comment.start();
        if (schema.deprecated) {
          comment.writeTag("deprecated", "");
        }
        comment.writeTag("description", schema.description);
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
          if (!schema.items) {
            g.write("unknown");
          } else {
            traverse(g, schema.items!);
          }
          g.writeln(">");
          break;
        default:
          if (schema.enum) {
            g.declareEnum(componentName, schema.enum, true);
            g.write(g.EOL);
          } else {
            g.declareType(componentName, getRealType(schema.type), true);
            g.write(g.EOL);
          }

          g.write(g.EOL);
      }
    }
  }

  return g.toString();
}
