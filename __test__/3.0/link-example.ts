// Generate by swagger2ts
/* default type by generation start */
interface MapAny {
  [key: string]: any
}
interface MapString {
  [key: string]: string | undefined
}
/* default type by generation end */

export interface user {username?: string, uuid?: string}
export interface repository {slug?: string, owner?: user}
export interface pullrequest {id?: number, title?: string, repository?: repository, author?: user}

export interface SwaggerApi{
  get(url: "/2.0/users/{username}", options: {path: {username: string | undefined}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<user>
  get(url: "/2.0/repositories/{username}", options: {path: {username: string | undefined}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<Array<repository>>
  get(url: "/2.0/repositories/{username}/{slug}", options: {path: {username: string | undefined, slug: string | undefined}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<repository>
  get(url: "/2.0/repositories/{username}/{slug}/pullrequests", options: {path: {username: string | undefined, slug: string | undefined}, query: {state: "open" | "merged" | "declined" | undefined}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<Array<pullrequest>>
  get(url: "/2.0/repositories/{username}/{slug}/pullrequests/{pid}", options: {path: {username: string | undefined, slug: string | undefined, pid: string | undefined}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<pullrequest>
  post(url: "/2.0/repositories/{username}/{slug}/pullrequests/{pid}/merge", options: {path: {username: string | undefined, slug: string | undefined, pid: string | undefined}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<unknown>
  /* default methods */
  get<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any, signal?: AbortSignal }): Promise<T>
  post<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any, signal?: AbortSignal }): Promise<T>
  delete<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any, signal?: AbortSignal }): Promise<T>
  put<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any, signal?: AbortSignal }): Promise<T>
  head<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any, signal?: AbortSignal }): Promise<T>
  options<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any, signal?: AbortSignal }): Promise<T>
  trace<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any, signal?: AbortSignal }): Promise<T>
  patch<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any, signal?: AbortSignal }): Promise<T>
}

interface RequestConfig extends Config {
  url: string;
  method: string;
}

interface HeaderMapString {
  [key: string]: string;
}

interface Config {
  path?: {
    [key: string]: string;
  };
  query?: {
    [key: string]: string;
  };
  header?: {
    [key: string]: string;
  };
  body?: any;
  signal?: AbortSignal;
}

class Http {
  public readonly defaultHeaders: { default: HeaderMapString; [method: string]: HeaderMapString } = {
    default: {
      "Content-Type": "application/json",
    },
  };

  constructor(private _domain: string, private _prefix: string) {}

  private get baseURL(): string {
    const baseUrl = this._domain.replace(/\/$/, "") + this._prefix;

    return baseUrl.replace(/\/$/, "");
  }

  public set domain(domain: string) {
    this._domain = domain;
  }

  public request<T>(config: RequestConfig): Promise<T> {
    const url = new URL(this.baseURL + config.url);
    const headers = new Headers();

    // set default header
    for (const key in this.defaultHeaders.default) {
      headers.set(key, this.defaultHeaders.default[key]);
    }

    // set header for this method
    for (const key in this.defaultHeaders[config.method] || {}) {
      headers.set(key, this.defaultHeaders.default[key]);
    }

    // set header for this config
    if (config.header) {
      for (const key in config.header) {
        headers.set(key, config.header[key]);
      }
    }

    if (config.query) {
      for (const key in config.query) {
        url.searchParams.append(key, config.query[key]);
      }
    }

    if (config.path) {
      for (const key in config.path) {
        const t1 = encodeURI("{");
        const t2 = encodeURI("}");
        const reg = new RegExp(`${t1}${key}${t2}`, "g");
        url.pathname = url.pathname.replace(reg, config.path[key]);
      }
    }

    return fetch(url.toString(), {
      method: config.method,
      body: config.body,
      headers: headers,
      signal: config.signal,
    }).then((resp) => {
      const contentType = resp.headers.get("content-type");
      switch (contentType) {
        case "application/json":
          return resp.json();
        case "application/x-www-form-urlencoded":
          return resp.formData();
        case "application/octet-stream":
          return resp.blob();
        default:
          return resp.text();
      }
    });
  }

  public get<T>(url: string, config: Config): Promise<T> {
    return this.request<T>({
      method: "GET",
      url,
      ...config,
    });
  }

  public post<T>(url: string, config: Config): Promise<T> {
    return this.request<T>({
      method: "POST",
      url,
      ...config,
    });
  }

  public put<T>(url: string, config: Config): Promise<T> {
    return this.request<T>({
      method: "PUT",
      url,
      ...config,
    });
  }

  public delete<T>(url: string, config: Config): Promise<T> {
    return this.request<T>({
      method: "DELETE",
      url,
      ...config,
    });
  }

  public head<T>(url: string, config: Config): Promise<T> {
    return this.request<T>({
      method: "HEAD",
      url,
      ...config,
    });
  }

  public options<T>(url: string, config: Config): Promise<T> {
    return this.request<T>({
      method: "OPTIONS",
      url,
      ...config,
    });
  }

  public patch<T>(url: string, config: Config): Promise<T> {
    return this.request<T>({
      method: "PATCH",
      url,
      ...config,
    });
  }

  public trace<T>(url: string, config: Config): Promise<T> {
    return this.request<T>({
      method: "TRACE",
      url,
      ...config,
    });
  }
}

export const defaultApi = new Http("http://localhost", "")