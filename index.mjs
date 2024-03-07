import { readFileSync } from "fs";
import { URL } from 'url'
import * as path from "path"
import axios from 'axios'
import * as v3 from "./dist/v3.mjs";

async function generate(target) {
  let swaggerJSONContent = ''
  let domain = ''

  if (/^https?:\/\//.test(target)) {
    // remote swaggerJSONFilePath
    const url = new URL(target)
    const res = await axios.get(url.toString(), {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })

    swaggerJSONContent = JSON.stringify(res.data)
    domain = url.origin;
  } else {
    const swaggerJSONFilePath = path.resolve(target)
    swaggerJSONContent = readFileSync(swaggerJSONFilePath, { encoding: "utf-8" });
    domain = 'http://localhost'
  }

  const sdkFilepath = new URL("./runtime/fetch.ts", import.meta.url);

  const definition = v3.generateInterface(swaggerJSONContent);
  const implement = v3.generateRuntime(swaggerJSONContent, new TextDecoder().decode(readFileSync(sdkFilepath)), domain);

  const result = `// Generate by swagger2ts
${definition}

${implement}
  `;

  return result.trim();
}

export { generate };