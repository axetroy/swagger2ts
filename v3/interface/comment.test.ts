import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";
import { CommentBlock } from "./comment.ts";
import { BaseGenerator } from "./base_generator.ts";

Deno.test({
  name: "write",
  fn: () => {
    const g = new BaseGenerator();
    const block = new CommentBlock(g);

    block.start();

    block.write("this is a function for parsing URL");

    block.end();

    g.toString();
    assertEquals(
      g.toString(),
      `
/**
 * this is a function for parsing URL
 */
`.trimStart(),
    );
  },
});

Deno.test({
  name: "write with multiple comment",
  fn: () => {
    const g = new BaseGenerator();
    const block = new CommentBlock(g);

    block.start();

    block.write("first line comment\nsecond line comment");

    block.end();

    g.toString();
    assertEquals(
      g.toString(),
      `
/**
 * first line comment
 * second line comment
 */
`.trimStart(),
    );
  },
});

Deno.test({
  name: "write with multiple comment with tag",
  fn: () => {
    const g = new BaseGenerator();
    const block = new CommentBlock(g);

    block.start();

    block.writeTag("description", "first line comment\nsecond line comment");

    block.end();

    g.toString();
    assertEquals(
      g.toString(),
      `
/**
 * @description first line comment
 *              second line comment
 */
`.trimStart(),
    );
  },
});

Deno.test({
  name: "write multiple line",
  fn: () => {
    const g = new BaseGenerator();
    const block = new CommentBlock(g);

    block.start();

    block.write("this is a function for parsing URL");
    block.write("if URL is invalid, it will throw an error");

    block.end();

    g.toString();
    assertEquals(
      g.toString(),
      `
/**
 * this is a function for parsing URL
 * if URL is invalid, it will throw an error
 */
`.trimStart(),
    );
  },
});

Deno.test({
  name: "write tag",
  fn: () => {
    const g = new BaseGenerator();
    const block = new CommentBlock(g);

    block.start();

    block.writeTag("tag", "auth");

    block.end();

    g.toString();
    assertEquals(
      g.toString(),
      `
/**
 * @tag auth
 */
`.trimStart(),
    );
  },
});

Deno.test({
  name: "write multiple tag",
  fn: () => {
    const g = new BaseGenerator();
    const block = new CommentBlock(g);

    block.start();

    block.writeTag("description", "auth api");
    block.writeTag("tag", "auth");

    block.end();

    g.toString();
    assertEquals(
      g.toString(),
      `
/**
 * @description auth api
 * @tag auth
 */
`.trimStart(),
    );
  },
});
