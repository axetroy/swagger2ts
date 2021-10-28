// Generate by swagger2ts
/* default type by generation start */
interface MapAny {
  [key: string]: any
}
interface MapString {
  [key: string]: string | undefined
}

type IDefaultOptions = Omit<RequestInit, "body" | "method"> & { timeout?: number }
/* default type by generation end */

/**
 * ClientVO
 */
export interface ClientVO {
  authorizationGrantTypes?: string /* 授权方式 */
  clientId?: string /* client_id */
  clientSecretExpiresAt?: string /* 到期时间 */
  gmtCreate?: string /* 录入时间 */
  id?: string /* 主键 */
  name?: string /* 应用名称 */
  redirectUris?: string /* 回调地址 */
}

/**
 * PageResultVOOfClientVO
 */
export interface PageResultVOOfClientVO {
  data?: Array<ClientVO> /* 信息 */
  total?: number /* 总数 */
}

/**
 * ResponseEntity
 */
export interface ResponseEntity {
  body?: {}
  statusCode?: "ACCEPTED" | "ALREADY_REPORTED" | "BAD_GATEWAY" | "BAD_REQUEST" | "BANDWIDTH_LIMIT_EXCEEDED" | "CHECKPOINT" | "CONFLICT" | "CONTINUE" | "CREATED" | "DESTINATION_LOCKED" | "EXPECTATION_FAILED" | "FAILED_DEPENDENCY" | "FORBIDDEN" | "FOUND" | "GATEWAY_TIMEOUT" | "GONE" | "HTTP_VERSION_NOT_SUPPORTED" | "IM_USED" | "INSUFFICIENT_SPACE_ON_RESOURCE" | "INSUFFICIENT_STORAGE" | "INTERNAL_SERVER_ERROR" | "I_AM_A_TEAPOT" | "LENGTH_REQUIRED" | "LOCKED" | "LOOP_DETECTED" | "METHOD_FAILURE" | "METHOD_NOT_ALLOWED" | "MOVED_PERMANENTLY" | "MOVED_TEMPORARILY" | "MULTIPLE_CHOICES" | "MULTI_STATUS" | "NETWORK_AUTHENTICATION_REQUIRED" | "NON_AUTHORITATIVE_INFORMATION" | "NOT_ACCEPTABLE" | "NOT_EXTENDED" | "NOT_FOUND" | "NOT_IMPLEMENTED" | "NOT_MODIFIED" | "NO_CONTENT" | "OK" | "PARTIAL_CONTENT" | "PAYLOAD_TOO_LARGE" | "PAYMENT_REQUIRED" | "PERMANENT_REDIRECT" | "PRECONDITION_FAILED" | "PRECONDITION_REQUIRED" | "PROCESSING" | "PROXY_AUTHENTICATION_REQUIRED" | "REQUESTED_RANGE_NOT_SATISFIABLE" | "REQUEST_ENTITY_TOO_LARGE" | "REQUEST_HEADER_FIELDS_TOO_LARGE" | "REQUEST_TIMEOUT" | "REQUEST_URI_TOO_LONG" | "RESET_CONTENT" | "SEE_OTHER" | "SERVICE_UNAVAILABLE" | "SWITCHING_PROTOCOLS" | "TEMPORARY_REDIRECT" | "TOO_EARLY" | "TOO_MANY_REQUESTS" | "UNAUTHORIZED" | "UNAVAILABLE_FOR_LEGAL_REASONS" | "UNPROCESSABLE_ENTITY" | "UNSUPPORTED_MEDIA_TYPE" | "UPGRADE_REQUIRED" | "URI_TOO_LONG" | "USE_PROXY" | "VARIANT_ALSO_NEGOTIATES"
  statusCodeValue?: number
}

export interface SwaggerApi{
  /**
   * @tag auth-server-endpoint
   * @summary 文件上传测试
   */
  post(url: "/other", options: {query: {
    name?: string
  }, body: File | Blob | undefined} & IDefaultOptions): Promise<ResponseEntity>

  /**
   * @tag 应用接入管理
   * @summary 查询
   * @description oauth2.0 应用接入信息查询
   */
  get(url: "/register/client", options: {query: {
    page: number
    size: number
  }} & IDefaultOptions): Promise<PageResultVOOfClientVO>

  /**
   * @tag 应用接入管理
   * @summary 新增
   * @description oauth2.0 应用接入提交信息
   */
  post(url: "/register/client", options: {query: {
    clientSecret: string
    name: string
    redirectUri: string
  }} & IDefaultOptions): Promise<ResponseEntity>

  /**
   * @tag 应用接入管理
   * @summary 修改
   * @description oauth2.0 应用接入信息变更
   */
  post(url: "/register/client/{id}", options: {path: {
    id: string
  }, query: {
    clientSecret: string
    name: string
    redirectUri: string
  }} & IDefaultOptions): Promise<ResponseEntity>

  /**
   * @tag 应用接入管理
   * @summary 删除
   * @description oauth2.0 应用接入信息删除
   */
  delete(url: "/register/client/{id}", options: {path: {
    id: string
  }} & IDefaultOptions): Promise<ResponseEntity>
}
