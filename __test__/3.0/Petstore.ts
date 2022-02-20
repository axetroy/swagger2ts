// Generate by swagger2ts
export interface Order {
  id?: number
  petId?: number
  quantity?: number
  shipDate?: string
  /**
   * @description Order Status
   */
  status?: 'placed' | 'approved' | 'delivered'
  complete?: boolean
}

export interface Customer {
  id?: number
  username?: string
  address?: Array<Address>
}

export interface Address {
  street?: string
  city?: string
  state?: string
  zip?: string
}

export interface Category {
  id?: number
  name?: string
}

export interface User {
  id?: number
  username?: string
  firstName?: string
  lastName?: string
  email?: string
  password?: string
  phone?: string
  /**
   * @description User Status
   */
  userStatus?: number
}

export interface Tag {
  id?: number
  name?: string
}

export interface Pet {
  id?: number
  name: string
  category?: Category
  photoUrls: Array<string>
  tags?: Array<Tag>
  /**
   * @description pet status in the store
   */
  status?: 'available' | 'pending' | 'sold'
}

export interface ApiResponse {
  code?: number
  type?: string
  message?: string
}




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

export interface SwaggerApi {
  /**
   * @description Add a new pet to the store
   * @summary Add a new pet to the store
   * @tag pet
   */
  post(url: '/pet', options: SwaggerOptions<{}, {}, {}, Pet>): Promise<Pet>
  /**
   * @description Update an existing pet by Id
   * @summary Update an existing pet
   * @tag pet
   */
  put(url: '/pet', options: SwaggerOptions<{}, {}, {}, Pet>): Promise<Pet>
  /**
   * @description Multiple status values can be provided with comma separated strings
   * @summary Finds Pets by status
   * @tag pet
   */
  get(url: '/pet/findByStatus', options: SwaggerOptions<{}, {status?: 'available' | 'pending' | 'sold'}, {}, unknown>): Promise<Array<Pet>>
  /**
   * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   * @summary Finds Pets by tags
   * @tag pet
   */
  get(url: '/pet/findByTags', options: SwaggerOptions<{}, {tags?: Array<string>}, {}, unknown>): Promise<Array<Pet>>
  /**
   * @description Returns a single pet
   * @summary Find pet by ID
   * @tag pet
   */
  get(url: '/pet/{petId}', options: RequireKeys<SwaggerOptions<{petId: number}, {}, {}, unknown>, 'path'>): Promise<Pet>
  /**
   * @summary Updates a pet in the store with form data
   * @tag pet
   */
  post(url: '/pet/{petId}', options: RequireKeys<SwaggerOptions<{petId: number}, {name?: string, status?: string}, {}, unknown>, 'path'>): Promise<unknown>
  /**
   * @summary Deletes a pet
   * @tag pet
   */
  delete(url: '/pet/{petId}', options: RequireKeys<SwaggerOptions<{petId: number}, {}, {api_key?: string}, unknown>, 'path'>): Promise<unknown>
  /**
   * @summary uploads an image
   * @tag pet
   */
  post(url: '/pet/{petId}/uploadImage', options: RequireKeys<SwaggerOptions<{petId: number}, {additionalMetadata?: string}, {}, Blob | Uint8Array>, 'path'>): Promise<ApiResponse>
  /**
   * @description Returns a map of status codes to quantities
   * @summary Returns pet inventories by status
   * @tag store
   */
  get(url: '/store/inventory', options: SwaggerOptions<{}, {}, {}, unknown>): Promise<{
  [key: string]: number
}
>
  /**
   * @description Place a new order in the store
   * @summary Place an order for a pet
   * @tag store
   */
  post(url: '/store/order', options: SwaggerOptions<{}, {}, {}, Order>): Promise<Order>
  /**
   * @description For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
   * @summary Find purchase order by ID
   * @tag store
   */
  get(url: '/store/order/{orderId}', options: RequireKeys<SwaggerOptions<{orderId: number}, {}, {}, unknown>, 'path'>): Promise<Order>
  /**
   * @description For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
   * @summary Delete purchase order by ID
   * @tag store
   */
  delete(url: '/store/order/{orderId}', options: RequireKeys<SwaggerOptions<{orderId: number}, {}, {}, unknown>, 'path'>): Promise<unknown>
  /**
   * @description This can only be done by the logged in user.
   * @summary Create user
   * @tag user
   */
  post(url: '/user', options: SwaggerOptions<{}, {}, {}, User>): Promise<User>
  /**
   * @description Creates list of users with given input array
   * @summary Creates list of users with given input array
   * @tag user
   */
  post(url: '/user/createWithList', options: SwaggerOptions<{}, {}, {}, Array<User>>): Promise<User>
  /**
   * @summary Logs user into the system
   * @tag user
   */
  get(url: '/user/login', options: SwaggerOptions<{}, {username?: string, password?: string}, {}, unknown>): Promise<string>
  /**
   * @summary Logs out current logged in user session
   * @tag user
   */
  get(url: '/user/logout', options: SwaggerOptions<{}, {}, {}, unknown>): Promise<unknown>
  /**
   * @summary Get user by user name
   * @tag user
   */
  get(url: '/user/{username}', options: RequireKeys<SwaggerOptions<{username: string}, {}, {}, unknown>, 'path'>): Promise<User>
  /**
   * @description This can only be done by the logged in user.
   * @summary Delete user
   * @tag user
   */
  delete(url: '/user/{username}', options: RequireKeys<SwaggerOptions<{username: string}, {}, {}, unknown>, 'path'>): Promise<unknown>
  /**
   * @description This can only be done by the logged in user.
   * @summary Update user
   * @tag user
   */
  put(url: '/user/{username}', options: RequireKeys<SwaggerOptions<{username: string}, {}, {}, User>, 'path'>): Promise<unknown>
}


