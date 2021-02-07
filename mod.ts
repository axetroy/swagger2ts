import { generate } from "./generate.ts";
const { readFile, stdout } = Deno;

const bytes = await readFile("swagger.json");

const content = new TextDecoder().decode(bytes);

const output = generate(content);

stdout.write(new TextEncoder().encode(output));
