export interface ISwagger {
  openapi: string;
  info?: {
    title: string;
    version: string;
  };
  paths: {
    [url: string]: {
      [method: string]: {
        tags?: string[];
        summary?: string;
        requestBody?: IRequestBody | IRequestBodyRef;
        parameters?: Array<{
          name: string;
          in: "query" | "path" | "header" | "cookie";
          description: string;
          schema: IComponent;
          required?: boolean;
        }>;
        responses: {
          [code: string]: {
            description?: string;
            content?: {
              [mineType: string]: {
                schema: IComponent;
              };
            };
          };
        };
      };
    };
  };
  components: {
    schemas: { [key: string]: IComponent };
    requestBodies: {
      [key: string]: IRequestBody;
    };
  };
  security: Array<{ [key: string]: string[] }>;
  tags: Array<{ name: string; description: string }>;
}

export interface IRequestBody {
  description?: string;
  content: {
    [mineType: string]: {
      schema: IComponent;
    };
  };
}

export interface IRequestBodyRef {
  $ref: string;
}

export type IMethod = "get" | "post" | "delete" | "put" | "options";
export type IBasicType = "integer" | "string" | "boolean" | "object" | "array";
export type IPropertyFormat = "int32" | "int64";

export interface IComponentBasic {
  type: string;
  description?: string;
  nullable?: boolean;
  format?: string;
}

export interface IObjectComponent extends IComponentBasic {
  type: "object";
  additionalProperties: boolean;
  properties: {
    [key: string]: IComponent;
  };
  required: string[];
}

export interface IOneOfComponent extends IComponentBasic {
  oneOf: Array<IRefComponent>;
}

export interface IAnyOfComponent extends IComponentBasic {
  anyOf: Array<IRefComponent>;
}

export interface IRefComponent extends IComponentBasic {
  $ref: string;
}

export interface IArrayComponent extends IComponentBasic {
  type: "array";
  items: IComponent;
}

export interface IStringComponent extends IComponentBasic {
  type: "string";
  enum?: string[];
  format?: "binary";
}

export interface IBooleanComponent extends IComponentBasic {
  type: "boolean";
  enum?: number[];
}

export interface IIntegerComponent extends IComponentBasic {
  type: "integer";
  enum?: number[];
  minimum?: number;
  maximum?: number;
  default?: number;
  required?: boolean;
}

export interface INumberComponent extends IComponentBasic {
  type: "number";
  enum?: number[];
  minimum?: number;
  maximum?: number;
  default?: number;
  required?: boolean;
}

export type IComponent =
  | IObjectComponent
  | IArrayComponent
  | IRefComponent
  | IStringComponent
  | IIntegerComponent
  | INumberComponent
  | IBooleanComponent
  | IOneOfComponent
  | IAnyOfComponent;

export function isObjectComponent(x: IComponent): x is IObjectComponent {
  return x.type === "object";
}

export function isArrayComponent(x: IComponent): x is IArrayComponent {
  return x.type === "array";
}

export function isRefComponent(x: IComponent): x is IRefComponent {
  // @ts-expect-error
  return !!x.$ref;
}

export function isStringComponent(x: IComponent): x is IStringComponent {
  return x.type === "string";
}

export function isIntegerComponent(x: IComponent): x is IIntegerComponent {
  return x.type === "integer";
}

export function isNumberComponent(x: IComponent): x is INumberComponent {
  return x.type === "number";
}

export function isBooleanComponent(x: IComponent): x is IBooleanComponent {
  return x.type === "boolean";
}
