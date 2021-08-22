import * as path from "https://deno.land/std@0.105.0/path/mod.ts";
import { generate } from "../swagger2ts.ts";

const testDir = new URL("../__test__/3.0", import.meta.url).toString().replace(/^file:\/\//, "");

for await (const dirEntry of Deno.readDir(testDir)) {
  if (/\.json$/.test(dirEntry.name)) {
    const actual = await generate(path.join(testDir, dirEntry.name));

    Deno.writeTextFileSync(path.join(testDir, dirEntry.name.replace(/\.json$/, ".ts")), actual);
  }
}
