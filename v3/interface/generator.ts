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

  start(withInterface = true) {
    if (withInterface) {
      this.write(`
export interface SwaggerPath {
  [key: string]: string | number
}

export type Stringify = {
  toString(): string
} | null | undefined | void

export interface SwaggerQuery {
  [key: string]: Stringify | Stringify[]
}

export interface SwaggerHeaders {
  [key: string]: Stringify | Stringify[]
}

export type SwaggerCommonOptions = Omit<RequestInit, "body" | "method" | "headers"> & { timeout?: number }

export type RequireKeys<T extends object, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>

export interface SwaggerOptions<P extends SwaggerPath = SwaggerPath, Q extends SwaggerQuery = SwaggerQuery, H extends SwaggerHeaders = SwaggerHeaders, B = any> extends SwaggerCommonOptions {
  path?: P
  query?: Q
  headers?: H
  body?: B
}
`);
    }

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
    path: { required: boolean; type: string },
    query: { required: boolean; type: string },
    headers: { required: boolean; type: string },
    body: string,
    returnValue: string,
  ) {
    this.write(this.indentStr);
    this.write(method + "(");
    this.write(`url: '${url}', options: `);

    const requireKeys = [];

    const isRequiredParams = path.required || query.required || headers.required

    if (isRequiredParams) {
      this.write("RequireKeys<");
    }

    this.write('SwaggerOptions<')

    if (path.type) {
      this.write(path.type);
      path.required && requireKeys.push("path");
    } else {
      this.write("{}");
    }

    if (query.type) {
      this.write(`, ${query.type}`);
      query.required && requireKeys.push("query");
    } else {
      this.write(", {}");
    }

    if (headers.type) {
      this.write(`, ${headers.type}`);
      headers.required && requireKeys.push("headers");
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
