// Generate by swagger2ts
/* default type by generation start */
interface MapAny {
  [key: string]: any
}
interface MapString {
  [key: string]: string | undefined
}
/* default type by generation end */

export interface Order {id: number | undefined, petId: number | undefined, quantity: number | undefined, shipDate: string | undefined, status: "placed" | "approved" | "delivered" | undefined, complete: boolean | undefined}
export interface Customer {id: number | undefined, username: string | undefined, address: Array<Address>}
export interface Address {street: string | undefined, city: string | undefined, state: string | undefined, zip: string | undefined}
export interface Category {id: number | undefined, name: string | undefined}
export interface User {id: number | undefined, username: string | undefined, firstName: string | undefined, lastName: string | undefined, email: string | undefined, password: string | undefined, phone: string | undefined, userStatus: number | undefined}
export interface Tag {id: number | undefined, name: string | undefined}
export interface Pet {id: number | undefined, name: string | undefined, category: Category, photoUrls: Array<string | undefined>, tags: Array<Tag>, status: "available" | "pending" | "sold" | undefined}
export interface ApiResponse {code: number | undefined, type: string | undefined, message: string | undefined}

export interface SwaggerApi{
  post(url: "/pet", options: {path?: MapString, query?: MapString, header?: MapString, body: Pet}): Promise<Pet>
  put(url: "/pet", options: {path?: MapString, query?: MapString, header?: MapString, body: Pet}): Promise<Pet>
  get(url: "/pet/findByStatus", options: {path?: MapString, query: {status: "available" | "pending" | "sold" | undefined}, header?: MapString, body?: any}): Promise<Array<Pet>>
  get(url: "/pet/findByTags", options: {path?: MapString, query: {tags: Array<string | undefined>}, header?: MapString, body?: any}): Promise<Array<Pet>>
  get(url: "/pet/{petId}", options: {path: {petId: number | undefined}, query?: MapString, header?: MapString, body?: any}): Promise<Pet>
  post(url: "/pet/{petId}", options: {path: {petId: number | undefined}, query: {name: string | undefined, status: string | undefined}, header?: MapString, body?: any}): Promise<unknown>
  delete(url: "/pet/{petId}", options: {path: {petId: number | undefined}, query?: MapString, header: {api_key: string | undefined}, body?: any}): Promise<unknown>
  post(url: "/pet/{petId}/uploadImage", options: {path: {petId: number | undefined}, query: {additionalMetadata: string | undefined}, header?: MapString, body: File | undefined}): Promise<ApiResponse>
  get(url: "/store/inventory", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<{}>
  post(url: "/store/order", options: {path?: MapString, query?: MapString, header?: MapString, body: Order}): Promise<Order>
  get(url: "/store/order/{orderId}", options: {path: {orderId: number | undefined}, query?: MapString, header?: MapString, body?: any}): Promise<Order>
  delete(url: "/store/order/{orderId}", options: {path: {orderId: number | undefined}, query?: MapString, header?: MapString, body?: any}): Promise<unknown>
  post(url: "/user", options: {path?: MapString, query?: MapString, header?: MapString, body: User}): Promise<User>
  post(url: "/user/createWithList", options: {path?: MapString, query?: MapString, header?: MapString, body: Array<User>}): Promise<User>
  get(url: "/user/login", options: {path?: MapString, query: {username: string | undefined, password: string | undefined}, header?: MapString, body?: any}): Promise<string | undefined>
  get(url: "/user/logout", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<null>
  get(url: "/user/{username}", options: {path: {username: string | undefined}, query?: MapString, header?: MapString, body?: any}): Promise<User>
  delete(url: "/user/{username}", options: {path: {username: string | undefined}, query?: MapString, header?: MapString, body?: any}): Promise<unknown>
  put(url: "/user/{username}", options: {path: {username: string | undefined}, query?: MapString, header?: MapString, body: User}): Promise<null>
  /* default methods */
  get<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any }): Promise<T>
  post<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any }): Promise<T>
  delete<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any }): Promise<T>
  put<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any }): Promise<T>
  head<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any }): Promise<T>
  options<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any }): Promise<T>
  trace<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any }): Promise<T>
  patch<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any }): Promise<T>
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

    return baseUrl.replace(/\//$, "");
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

    return fetch(url, {
      method: config.method,
      body: config.body,
      headers: headers,
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

export const apiV3 = new Http("http://localhost", "/api/v3")