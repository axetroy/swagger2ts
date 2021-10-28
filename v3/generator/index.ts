import { generateDefinition } from "./definition.ts";
import { generateApi } from "./api.ts";

export function generate(content: string): string {
  const output = [generateDefinition(content), generateApi(content)];

  return output.join("\n\n");
}
