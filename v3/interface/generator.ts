import { BaseGenerator } from "./base_generator.ts";
import { CommentBlock } from "./comment.ts";
import { InterfaceBlock } from "./interface.ts";

export class DefinitionGenerator extends BaseGenerator {
  public declareType(name: string, type: string, exposed: boolean) {
    if (exposed) {
      this.write("export ");
    }
    this.write(`type ${name} = ${type}`);
  }

  public declareEnum(
    name: string,
    values: Array<string | number>,
    exposed: boolean,
  ) {
    if (exposed) {
      this.write("export ");
    }
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
    const interfaceSwaggerPath = this.createInterfaceBlock();

    interfaceSwaggerPath.start("SwaggerPath");
    interfaceSwaggerPath.writeProperty(
      "[key: string]",
      "string | number",
      false,
      false,
    );
    interfaceSwaggerPath.end();
    this.write(this.EOL);

    this.writeln("export type Stringable = {");
    this.write(this.EOL);
    this.indent++;
    this.writeln("toString(): string");
    this.indent--;
    this.writeln("} | null | undefined | void");

    const interfaceSwaggerQuery = this.createInterfaceBlock();
    interfaceSwaggerQuery.start("SwaggerQuery");
    interfaceSwaggerQuery.writeProperty(
      "[key: string]",
      "Stringable | Stringable[]",
      false,
      false,
    );
    interfaceSwaggerQuery.end();
    this.write(this.EOL);

    const interfaceSwaggerHeaders = this.createInterfaceBlock();
    interfaceSwaggerHeaders.start("SwaggerHeaders");
    interfaceSwaggerHeaders.writeProperty(
      "[key: string]",
      "Stringable | Stringable[]",
      false,
      false,
    );
    interfaceSwaggerHeaders.end();
    this.write(this.EOL);

    this.writeln(
      `export type SwaggerCommonOptions = Omit<RequestInit, "body" | "method" | "headers"> & { timeout?: number }`,
    );
    this.write(this.EOL);
    this.writeln(
      `export type RequireKeys<T extends object, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>`,
    );
    this.write(this.EOL);

    const interfaceSwaggerOptions = this.createInterfaceBlock();
    interfaceSwaggerOptions.start(
      `SwaggerOptions<P extends SwaggerPath = SwaggerPath, Q extends SwaggerQuery = SwaggerQuery, H extends SwaggerHeaders = SwaggerHeaders, B = any> extends SwaggerCommonOptions`,
    );
    interfaceSwaggerOptions.writeProperty("path", "P", true, false);
    interfaceSwaggerOptions.writeProperty("query", "Q", true, false);
    interfaceSwaggerOptions.writeProperty("headers", "H", true, false);
    interfaceSwaggerOptions.writeProperty("body", "B", true, false);
    interfaceSwaggerOptions.end();
    this.write(this.EOL);

    this.write(`export interface SwaggerApi `);
    this.interface.start();
  }

  end() {
    this.interface.end();
  }

  writeApi(
    method: string,
    url: string,
    path: string,
    query: string,
    headers: string,
    body: string,
    returnValue: string,
  ) {
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
