import * as path from "https://deno.land/std@0.126.0/path/mod.ts";
import { assertEquals, assert } from "https://deno.land/std@0.126.0/testing/asserts.ts";
import { generate } from "./swagger2ts.ts";

/**
 * cover URL to filepath
 * @param fileURL
 * @returns
 */
function URL2filepath(fileURL: URL): string {
  // Unix: file:///home/runner/work/swagger2ts/swagger2ts/test.ts
  // Windows: file:///D:/a/swagger2ts/swagger2ts/test.ts
  const reg = Deno.build.os === "windows" ? /^file:\/\/\// : /^file:\/\//;

  return fileURL.toString().replace(reg, "");
}

async function testDir(dirName: string) {
  const testDir = URL2filepath(new URL(`./__test__/${dirName}`, import.meta.url));

  for await (const dirEntry of Deno.readDir(testDir)) {
    if (/\.json$/.test(dirEntry.name)) {
      const actual = await generate(path.join(testDir, dirEntry.name));

      const expect = await Deno.readTextFile(path.join(testDir, dirEntry.name.replace(/\.json$/, ".ts")));

      if (Deno.build.os !== "windows") {
        assertEquals(actual.trim(), expect.trim());
      } else {
        assert(actual.length !== 0);
      }
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
