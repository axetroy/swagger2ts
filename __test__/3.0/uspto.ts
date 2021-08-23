// Generate by swagger2ts
/* default type by generation start */
interface MapAny {
  [key: string]: any
}
interface MapString {
  [key: string]: string | undefined
}
/* default type by generation end */

export interface dataSetList {total?: number, apis?: Array<{apiKey?: string /* To be used as a dataset parameter value */, apiVersionNumber?: string /* To be used as a version parameter value */, apiUrl?: string /* The URL describing the dataset's fields */, apiDocumentationUrl?: string /* A URL to the API console for each API */}>}

export interface SwaggerApi{
  /**
   * @tag metadata
   * @summary List available data sets
   */
  get(url: "/", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<dataSetList>
  /**
   * @tag metadata
   * @summary Provides the general information about the API and the list of fields that can be used to query the dataset.
   * @description This GET API returns the list of all the searchable field names that are in the oa_citations. Please see the 'fields' attribute which returns an array of field names. Each field or a combination of fields can be searched using the syntax options shown below.
   */
  get(url: "/{dataset}/{version}/fields", options: {path: {dataset: string, version: string}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<string | undefined>
  /**
   * @tag search
   * @summary Provides search capability for the data set with the given search criteria.
   * @description This API is based on Solr/Lucene Search. The data is indexed using SOLR. This GET API returns the list of all the searchable field names that are in the Solr Index. Please see the 'fields' attribute which returns an array of field names. Each field or a combination of fields can be searched using the Solr/Lucene Syntax. Please refer https://lucene.apache.org/core/3_6_2/queryparsersyntax.html#Overview for the query syntax. List of field names that are searchable can be determined using above GET api.
   */
  post(url: "/{dataset}/{version}/records", options: {path: {version: string, dataset: string}, query?: MapString, header?: MapString, body: null, signal?: AbortSignal}): Promise<Array<{}>>
}

// swagger runtime. generate by swagger2ts
interface IRuntimeHeaderMapString {
  [key: string]: string;
}

interface IRuntimeRequestCommonOptions {
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

interface IRuntimeRequestOptions extends IRuntimeRequestCommonOptions {
  url: string;
  method: string;
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
    let res = null;

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

const data: RuntimeForm<{ name?: string }> = new RuntimeForm({ name: undefined });

export class Runtime {
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
      } as { common: IRuntimeHeaderMapString; [method: string]: IRuntimeHeaderMapString },
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

  public get<T>(url: string, config: IRuntimeRequestCommonOptions): Promise<T> {
    return this.request<T>({
      method: "GET",
      url,
      ...config,
    });
  }

  public post<T>(url: string, config: IRuntimeRequestCommonOptions): Promise<T> {
    return this.request<T>({
      method: "POST",
      url,
      ...config,
    });
  }

  public put<T>(url: string, config: IRuntimeRequestCommonOptions): Promise<T> {
    return this.request<T>({
      method: "PUT",
      url,
      ...config,
    });
  }

  public delete<T>(url: string, config: IRuntimeRequestCommonOptions): Promise<T> {
    return this.request<T>({
      method: "DELETE",
      url,
      ...config,
    });
  }

  public head<T>(url: string, config: IRuntimeRequestCommonOptions): Promise<T> {
    return this.request<T>({
      method: "HEAD",
      url,
      ...config,
    });
  }

  public options<T>(url: string, config: IRuntimeRequestCommonOptions): Promise<T> {
    return this.request<T>({
      method: "OPTIONS",
      url,
      ...config,
    });
  }

  public patch<T>(url: string, config: IRuntimeRequestCommonOptions): Promise<T> {
    return this.request<T>({
      method: "PATCH",
      url,
      ...config,
    });
  }

  public trace<T>(url: string, config: IRuntimeRequestCommonOptions): Promise<T> {
    return this.request<T>({
      method: "TRACE",
      url,
      ...config,
    });
  }
}

export const dsApi = new Runtime("http://localhost", "/ds-api") as unknown as (SwaggerApi & Runtime)