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
      this.write(`/** ===== build-in interface start ===== */
export type Stringify = string | number | null | undefined | void

export type SwaggerPath = Record<string, string | number>

export type SwaggerQuery = Record<string, Stringify | Stringify[]>

export type SwaggerHeaders = Record<string, Stringify | Stringify[]>

export type SwaggerCommonOptions = Omit<RequestInit, "body" | "method" | "headers"> & { timeout?: number }

export type RequireKeys<T extends Record<string, any>, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>

export interface SwaggerOptions<P extends SwaggerPath = SwaggerPath, Q extends SwaggerQuery = SwaggerQuery, H extends SwaggerHeaders = SwaggerHeaders, B = any> extends SwaggerCommonOptions {
  path?: P
  query?: Q
  headers?: H
  body?: B
}

/** ===== build-in interface end ===== */
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

    const isRequiredParams = path.required || query.required ||
      headers.required;

    if (isRequiredParams) {
      this.write("RequireKeys<");
    }

    this.write("SwaggerOptions<");

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
