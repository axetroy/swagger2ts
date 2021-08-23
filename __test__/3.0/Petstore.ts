// Generate by swagger2ts
/* default type by generation start */
interface MapAny {
  [key: string]: any
}
interface MapString {
  [key: string]: string | undefined
}
/* default type by generation end */

export interface Order {id?: number, petId?: number, quantity?: number, shipDate?: string, status?: "placed" | "approved" | "delivered", complete?: boolean}
export interface Customer {id?: number, username?: string, address?: Array<Address>}
export interface Address {street?: string, city?: string, state?: string, zip?: string}
export interface Category {id?: number, name?: string}
export interface User {id?: number, username?: string, firstName?: string, lastName?: string, email?: string, password?: string, phone?: string, userStatus?: number}
export interface Tag {id?: number, name?: string}
export interface Pet {id?: number, name?: string, category?: Category, photoUrls?: Array<string | undefined>, tags?: Array<Tag>, status?: "available" | "pending" | "sold"}
export interface ApiResponse {code?: number, type?: string, message?: string}

export interface SwaggerApi{
  /**
   * @tag pet
   * @summary Add a new pet to the store
   * @description Add a new pet to the store
   */
  post(url: "/pet", options: {path?: MapString, query?: MapString, header?: MapString, body: Pet, signal?: AbortSignal}): Promise<Pet>
  /**
   * @tag pet
   * @summary Update an existing pet
   * @description Update an existing pet by Id
   */
  put(url: "/pet", options: {path?: MapString, query?: MapString, header?: MapString, body: Pet, signal?: AbortSignal}): Promise<Pet>
  /**
   * @tag pet
   * @summary Finds Pets by status
   * @description Multiple status values can be provided with comma separated strings
   */
  get(url: "/pet/findByStatus", options: {path?: MapString, query: {status?: "available" | "pending" | "sold"}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<Array<Pet>>
  /**
   * @tag pet
   * @summary Finds Pets by tags
   * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   */
  get(url: "/pet/findByTags", options: {path?: MapString, query: {tags?: Array<string | undefined>}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<Array<Pet>>
  /**
   * @tag pet
   * @summary Find pet by ID
   * @description Returns a single pet
   */
  get(url: "/pet/{petId}", options: {path: {petId: number}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<Pet>
  /**
   * @tag pet
   * @summary Updates a pet in the store with form data
   */
  post(url: "/pet/{petId}", options: {path: {petId: number}, query: {name?: string, status?: string}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<unknown>
  /**
   * @tag pet
   * @summary Deletes a pet
   */
  delete(url: "/pet/{petId}", options: {path: {petId: number}, query?: MapString, header: {api_key?: string}, body?: any, signal?: AbortSignal}): Promise<unknown>
  /**
   * @tag pet
   * @summary uploads an image
   */
  post(url: "/pet/{petId}/uploadImage", options: {path: {petId: number}, query: {additionalMetadata?: string}, header?: MapString, body: File | undefined, signal?: AbortSignal}): Promise<ApiResponse>
  /**
   * @tag store
   * @summary Returns pet inventories by status
   * @description Returns a map of status codes to quantities
   */
  get(url: "/store/inventory", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<{}>
  /**
   * @tag store
   * @summary Place an order for a pet
   * @description Place a new order in the store
   */
  post(url: "/store/order", options: {path?: MapString, query?: MapString, header?: MapString, body: Order, signal?: AbortSignal}): Promise<Order>
  /**
   * @tag store
   * @summary Find purchase order by ID
   * @description For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
   */
  get(url: "/store/order/{orderId}", options: {path: {orderId: number}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<Order>
  /**
   * @tag store
   * @summary Delete purchase order by ID
   * @description For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
   */
  delete(url: "/store/order/{orderId}", options: {path: {orderId: number}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<unknown>
  /**
   * @tag user
   * @summary Create user
   * @description This can only be done by the logged in user.
   */
  post(url: "/user", options: {path?: MapString, query?: MapString, header?: MapString, body: User, signal?: AbortSignal}): Promise<User>
  /**
   * @tag user
   * @summary Creates list of users with given input array
   * @description Creates list of users with given input array
   */
  post(url: "/user/createWithList", options: {path?: MapString, query?: MapString, header?: MapString, body: Array<User>, signal?: AbortSignal}): Promise<User>
  /**
   * @tag user
   * @summary Logs user into the system
   */
  get(url: "/user/login", options: {path?: MapString, query: {username?: string, password?: string}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<string | undefined>
  /**
   * @tag user
   * @summary Logs out current logged in user session
   */
  get(url: "/user/logout", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<null>
  /**
   * @tag user
   * @summary Get user by user name
   */
  get(url: "/user/{username}", options: {path: {username: string}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<User>
  /**
   * @tag user
   * @summary Delete user
   * @description This can only be done by the logged in user.
   */
  delete(url: "/user/{username}", options: {path: {username: string}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<unknown>
  /**
   * @tag user
   * @summary Update user
   * @description This can only be done by the logged in user.
   */
  put(url: "/user/{username}", options: {path: {username: string}, query?: MapString, header?: MapString, body: User, signal?: AbortSignal}): Promise<null>
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

export const apiV3 = new Runtime("http://localhost", "/api/v3") as unknown as (SwaggerApi & Runtime)