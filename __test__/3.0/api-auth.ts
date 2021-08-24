// Generate by swagger2ts
/* default type by generation start */
interface MapAny {
  [key: string]: any
}
interface MapString {
  [key: string]: string | undefined
}

type IDefaultOptions = Omit<RequestInit, "body" | "method"> & { timeout?: number }
/* default type by generation end */

/**
 * ClientVO
 */
export interface ClientVO {
  authorizationGrantTypes?: string /* 授权方式 */
  clientId?: string /* client_id */
  clientSecretExpiresAt?: string /* 到期时间 */
  gmtCreate?: string /* 录入时间 */
  id?: string /* 主键 */
  name?: string /* 应用名称 */
  redirectUris?: string /* 回调地址 */
}

/**
 * PageResultVOOfClientVO
 */
export interface PageResultVOOfClientVO {
  data?: Array<ClientVO> /* 信息 */
  total?: number /* 总数 */
}

/**
 * ResponseEntity
 */
export interface ResponseEntity {
  body?: {}
  statusCode?: "ACCEPTED" | "ALREADY_REPORTED" | "BAD_GATEWAY" | "BAD_REQUEST" | "BANDWIDTH_LIMIT_EXCEEDED" | "CHECKPOINT" | "CONFLICT" | "CONTINUE" | "CREATED" | "DESTINATION_LOCKED" | "EXPECTATION_FAILED" | "FAILED_DEPENDENCY" | "FORBIDDEN" | "FOUND" | "GATEWAY_TIMEOUT" | "GONE" | "HTTP_VERSION_NOT_SUPPORTED" | "IM_USED" | "INSUFFICIENT_SPACE_ON_RESOURCE" | "INSUFFICIENT_STORAGE" | "INTERNAL_SERVER_ERROR" | "I_AM_A_TEAPOT" | "LENGTH_REQUIRED" | "LOCKED" | "LOOP_DETECTED" | "METHOD_FAILURE" | "METHOD_NOT_ALLOWED" | "MOVED_PERMANENTLY" | "MOVED_TEMPORARILY" | "MULTIPLE_CHOICES" | "MULTI_STATUS" | "NETWORK_AUTHENTICATION_REQUIRED" | "NON_AUTHORITATIVE_INFORMATION" | "NOT_ACCEPTABLE" | "NOT_EXTENDED" | "NOT_FOUND" | "NOT_IMPLEMENTED" | "NOT_MODIFIED" | "NO_CONTENT" | "OK" | "PARTIAL_CONTENT" | "PAYLOAD_TOO_LARGE" | "PAYMENT_REQUIRED" | "PERMANENT_REDIRECT" | "PRECONDITION_FAILED" | "PRECONDITION_REQUIRED" | "PROCESSING" | "PROXY_AUTHENTICATION_REQUIRED" | "REQUESTED_RANGE_NOT_SATISFIABLE" | "REQUEST_ENTITY_TOO_LARGE" | "REQUEST_HEADER_FIELDS_TOO_LARGE" | "REQUEST_TIMEOUT" | "REQUEST_URI_TOO_LONG" | "RESET_CONTENT" | "SEE_OTHER" | "SERVICE_UNAVAILABLE" | "SWITCHING_PROTOCOLS" | "TEMPORARY_REDIRECT" | "TOO_EARLY" | "TOO_MANY_REQUESTS" | "UNAUTHORIZED" | "UNAVAILABLE_FOR_LEGAL_REASONS" | "UNPROCESSABLE_ENTITY" | "UNSUPPORTED_MEDIA_TYPE" | "UPGRADE_REQUIRED" | "URI_TOO_LONG" | "USE_PROXY" | "VARIANT_ALSO_NEGOTIATES"
  statusCodeValue?: number
}

export interface SwaggerApi{
  /**
   * @tag auth-server-endpoint
   * @summary 文件上传测试
   */
  post(url: "/other", options: {query: {
    name?: string
  }, body: File | Blob | undefined} & IDefaultOptions): Promise<ResponseEntity>

  /**
   * @tag 应用接入管理
   * @summary 查询
   * @description oauth2.0 应用接入信息查询
   */
  get(url: "/register/client", options: {query: {
    page: number
    size: number
  }} & IDefaultOptions): Promise<PageResultVOOfClientVO>

  /**
   * @tag 应用接入管理
   * @summary 新增
   * @description oauth2.0 应用接入提交信息
   */
  post(url: "/register/client", options: {query: {
    clientSecret: string
    name: string
    redirectUri: string
  }} & IDefaultOptions): Promise<ResponseEntity>

  /**
   * @tag 应用接入管理
   * @summary 修改
   * @description oauth2.0 应用接入信息变更
   */
  post(url: "/register/client/{id}", options: {path: {
    id: string
  }, query: {
    clientSecret: string
    name: string
    redirectUri: string
  }} & IDefaultOptions): Promise<ResponseEntity>

  /**
   * @tag 应用接入管理
   * @summary 删除
   * @description oauth2.0 应用接入信息删除
   */
  delete(url: "/register/client/{id}", options: {path: {
    id: string
  }} & IDefaultOptions): Promise<ResponseEntity>
}

// swagger runtime. generate by swagger2ts
interface IRuntimeHeaderMapString {
  [key: string]: string;
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
    [key: string]: string;
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
type IResponseInterceptorErrorFn<T> = (config: IRuntimeRequestOptions, Error: Error) => Promise<T>;

interface IRuntimeForm {
  [key: string]: any;
}
class RequestInterceptor implements IRequestInterceptor {
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

class ResponseInterceptor implements IResponseInterceptor {
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

  async runError<T>(config: IRuntimeRequestOptions, err: Error): Promise<T> {
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

export interface IRuntime {
  readonly interceptors: { readonly request: IRequestInterceptor; readonly response: IResponseInterceptor };
  readonly defaults: { readonly timeout: number; readonly headers: IRuntimeHeaderConfig };
  readonly baseURL: string;
  domain: string;
  prefix: string;
  request<T>(config: IRuntimeRequestOptions): Promise<T>;
}

export class Runtime implements IRuntime {
  constructor(private _domain: string, private _prefix: string) {
    const methods = ["get", "post", "delete", "put", "head", "options", "trace", "patch"];

    for (const method of methods) {
      // @ts-ignore ignore error
      this[method] = (url: string, config: IRuntimeRequestCommonOptions) => {
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
        headers.set(key, value);
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
        : typeof config.body === "object"
        ? JSON.stringify(config.body)
        : config.body.toString();

    try {
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
}

export const unknownApi = new Runtime("http://localhost", "/") as unknown as (SwaggerApi & Runtime)