import * as path from "https://deno.land/std@0.105.0/path/mod.ts";
import { generateDefinition, generateImplement } from "./v3/index.ts";
import "./sdk.ts"

export async function generate(target: string): Promise<string> {
  let swaggerJSONFilePath = "";
  let swaggerJSONContent: Uint8Array;
  let filename = "";
  let domain = "";

  function getFileNameFromPaths(paths: string): string {
    const arr = paths.split("/");
    return arr[arr.length - 1];
  }

  // remote file
  if (/^https?:\/\//.test(target)) {
    const url = new URL(target);
    const resp = await fetch(url);

    const buffer = await resp.arrayBuffer();

    filename = getFileNameFromPaths(url.pathname).replace(/\.\w+$/g, "");
    swaggerJSONFilePath = path.join(Deno.cwd(), filename);
    swaggerJSONContent = new Uint8Array(buffer);
    domain = url.origin;
  } else {
    filename = path.basename(swaggerJSONFilePath).replace(/\.\w+$/g, "");
    swaggerJSONFilePath = path.isAbsolute(target) ? target : path.resolve(target);
    swaggerJSONContent = await Deno.readFile(swaggerJSONFilePath);
    domain = "http://localhost";
  }

  const content = new TextDecoder().decode(swaggerJSONContent);

  const sdkFilepath = new URL("./sdk.ts", import.meta.url);

  console.log(sdkFilepath)

  const definition = generateDefinition(content);
  const implement = generateImplement(content, new TextDecoder().decode(await Deno.readFile(sdkFilepath)), domain);

  const result = `// Generate by swagger2ts
${definition}

${implement}
`;

  return result.trimEnd();
}

if (import.meta.main) {
  const result = await generate(Deno.args[0]);

  console.log(result);
}
