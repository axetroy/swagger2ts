// Generate by swagger2ts
export interface dataSetList {
  total?: number
  apis?: Array<{
    /**
     * @description To be used as a dataset parameter value
     */
    apiKey?: string
    /**
     * @description To be used as a version parameter value
     */
    apiVersionNumber?: string
    /**
     * @description The URL describing the dataset's fields
     * @format uriref
     */
    apiUrl?: string
    /**
     * @description A URL to the API console for each API
     * @format uriref
     */
    apiDocumentationUrl?: string
  }>
}



/** ===== build-in interface start ===== */
export type Stringify = string | number | null | undefined | void

export type SwaggerPath = Record<string, string | number>

export type SwaggerQuery = Record<string, Stringify | Stringify[] | Record<string, any>>

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

export interface SwaggerApi {
  /**
   * @summary List available data sets
   * @tag metadata
   */
  get(url: '/', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<dataSetList>
  /**
   * @description This GET API returns the list of all the searchable field names that are in the oa_citations. Please see the 'fields' attribute which returns an array of field names. Each field or a combination of fields can be searched using the syntax options shown below.
   * @summary Provides the general information about the API and the list of fields that can be used to query the dataset.
   * @tag metadata
   */
  get(url: '/{dataset}/{version}/fields', options: RequireKeys<SwaggerOptions<{dataset: string, version: string}, {}, {}, unknown>, 'path'>): Promise<string>
  /**
   * @description This API is based on Solr/Lucene Search. The data is indexed using SOLR. This GET API returns the list of all the searchable field names that are in the Solr Index. Please see the 'fields' attribute which returns an array of field names. Each field or a combination of fields can be searched using the Solr/Lucene Syntax. Please refer https://lucene.apache.org/core/3_6_2/queryparsersyntax.html#Overview for the query syntax. List of field names that are searchable can be determined using above GET api.
   * @summary Provides search capability for the data set with the given search criteria.
   * @tag search
   */
  post(url: '/{dataset}/{version}/records', options: RequireKeys<SwaggerOptions<{version: string, dataset: string}, {}, {}, unknown>, 'path'>): Promise<Array<{
  [key: string]: {
    [key: string]: unknown
  }

}>>
}


// swagger runtime. generate by swagger2ts
interface IRuntimeHeaderMapString {
  [key: string]: string | string[];
}

interface IRuntimeHeaderConfig {
  common: IRuntimeHeaderMapString;
  [method: string]: IRuntimeHeaderMapString;
}

interface IRuntimeRequestCommonOptions extends Omit<RequestInit, "body" | "method" | "headers"> {
  path?: Record<string, string>;
  query?: Record<string, string | number | any[] | Record<string, any>>;
  headers?: Record<string, string | string[]>;
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

type TypedFormDataValue = FormDataEntryValue | Blob | Uint8Array;

export class TypedFormData<T extends Record<string, TypedFormDataValue>> {
  constructor(private _form: T) {}
  public formData(): FormData {
    const form = new FormData();

    for (const key in this._form) {
      const value = this._form[key];
      if (value !== undefined) {
        if (value instanceof Uint8Array) {
          form.append(key, new Blob([value]));
        } else {
          // @ts-ignore
          form.append(key, value);
        }
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

interface ISerializer {
  use(fn: Function): void;
}

export class QuerySerializer implements ISerializer {
  private __fn__: URLQuerySerializer = (query) => {
    const params = new URLSearchParams();
    for (const key in query) {
      const value = query[key];
      if (value !== undefined && value !== null) {
        if (Object.prototype.toString.call(value) === "[object Object]") {
          params.append(key, JSON.stringify(value));
        } else if (Array.isArray(value)) {
          value.forEach((v) => params.append(key, v));
        } else {
          params.append(key, value + "");
        }
      }
    }

    return params
  };

  use(fn: URLQuerySerializer) {
    this.__fn__ = fn;
  }
}

type URLQuerySerializer = (query: Record<string, string | number | any[] | Record<string, any>>) => URLSearchParams;

export interface IRuntime {
  readonly interceptors: { readonly request: IRequestInterceptor; readonly response: IResponseInterceptor };
  readonly serializer: { readonly query: QuerySerializer };
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
          method: method.toUpperCase() as Uppercase<string>,
          url,
          ...config,
        });
      };
    }

