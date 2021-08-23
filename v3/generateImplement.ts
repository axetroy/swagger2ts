import { camelCase } from "https://deno.land/x/case@v2.1.0/mod.ts";
import { IServerObject, ISwagger } from "./types.ts";

function getServerUrl(serverInfo: IServerObject): URL {
  let urlStr = serverInfo.url;

  if (serverInfo.variables) {
    for (const key in serverInfo.variables) {
      const schema = serverInfo.variables[key];
      const reg = new RegExp(`{${key}}`, "g");

      if (schema.default) {
        urlStr = urlStr.replace(reg, schema.default);
      } else if (schema.enum && schema.enum.length) {
        urlStr = urlStr.replace(reg, schema.enum[0]);
      } else {
        urlStr = urlStr.replace(reg, "unknown");
      }
    }
  }

  // if it's not a valid url
  // may be a relative path
  if (!/https?:\/\//.test(urlStr)) {
    urlStr = "http://localhost" + urlStr;
  }

  const url = new URL(urlStr);

  return url;
}

function path2apiName(serverInfo: IServerObject): string {
  function getNameFromUnknownString(str: string) {
    const result = camelCase(str);

    if (/^[a-z][a-zA-Z\d]+/.test(result)) {
      return result;
    } else {
      return "unknownApi";
    }
  }

  // relative path
  if (/^\//.test(serverInfo.url)) {
    return getNameFromUnknownString(serverInfo.url);
  } else {
    const url = getServerUrl(serverInfo);

    if (url.pathname === "/") {
      return getNameFromUnknownString(url.hostname);
    } else {
      return getNameFromUnknownString(url.pathname);
    }
  }
}

// generate HTTP implement for swagger api
export function generateImplement(content: string, sdkContent: string, domain: string): string {
  const swagger = JSON.parse(content) as ISwagger;

  domain = domain.replace(/\/$/, "");

  if (swagger.servers) {
    const apis: string[] = [];

    for (const server of swagger.servers) {
      const apiName = path2apiName(server);
      const serverURL = getServerUrl(server);

      const api = `export const ${apiName} = new Runtime("${domain}", "${serverURL.pathname}") as unknown as SwaggerApi`;

      apis.push(api);
    }

    sdkContent += "\n" + apis.join("\n");
  } else {
    sdkContent += `\nexport const defaultApi = new Runtime("${domain}", "") as unknown as SwaggerApi`;
  }

  return sdkContent;
}
