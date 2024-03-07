import { generateDefinition } from "./definition.ts";
import { generatePaths } from "./api.ts";
import { ISwagger } from "../types.ts";

export function generateInterface(content: string): string {
  const swagger = JSON.parse(content) as ISwagger;

  const output = [];

  if (swagger.components) {
    output.push(generateDefinition(swagger.components));
  }

  output.push(generatePaths(swagger.paths));

  return output.join("\n\n");
}
