import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";
import { InterfaceBlock } from "./interface.ts";
import { BaseGenerator } from "./base_generator.ts";

Deno.test({
  name: "write namespace interface",
  fn: async () => {
    const g = new BaseGenerator();
    const block = new InterfaceBlock(g);

    block.start("User");

    block.writeProperty("name", "string", false, false);

    block.end();

    g.toString();
    assertEquals(
      g.toString(),
      `
export interface User {
  name: string
}
`.trimStart(),
    );
  },
});

Deno.test({
  name: "write namespace interface with multiple property",
  fn: async () => {
    const g = new BaseGenerator();
    const block = new InterfaceBlock(g);

    block.start("User");

    block.writeProperty("name", "string", false, false);
    block.writeProperty("age", "number", false, false);
    block.writeProperty("address", "string", true, false);

    block.end();

    g.toString();
    assertEquals(
      g.toString(),
      `
export interface User {
  name: string
  age: number
  address?: string
}
`.trimStart(),
    );
  },
});

Deno.test({
  name: "write anonymous interface",
  fn: async () => {
    const g = new BaseGenerator();
    const block = new InterfaceBlock(g);

    block.start();

    block.writeProperty("name", "string", false, false);
    block.writeProperty("age", "number", false, false);
    block.writeProperty("address", "string", true, false);

    block.end();

    g.toString();
    assertEquals(
      g.toString(),
      `
{
  name: string
  age: number
  address?: string
}
`.trimStart(),
    );
  },
});

Deno.test({
  name: "write anonymous interface with nullable",
  fn: async () => {
    const g = new BaseGenerator();
    const block = new InterfaceBlock(g);

    block.start();

    block.writeProperty("name", "string", false, false);
    block.writeProperty("age", "number", false, false);
    block.writeProperty("address", "string", true, true);

    block.end();

    g.toString();
    assertEquals(
      g.toString(),
      `
{
  name: string
  age: number
  address?: string | null
}
`.trimStart(),
    );
  },
});