// swagger runtime. generate by swagger2ts
interface IRuntimeHeaderMapString {
  [key: string]: string | string[];
}

interface IRuntimeHeaderConfig {
  common: IRuntimeHeaderMapString;
  [method: string]: IRuntimeHeaderMapString;
}

interface IRuntimeRequestCommonOptions extends Omit<RequestInit, "body" | "method"> {
  path?: {
    [key: string]: string;
  };
  query?: {
    [key: string]: string;
  };
  header?: {
    [key: string]: string | string[];
  };
  body?: any;
  timeout?: number;
}

interface IRuntimeRequestOptions extends IRuntimeRequestCommonOptions {
  url: string;
  method: Uppercase<string>;
}

interface IRequestInterceptor {
  use(fn: IRequestInterceptorFn): IInterceptorCancelFn;
}

interface IResponseInterceptor {
  use(success: IResponseInterceptorSuccessFn<any>, error: IResponseInterceptorErrorFn<any>): IInterceptorCancelFn;
}

type IInterceptorCancelFn = () => void;
type IRequestInterceptorFn = (config: IRuntimeRequestOptions) => Promise<IRuntimeRequestOptions>;
type IResponseInterceptorSuccessFn<T> = (config: IRuntimeRequestOptions, response: Response, data: T) => Promise<T>;
type IResponseInterceptorErrorFn<T> = (config: IRuntimeRequestOptions, Error: RuntimeError) => Promise<T>;

export interface IRuntimeForm {
  [key: string]: any;
}
export class RequestInterceptor implements IRequestInterceptor {
  private _fns: IRequestInterceptorFn[] = [];
  public use(fn: IRequestInterceptorFn) {
    this._fns.push(fn);

    return () => {
      const index = this._fns.findIndex((v) => v === fn);

      if (index > -1) {
        this._fns.splice(index, 1);
      }
    };
  }

  async run(config: IRuntimeRequestOptions): Promise<IRuntimeRequestOptions> {
    for (const fn of this._fns) {
      config = await fn(config);
    }

    return config;
  }
}

