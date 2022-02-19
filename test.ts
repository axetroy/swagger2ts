// Generate by swagger2ts
export interface ClientVO {
  /**
   * @description 授权方式
   */
  authorizationGrantTypes?: string
  /**
   * @description client_id
   */
  clientId?: string
  /**
   * @description 到期时间
   */
  clientSecretExpiresAt?: string
  /**
   * @description 录入时间
   */
  gmtCreate?: string
  /**
   * @description 主键
   */
  id?: string
  /**
   * @description 应用名称
   */
  name?: string
  /**
   * @description 回调地址
   */
  redirectUris?: string
}

export interface PageResultVOOfClientVO {
  /**
   * @description 信息
   */
  data?: Array<ClientVO>
  /**
   * @description 总数
   */
  total?: number
}

export interface ResponseEntity {
  body?: {
    [key: string]: unknown
  }
  statusCode?: 'ACCEPTED' | 'ALREADY_REPORTED' | 'BAD_GATEWAY' | 'BAD_REQUEST' | 'BANDWIDTH_LIMIT_EXCEEDED' | 'CHECKPOINT' | 'CONFLICT' | 'CONTINUE' | 'CREATED' | 'DESTINATION_LOCKED' | 'EXPECTATION_FAILED' | 'FAILED_DEPENDENCY' | 'FORBIDDEN' | 'FOUND' | 'GATEWAY_TIMEOUT' | 'GONE' | 'HTTP_VERSION_NOT_SUPPORTED' | 'IM_USED' | 'INSUFFICIENT_SPACE_ON_RESOURCE' | 'INSUFFICIENT_STORAGE' | 'INTERNAL_SERVER_ERROR' | 'I_AM_A_TEAPOT' | 'LENGTH_REQUIRED' | 'LOCKED' | 'LOOP_DETECTED' | 'METHOD_FAILURE' | 'METHOD_NOT_ALLOWED' | 'MOVED_PERMANENTLY' | 'MOVED_TEMPORARILY' | 'MULTIPLE_CHOICES' | 'MULTI_STATUS' | 'NETWORK_AUTHENTICATION_REQUIRED' | 'NON_AUTHORITATIVE_INFORMATION' | 'NOT_ACCEPTABLE' | 'NOT_EXTENDED' | 'NOT_FOUND' | 'NOT_IMPLEMENTED' | 'NOT_MODIFIED' | 'NO_CONTENT' | 'OK' | 'PARTIAL_CONTENT' | 'PAYLOAD_TOO_LARGE' | 'PAYMENT_REQUIRED' | 'PERMANENT_REDIRECT' | 'PRECONDITION_FAILED' | 'PRECONDITION_REQUIRED' | 'PROCESSING' | 'PROXY_AUTHENTICATION_REQUIRED' | 'REQUESTED_RANGE_NOT_SATISFIABLE' | 'REQUEST_ENTITY_TOO_LARGE' | 'REQUEST_HEADER_FIELDS_TOO_LARGE' | 'REQUEST_TIMEOUT' | 'REQUEST_URI_TOO_LONG' | 'RESET_CONTENT' | 'SEE_OTHER' | 'SERVICE_UNAVAILABLE' | 'SWITCHING_PROTOCOLS' | 'TEMPORARY_REDIRECT' | 'TOO_EARLY' | 'TOO_MANY_REQUESTS' | 'UNAUTHORIZED' | 'UNAVAILABLE_FOR_LEGAL_REASONS' | 'UNPROCESSABLE_ENTITY' | 'UNSUPPORTED_MEDIA_TYPE' | 'UPGRADE_REQUIRED' | 'URI_TOO_LONG' | 'USE_PROXY' | 'VARIANT_ALSO_NEGOTIATES'
  statusCodeValue?: number
}



export interface SwaggerPath {
  [key: string]: string
}

export type Stringable = {

  toString(): string
} | null | undefined | void
export interface SwaggerQuery {
  [key: string]: Stringable | Stringable[]
}

export interface SwaggerHeaders {
  [key: string]: Stringable | Stringable[]
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
   * @summary 文件上传测试
   * @tags auth-server-endpoint
   */
  post(url: '/other', options: SwaggerOptions<{}, {name: string}, {}, Blob | Uint8Array>): Promise<ResponseEntity>
  /**
   * @description oauth2.0 应用接入信息查询
   * @summary 查询
   * @tags 应用接入管理
   */
  get(url: '/register/client', options: SwaggerOptions<{}, {size: number}, {}, unknown>): Promise<PageResultVOOfClientVO>
  /**
   * @description oauth2.0 应用接入提交信息
   * @summary 新增
   * @tags 应用接入管理
   */
  post(url: '/register/client', options: SwaggerOptions<{}, {redirectUri: string}, {}, unknown>): Promise<ResponseEntity>
  /**
   * @description oauth2.0 应用接入信息变更
   * @summary 修改
   * @tags 应用接入管理
   */
  post(url: '/register/client/{id}', options: RequireKeys<SwaggerOptions<{id: string}, {redirectUri: string}, {}, unknown>, 'path'>): Promise<ResponseEntity>
  /**
   * @description oauth2.0 应用接入信息删除
   * @summary 删除
   * @tags 应用接入管理
   */
  delete(url: '/register/client/{id}', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<ResponseEntity>
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
        const runtimeErr = err instanceof RuntimeError ? err : err instanceof Error ? RuntimeError.fromError(err) : new RuntimeError(err + "");

        return this._responseInterceptor.runError<T>(config, runtimeErr);
      });
  }

  public clone() {
    return new Runtime(this._domain, this._prefix);
  }
}

export type IClient = SwaggerApi & IRuntime
export const unknownApi = new Runtime("http://localhost", "/") as unknown as IClient