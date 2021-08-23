import { assertEquals } from "https://deno.land/std@0.105.0/testing/asserts.ts";
import { linesOfText, indentTxt, generateMultipleLineComments } from "./helper.ts";

Deno.test({
  name: "linesOfText()",
  fn: () => {
    assertEquals(linesOfText("hello world"), ["hello world"]);
    assertEquals(linesOfText("line 1\nline 2"), ["line 1", "line 2"]);
    assertEquals(linesOfText("line 1\r\nline 2"), ["line 1", "line 2"]);
    assertEquals(linesOfText("line 1\n\rline 2"), ["line 1", "line 2"]);
    assertEquals(linesOfText("line 1\rline 2"), ["line 1", "line 2"]);
  },
});

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

Deno.test({
  name: "generateMultipleLineComments()",
  fn: () => {
    assertEquals(
      generateMultipleLineComments(["@tag user"]),
      `
/**
 * @tag user
 */`.trimStart()
    );

    assertEquals(
      generateMultipleLineComments(["@tag user", "@param comments", "@param indent"]),
      `
/**
 * @tag user
 * @param comments
 * @param indent
 */`.trimStart()
    );
  },
});
