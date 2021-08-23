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
export interface ResponseEntity {body?: {}, statusCode?: "ACCEPTED" | "ALREADY_REPORTED" | "BAD_GATEWAY" | "BAD_REQUEST" | "BANDWIDTH_LIMIT_EXCEEDED" | "CHECKPOINT" | "CONFLICT" | "CONTINUE" | "CREATED" | "DESTINATION_LOCKED" | "EXPECTATION_FAILED" | "FAILED_DEPENDENCY" | "FORBIDDEN" | "FOUND" | "GATEWAY_TIMEOUT" | "GONE" | "HTTP_VERSION_NOT_SUPPORTED" | "IM_USED" | "INSUFFICIENT_SPACE_ON_RESOURCE" | "INSUFFICIENT_STORAGE" | "INTERNAL_SERVER_ERROR" | "I_AM_A_TEAPOT" | "LENGTH_REQUIRED" | "LOCKED" | "LOOP_DETECTED" | "METHOD_FAILURE" | "METHOD_NOT_ALLOWED" | "MOVED_PERMANENTLY" | "MOVED_TEMPORARILY" | "MULTIPLE_CHOICES" | "MULTI_STATUS" | "NETWORK_AUTHENTICATION_REQUIRED" | "NON_AUTHORITATIVE_INFORMATION" | "NOT_ACCEPTABLE" | "NOT_EXTENDED" | "NOT_FOUND" | "NOT_IMPLEMENTED" | "NOT_MODIFIED" | "NO_CONTENT" | "OK" | "PARTIAL_CONTENT" | "PAYLOAD_TOO_LARGE" | "PAYMENT_REQUIRED" | "PERMANENT_REDIRECT" | "PRECONDITION_FAILED" | "PRECONDITION_REQUIRED" | "PROCESSING" | "PROXY_AUTHENTICATION_REQUIRED" | "REQUESTED_RANGE_NOT_SATISFIABLE" | "REQUEST_ENTITY_TOO_LARGE" | "REQUEST_HEADER_FIELDS_TOO_LARGE" | "REQUEST_TIMEOUT" | "REQUEST_URI_TOO_LONG" | "RESET_CONTENT" | "SEE_OTHER" | "SERVICE_UNAVAILABLE" | "SWITCHING_PROTOCOLS" | "TEMPORARY_REDIRECT" | "TOO_EARLY" | "TOO_MANY_REQUESTS" | "UNAUTHORIZED" | "UNAVAILABLE_FOR_LEGAL_REASONS" | "UNPROCESSABLE_ENTITY" | "UNSUPPORTED_MEDIA_TYPE" | "UPGRADE_REQUIRED" | "URI_TOO_LONG" | "USE_PROXY" | "VARIANT_ALSO_NEGOTIATES", statusCodeValue?: number}
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
  post(url: "/role", options: {path?: MapString, query?: MapString, header?: MapString, body: RoleDTO, signal?: AbortSignal}): Promise<ResponseEntity>
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
  post(url: "/sitemap", options: {path?: MapString, query?: MapString, header?: MapString, body: SitemapDTO, signal?: AbortSignal}): Promise<ResponseEntity>
  /**
   * @tag 菜单管理
   * @summary 添加按钮
   */
  post(url: "/sitemap/button", options: {path?: MapString, query?: MapString, header?: MapString, body: ButtonDTO, signal?: AbortSignal}): Promise<ResponseEntity>
  /**
   * @tag 菜单管理
   * @summary 修改按钮
   */
  put(url: "/sitemap/button/{id}", options: {path: {id: number | undefined}, query?: MapString, header?: MapString, body: ButtonDTO, signal?: AbortSignal}): Promise<ResponseEntity>
  /**
   * @tag 菜单管理
   * @summary 删除
   * @description 删除菜单， 级联删除子项
   */
  delete(url: "/sitemap/{id}", options: {path: {id: number | undefined}, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<ResponseEntity>
  /**
   * @tag 菜单管理
   * @summary 更新
   * @description 编辑菜单
   */
  put(url: "/sitemap/{id}", options: {path: {id: number | undefined}, query?: MapString, header?: MapString, body: SitemapDTO, signal?: AbortSignal}): Promise<ResponseEntity>
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

export const 192_168_0_21 = new Http("http://localhost", "/")