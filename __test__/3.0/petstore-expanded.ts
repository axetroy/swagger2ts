// Generate by swagger2ts
/* default type by generation start */
interface MapAny {
  [key: string]: any
}
interface MapString {
  [key: string]: string | undefined
}
/* default type by generation end */

export type Pet = any
export interface NewPet {name?: string, tag?: string}
export interface Error {code?: number, message?: string}

export interface SwaggerApi{
  /**
   * @description Returns all pets from the system that the user has access to
   * @description Nam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst. Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed lacinia.
   * @description Sed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus. In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium, pulvinar elit eu, euismod sapien.
   */
  get(url: "/pets", options: {path?: MapString, query: {tags: Array<string | undefined>, limit: number | undefined}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<Array<Pet>>
  /**
   * @description Creates a new pet in the store. Duplicates are allowed
   */
  post(url: "/pets", options: {path?: MapString, query?: MapString, header?: MapString, body: NewPet, signal?: AbortSignal}): Promise<Pet>
  /**
   * @description Returns a user based on a single ID, if the user does not have access to the pet
   */
  get(url: "/pets/{id}", options: {path: {id: number | undefined}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<Pet>
  /**
   * @description deletes a single pet based on the ID supplied
   */
  delete(url: "/pets/{id}", options: {path: {id: number | undefined}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<Error>
  /* default methods */
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
  public readonly defaultHeaders: { default: RuntimeHeaderMapString; [method: string]: RuntimeHeaderMapString } = {
    default: {
      "Content-Type": "application/json",
    },
  };

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

    // set default header
    for (const key in this.defaultHeaders.default) {
      config.header[key] = this.defaultHeaders.default[key];
    }

    // set header for this method
    for (const key in this.defaultHeaders[config.method] || {}) {
      config.header[key] = this.defaultHeaders[config.method][key];
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

    config = await this.#requestInterceptor.run(config);

    const headers = new Headers();

    if (config.header) {
      for (const key in config.header) {
        headers.set(key, config.header[key]);
      }
    }

    try {
      return await fetch(url.toString(), {
        method: config.method,
        body: config.body,
        headers: headers,
        signal: config.signal,
      })
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

export const api = new Runtime("http://localhost", "/api") as unknown as (SwaggerApi & Runtime)