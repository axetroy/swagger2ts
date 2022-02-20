import { assert } from "https://deno.land/std@0.126.0/testing/asserts.ts";
import { BaseGenerator, Block } from "./base_generator.ts";

export class CommentBlock implements Block {
  private started = false;
  private closed = false;
  constructor(private g: BaseGenerator) {}

  public start() {
    assert(this.started === false);
    assert(this.closed === false);
    this.g.writeln(`/**`);
    this.started = true;
  }

  public write(content: string) {
    assert(this.started === true);
    assert(this.closed === false);
    this.g.writeln(` * ${content}`);
  }

  public writeTag(tag: string, content: string) {
    assert(this.started === true);
    assert(this.closed === false);
    assert(tag.length > 0);
    this.g.writeln(` * @${tag} ${content}`);
  }

  public end() {
    assert(this.closed === false);
    assert(this.started === true);
    this.g.writeln(` */`);
    this.closed = true;
  }
}
