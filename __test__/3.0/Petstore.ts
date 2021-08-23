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
  post(url: "/pet/{petId}/uploadImage", options: {path: {petId: number}, query: {additionalMetadata?: string}, header?: MapString, body: File | Blob | undefined, signal?: AbortSignal}): Promise<ApiResponse>
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
  body?: any; // the request body
  signal?: AbortSignal; // abort signal to cancel request
  timeout?: number; // defaults to 60 * 1000 ms. if zero. then there is no timeout
}

interface RuntimeRequestOptions extends RuntimeRequestCommonOptions {
  url: string;
  method: string;
}

interface IRequestInterceptor {
  use(fn: RequestInterceptorFn): InterceptorCancelFn;
}

interface IResponseInterceptor {
  use(success: ResponseInterceptorSuccessFn<any>, error: ResponseInterceptorErrorFn<any>): InterceptorCancelFn;
}

type InterceptorCancelFn = () => void;
type RequestInterceptorFn = (config: RuntimeRequestOptions) => Promise<RuntimeRequestOptions>;
type ResponseInterceptorSuccessFn<T> = (config: RuntimeRequestOptions, response: Response, data: T) => Promise<T>;
type ResponseInterceptorErrorFn<T> = (config: RuntimeRequestOptions, Error: Error) => Promise<T>;
class RequestInterceptor implements IRequestInterceptor {
  private _fns: RequestInterceptorFn[] = [];
  public use(fn: RequestInterceptorFn) {
    this._fns.push(fn);

    return () => {
      const index = this._fns.findIndex((v) => v === fn);

      if (index > -1) {
        this._fns.splice(index, 1);
      }
    };
  }

  async run(config: RuntimeRequestOptions): Promise<RuntimeRequestOptions> {
    for (const fn of this._fns) {
      config = await fn(config);
    }

    return config;
  }
}

class ResponseInterceptor implements IResponseInterceptor {
  private _fnsSuccess: ResponseInterceptorSuccessFn<any>[] = [];
  private _fnsError: ResponseInterceptorErrorFn<any>[] = [];
  public use(successFn: ResponseInterceptorSuccessFn<any>, errorFn: ResponseInterceptorErrorFn<any>) {
    this._fnsSuccess.push(successFn);
    this._fnsError.push(errorFn);

    return () => {
      const successIndex = this._fnsSuccess.findIndex((v) => v === successFn);
      const errorIndex = this._fnsError.findIndex((v) => v === errorFn);

      if (successIndex > -1) {
        this._fnsSuccess.splice(successIndex, 1);
      }

      if (errorIndex > -1) {
        this._fnsError.splice(errorIndex, 1);
      }
    };
  }

  async runSuccess<T>(config: RuntimeRequestOptions, response: Response, data: T): Promise<T> {
    for (const fn of this._fnsSuccess) {
      data = await fn(config, response, data);
    }

    return data;
  }

  async runError<T>(config: RuntimeRequestOptions, err: Error): Promise<T> {
    let res = null;

    for (const fn of this._fnsError) {
      res = await fn(config, err);
    }

    return res;
  }
}

interface IRuntimeForm {
  [key: string]: any;
}

export class RuntimeForm<T extends IRuntimeForm> {
  constructor(private _form: T) {}
  public formData(): FormData {
    const form = new FormData();

    for (const key in this._form) {
      if (this._form[key] !== undefined) {
        form.append(key, this._form[key]);
      }
    }

    return form;
  }
}

const data: RuntimeForm<{ name?: string }> = new RuntimeForm({ name: undefined });

class Runtime {
  constructor(private _domain: string, private _prefix: string) {}

  private _requestInterceptor = new RequestInterceptor();
  private _responseInterceptor = new ResponseInterceptor();

  public get interceptors() {
    const self = this;
    return {
      get request() {
        return self._requestInterceptor as IRequestInterceptor;
      },
      get response() {
        return self._responseInterceptor as IResponseInterceptor;
      },
    };
  }

  public get defaults() {
    return {
      timeout: 60 * 1000, // 60s,
      headers: {
        common: {
          "Content-Type": "application/json",
        },
      } as { common: RuntimeHeaderMapString; [method: string]: RuntimeHeaderMapString },
    };
  }

  private _timeout<T>(ms: number, promise: Promise<T>) {
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

  public get baseURL(): string {
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
    const url = new URL(this.baseURL + config.url);
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

    config = await this._requestInterceptor.run(config);

    const headers = new Headers();

    if (config.header) {
      for (const key in config.header) {
        const value = config.header[key];
        if (value !== undefined) {
          headers.set(key, config.header[key]);
        }
      }
    }

    const timeout = config.timeout || defaults.timeout;

    try {
      const exec = () =>
        fetch(url.toString(), {
          method: config.method,
          body: config.body instanceof RuntimeForm ? config.body.formData() : config.body,
          headers: headers,
          signal: config.signal,
        });

      return (timeout ? this._timeout<Response>(timeout, exec()) : exec())
        .then(async (resp) => {
          const contentType = resp.headers.get("content-type");
          switch (contentType) {
            case "application/json":
              return { data: await resp.json(), resp };
            case "application/x-www-form-urlencoded":
              return { data: await resp.formData(), resp };
            case "application/octet-stream":
              return { data: await resp.blob(), resp };
            default:
              return { data: await resp.text(), resp };
          }
        })
        .then(({ data, resp }) => {
          return this._responseInterceptor.runSuccess<T>(config, resp, data);
        });
    } catch (err) {
      if (err instanceof Error) {
        return await this._responseInterceptor.runError<T>(config, err);
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