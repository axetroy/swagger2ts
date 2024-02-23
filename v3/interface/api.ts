import {
  IOperationObject,
  IParameterObject,
  IPathsComponent,
  IReferenceObject,
  IRequestBodyObject,
  IResponseObject,
  IResponsesObject,
  isReferenceObject,
} from "../types.ts";
import { ApiGenerator, DefinitionGenerator } from "./generator.ts";
import { traverse } from "./definition.ts";

export function generatePaths(
  paths: IPathsComponent,
  withInterface = true,
): string {
  const g = new ApiGenerator();

  g.start(withInterface);

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

  for (const path in paths) {
    const pathObject = paths[path];

    const defineMethods = methods.filter((v) => v in pathObject);

    for (const method of defineMethods) {
      const inTypes = ["path", "query", "header"];

      const paramsMap: {
        [inType: string]: { required: boolean; type: string };
      } = {};

      // @ts-ignore ignore error
      const parameters = pathObject[method].parameters as Array<
        IParameterObject | IReferenceObject
      >;

      inTypes.forEach((action) => {
        paramsMap[action] = { required: false, type: "" };

        if (!parameters) return;

        const params = parameters.filter((v) => !isReferenceObject(v)).filter((
          v,
        ) => (v as IParameterObject).in === action) as IParameterObject[];

        if (!params.length) {
          return;
        }

        const paramGen = new DefinitionGenerator();
        paramGen.write("{");

        params.forEach((param, index) => {
          if (param.schema) {
            const isRequired =
              (param.schema.required =
                typeof param.schema.required === "boolean"
                  ? param.schema.required
                  : param.required);
            if (!!isRequired === true) {
              paramsMap[action].required = true;
            }
            paramGen.write(
              `${paramGen.indentStr}${param.name}${!isRequired ? "?" : ""}: `,
            );
            traverse(paramGen, param.schema);
            if (index !== params.length - 1) {
              paramGen.write(", ");
            }
          } else {
            paramGen.write(`${param.name}: unknown`);
          }
        });

        paramGen.write("}");

        paramsMap[action].type = paramGen.toString();
      });

      // @ts-ignore ignore error
      const requestBody = pathObject[method].requestBody as
        | IRequestBodyObject
        | IReferenceObject;
      // @ts-ignore ignore error
      const responseBody = pathObject[method].responses as IResponsesObject;

      const generateBody = (
        b?: IRequestBodyObject | IResponseObject | IReferenceObject,
      ): string => {
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
          // g.write("FormData");
          g.write("TypedFormData<");
          traverse(g, mediaSchema.schema);
          g.write(">");
        } else {
          traverse(g, mediaSchema.schema);
        }

        return g.toString();
      };

      const body = generateBody(requestBody);
      const response = generateBody(
        responseBody ? responseBody[200] || responseBody.default : undefined,
      );

      const comment = g.createCommentBlock();

      const op = pathObject[method] as IOperationObject;

      if (op.description || op.summary) {
        comment.start();
        if (op.description) {
          comment.writeTag("description", op.description);
        }
        if (op.summary) {
          comment.writeTag("summary", op.summary);
        }
        if (op.tags && op.tags.length) {
          comment.writeTag("tag", op.tags.join(", "));
        }
        comment.end();
      }

      g.writeApi(
        method,
        path,
        paramsMap.path,
        paramsMap.query,
        paramsMap.header,
        body,
        response,
      );
    }
  }

  g.end();

  return g.toString();
}
