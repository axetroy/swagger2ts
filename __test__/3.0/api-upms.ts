// Generate by swagger2ts
/* default type by generation start */
interface MapAny {
  [key: string]: any
}
interface MapString {
  [key: string]: string | undefined
}
/* default type by generation end */

export interface ButtonDTO {name?: string, permission?: string, pid?: number, show?: boolean}
export interface MenuTreeVO {category?: "BUTTON" | "MENU", children?: Array<MenuTreeVO>, icon?: string, id?: number, module?: string, name?: string, params?: string, permission?: string, route?: string, target?: string}
export interface RoleDTO {description?: string, name?: string, pid?: number}
export interface SitemapDTO {icon?: string, module?: string, name?: string, params?: string, pid?: number, route?: string, target?: string}
export interface 菜单树 {category?: "BUTTON" | "MENU", children?: Array<菜单树>, deleted?: boolean, gmtModified?: string, icon?: string, id?: number, locked?: boolean, module?: string, name?: string, params?: string, permission?: string, pid?: number, route?: string, show?: boolean, target?: string}
export interface 角色树查询 {children?: Array<角色树查询>, description?: string, gmtModified?: string, id?: number, locked?: boolean, name?: string, pid?: number}

export interface SwaggerApi{
  /**
   * @tag 公共接口
   * @summary 按钮
   */
  get(url: "/button", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<Array<MenuTreeVO>>
  /**
   * @tag 公共接口
   * @summary 导航条
   */
  get(url: "/navbar", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<Array<MenuTreeVO>>
  /**
   * @tag 角色管理
   * @summary 查询
   */
  get(url: "/role", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<Array<角色树查询>>
  /**
   * @tag 角色管理
   * @summary 新增
   */
  post(url: "/role", options: {path?: MapString, query?: MapString, header?: MapString, body: RoleDTO, signal?: AbortSignal}): Promise<null>
  /**
   * @tag 角色管理
   * @summary 删除
   * @description 角色删除是一个危险的操作，不提供批量服务
   */
  delete(url: "/role/{id}", options: {path: {id: number | undefined}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<null>
  /**
   * @tag 角色管理
   * @summary 修改
   * @description 角色编辑不能修改从属关系,仅提供名称修改
   */
  put(url: "/role/{id}", options: {path: {id: number | undefined}, query?: MapString, header?: MapString, body: RoleDTO, signal?: AbortSignal}): Promise<null>
  /**
   * @tag 角色管理
   * @summary 权限查询
   */
  get(url: "/role/{id}/authority", options: {path: {id: number | undefined}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<Array<number | undefined>>
  /**
   * @tag 角色管理
   * @summary 权限设置
   */
  post(url: "/role/{id}/authority", options: {path: {id: number | undefined}, query?: MapString, header?: MapString, body: Array<number | undefined>, signal?: AbortSignal}): Promise<null>
  /**
   * @tag 角色管理
   * @summary 菜单查询
   * @description 根据角色id查询菜单信息
   */
  get(url: "/role/{id}/menu", options: {path: {id: number | undefined}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<Array<number | undefined>>
  /**
   * @tag 角色管理
   * @summary 菜单设置
   * @description 设置角色的菜单信息
   */
  post(url: "/role/{id}/menu", options: {path: {id: number | undefined}, query?: MapString, header?: MapString, body: Array<number | undefined>, signal?: AbortSignal}): Promise<null>
  /**
   * @tag 菜单管理
   * @summary 查询
   * @description 系统管理，菜单树结构
   */
  get(url: "/sitemap", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<Array<菜单树>>
  /**
   * @tag 菜单管理
   * @summary 新增
   * @description 添加菜单
   */
  post(url: "/sitemap", options: {path?: MapString, query?: MapString, header?: MapString, body: SitemapDTO, signal?: AbortSignal}): Promise<null>
  /**
   * @tag 菜单管理
   * @summary 添加按钮
   */
  post(url: "/sitemap/button", options: {path?: MapString, query?: MapString, header?: MapString, body: ButtonDTO, signal?: AbortSignal}): Promise<null>
  /**
   * @tag 菜单管理
   * @summary 修改按钮
   */
  put(url: "/sitemap/button/{id}", options: {path: {id: number | undefined}, query?: MapString, header?: MapString, body: ButtonDTO, signal?: AbortSignal}): Promise<null>
  /**
   * @tag 菜单管理
   * @summary 删除
   * @description 删除菜单， 级联删除子项
   */
  delete(url: "/sitemap/{id}", options: {path: {id: number | undefined}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<null>
  /**
   * @tag 菜单管理
   * @summary 更新
   * @description 编辑菜单
   */
  put(url: "/sitemap/{id}", options: {path: {id: number | undefined}, query?: MapString, header?: MapString, body: SitemapDTO, signal?: AbortSignal}): Promise<null>
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