import { assert } from "https://deno.land/std@0.126.0/testing/asserts.ts";
import { BaseGenerator, Block } from "./base_generator.ts";

export class InterfaceBlock implements Block {
  #started = false;
  #closed = false;

  constructor(private g: BaseGenerator) {}

  public get started() {
    return this.#started;
  }

  public get closed() {
    return this.#closed;
  }

  public writeProperty(
    name: string,
    type: string,
    optional: boolean | undefined,
    nullable: boolean | undefined,
  ) {
    assert(this.#started === true);
    assert(this.#closed === false);
    assert(name.length > 0);
    assert(type.length > 0);

    this.g.write(`${this.g.indentStr}${name}${optional ? "?" : ""}: ${type}`);
    this.g.write(nullable ? " | null" : "");
    this.g.write(this.g.EOL);
  }

  public start(name?: string) {
    assert(this.#started === false);
    assert(this.#closed === false);

    if (name) {
      this.g.write(`export interface ${name} `);
    }

    this.g.write("{");
    this.g.write(this.g.EOL);
    this.g.indent++;

    this.#started = true;
  }

  public end() {
    assert(this.#started === true);

    this.g.indent--;
    this.g.writeln("}");

    this.#closed = true;
  }
}
