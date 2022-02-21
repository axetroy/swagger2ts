import { assert } from "https://deno.land/std@0.126.0/testing/asserts.ts";
import { BaseGenerator, Block } from "./base_generator.ts";

export class CommentBlock implements Block {
  #started = false;
  #closed = false;
  constructor(private g: BaseGenerator) {}

  public get started() {
    return this.#started;
  }

  public get closed() {
    return this.#closed;
  }

  public start() {
    assert(this.#started === false);
    assert(this.#closed === false);
    this.g.writeln(`/**`);
    this.#started = true;
  }

  public write(content: string) {
    assert(this.#started === true);
    assert(this.#closed === false);
    const lines = content.match(/[^\r\n]+/g) as RegExpMatchArray;
    for (const line of lines) {
      this.g.writeln(` * ${line}`);
    }
  }

  public writeTag(tag: string, content: string) {
    assert(this.#started === true);
    assert(this.#closed === false);
    assert(tag.length > 0);

    const lines = content.match(/[^\r\n]+/g) as RegExpMatchArray;

    lines.forEach((line, index) => {
      this.g.writeln(
        ` * ${index === 0 ? "@" + tag : " ".repeat(tag.length + 1)} ${line}`,
      );
    });
  }

  public end() {
    assert(this.#closed === false);
    assert(this.#started === true);
    this.g.writeln(` */`);
    this.#closed = true;
  }
}
