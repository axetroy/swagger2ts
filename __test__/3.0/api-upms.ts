// Generate by swagger2ts
export interface ButtonDTO {
  /**
   * @description 名称(50字符以内)
   */
  name: string
  /**
   * @description 权限(255字符以内)
   */
  permission: string
  /**
   * @description 上级节点ID
   * @format int64
   */
  pid: number
  /**
   * @description 显示
   */
  show?: boolean
}

export interface MenuTreeVO {
  /**
   * @description 类型
   */
  category?: 'BUTTON' | 'MENU'
  /**
   * @description 子菜单
   */
  children?: Array<MenuTreeVO>
  /**
   * @description 图标
   */
  icon?: string
  /**
   * @description id
   * @format int64
   */
  id?: number
  /**
   * @description 组件
   */
  module?: string
  /**
   * @description 名称
   */
  name?: string
  /**
   * @description 路由参数
   */
  params?: string
  /**
   * @description 权限
   */
  permission?: string
  /**
   * @description 路由地址
   */
  route?: string
  /**
   * @description 打开方式(50字符以内)
   */
  target?: string
}

export interface RoleDTO {
  /**
   * @description 描述(255字符以内)
   */
  description?: string
  /**
   * @description 角色(100字符以内)
   */
  name: string
  /**
   * @description 归属
   * @format int64
   */
  pid: number
}

export interface SitemapDTO {
  /**
   * @description 图标(255字符以内)
   */
  icon?: string
  /**
   * @description 组件(255字符以内)
   */
  module?: string
  /**
   * @description 名称(50字符以内)
   */
  name: string
  /**
   * @description 路由参数(255字符以内)
   */
  params?: string
  /**
   * @description 上级节点ID
   * @format int64
   */
  pid?: number
  /**
   * @description 路由地址(255字符以内)
   */
  route?: string
  /**
   * @description 打开方式(50字符以内)
   */
  target: string
}

export interface 菜单树 {
  /**
   * @description 分类
   */
  category?: 'BUTTON' | 'MENU'
  /**
   * @description 子菜单
   */
  children?: Array<菜单树>
  /**
   * @description 删除
   */
  deleted?: boolean
  /**
   * @description 更新时间
   * @format date-time
   */
  gmtModified?: string
  /**
   * @description 图标
   */
  icon?: string
  /**
   * @description id
   * @format int64
   */
  id?: number
  /**
   * @description 锁
   */
  locked?: boolean
  /**
   * @description 组件
   */
  module?: string
  /**
   * @description 名称
   */
  name?: string
  /**
   * @description 路由参数
   */
  params?: string
  /**
   * @description 权限
   */
  permission?: string
  /**
   * @description 上级节点ID
   * @format int64
   */
  pid?: number
  /**
   * @description 路由地址
   */
  route?: string
  /**
   * @description 显示
   */
  show?: boolean
  /**
   * @description 打开方式
   */
  target?: string
}

export interface 角色树查询 {
  /**
   * @description 子菜单
   */
  children?: Array<角色树查询>
  /**
   * @description 描述
   */
  description?: string
  /**
   * @description 更新时间
   * @format date-time
   */
  gmtModified?: string
  /**
   * @description id
   * @format int64
   */
  id?: number
  /**
   * @description 锁
   */
  locked?: boolean
  /**
   * @description 名称
   */
  name?: string
  /**
   * @description 上级节点ID
   * @format int64
   */
  pid?: number
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
   * @summary 按钮
   * @tag 公共接口
   */
  get(url: '/button', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<Array<MenuTreeVO>>
  /**
   * @summary 导航条
   * @tag 公共接口
   */
  get(url: '/navbar', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<Array<MenuTreeVO>>
  /**
   * @summary 查询
   * @tag 角色管理
   */
  get(url: '/role', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<Array<角色树查询>>
  /**
   * @summary 新增
   * @tag 角色管理
   */
  post(url: '/role', options?: SwaggerOptions<{}, {}, {}, RoleDTO>): Promise<unknown>
  /**
   * @description 角色删除是一个危险的操作，不提供批量服务
   * @summary 删除
   * @tag 角色管理
   */
  delete(url: '/role/{id}', options: RequireKeys<SwaggerOptions<{id: number}, {}, {}, unknown>, 'path'>): Promise<unknown>
  /**
   * @description 角色编辑不能修改从属关系,仅提供名称修改
   * @summary 修改
   * @tag 角色管理
   */
  put(url: '/role/{id}', options: RequireKeys<SwaggerOptions<{id: number}, {}, {}, RoleDTO>, 'path'>): Promise<unknown>
  /**
   * @summary 权限查询
   * @tag 角色管理
   */
  get(url: '/role/{id}/authority', options: RequireKeys<SwaggerOptions<{id: number}, {}, {}, unknown>, 'path'>): Promise<Array<number>>
  /**
   * @summary 权限设置
   * @tag 角色管理
   */
  post(url: '/role/{id}/authority', options: RequireKeys<SwaggerOptions<{id: number}, {}, {}, Array<number>>, 'path'>): Promise<unknown>
  /**
   * @description 根据角色id查询菜单信息
   * @summary 菜单查询
   * @tag 角色管理
   */
  get(url: '/role/{id}/menu', options: RequireKeys<SwaggerOptions<{id: number}, {}, {}, unknown>, 'path'>): Promise<Array<number>>
  /**
   * @description 设置角色的菜单信息
   * @summary 菜单设置
   * @tag 角色管理
   */
  post(url: '/role/{id}/menu', options: RequireKeys<SwaggerOptions<{id: number}, {}, {}, Array<number>>, 'path'>): Promise<unknown>
  /**
   * @description 系统管理，菜单树结构
   * @summary 查询
   * @tag 菜单管理
   */
  get(url: '/sitemap', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<Array<菜单树>>
  /**
   * @description 添加菜单
   * @summary 新增
   * @tag 菜单管理
   */
  post(url: '/sitemap', options?: SwaggerOptions<{}, {}, {}, SitemapDTO>): Promise<unknown>
  /**
   * @summary 添加按钮
   * @tag 菜单管理
   */
  post(url: '/sitemap/button', options?: SwaggerOptions<{}, {}, {}, ButtonDTO>): Promise<unknown>
  /**
   * @summary 修改按钮
   * @tag 菜单管理
   */
  put(url: '/sitemap/button/{id}', options: RequireKeys<SwaggerOptions<{id: number}, {}, {}, ButtonDTO>, 'path'>): Promise<unknown>
  /**
   * @description 删除菜单， 级联删除子项
   * @summary 删除
   * @tag 菜单管理
   */
  delete(url: '/sitemap/{id}', options: RequireKeys<SwaggerOptions<{id: number}, {}, {}, unknown>, 'path'>): Promise<unknown>
  /**
   * @description 编辑菜单
   * @summary 更新
   * @tag 菜单管理
   */
  put(url: '/sitemap/{id}', options: RequireKeys<SwaggerOptions<{id: number}, {}, {}, SitemapDTO>, 'path'>): Promise<unknown>
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
          method: method.toUpperCase() as Uppercase<string>,
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
      for (const key in config.query) {
        const value = config.query[key];
        if (value !== undefined && value !== null) {
          if (Object.prototype.toString.call(value) === "[object Object]") {
            url.searchParams.append(key, JSON.stringify(value));
          } else if (Array.isArray(value)) {
            value.forEach((v) => url.searchParams.append(key, v));
          } else {
            url.searchParams.append(key, value + "");
          }
        }
      }
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

    const timeout = config.timeout || defaults.timeout;

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
export const unknownApi = new Runtime("http://localhost", "/") as unknown as IClient