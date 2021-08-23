// Generate by swagger2ts
/* default type by generation start */
interface MapAny {
  [key: string]: any
}
interface MapString {
  [key: string]: string | undefined
}
/* default type by generation end */

export interface ClientVO {authorizationGrantTypes?: string, clientId?: string, clientSecretExpiresAt?: string, gmtCreate?: string, id?: string, name?: string, redirectUris?: string}
export interface PageResultVOOfClientVO {data?: Array<ClientVO>, total?: number}
export interface ResponseEntity {body?: {}, statusCode?: "ACCEPTED" | "ALREADY_REPORTED" | "BAD_GATEWAY" | "BAD_REQUEST" | "BANDWIDTH_LIMIT_EXCEEDED" | "CHECKPOINT" | "CONFLICT" | "CONTINUE" | "CREATED" | "DESTINATION_LOCKED" | "EXPECTATION_FAILED" | "FAILED_DEPENDENCY" | "FORBIDDEN" | "FOUND" | "GATEWAY_TIMEOUT" | "GONE" | "HTTP_VERSION_NOT_SUPPORTED" | "IM_USED" | "INSUFFICIENT_SPACE_ON_RESOURCE" | "INSUFFICIENT_STORAGE" | "INTERNAL_SERVER_ERROR" | "I_AM_A_TEAPOT" | "LENGTH_REQUIRED" | "LOCKED" | "LOOP_DETECTED" | "METHOD_FAILURE" | "METHOD_NOT_ALLOWED" | "MOVED_PERMANENTLY" | "MOVED_TEMPORARILY" | "MULTIPLE_CHOICES" | "MULTI_STATUS" | "NETWORK_AUTHENTICATION_REQUIRED" | "NON_AUTHORITATIVE_INFORMATION" | "NOT_ACCEPTABLE" | "NOT_EXTENDED" | "NOT_FOUND" | "NOT_IMPLEMENTED" | "NOT_MODIFIED" | "NO_CONTENT" | "OK" | "PARTIAL_CONTENT" | "PAYLOAD_TOO_LARGE" | "PAYMENT_REQUIRED" | "PERMANENT_REDIRECT" | "PRECONDITION_FAILED" | "PRECONDITION_REQUIRED" | "PROCESSING" | "PROXY_AUTHENTICATION_REQUIRED" | "REQUESTED_RANGE_NOT_SATISFIABLE" | "REQUEST_ENTITY_TOO_LARGE" | "REQUEST_HEADER_FIELDS_TOO_LARGE" | "REQUEST_TIMEOUT" | "REQUEST_URI_TOO_LONG" | "RESET_CONTENT" | "SEE_OTHER" | "SERVICE_UNAVAILABLE" | "SWITCHING_PROTOCOLS" | "TEMPORARY_REDIRECT" | "TOO_EARLY" | "TOO_MANY_REQUESTS" | "UNAUTHORIZED" | "UNAVAILABLE_FOR_LEGAL_REASONS" | "UNPROCESSABLE_ENTITY" | "UNSUPPORTED_MEDIA_TYPE" | "UPGRADE_REQUIRED" | "URI_TOO_LONG" | "USE_PROXY" | "VARIANT_ALSO_NEGOTIATES", statusCodeValue?: number}

export interface SwaggerApi{
  /**
   * @tag 应用接入管理
   * @summary 查询
   * @description oauth2.0 应用接入信息查询
   */
  get(url: "/register/client", options: {path?: MapString, query: {page: number | undefined, size: number | undefined}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<PageResultVOOfClientVO>
  /**
   * @tag 应用接入管理
   * @summary 新增
   * @description oauth2.0 应用接入提交信息
   */
  post(url: "/register/client", options: {path?: MapString, query: {clientSecret: string | undefined, name: string | undefined, redirectUri: string | undefined}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<ResponseEntity>
  /**
   * @tag 应用接入管理
   * @summary 修改
   * @description oauth2.0 应用接入信息变更
   */
  post(url: "/register/client/{id}", options: {path: {id: string | undefined}, query: {clientSecret: string | undefined, name: string | undefined, redirectUri: string | undefined}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<ResponseEntity>
  /**
   * @tag 应用接入管理
   * @summary 删除
   * @description oauth2.0 应用接入信息删除
   */
  delete(url: "/register/client/{id}", options: {path: {id: string | undefined}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<ResponseEntity>
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

export const unknownApi = new Runtime("http://localhost", "/") as unknown as (SwaggerApi & Runtime)