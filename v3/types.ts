// example: https://petstore3.swagger.io/
// spec: https://swagger.io/specification/

export interface ISwagger {
  openapi: string;
  info?: {
    title: string;
    description: string;
    termsOfService: string;
    contact: {
      name: string;
      url: string;
      email: string;
    };
    license: {
      name: string;
      url: string;
    };
    version: string;
  };
  servers?: Array<IServerObject>;
  paths: {
    [url: string]: IPathItemObject;
  };
  components?: IComponentsObject;
  security?: ISecurityRequirementObject[];
  tags?: ITagObject[];
  externalDocs?: IExternalDocumentationObject;
}

interface ISecurityRequirementObject {
  [key: string]: string[];
}

interface ITagObject {
  name: string;
  description?: string;
  externalDocs?: IExternalDocumentationObject;
}

interface IExternalDocumentationObject {
  description?: string;
  url: string;
}

export interface IOperationObject {
  tags?: string[];
  summary?: string;
  description?: string;
  externalDocs?: IExternalDocs;
  operationId?: string;
  parameters?: Array<IParameterObject | IReferenceObject>;
  requestBody?: IRequestBodyObject | IReferenceObject;
  responses: IResponsesObject;
  callbacks?: {
    [key: string]: ICallbackObject | IReferenceObject;
  };
  deprecated?: boolean;
  security: ISecurityRequirementObject[];
  servers: IServerObject[];
}

interface IComponentsObject {
  schemas: { [key: string]: ISchemaObject | IReferenceObject };
  responses: { [key: string]: IResponseObject | IReferenceObject };
  parameters: { [key: string]: IParameterObject | IReferenceObject };
  examples: { [key: string]: IExampleObject | IReferenceObject };
  requestBodies: { [key: string]: IRequestBodyObject | IReferenceObject };
  headers: { [key: string]: IHeaderObject | IReferenceObject };
  securitySchemes: { [key: string]: ISecuritySchemeObject | IReferenceObject };
  links: { [key: string]: ILinkObject | IReferenceObject };
  callbacks: { [key: string]: ICallbackObject | IReferenceObject };
}

interface ISecuritySchemeObject {
  type: "apiKey" | "http" | "oauth2" | "openIdConnect";
  description?: string;
  name: string;
  in: "query" | "header" | "cookie";
  scheme: string;
  bearerFormat?: string;
  flows?: any; // TODO
  openIdConnectUrl: string;
}

interface IExampleObject {
  summary?: string;
  description?: string;
  value?: any;
  externalValue?: string;
}

interface IPathItemObject {
  $ref?: string;
  summary?: string;
  description?: string;
  get?: IOperationObject;
  put?: IOperationObject;
  post?: IOperationObject;
  delete?: IOperationObject;
  options?: IOperationObject;
  head?: IOperationObject;
  patch?: IOperationObject;
  trace?: IOperationObject;
  servers?: IServerObject[];
  parameters?: Array<IParameterObject | IReferenceObject>;
}

interface ICallbackObject {}

export interface IRequestBodyObject {
  description?: string;
  content: {
    [key: string]: IMediaTypeObject;
  };
}

interface IResponsesObject {
  default: IResponseObject | IReferenceObject;
  [httpCode: string]: IResponseObject | IReferenceObject;
}

export interface IResponseObject {
  description: string;
  headers?: {
    [key: string]: IHeaderObject | IReferenceObject;
  };
  content?: {
    [key: string]: IMediaTypeObject;
  };
  links?: {
    [key: string]: ILinkObject | IReferenceObject;
  };
}

interface ILinkObject {
  operationRef?: string;
  operationId?: string;
  parameters?: { [key: string]: any };
  requestBody?: any;
  description?: string;
  server: IServerObject;
}

interface IMediaTypeObject {
  schema?: ISchemaObject | IReferenceObject;
  example: any;
  examples: any; // TODO
  encoding: {
    [key: string]: IEncodingObject;
  };
}

interface JSONSchema {
  // https://json-schema.org/
  title?: string;
  multipleOf?: string[];
  maximum?: number;
  exclusiveMaximum?: number;
  minimum?: number;
  exclusiveMinimum?: number;
  maxLength?: number;
  minLength?: number;
  pattern?: any;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: number;
  maxProperties?: number;
  minProperties?: number;
  required?: boolean;
  enum?: Array<string | number>;

  // swagger extension
  type: "integer" | "string" | "number" | "boolean" | "object" | "array";
  allOf?: ISchemaObject;
  oneOf?: ISchemaObject;
  anyOf?: ISchemaObject;
  not?: ISchemaObject;
  items?: ISchemaObject | IReferenceObject;
  properties?: { [key: string]: ISchemaObject };
  additionalProperties?: { [key: string]: ISchemaObject };
  description?: string;
  format?: string;
}

export interface ISchemaObject extends JSONSchema {
  nullable?: boolean;
  discriminator?: IDiscriminatorObject;
  readOnly?: boolean;
  writeOnly?: boolean;
  xml?: IXMLObject;
  externalDocs?: IExternalDocs;
  example?: any;
  deprecated?: boolean;
}

interface IDiscriminatorObject {
  propertyName: string;
  mapping: { [key: string]: string };
}

interface IXMLObject {
  name?: string;
  namespace?: string;
  prefix?: string;
  attribute?: boolean;
  wrapped?: boolean;
}

interface IEncodingObject {
  contentType?: string;
  headers?: {
    [key: string]: IHeaderObject | IReferenceObject;
  };
  style?: string;
  explode?: boolean;
  allowReserved?: boolean;
}

interface IHeaderObject extends IParameterObject {}

interface IServerObject {
  url: string;
  description?: string;
  variables?: {
    [key: string]: {
      enum?: string[];
      default: string;
      description?: string;
    };
  };
}

interface IExternalDocs {
  url: string;
  description?: string;
}

export interface IParameterObject {
  name: string;
  in: "query" | "path" | "header" | "cookie";
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;

  style?: string;
  explode?: boolean;
  allowReserved?: boolean;
  schema?: ISchemaObject;
  example?: any;
  examples?: string; // TODO:
}

export interface IReferenceObject {
  $ref: string;
}

export function isReferenceObject(x: any): x is IReferenceObject {
  return x && !!x.$ref;
}

export function isSchemaObject(x: any): x is ISchemaObject {
  return typeof x.type === "string";
}

export function isRequestBodyObject(x: any): x is IRequestBodyObject {
  return typeof x.content === "object";
}