    this._querySerializer.use((query) => {
      const params = new URLSearchParams();

      for (const key in query) {
        const value = query[key];
        if (value !== undefined && value !== null) {
          if (Object.prototype.toString.call(value) === "[object Object]") {
            params.append(key, JSON.stringify(value));
          } else if (Array.isArray(value)) {
            value.forEach((v) => params.append(key, v));
          } else {
            params.append(key, value + "");
          }
        }
      }

      return params;
    });
  }

  private _requestInterceptor = new RequestInterceptor();
  private _responseInterceptor = new ResponseInterceptor();
  private _querySerializer = new QuerySerializer();

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

  public get serializer() {
    const self = this;

    return {
      get query() {
        return self._querySerializer;
      },
    };
  }

  public get defaults() {
    return this._defaults;
  }

  private _timeout<T>(ms: number, promise: Promise<T>) {
    if (ms <= 0) return promise

    return new Promise<T>((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new RuntimeError(`timeout of ${ms}ms`));
      }, ms);

      promise
        .then(resolve)
        .catch(reject)
        .finally(() => {
          clearTimeout(timer);
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
    config = await this._requestInterceptor.run(config);

    const url = new URL(this.baseURL + config.url);
    config.headers = config.headers || {};

    const headersObject: typeof config.headers = Object.create(null);

    const defaults = this.defaults;

    // set default header
    for (const key in defaults.headers.common) {
      headersObject[key] = defaults.headers.common[key];
    }

    // set header for this method
    for (const key in defaults.headers[config.method] || {}) {
      headersObject[key] = defaults.headers[config.method][key];
    }

    Object.assign(headersObject, config.headers);

    // set query for this method
    if (config.query) {
      // @ts-expect-error ignore
      const params = this.serializer.query.__fn__(config.query);

      url.search = params.toString();
    }

    // set path for this method
    if (config.path) {
      for (const key in config.path) {
        const t1 = encodeURI("{");
        const t2 = encodeURI("}");
        const reg = new RegExp(`${t1}${key}${t2}`, "g");
        url.pathname = url.pathname.replace(reg, config.path[key]);
      }
    }

    const headers = new Headers();

    for (const key in headersObject) {
      const value = headersObject[key];
      if (value !== undefined) {
        if (Array.isArray(value)) {
          headers.delete(key);
          value.forEach((v) => headers.append(key, v));
        } else {
          headers.set(key, value);
        }
      }
    }

    const timeout = config.timeout ?? defaults.timeout;

    const body =
      config.body === undefined
        ? undefined
        : ["GET", "HEAD"].indexOf(config.method.toUpperCase()) > -1
        ? undefined
        : config.body instanceof TypedFormData
        ? config.body.formData()
        : config.body instanceof FormData
        ? config.body
        : config.body instanceof Blob
        ? config.body
        : typeof config.body === "object"
        ? JSON.stringify(config.body)
        : config.body.toString();

    // 如果是 FormData, 删除 Content-Type，让浏览器自动设置
    if (body instanceof FormData) {
      headers.delete("Content-Type");
    }

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
        const runtimeErr =
          err instanceof RuntimeError ? err : err instanceof Error ? RuntimeError.fromError(err as unknown as Error) : new RuntimeError(err + "");

        return this._responseInterceptor.runError<T>(config, runtimeErr);
      });
  }

  public clone() {
    return new Runtime(this._domain, this._prefix);
  }
}

export type IClient = SwaggerApi & IRuntime
export const dsApi = new Runtime("http://localhost", "/ds-api") as unknown as IClient