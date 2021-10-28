export interface ClientVO {
  /**
   * @description 授权方式
   */
  authorizationGrantTypes?: string
  /**
   * @description client_id
   */
  clientId?: string
  /**
   * @description 到期时间
   */
  clientSecretExpiresAt?: string
  /**
   * @description 录入时间
   */
  gmtCreate?: string
  /**
   * @description 主键
   */
  id?: string
  /**
   * @description 应用名称
   */
  name?: string
  /**
   * @description 回调地址
   */
  redirectUris?: string
}

export interface PageResultVOOfClientVO {
  /**
   * @description 信息
   */
  data?: Array<ClientVO>
  /**
   * @description 总数
   */
  total?: number
}

export interface ResponseEntity {
  body?: {
    [key: string]: unknown
  }
  statusCode?: 'ACCEPTED' | 'ALREADY_REPORTED' | 'BAD_GATEWAY' | 'BAD_REQUEST' | 'BANDWIDTH_LIMIT_EXCEEDED' | 'CHECKPOINT' | 'CONFLICT' | 'CONTINUE' | 'CREATED' | 'DESTINATION_LOCKED' | 'EXPECTATION_FAILED' | 'FAILED_DEPENDENCY' | 'FORBIDDEN' | 'FOUND' | 'GATEWAY_TIMEOUT' | 'GONE' | 'HTTP_VERSION_NOT_SUPPORTED' | 'IM_USED' | 'INSUFFICIENT_SPACE_ON_RESOURCE' | 'INSUFFICIENT_STORAGE' | 'INTERNAL_SERVER_ERROR' | 'I_AM_A_TEAPOT' | 'LENGTH_REQUIRED' | 'LOCKED' | 'LOOP_DETECTED' | 'METHOD_FAILURE' | 'METHOD_NOT_ALLOWED' | 'MOVED_PERMANENTLY' | 'MOVED_TEMPORARILY' | 'MULTIPLE_CHOICES' | 'MULTI_STATUS' | 'NETWORK_AUTHENTICATION_REQUIRED' | 'NON_AUTHORITATIVE_INFORMATION' | 'NOT_ACCEPTABLE' | 'NOT_EXTENDED' | 'NOT_FOUND' | 'NOT_IMPLEMENTED' | 'NOT_MODIFIED' | 'NO_CONTENT' | 'OK' | 'PARTIAL_CONTENT' | 'PAYLOAD_TOO_LARGE' | 'PAYMENT_REQUIRED' | 'PERMANENT_REDIRECT' | 'PRECONDITION_FAILED' | 'PRECONDITION_REQUIRED' | 'PROCESSING' | 'PROXY_AUTHENTICATION_REQUIRED' | 'REQUESTED_RANGE_NOT_SATISFIABLE' | 'REQUEST_ENTITY_TOO_LARGE' | 'REQUEST_HEADER_FIELDS_TOO_LARGE' | 'REQUEST_TIMEOUT' | 'REQUEST_URI_TOO_LONG' | 'RESET_CONTENT' | 'SEE_OTHER' | 'SERVICE_UNAVAILABLE' | 'SWITCHING_PROTOCOLS' | 'TEMPORARY_REDIRECT' | 'TOO_EARLY' | 'TOO_MANY_REQUESTS' | 'UNAUTHORIZED' | 'UNAVAILABLE_FOR_LEGAL_REASONS' | 'UNPROCESSABLE_ENTITY' | 'UNSUPPORTED_MEDIA_TYPE' | 'UPGRADE_REQUIRED' | 'URI_TOO_LONG' | 'USE_PROXY' | 'VARIANT_ALSO_NEGOTIATES'
  statusCodeValue?: number
}



export interface SwaggerPath {
  [key: string]: string
}

export type Stringable = {

  toString(): string
} | null | undefined | void
export interface SwaggerQuery {
  [key: string]: Stringable | Stringable[]
}

export interface SwaggerHeaders {
  [key: string]: Stringable | Stringable[]
}

export type SwaggerCommonOptions = Omit<RequestInit, "body" | "method" | "headers"> & { timeout?: number }

export type RequireKeys<T extends object, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>

export interface SwaggerOptions<P extends SwaggerPath = SwaggerPath, Q extends SwaggerQuery = SwaggerQuery, H extends SwaggerHeaders = SwaggerHeaders, B = any> extends SwaggerCommonOptions {
  path?: P
  query?: Q
  headers?: H
  body?: B
}

export interface SwaggerApi {
  post(url: '/other', options: SwaggerOptions<{}, {name: string}, {}, Blob | Uint8Array>): Promise<ResponseEntity>
  get(url: '/register/client', options: SwaggerOptions<{}, {size: number}, {}, unknown>): Promise<PageResultVOOfClientVO>
  post(url: '/register/client', options: SwaggerOptions<{}, {redirectUri: string}, {}, unknown>): Promise<ResponseEntity>
  post(url: '/register/client/{id}', options: RequireKeys<SwaggerOptions<{id: string}, {redirectUri: string}, {}, unknown>, 'path'>): Promise<ResponseEntity>
  delete(url: '/register/client/{id}', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<ResponseEntity>
}