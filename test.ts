import * as path from "https://deno.land/std@0.105.0/path/mod.ts";
import { assertEquals } from "https://deno.land/std@0.105.0/testing/asserts.ts";
import { generate } from "./swagger2ts.ts";
import { URL2filepath } from "./helper.ts";

Deno.test({
  name: "Generate",
  fn: async () => {
    async function testDir(dirName: string) {
      const testDir = URL2filepath(new URL(`./__test__/${dirName}`, import.meta.url));

      for await (const dirEntry of Deno.readDir(testDir)) {
        if (/\.json$/.test(dirEntry.name)) {
          const actual = await generate(path.join(testDir, dirEntry.name));

          const expect = await Deno.readTextFile(path.join(testDir, dirEntry.name.replace(/\.json$/, ".ts")));

          assertEquals(actual.trim(), expect.trim());
        }
      }
    }

    await testDir("3.0");
    await testDir("3.1");
  },
});
