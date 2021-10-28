class BaseGenerator {
  public indent = 0;
  private indentBase = 2;
  private content = "";
  public EOL = "\n";

  public get indentStr() {
    return " ".repeat(this.indent * this.indentBase);
  }

  public write(str: string) {
    this.content += str;
  }

  public writeln(str: string) {
    this.content += this.indentStr + str + this.EOL;
  }

  public dropLastEmptyLine(n: number) {
    if (n <= 0) return;

    while (n > 0) {
      this.content = this.content.replace(new RegExp(this.EOL + "$"), "");
      n--;
    }
  }

  public toString() {
    return this.content;
  }
}

interface Block {
  start(): void;
  end(): void;
}

class InterfaceBlock implements Block {
  constructor(private g: BaseGenerator) {}

  public writeProperty(name: string, type: string, optional: boolean | undefined, nullable: boolean | undefined) {
    this.g.write(`${this.g.indentStr}${name}${optional ? "?" : ""}: ${type}`);
    this.g.write(nullable ? " | null" : "");
    this.g.write(this.g.EOL);
  }

  public start() {
    this.g.write("{");
    this.g.write(this.g.EOL);
    this.g.indent++;
  }

  public end() {
    this.g.indent--;
    this.g.writeln("}");
  }
}

export class CommentBlock implements Block {
  constructor(private g: BaseGenerator) {}

  public start() {
    this.g.writeln(`/**`);
  }

  public write(tag: string, content: string) {
    this.g.writeln(` * @${tag} ${content}`);
  }

  public end() {
    this.g.writeln(` */`);
  }
}

export class DefinitionGenerator extends BaseGenerator {
  public declareType(name: string, type: string) {
    this.write(`type ${name} = ${type}`);
  }

  public declareEnum(name: string, values: Array<string | number>) {
    this.write(`type ${name} = ${values.join(" | ")}`);
  }

  public declareInterface(name: string, properties: { [key: string]: any }) {
    this.writeln(`interface ${name} {`);
    this.indent++;

    for (const attr in properties) {
      const value = properties[attr];

      this.writeln(`${attr}: ${value}`);
    }

    this.indent--;
    this.writeln("}");
  }

  public createInterfaceBlock(): InterfaceBlock {
    return new InterfaceBlock(this);
  }

  public createCommentBlock(): CommentBlock {
    return new CommentBlock(this);
  }
}

export class ApiGenerator extends DefinitionGenerator {
  private interface = this.createInterfaceBlock();

  start() {
    const options = this.createInterfaceBlock();

    this.write(`export interface SwaggerPath `);
    options.start();
    options.writeProperty("[key: string]", "string", false, false);
    options.end();
    this.write(this.EOL);

    this.writeln("export type Stringable = {");
    this.write(this.EOL);
    this.indent++
    this.writeln("toString(): string");
    this.indent--
    this.writeln("} | null | undefined | void");

    this.write(`export interface SwaggerQuery `);
    options.start();
    options.writeProperty("[key: string]", "Stringable | Stringable[]", false, false);
    options.end();
    this.write(this.EOL);

    this.write(`export interface SwaggerHeaders `);
    options.start();
    options.writeProperty("[key: string]", "Stringable | Stringable[]", false, false);
    options.end();
    this.write(this.EOL);

    this.writeln(`export type SwaggerCommonOptions = Omit<RequestInit, "body" | "method" | "headers"> & { timeout?: number }`);
    this.write(this.EOL);
    this.writeln(`export type RequireKeys<T extends object, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>`);
    this.write(this.EOL);

    this.write(
      `export interface SwaggerOptions<P extends SwaggerPath = SwaggerPath, Q extends SwaggerQuery = SwaggerQuery, H extends SwaggerHeaders = SwaggerHeaders, B = any> extends SwaggerCommonOptions `
    );
    options.start();
    options.writeProperty("path", "P", true, false);
    options.writeProperty("query", "Q", true, false);
    options.writeProperty("headers", "H", true, false);
    options.writeProperty("body", "B", true, false);
    options.end();
    this.write(this.EOL);

    this.write(`export interface SwaggerApi `);
    this.interface.start();
  }

  end() {
    this.interface.end();
  }

  writeApi(method: string, url: string, path: string, query: string, headers: string, body: string, returnValue: string) {
    this.write(this.indentStr);
    this.write(method + "(");
    this.write(`url: '${url}', options: `);

    const requireKeys = [];

    if (path) {
      this.write("RequireKeys<SwaggerOptions<");
      requireKeys.push("path");
      this.write(path);
    } else {
      this.write("SwaggerOptions<{}");
    }

    if (query) {
      this.write(`, ${query}`);
    } else {
      this.write(", {}");
    }

    if (headers) {
      this.write(`, ${headers}`);
    } else {
      this.write(", {}");
    }

    if (body) {
      this.write(`, ${body}`);
    } else {
      this.write(", {}");
    }

    this.write(">");

    if (requireKeys.length) {
      this.write(`, ${requireKeys.map((v) => `'${v}'`).join(" | ")}>`);
    }

    this.write("): ");
    this.write(`Promise<${returnValue}>`);
    this.write(this.EOL);
  }
}
