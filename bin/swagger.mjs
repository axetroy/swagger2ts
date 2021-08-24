#!/usr/bin/env node --no-deprecation --abort-on-uncaught-exception --no-warnings

import { readFileSync } from "fs";
import { URL } from 'url'
import * as path from "path"
import axios from 'axios'
import { v3 } from "../index.mjs";

let swaggerJSONContent = ''
let domain = ''

if (/^https?:\/\//.test(process.argv[2])) {
  // remote swaggerJSONFilePath
  const url = new URL(process.argv[2])
  const res = await axios.get(url.toString(), {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })

  swaggerJSONContent = JSON.stringify(res.data)
  domain = url.origin;
} else {
  const swaggerJSONFilePath = path.resolve(process.argv[2])
  swaggerJSONContent = readFileSync(swaggerJSONFilePath, { encoding: "utf-8" });
  domain = 'http://localhost'
}

const sdkFilepath = new URL("../runtime/fetch.ts", import.meta.url);

const definition = v3.generateDefinition(swaggerJSONContent);
const implement = v3.generateImplement(swaggerJSONContent, new TextDecoder().decode(readFileSync(sdkFilepath)), domain);

const result = `// Generate by swagger2ts
${definition}

${implement}
`;

process.stdout.write(result.trimEnd())
