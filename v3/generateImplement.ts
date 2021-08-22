import { ISwagger } from "./types.ts";

function path2apiName(path: string): string {
  // full url
  if (/https?:\/\//.test(path)) {
    path = new URL(path).pathname;
  }

  return path.replace(/^\//, "").replace(
    /\/(\w)/g,
    (all, letter) => letter.toUpperCase(),
  );
}

// generate HTTP implement for swagger api
export function generateImplement(
  content: string,
  sdkContent: string,
  domain: string,
): string {
  const swagger = JSON.parse(content) as ISwagger;

  domain = domain.replace(/\/$/, "");

  if (swagger.servers) {
    const apis: string[] = [];

    for (const server of swagger.servers) {
      const apiName = path2apiName(server.url);

      const api =
        `export const ${apiName} = new Http("${domain}", "${server.url}")`;

      apis.push(api);
    }

    sdkContent += "\n" + apis.join("\n");
  } else {
    sdkContent += `\nexport const defaultApi = new Http("${domain}", "")`;
  }

  return sdkContent;
}
