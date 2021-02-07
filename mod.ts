import { generate } from "./generate.ts";
const { readFile, args } = Deno;

const swaggerJSONFile = args[0];

const bytes = await readFile(swaggerJSONFile);

const content = new TextDecoder().decode(bytes);

const output = generate(content);

console.log(output)