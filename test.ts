import * as path from "https://deno.land/std@0.105.0/path/mod.ts";
import { assertEquals } from "https://deno.land/std@0.105.0/testing/asserts.ts";
import { generate } from "./swagger2ts.ts";
import { URL2filepath } from "./helper.ts";

async function testDir(dirName: string) {
  const testDir = URL2filepath(new URL(`./__test__/${dirName}`, import.meta.url));

  console.log("testDir: ", testDir);

  for await (const dirEntry of Deno.readDir(testDir)) {
    if (/\.json$/.test(dirEntry.name)) {
      console.log("path.join(testDir, dirEntry.name): ", path.join(testDir, dirEntry.name));
      const actual = await generate(path.join(testDir, dirEntry.name));

      console.log(actual)

      // const expect = await Deno.readTextFile(path.join(testDir, dirEntry.name.replace(/\.json$/, ".ts")));

      // assertEquals(actual.trim(), expect.trim());
    }
  }
}

Deno.test({
  name: "Generate for swagger 3.0",
  fn: async () => {
    await testDir("3.0");
  },
});

Deno.test({
  name: "Generate for swagger 3.1",
  fn: async () => {
    await testDir("3.1");
  },
});
