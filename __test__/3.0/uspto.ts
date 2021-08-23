// Generate by swagger2ts
/* default type by generation start */
interface MapAny {
  [key: string]: any
}
interface MapString {
  [key: string]: string | undefined
}
/* default type by generation end */

export interface dataSetList {total: number | undefined, apis: Array<{apiKey: string | undefined, apiVersionNumber: string | undefined, apiUrl: string | undefined, apiDocumentationUrl: string | undefined}>}

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
  get(url: "/{dataset}/{version}/fields", options: {path: {dataset: string | undefined, version: string | undefined}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<string | undefined>
  /**
   * @tag search
   * @summary Provides search capability for the data set with the given search criteria.
   * @description This API is based on Solr/Lucene Search. The data is indexed using SOLR. This GET API returns the list of all the searchable field names that are in the Solr Index. Please see the 'fields' attribute which returns an array of field names. Each field or a combination of fields can be searched using the Solr/Lucene Syntax. Please refer https://lucene.apache.org/core/3_6_2/queryparsersyntax.html#Overview for the query syntax. List of field names that are searchable can be determined using above GET api.
   */
  post(url: "/{dataset}/{version}/records", options: {path: {version: string | undefined, dataset: string | undefined}, query?: MapString, header?: MapString, body: {criteria: string | undefined, start: number | undefined, rows: number | undefined}, signal?: AbortSignal}): Promise<Array<{}>>
  /* default methods */
  get<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any, signal?: AbortSignal }): Promise<T>
  post<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any, signal?: AbortSignal }): Promise<T>
  delete<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any, signal?: AbortSignal }): Promise<T>
  put<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any, signal?: AbortSignal }): Promise<T>
  head<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any, signal?: AbortSignal }): Promise<T>
  options<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any, signal?: AbortSignal }): Promise<T>
  trace<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any, signal?: AbortSignal }): Promise<T>
  patch<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any, signal?: AbortSignal }): Promise<T>
}

interface RequestConfig extends Config {
  url: string;
  method: string;
}

interface HeaderMapString {
  [key: string]: string;
}

interface Config {
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

class Http {
  public readonly defaultHeaders: { default: HeaderMapString; [method: string]: HeaderMapString } = {
    default: {
      "Content-Type": "application/json",
    },
  };

  constructor(private _domain: string, private _prefix: string) {}

  private get baseURL(): string {
    const baseUrl = this._domain.replace(/\/$/, "") + this._prefix;

    return baseUrl.replace(/\/$/, "");
  }

  public set domain(domain: string) {
    this._domain = domain;
  }

  public request<T>(config: RequestConfig): Promise<T> {
    const url = new URL(this.baseURL + config.url);
    const headers = new Headers();

    // set default header
    for (const key in this.defaultHeaders.default) {
      headers.set(key, this.defaultHeaders.default[key]);
    }

    // set header for this method
    for (const key in this.defaultHeaders[config.method] || {}) {
      headers.set(key, this.defaultHeaders.default[key]);
    }

    // set header for this config
    if (config.header) {
      for (const key in config.header) {
        headers.set(key, config.header[key]);
      }
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

    return fetch(url.toString(), {
      method: config.method,
      body: config.body,
      headers: headers,
      signal: config.signal,
    }).then((resp) => {
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
    });
  }

  public get<T>(url: string, config: Config): Promise<T> {
    return this.request<T>({
      method: "GET",
      url,
      ...config,
    });
  }

  public post<T>(url: string, config: Config): Promise<T> {
    return this.request<T>({
      method: "POST",
      url,
      ...config,
    });
  }

  public put<T>(url: string, config: Config): Promise<T> {
    return this.request<T>({
      method: "PUT",
      url,
      ...config,
    });
  }

  public delete<T>(url: string, config: Config): Promise<T> {
    return this.request<T>({
      method: "DELETE",
      url,
      ...config,
    });
  }

  public head<T>(url: string, config: Config): Promise<T> {
    return this.request<T>({
      method: "HEAD",
      url,
      ...config,
    });
  }

  public options<T>(url: string, config: Config): Promise<T> {
    return this.request<T>({
      method: "OPTIONS",
      url,
      ...config,
    });
  }

  public patch<T>(url: string, config: Config): Promise<T> {
    return this.request<T>({
      method: "PATCH",
      url,
      ...config,
    });
  }

  public trace<T>(url: string, config: Config): Promise<T> {
    return this.request<T>({
      method: "TRACE",
      url,
      ...config,
    });
  }
}

export const dsApi = new Http("http://localhost", "/ds-api")