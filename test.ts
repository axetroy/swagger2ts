import * as path from "https://deno.land/std@0.105.0/path/mod.ts";
import { assertEquals } from "https://deno.land/std@0.105.0/testing/asserts.ts";
import { generate } from "./swagger2ts.ts";

Deno.test({
  name: "Generate",
  fn: async () => {
    const testDir = new URL("./__test__/3.0", import.meta.url).toString().replace(/^file:\/\//, "");

    for await (const dirEntry of Deno.readDir(testDir)) {
      if (/\.json$/.test(dirEntry.name)) {
        const actual = await generate(path.join(testDir, dirEntry.name));

        const expect = await Deno.readTextFile(path.join(testDir, dirEntry.name.replace(/\.json$/, ".ts")));

        assertEquals(actual.trim(), expect.trim());
      }
    }
  },
});
