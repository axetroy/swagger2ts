import { generate } from "./generate.ts";
const { readFile } = Deno;

const bytes = await readFile("swagger.json");

const content = new TextDecoder().decode(bytes);

const output = generate(content);

console.log(output);