export class ResponseInterceptor implements IResponseInterceptor {
  private _fnsSuccess: IResponseInterceptorSuccessFn<any>[] = [];
  private _fnsError: IResponseInterceptorErrorFn<any>[] = [];
  public use(successFn: IResponseInterceptorSuccessFn<any>, errorFn: IResponseInterceptorErrorFn<any>) {
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

  async runSuccess<T>(config: IRuntimeRequestOptions, response: Response, data: T): Promise<T> {
    for (const fn of this._fnsSuccess) {
      data = await fn(config, response, data);
    }

    return data;
  }

  async runError<T>(config: IRuntimeRequestOptions, err: RuntimeError): Promise<T> {
    let res!: T;

    for (const fn of this._fnsError) {
      res = await fn(config, err);
    }

    return res;
  }
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

export class RuntimeError extends Error {
  constructor(message: string, private _resp?: Response) {
    super(message);
  }

  public get response(): Response | undefined {
    return this._resp;
  }

  static fromResponse(resp: Response) {
    return new RuntimeError(resp.statusText, resp);
  }

  static fromError(err: Error) {
    return new RuntimeError(err.message || "unknown error: " + err);
  }
}

export interface IRuntime {
  readonly interceptors: { readonly request: IRequestInterceptor; readonly response: IResponseInterceptor };
  readonly defaults: { readonly timeout: number; readonly headers: IRuntimeHeaderConfig };
  readonly baseURL: string;
  domain: string;
  prefix: string;
  request<T>(config: IRuntimeRequestOptions): Promise<T>;
  clone(): IRuntime;
}

export class Runtime implements IRuntime {
  constructor(private _domain: string, private _prefix: string) {
    const methods = ["get", "post", "delete", "put", "head", "options", "trace", "patch"];

    for (const method of methods) {
      // @ts-ignore ignore error
      this[method] = (url: string, config?: IRuntimeRequestCommonOptions = {}) => {
        return this.request({
          method: method.toUpperCase(),
          url,
          ...config,
        });
      };
    }
  }

  private _requestInterceptor = new RequestInterceptor();
  private _responseInterceptor = new ResponseInterceptor();

  private _defaults = {
    timeout: 60 * 1000, // 60s,
    headers: {
      common: {
        "Content-Type": "application/json",
      },
    } as IRuntimeHeaderConfig,
  };

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
    return this._defaults;
  }

  private _timeout<T>(ms: number, promise: Promise<T>) {
    return new Promise<T>((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new RuntimeError(`timeout of ${ms}ms`));
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
    const baseUrl = this._domain.replace(/\/$/, "") + (!/^\//.test(this._prefix) ? "/" : "") + this._prefix;

    return baseUrl.replace(/\/$/, "");
  }

  public set domain(domain: string) {
    this._domain = domain;
  }

  public set prefix(prefix: string) {
    this._prefix = prefix;
  }

  public async request<T>(config: IRuntimeRequestOptions): Promise<T> {
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

    for (const key in config.header) {
      const value = config.header[key];
      if (value !== undefined) {
        if (Array.isArray(value)) {
          headers.delete(key);
          value.forEach((v) => headers.append(key, v));
        } else {
          headers.set(key, value);
        }
      }
    }

    const timeout = config.timeout || defaults.timeout;

    const body =
      config.body === undefined
        ? undefined
        : ["GET", "HEAD"].indexOf(config.method.toUpperCase()) > -1
        ? undefined
        : config.body instanceof RuntimeForm
        ? config.body.formData()
        : config.body instanceof Blob
        ? config.body
        : typeof config.body === "object"
        ? JSON.stringify(config.body)
        : config.body.toString();

    const exec = () =>
      fetch(url.toString(), {
        method: config.method,
        body: body,
        headers: headers,

        // common options
        cache: config.cache,
        credentials: config.credentials,
        integrity: config.integrity,
        keepalive: config.keepalive,
        mode: config.mode,
        redirect: config.redirect,
        referrer: config.referrer,
        referrerPolicy: config.referrerPolicy,
        signal: config.signal,
        window: config.window,
      });

    return (timeout ? this._timeout(timeout, exec()) : exec())
      .then(async (resp) => {
        if (!resp.ok) return Promise.reject(RuntimeError.fromResponse(resp));
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
      })
      .catch((err) => {
        const runtimeErr = err instanceof RuntimeError ? err : err instanceof Error ? RuntimeError.fromError(err as unknown as Error) : new RuntimeError(err + "");

        return this._responseInterceptor.runError<T>(config, runtimeErr);
      });
  }

  public clone() {
    return new Runtime(this._domain, this._prefix);
  }
}

export type IClient = SwaggerApi & IRuntime
export const apiV3 = new Runtime("http://localhost", "/api/v3") as unknown as IClient