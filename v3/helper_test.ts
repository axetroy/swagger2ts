import { assertEquals } from "https://deno.land/std@0.105.0/testing/asserts.ts";
import { indentTxt } from "./helper.ts";

Deno.test({
  name: "indentText()",
  fn: () => {
    assertEquals(indentTxt("hello world", 0), "hello world");
    assertEquals(indentTxt("hello world", 2), "  hello world");
    assertEquals(indentTxt("line 1\nline 2", 2), "  line 1\n  line 2");
    assertEquals(
      indentTxt(
        `@tag user
@param name
@param age`,
        2
      ),
      `  @tag user
  @param name
  @param age`
    );
  },
});
