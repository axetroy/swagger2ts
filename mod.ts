import { generate } from "./generate.ts";
const { readFile, stdout, args } = Deno;

const swaggerJSONFile = args[0];

const bytes = await readFile(swaggerJSONFile);

const content = new TextDecoder().decode(bytes);

const output = generate(content);

// await stdout.write(new TextEncoder().encode(output));
console.log(output)