import * as path from "https://deno.land/std@0.105.0/path/mod.ts";
import { generateDefinition, generateImplement } from "./v3/index.ts";
import "./runtime/fetch.ts"; // import to check type and download deps

async function getDeps(url: string): Promise<string | undefined> {
  const ps = Deno.run({
    cmd: [Deno.execPath(), "info", url, "--json"],
    stdout: "piped",
    stderr: "piped",
  });

  await ps.status();

  const rawOutput = await ps.output();

  ps.stderr.close();
  ps.close();

  const result = JSON.parse(new TextDecoder().decode(rawOutput)) as { root: string; modules: Array<{ specifier: string; local: string }> };

  const module = result.modules.find((v) => v.specifier === url);

  return module?.local;
}

export async function generate(target: string): Promise<string> {
  let swaggerJSONFilePath = "";
  let swaggerJSONContent: string;
  let domain = "";

  function getFileNameFromUrlPaths(paths: string): string {
    const arr = paths.split("/");
    return arr[arr.length - 1];
  }

  // remote file
  if (/^https?:\/\//.test(target)) {
    const url = new URL(target);
    const headers = new Headers()

    headers.set("Content-Type", "application/json;charset=UTF-8")

    const resp = await fetch(url, {
      headers: headers
    });

    swaggerJSONContent = await resp.text();

    const filename = getFileNameFromUrlPaths(url.pathname).replace(/\.\w+$/g, "");
    swaggerJSONFilePath = path.join(Deno.cwd(), filename);
    domain = url.origin;
  } else {
    swaggerJSONFilePath = path.isAbsolute(target) ? target : path.resolve(target);
    swaggerJSONContent = await Deno.readTextFile(swaggerJSONFilePath);
    domain = "http://localhost";
  }

  const sdkURL = new URL("./runtime/fetch.ts", import.meta.url);

  const sdkFilepath = await getDeps(sdkURL.toString());

  if (!sdkFilepath) {
    throw new Error("can not found sdk file");
  }

  const definition = generateDefinition(swaggerJSONContent);
  const implement = generateImplement(swaggerJSONContent, new TextDecoder().decode(await Deno.readFile(sdkFilepath)), domain);

  const result = `// Generate by swagger2ts
${definition}

${implement}
`;

  return result.trim();
}

if (import.meta.main) {
  const result = await generate(Deno.args[0]);

  Deno.stdout.writeSync(new TextEncoder().encode(result))
}
