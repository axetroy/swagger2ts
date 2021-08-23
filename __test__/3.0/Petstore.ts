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
  get(url: "/pet/findByStatus", options: {path?: MapString, query: {status: "available" | "pending" | "sold" | undefined}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<Array<Pet>>
  /**
   * @tag pet
   * @summary Finds Pets by tags
   * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   */
  get(url: "/pet/findByTags", options: {path?: MapString, query: {tags: Array<string | undefined>}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<Array<Pet>>
  /**
   * @tag pet
   * @summary Find pet by ID
   * @description Returns a single pet
   */
  get(url: "/pet/{petId}", options: {path: {petId: number | undefined}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<Pet>
  /**
   * @tag pet
   * @summary Updates a pet in the store with form data
   */
  post(url: "/pet/{petId}", options: {path: {petId: number | undefined}, query: {name: string | undefined, status: string | undefined}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<unknown>
  /**
   * @tag pet
   * @summary Deletes a pet
   */
  delete(url: "/pet/{petId}", options: {path: {petId: number | undefined}, query?: MapString, header: {api_key: string | undefined}, body?: any, signal?: AbortSignal}): Promise<unknown>
  /**
   * @tag pet
   * @summary uploads an image
   */
  post(url: "/pet/{petId}/uploadImage", options: {path: {petId: number | undefined}, query: {additionalMetadata: string | undefined}, header?: MapString, body: File | undefined, signal?: AbortSignal}): Promise<ApiResponse>
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
  get(url: "/store/order/{orderId}", options: {path: {orderId: number | undefined}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<Order>
  /**
   * @tag store
   * @summary Delete purchase order by ID
   * @description For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
   */
  delete(url: "/store/order/{orderId}", options: {path: {orderId: number | undefined}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<unknown>
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
  get(url: "/user/login", options: {path?: MapString, query: {username: string | undefined, password: string | undefined}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<string | undefined>
  /**
   * @tag user
   * @summary Logs out current logged in user session
   */
  get(url: "/user/logout", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<null>
  /**
   * @tag user
   * @summary Get user by user name
   */
  get(url: "/user/{username}", options: {path: {username: string | undefined}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<User>
  /**
   * @tag user
   * @summary Delete user
   * @description This can only be done by the logged in user.
   */
  delete(url: "/user/{username}", options: {path: {username: string | undefined}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<unknown>
  /**
   * @tag user
   * @summary Update user
   * @description This can only be done by the logged in user.
   */
  put(url: "/user/{username}", options: {path: {username: string | undefined}, query?: MapString, header?: MapString, body: User, signal?: AbortSignal}): Promise<null>
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

  public set prefix(prefix: string) {
    this._prefix = prefix;
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

export const apiV3 = new Http("http://localhost", "/api/v3") as unknown as SwaggerApi