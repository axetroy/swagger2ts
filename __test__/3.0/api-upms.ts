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
  delete(url: "/role/{id}", options: {path: {id: number}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<null>
  /**
   * @tag 角色管理
   * @summary 修改
   * @description 角色编辑不能修改从属关系,仅提供名称修改
   */
  put(url: "/role/{id}", options: {path: {id: number}, query?: MapString, header?: MapString, body: RoleDTO, signal?: AbortSignal}): Promise<null>
  /**
   * @tag 角色管理
   * @summary 权限查询
   */
  get(url: "/role/{id}/authority", options: {path: {id: number}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<Array<number | undefined>>
  /**
   * @tag 角色管理
   * @summary 权限设置
   */
  post(url: "/role/{id}/authority", options: {path: {id: number}, query?: MapString, header?: MapString, body: Array<number | undefined>, signal?: AbortSignal}): Promise<null>
  /**
   * @tag 角色管理
   * @summary 菜单查询
   * @description 根据角色id查询菜单信息
   */
  get(url: "/role/{id}/menu", options: {path: {id: number}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<Array<number | undefined>>
  /**
   * @tag 角色管理
   * @summary 菜单设置
   * @description 设置角色的菜单信息
   */
  post(url: "/role/{id}/menu", options: {path: {id: number}, query?: MapString, header?: MapString, body: Array<number | undefined>, signal?: AbortSignal}): Promise<null>
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
  put(url: "/sitemap/button/{id}", options: {path: {id: number}, query?: MapString, header?: MapString, body: ButtonDTO, signal?: AbortSignal}): Promise<null>
  /**
   * @tag 菜单管理
   * @summary 删除
   * @description 删除菜单， 级联删除子项
   */
  delete(url: "/sitemap/{id}", options: {path: {id: number}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<null>
  /**
   * @tag 菜单管理
   * @summary 更新
   * @description 编辑菜单
   */
  put(url: "/sitemap/{id}", options: {path: {id: number}, query?: MapString, header?: MapString, body: SitemapDTO, signal?: AbortSignal}): Promise<null>
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

export const unknownApi = new Runtime("http://localhost", "/") as unknown as (SwaggerApi & Runtime)