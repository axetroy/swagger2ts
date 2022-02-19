import {
  IOperationObject,
  IParameterObject,
  IReferenceObject,
  IRequestBodyObject,
  IResponseObject,
  IResponsesObject,
  isReferenceObject,
  ISwagger,
} from "../types.ts";
import { ApiGenerator, DefinitionGenerator } from "./generator.ts";
import { traverse } from "./definition.ts";

function generatePath(swagger: ISwagger): string {
  const g = new ApiGenerator();

  g.start();

  const methods = [
    "get",
    "post",
    "delete",
    "put",
    "head",
    "options",
    "trace",
    "patch",
  ];

  for (const path in swagger.paths) {
    const pathObject = swagger.paths[path];

    const defineMethods = methods.filter((v) => v in pathObject);

    for (const method of defineMethods) {
      const inTypes = ["path", "query", "header"];

      const params: { [key: string]: string } = {};

      // @ts-ignore ignore error
      const parameters = pathObject[method].parameters as Array<
        IParameterObject | IReferenceObject
      >;

      if (parameters) {
        inTypes.forEach((action) => {
          params[action] = "";

          const paths = parameters.filter((v) => !isReferenceObject(v)).filter((
            v,
          ) => (v as IParameterObject).in === action) as IParameterObject[];

          for (const path of paths) {
            if (path.schema) {
              const g = new DefinitionGenerator();
              path.schema.required = typeof path.schema.required === "boolean"
                ? path.schema.required
                : path.required;
              g.write("{");
              g.write(`${g.indentStr}${path.name}: `);
              traverse(g, path.schema);
              g.write("}");
              params[action] = g.toString();
            } else {
              params[action] = "unknown";
            }
          }
        });
      }

      // @ts-ignore ignore error
      const requestBody = pathObject[method].requestBody as
        | IRequestBodyObject
        | IReferenceObject;
      // @ts-ignore ignore error
      const responseBody = pathObject[method].responses as IResponsesObject;

      function generateBody(
        b?: IRequestBodyObject | IResponseObject | IReferenceObject,
      ): string {
        if (!b) return "unknown";

        if (isReferenceObject(b)) {
          const g = new DefinitionGenerator();
          traverse(g, b);

          return g.toString();
        }

        const body: IRequestBodyObject | IResponseObject = b;

        if (!body.content) return "unknown";

        const jsonBody = body.content["application/json"] ||
          body.content["text/json"] || body.content["text/plain"];
        const xmlBody = body.content["application/xml"];
        const streamBody = body.content["application/octet-stream"];
        const formBody = body.content["multipart/form-data"];
        const anyBody = body.content["*/*"];

        const mediaSchema = jsonBody || xmlBody || streamBody || formBody ||
          anyBody;

        if (!mediaSchema || !mediaSchema.schema) return "unknown";

        const g = new DefinitionGenerator();

        if (formBody && mediaSchema === formBody) {
          g.write("FormData");
        } else {
          traverse(g, mediaSchema.schema);
        }

        return g.toString();
      }

      const body = generateBody(requestBody);
      const response = generateBody(
        responseBody ? responseBody[200] || responseBody.default : undefined,
      );

      const comment = g.createCommentBlock();

      // @ts-expect-error ignore error
      const op = pathObject[method] as IOperationObject;

      if (op.description || op.summary) {
        comment.start();
        if (op.description) {
          comment.write("description", op.description);
        }
        if (op.summary) {
          comment.write("summary", op.summary);
        }
        if (op.tags && op.tags.length) {
          comment.write("tag", op.tags.join(", "));
        }
        comment.end();
      }

      g.writeApi(
        method,
        path,
        params.path,
        params.query,
        params.headers,
        body,
        response,
      );
    }
  }

  g.end();

  return g.toString();
}

export function generateApi(content: string): string {
  const swagger = JSON.parse(content) as ISwagger;

  return generatePath(swagger);
}
