// Generate by swagger2ts
/* default type by generation start */
interface MapAny {
  [key: string]: any
}
interface MapString {
  [key: string]: string | undefined
}
/* default type by generation end */



export interface SwaggerApi{
  /**
   * @summary List API versions
   */
  get(url: "/", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<null>
  /**
   * @summary Show API version details
   */
  get(url: "/v2", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<null>
}

interface RuntimeHeaderMapString {
  [key: string]: string;
}

interface RuntimeRequestCommonOptions {
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
  timeout?: number;
}

interface RuntimeRequestOptions extends RuntimeRequestCommonOptions {
  url: string;
  method: string;
}

interface IRequestInterceptor {
  use(fn: RequestInterceptorFn): void;
}

interface IResponseInterceptor {
  use(success: ResponseInterceptorSuccessFn<any>, error: ResponseInterceptorErrorFn<any>): void;
}

type RequestInterceptorFn = (config: RuntimeRequestOptions) => Promise<RuntimeRequestOptions>;
type ResponseInterceptorSuccessFn<T> = (config: RuntimeRequestOptions, response: T) => Promise<T>;
type ResponseInterceptorErrorFn<T> = (config: RuntimeRequestOptions, Error: Error) => Promise<T>;
class RequestInterceptor implements IRequestInterceptor {
  #fns: RequestInterceptorFn[] = [];
  public use(fn: RequestInterceptorFn) {
    this.#fns.push(fn);
  }

  async run(config: RuntimeRequestOptions): Promise<RuntimeRequestOptions> {
    for (const fn of this.#fns) {
      config = await fn(config);
    }

    return config;
  }
}

class ResponseInterceptor implements IResponseInterceptor {
  #fnsSuccess: ResponseInterceptorSuccessFn<any>[] = [];
  #fnsError: ResponseInterceptorErrorFn<any>[] = [];
  public use(successFn: ResponseInterceptorSuccessFn<any>, errorFn: ResponseInterceptorErrorFn<any>) {
    this.#fnsSuccess.push(successFn);
    this.#fnsError.push(errorFn);
  }

  async runSuccess<T>(config: RuntimeRequestOptions, res: T): Promise<T> {
    for (const fn of this.#fnsSuccess) {
      res = await fn(config, res);
    }

    return res;
  }

  async runError<T>(config: RuntimeRequestOptions, err: Error): Promise<T> {
    let res = null;

    for (const fn of this.#fnsError) {
      res = await fn(config, err);
    }

    return res;
  }
}

class Runtime {
  constructor(private _domain: string, private _prefix: string) {}

  #requestInterceptor = new RequestInterceptor();
  #responseInterceptor = new ResponseInterceptor();

  public get interceptors() {
    const self = this;
    return {
      get request() {
        return self.#requestInterceptor as IRequestInterceptor;
      },
      get response() {
        return self.#responseInterceptor as IResponseInterceptor;
      },
    };
  }

  public get defaults() {
    return {
      timeout: 60 * 1000, // 60s
      headers: {
        common: {
          "Content-Type": "application/json",
        },
      } as { common: RuntimeHeaderMapString; [method: string]: RuntimeHeaderMapString },
    };
  }

  #timeout<T>(ms: number, promise: Promise<T>) {
    return new Promise<T>((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error("TIMEOUT"));
      }, ms);

      promise
        .then((value) => {
          clearTimeout(timer);
          resolve(value);
        })
        .catch((reason) => {
          clearTimeout(timer);
          reject(reason);
        });
    });
  }

  get #baseURL(): string {
    const baseUrl = this._domain.replace(/\/$/, "") + this._prefix;

    return baseUrl.replace(/\/$/, "");
  }

  public set domain(domain: string) {
    this._domain = domain;
  }

  public set prefix(prefix: string) {
    this._prefix = prefix;
  }

  public async request<T>(config: RuntimeRequestOptions): Promise<T> {
    const url = new URL(this.#baseURL + config.url);
    config.header = config.header || {};

    const defaults = this.defaults;

    // set default header
    for (const key in defaults.headers.common) {
      config.header[key] = defaults.headers.common[key];
    }

    // set header for this method
    for (const key in defaults.headers[config.method] || {}) {
      config.header[key] = defaults.headers[config.method][key];
    }

    if (config.query) {
      for (const key in config.query) {
        const value = config.query[key];
        if (value !== undefined) {
          url.searchParams.append(key, value);
        }
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

    config = await this.#requestInterceptor.run(config);

    const headers = new Headers();

    if (config.header) {
      for (const key in config.header) {
        const value = config.header[key];
        if (value !== undefined) {
          headers.set(key, config.header[key]);
        }
      }
    }

    try {
      return await this.#timeout<Response>(
        config.timeout || defaults.timeout,
        fetch(url.toString(), {
          method: config.method,
          body: config.body,
          headers: headers,
          signal: config.signal,
        })
      )
        .then((resp) => {
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
        })
        .then((data) => {
          return this.#responseInterceptor.runSuccess(config, data);
        });
    } catch (err) {
      if (err instanceof Error) {
        return await this.#responseInterceptor.runError(config, err);
      } else {
        return Promise.reject(err);
      }
    }
  }

  public get<T>(url: string, config: RuntimeRequestCommonOptions): Promise<T> {
    return this.request<T>({
      method: "GET",
      url,
      ...config,
    });
  }

  public post<T>(url: string, config: RuntimeRequestCommonOptions): Promise<T> {
    return this.request<T>({
      method: "POST",
      url,
      ...config,
    });
  }

  public put<T>(url: string, config: RuntimeRequestCommonOptions): Promise<T> {
    return this.request<T>({
      method: "PUT",
      url,
      ...config,
    });
  }

  public delete<T>(url: string, config: RuntimeRequestCommonOptions): Promise<T> {
    return this.request<T>({
      method: "DELETE",
      url,
      ...config,
    });
  }

  public head<T>(url: string, config: RuntimeRequestCommonOptions): Promise<T> {
    return this.request<T>({
      method: "HEAD",
      url,
      ...config,
    });
  }

  public options<T>(url: string, config: RuntimeRequestCommonOptions): Promise<T> {
    return this.request<T>({
      method: "OPTIONS",
      url,
      ...config,
    });
  }

  public patch<T>(url: string, config: RuntimeRequestCommonOptions): Promise<T> {
    return this.request<T>({
      method: "PATCH",
      url,
      ...config,
    });
  }

  public trace<T>(url: string, config: RuntimeRequestCommonOptions): Promise<T> {
    return this.request<T>({
      method: "TRACE",
      url,
      ...config,
    });
  }
}

export const defaultApi = new Runtime("http://localhost", "") as unknown as (SwaggerApi & Runtime)