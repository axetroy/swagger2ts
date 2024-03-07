// Generate by swagger2ts
export interface SitemapDTO {
  /**
   * @description 类型
   */
  category: 'MENU' | 'BUTTON' | 'VIEW'
  /**
   * @description 名称
   */
  name: string
  /**
   * @description 上级节点ID
   */
  pid?: string
  /**
   * @description 图标
   */
  icon?: string
  /**
   * @description 组件
   */
  module?: string
  /**
   * @description 路由地址
   */
  route?: string
  /**
   * @description 路由参数
   */
  params?: string
  /**
   * @description 打开方式
   */
  target?: string
  /**
   * @description 描述
   */
  description?: string
}

export interface ButtonDTO {
  /**
   * @description 上级节点ID
   */
  pid: string
  /**
   * @description 名称
   */
  name: string
  /**
   * @description 权限
   */
  permission: string
  /**
   * @description 显示
   */
  show: boolean
}

export interface RoleDTO {
  /**
   * @description 角色
   */
  name: string
  /**
   * @description 描述
   */
  description?: string
}

export interface DictDTO {
  /**
   * @description 上级ID
   */
  pid?: string
  /**
   * @description 编号
   */
  code: string
  /**
   * @description 名称
   */
  name: string
}

export interface VolumeDTO {
  pid?: string
  name?: string
}

export interface MoveDTOString {
  /**
   * @description 移动的 id
   */
  movingId: string
  /**
   * @description 目标 id
   */
  targetId: string
  /**
   * @description 目标节点的上方-true / 下方-false
   */
  before: boolean
}

export interface MoveDTO {
  /**
   * @description 移动的 id
   */
  movingId: {
    [key: string]: unknown
  }
  /**
   * @description 目标 id
   */
  targetId: {
    [key: string]: unknown
  }
  /**
   * @description 目标节点的上方-true / 下方-false
   */
  before: boolean
}

export interface SealDTO {
  /**
   * @description 账号
   */
  account?: string
  /**
   * @description 密码
   */
  pwd?: string
}

export interface PreviewDTO {
  name?: string
  url?: string
}

export interface PreviewSignVO {
  url?: string
}

export interface FileSigningUrlDTO {
  name?: string
  path: string
}

export interface FileSigningUrl {
  /**
   * @format int64
   */
  expires_in?: number
  url?: string
  name?: string
}

/**
 * @description 操作人
 */
export interface CreateByVO {
  id?: string
  name?: string
}

export interface MergeBaseVO {
  id?: string
  /**
   * @description 名称
   */
  name?: string
  /**
   * @description 分册等级
   * @format int32
   */
  level?: number
  /**
   * @description 步骤
   * @format int32
   */
  step?: number
  /**
   * @description 项目ID
   */
  projectId?: string
  /**
   * @description 时间
   */
  date?: string
  createBy?: CreateByVO
}

export interface KvStringString {
  id?: string
  name?: string
}

export interface FlyOcrUserDTO {
  id: string
  /**
   * @description 姓名
   */
  name: string
  /**
   * @description 签章位置信息
   */
  data: Array<SealPositionDTO>
}

/**
 * @description 签章位置信息
 */
export interface SealPositionDTO {
  /**
   * @format float
   */
  x?: number
  /**
   * @format float
   */
  y?: number
}

/**
 * @description 人员信息
 */
export interface FlyOcrUserVO {
  id?: string
  /**
   * @description 姓名
   */
  name?: string
  /**
   * @description 签章位置信息
   */
  data?: Array<SealPositionVO>
}

export interface FlyPageOcrVO {
  /**
   * @description 预览文件
   */
  url?: string
  /**
   * @description 人员信息
   */
  users?: Array<FlyOcrUserVO>
}

/**
 * @description 签章位置信息
 */
export interface SealPositionVO {
  /**
   * @format float
   */
  x?: number
  /**
   * @format float
   */
  y?: number
}

export interface AchievementFileDTO {
  id?: string
  name?: string
  projectName?: string
}

export interface SignUserDTO {
  userId?: string
  userName?: string
  /**
   * @format int32
   */
  sort?: number
  point?: Array<Array<number>>
}

export interface LoginDTO {
  /**
   * @description 账号
   */
  username: string
  /**
   * @description 密码
   */
  password: string
}

export interface TokenVO {
  access_token?: string
  /**
   * @format int64
   */
  expires_in?: number
}

export interface VolumeFileVO {
  id?: string
  name?: string
  path?: string
  tableName?: string
  code?: string
  /**
   * @format int32
   */
  page?: number
  /**
   * @format int64
   */
  length?: number
  chapter?: string
  /**
   * @format date-time
   */
  gmtModified?: string
}

export interface UserVO {
  id?: string
  /**
   * @description 名称
   */
  name?: string
  /**
   * @description 电子邮箱
   */
  email?: string
  /**
   * @description 手机
   */
  mobile?: string
  /**
   * @description 电话
   */
  tel?: string
}

export interface PageQueryTemplateQuery {
  /**
   * @description 页码
   * @format int32
   */
  page: number
  /**
   * @description 每页显示数量(最多200条)
   * @format int32
   */
  size: number
  query?: TemplateQuery
}

/**
 * @description 查询条件信息
 */
export interface TemplateQuery {
  /**
   * @description 名称
   */
  name?: string
  /**
   * @description 标签
   */
  tag?: string
  /**
   * @description 类型: 1 —— 封面、 2 —— 目录、 3 —— 分册
   * @format int32
   */
  type?: number
}

export interface PageResultTemplateVO {
  /**
   * @format int64
   */
  total?: number
  data?: Array<TemplateVO>
}

export interface TemplateVO {
  id?: string
  /**
   * @description 名称
   */
  name?: string
  /**
   * @description 标签
   */
  tag?: string
  /**
   * @description 类型: 1 —— 封面、 2 —— 目录、 3 —— 分册
   * @format int32
   */
  type?: number
  /**
   * @description 录入时间
   * @format date-time
   */
  gmtCreate?: string
  /**
   * @description 更新时间
   * @format date-time
   */
  gmtModified?: string
}

export interface TemplateBaseVO {
  id?: string
  name?: string
  path?: string
}

export interface SitemapTreeVO {
  /**
   * @description id
   */
  id?: string
  /**
   * @description 分类
   */
  category?: 'MENU' | 'BUTTON' | 'VIEW'
  /**
   * @description 名称
   */
  name?: string
  /**
   * @description 权限
   */
  permission?: string
  /**
   * @description 上级节点ID
   */
  pid?: string
  /**
   * @description 图标
   */
  icon?: string
  /**
   * @description 组件
   */
  module?: string
  /**
   * @description 路由地址
   */
  route?: string
  /**
   * @description 路由参数
   */
  params?: string
  /**
   * @description 打开方式
   */
  target?: string
  /**
   * @description 描述
   */
  description?: string
  /**
   * @description 显示
   */
  show?: boolean
  /**
   * @description 锁
   */
  locked?: boolean
  /**
   * @description 更新时间
   * @format date-time
   */
  gmtModified?: string
  /**
   * @description 子菜单
   */
  children?: Array<SitemapTreeVO>
}

export interface DocsDO {
  id?: string
  bizId?: string
  name?: string
  original?: string
  target?: string
  status?: 'WAITING' | 'SIGNING' | 'SUCCESS' | 'FAIL'
  /**
   * @format date-time
   */
  gmtCreate?: string
  /**
   * @format date-time
   */
  gmtModified?: string
}

export interface SealVO {
  /**
   * @description 类型
   */
  type?: string
  /**
   * @description 名称
   */
  name?: string
  /**
   * @description 编号
   */
  code?: string
  /**
   * @description 图
   */
  img?: string
  /**
   * @description 过期时间
   */
  expires?: string
}

export interface RoleVO {
  /**
   * @description id
   */
  id?: string
  /**
   * @description 名称
   */
  name?: string
  /**
   * @description 锁
   */
  locked?: boolean
  /**
   * @description 描述
   */
  description?: string
  /**
   * @description 更新时间
   * @format date-time
   */
  gmtModified?: string
}

export interface DeptTreeVO {
  /**
   * @description id
   */
  id?: string
  /**
   * @description 类型
   */
  type?: 'org' | 'dept' | 'group' | 'post' | 'person'
  /**
   * @description 名称
   */
  name?: string
  /**
   * @description 下级部门
   */
  children?: Array<DeptTreeVO>
}

export interface MenuTreeVO {
  /**
   * @description id
   */
  id?: string
  /**
   * @description 权限
   */
  permission?: string
  /**
   * @description 类型
   */
  category?: 'MENU' | 'BUTTON' | 'VIEW'
  /**
   * @description 名称
   */
  name?: string
  /**
   * @description 图标
   */
  icon?: string
  /**
   * @description 组件
   */
  module?: string
  /**
   * @description 路由地址
   */
  route?: string
  /**
   * @description 路由参数
   */
  params?: string
  /**
   * @description 打开方式
   */
  target?: string
  /**
   * @description 子菜单
   */
  children?: Array<MenuTreeVO>
}

export interface VolumeVO {
  id?: string
  name?: string
  children?: Array<VolumeVO>
}

export interface VolumeBaseVO {
  id?: string
  name?: string
  parent?: string
  /**
   * @description 文件数量
   * @format int32
   */
  files?: number
  /**
   * @description 页码
   * @format int32
   */
  page?: number
  /**
   * @description 大小
   * @format int64
   */
  length?: number
}

export interface FlyPageVO {
  /**
   * @description 文件名称
   */
  name?: string
  /**
   * @description 是否已进行ocr
   */
  ocr?: boolean
  info?: FlyPageOcrVO
}

/**
 * @description 扉页
 */
export interface FileDTO {
  name?: string
  path?: string
}

export interface FrontCoverVO {
  /**
   * @description 日期
   */
  date?: string
  /**
   * @description 分册等级
   * @format int32
   */
  level?: number
  cover?: FileDTO
  catalog?: FileDTO
  volume?: FileDTO
  fly?: FileDTO
}

export interface CatalogVO {
  id?: string
  /**
   * @description 名称
   */
  name?: string
  /**
   * @description 目录
   */
  exists?: boolean
  /**
   * @description 文件信息
   */
  files?: Array<VolumeFileBaseVO>
  /**
   * @description 分册信息
   */
  children?: Array<CatalogVO>
}

/**
 * @description 文件信息
 */
export interface VolumeFileBaseVO {
  id?: string
  /**
   * @description 名称
   */
  name?: string
  /**
   * @description 页码
   * @format int32
   */
  page?: number
  /**
   * @description 大小
   * @format int64
   */
  length?: number
  /**
   * @description 篇章
   */
  chapter?: string
}

export interface MergeRecordVO {
  id?: string
  name?: string
  /**
   * @description 状态
   * @format int32
   */
  status?: number
  /**
   * @description 时间
   * @format date-time
   */
  gmtCreate?: string
  createBy?: User
  /**
   * @description 分册信息
   */
  data?: Array<MergeVolumeInfoVO>
}

/**
 * @description 分册信息
 */
export interface MergeVolumeInfoVO {
  id?: string
  /**
   * @description 册名
   */
  name?: string
  /**
   * @description 大小
   * @format int64
   */
  size?: number
  /**
   * @description 页码
   * @format int32
   */
  page?: number
  /**
   * @description 文件数
   * @format int32
   */
  files?: number
  /**
   * @description 签名状态
   * @format int32
   */
  signature?: number
  /**
   * @description 盖章
   */
  stamp?: boolean
  /**
   * @description 归档
   */
  archived?: boolean
  /**
   * @description 放行
   */
  release?: boolean
}

/**
 * @description 组册人
 */
export interface User {
  id?: string
  name?: string
}

/**
 * @description 查询条件信息
 */
export interface KeywordQuery {
  /**
   * @description 关键词
   */
  keyword?: string
}

export interface PageQueryKeywordQuery {
  /**
   * @description 页码
   * @format int32
   */
  page: number
  /**
   * @description 每页显示数量(最多200条)
   * @format int32
   */
  size: number
  query?: KeywordQuery
}

export interface LogApiDO {
  id?: string
  ip?: string
  name?: string
  region?: string
  params?: string
  method?: string
  uri?: string
  /**
   * @format date-time
   */
  gmtCreate?: string
}

export interface PageResultLogApiDO {
  /**
   * @format int64
   */
  total?: number
  data?: Array<LogApiDO>
}

export interface UserSignPointVO {
  userId?: string
  username?: string
  point?: Array<Array<number>>
  signImgBase64?: string
}

/**
 * @description 查询条件信息
 */
export interface FlowTaskQuery {
  name?: string
}

export interface PageQueryFlowTaskQuery {
  /**
   * @description 页码
   * @format int32
   */
  page: number
  /**
   * @description 每页显示数量(最多200条)
   * @format int32
   */
  size: number
  query?: FlowTaskQuery
}

export interface FlowTaskRunVO {
  id?: string
  flowId?: string
  /**
   * @description 待办类型
   */
  type?: 'SIGN' | 'STAMP'
  /**
   * @description 组测的文件
   */
  achievementFileList?: Array<AchievementFileDTO>
  /**
   * @description 册名
   */
  achievementName?: string
  /**
   * @description 册数
   * @format int32
   */
  achievementNumber?: number
  /**
   * @description 项目名称
   */
  projectName?: string
  /**
   * @description 发起人ID
   */
  startUserId?: string
  /**
   * @description 发起人名称
   */
  startUserName?: string
  /**
   * @description 电子签章状态
   */
  status?: 'WAIT' | 'PROCESSING' | 'ERROR'
  /**
   * @description 发起时间
   * @format date-time
   */
  gmtStart?: string
  /**
   * @description 到达时间
   * @format date-time
   */
  gmtArrive?: string
}

export interface PageResultFlowTaskRunVO {
  /**
   * @format int64
   */
  total?: number
  data?: Array<FlowTaskRunVO>
}

export interface FlowTaskHistoryVO {
  id?: string
  flowId?: string
  /**
   * @description 处理结果状态
   */
  status?: 'SUCCESS' | 'REFUSE'
  /**
   * @description 待办类型
   */
  type?: 'SIGN' | 'STAMP'
  /**
   * @description 册ID
   */
  achievementId?: string
  /**
   * @description 册名
   */
  achievementName?: string
  /**
   * @description 册数
   * @format int32
   */
  achievementNumber?: number
  /**
   * @description 项目名称
   */
  projectName?: string
  /**
   * @description 发起人ID
   */
  startUserId?: string
  /**
   * @description 发起人名称
   */
  startUserName?: string
  /**
   * @description 发起时间
   * @format date-time
   */
  gmtStart?: string
  /**
   * @description 到达时间
   * @format date-time
   */
  gmtArrive?: string
  /**
   * @description 处理时间
   * @format date-time
   */
  gmtHandler?: string
}

export interface PageResultFlowTaskHistoryVO {
  /**
   * @format int64
   */
  total?: number
  data?: Array<FlowTaskHistoryVO>
}

export interface DirectoryFileVO {
  /**
   * @description id
   */
  id?: string
  /**
   * @description 目录
   */
  parent?: string
  /**
   * @description 名称
   */
  name?: string
  /**
   * @description 大小
   * @format int64
   */
  length?: number
  /**
   * @description 页数
   * @format int32
   */
  page?: number
  /**
   * @description 同步状态 1(未开始),2(进行中),3(完成),4(错误)
   * @format int32
   */
  sync?: number
  /**
   * @description 组册 1(未使用),2(已使用/已参与组册),3(文件有变动)
   * @format int32
   */
  used?: number
  /**
   * @description 创建时间
   * @format date-time
   */
  gmtCreate?: string
  /**
   * @description 更新时间
   * @format date-time
   */
  gmtModified?: string
}

export interface DirectoryVO {
  /**
   * @description id
   */
  id?: string
  /**
   * @description 名称
   */
  name?: string
  /**
   * @description 下级
   */
  children?: Array<DirectoryVO>
}

export interface DictVO {
  /**
   * @description 主键、唯一标识
   */
  id?: string
  /**
   * @description 代码/编号
   */
  code?: string
  /**
   * @description 校验规则
   */
  rules?: string
  /**
   * @description 提示
   */
  hint?: string
  /**
   * @description 名称
   */
  name?: string
}

export interface DictTreeVO {
  /**
   * @description id
   */
  id?: string
  /**
   * @description 编号
   */
  code?: string
  /**
   * @description 名称
   */
  name?: string
  /**
   * @description 下级
   */
  children?: Array<DictTreeVO>
}

export interface CurrentUserVO {
  id?: string
  /**
   * @description 名称
   */
  name?: string
  /**
   * @description 电子邮箱
   */
  email?: string
  /**
   * @description 手机
   */
  mobile?: string
  /**
   * @description 电话
   */
  tel?: string
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
   * @description 删除菜单， 级联删除子项
   * @summary 删除
   * @tag 菜单管理
   */
  delete(url: '/sitemap/{id}', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<unknown>
  /**
   * @description 编辑菜单
   * @summary 更新
   * @tag 菜单管理
   */
  put(url: '/sitemap/{id}', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, SitemapDTO>, 'path'>): Promise<unknown>
  /**
   * @summary 修改按钮
   * @tag 菜单管理
   */
  put(url: '/sitemap/button/{id}', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, ButtonDTO>, 'path'>): Promise<unknown>
  /**
   * @description 角色删除是一个危险的操作，不提供批量服务
   * @summary 删除
   * @tag 角色管理
   */
  delete(url: '/role/{id}', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<unknown>
  /**
   * @description 角色编辑不能修改从属关系,仅提供名称修改
   * @summary 修改
   * @tag 角色管理
   */
  put(url: '/role/{id}', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, RoleDTO>, 'path'>): Promise<unknown>
  /**
   * @summary 查询选项
   * @tag 数据字典
   */
  get(url: '/dict/{id}', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<Array<DictTreeVO>>
  /**
   * @description 同级别排序
   * @summary 删除
   * @tag 数据字典
   */
  delete(url: '/dict/{id}', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<unknown>
  /**
   * @summary 修改
   * @tag 数据字典
   */
  put(url: '/dict/{id}', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, DictDTO>, 'path'>): Promise<unknown>
  /**
   * @summary 更新分册
   * @tag 组册
   */
  post(url: '/volume/{id}', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, VolumeDTO>, 'path'>): Promise<unknown>
  /**
   * @summary 删除分册
   * @tag 组册
   */
  delete(url: '/volume/{id}', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<unknown>
  /**
   * @summary 查询分册文件
   * @tag 组册
   */
  get(url: '/volume/{id}/files', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<Array<VolumeFileVO>>
  /**
   * @summary 添加分册文件
   * @tag 组册
   */
  post(url: '/volume/{id}/files', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, Array<string>>, 'path'>): Promise<unknown>
  /**
   * @summary 删除分册文件
   * @tag 组册
   */
  delete(url: '/volume/{id}/files', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<unknown>
  /**
   * @summary 排序分册文件
   * @tag 组册
   */
  post(url: '/volume/{id}/files/move', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, MoveDTOString>, 'path'>): Promise<unknown>
  /**
   * @summary 下载分册目录
   * @tag 组册
   */
  get(url: '/volume/{id}/catalog', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<FileSigningUrl>
  /**
   * @summary 上传分册目录
   * @tag 组册
   */
  post(url: '/volume/{id}/catalog', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, TypedFormData<{
  /**
   * @description 扉页
   * @format binary
   */
  file?: Blob | Uint8Array
}
>>, 'path'>): Promise<unknown>
  /**
   * @summary 删除分册目录
   * @tag 组册
   */
  delete(url: '/volume/{id}/catalog', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<unknown>
  /**
   * @summary 分册排序
   * @tag 组册
   */
  post(url: '/volume/move', options?: SwaggerOptions<{}, {}, {}, MoveDTOString>): Promise<unknown>
  /**
   * @summary 分页查询
   * @tag 模板管理
   */
  get(url: '/template', options: RequireKeys<SwaggerOptions<{}, {query: PageQueryTemplateQuery}, {}, unknown>, 'query'>): Promise<PageResultTemplateVO>
  /**
   * @summary 新增
   * @tag 模板管理
   */
  post(url: '/template', options?: SwaggerOptions<{}, {}, {}, TypedFormData<{
  /**
   * @format binary
   */
  file?: Blob | Uint8Array
  /**
   * @description 名称
   */
  name?: string
  /**
   * @description 标签
   */
  tag?: string
  /**
   * @description 类型1-封面、2—目录、3-分册
   */
  type?: '1' | '2' | '3'
}
>>): Promise<unknown>
  /**
   * @description 系统管理，菜单树结构
   * @summary 查询
   * @tag 菜单管理
   */
  get(url: '/sitemap', options?: SwaggerOptions<{}, {menu?: 'MENU' | 'BUTTON' | 'VIEW'}, {}, unknown>): Promise<Array<SitemapTreeVO>>
  /**
   * @description 添加菜单
   * @summary 新增
   * @tag 菜单管理
   */
  post(url: '/sitemap', options?: SwaggerOptions<{}, {}, {}, SitemapDTO>): Promise<unknown>
  /**
   * @description 菜单显示
   * @summary 显示
   * @tag 菜单管理
   */
  post(url: '/sitemap/{id}/show', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<unknown>
  /**
   * @description 菜单隐藏
   * @summary 隐藏
   * @tag 菜单管理
   */
  post(url: '/sitemap/{id}/hide', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<unknown>
  /**
   * @summary 排序
   * @tag 菜单管理
   */
  post(url: '/sitemap/move', options?: SwaggerOptions<{}, {}, {}, MoveDTO>): Promise<unknown>
  /**
   * @summary 添加按钮
   * @tag 菜单管理
   */
  post(url: '/sitemap/button', options?: SwaggerOptions<{}, {}, {}, ButtonDTO>): Promise<unknown>
  /**
   * @summary 查询
   * @tag 文档签批
   */
  get(url: '/sign/docs', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<Array<DocsDO>>
  /**
   * @summary 新增
   * @tag 文档签批
   */
  post(url: '/sign/docs', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<unknown>
  /**
   * @summary 查询
   * @tag 印章管理
   */
  get(url: '/seal', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<Array<SealVO>>
  /**
   * @summary 录入信息
   * @tag 印章管理
   */
  post(url: '/seal', options?: SwaggerOptions<{}, {}, {}, SealDTO>): Promise<unknown>
  /**
   * @summary 查询
   * @tag 角色管理
   */
  get(url: '/role', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<Array<RoleVO>>
  /**
   * @summary 新增
   * @tag 角色管理
   */
  post(url: '/role', options?: SwaggerOptions<{}, {}, {}, RoleDTO>): Promise<unknown>
  /**
   * @summary 权限查询
   * @tag 角色管理
   */
  get(url: '/role/{id}/authority', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<Array<string>>
  /**
   * @summary 权限设置
   * @tag 角色管理
   */
  post(url: '/role/{id}/authority', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, Array<string>>, 'path'>): Promise<unknown>
  /**
   * @summary 新增
   * @tag 预览
   */
  post(url: '/preview', options?: SwaggerOptions<{}, {}, {}, PreviewDTO>): Promise<PreviewSignVO>
  /**
   * @description 当前默认30分钟
   * @summary 创建
   * @tag 文件url签名
   */
  post(url: '/oss/sign', options?: SwaggerOptions<{}, {}, {}, FileSigningUrlDTO>): Promise<FileSigningUrl>
  /**
   * @summary 同步数据
   * @tag 组织机构
   */
  post(url: '/organization/sync', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<unknown>
  /**
   * @summary 新增
   * @tag 组册
   */
  post(url: '/merge', options?: SwaggerOptions<{}, {}, {}, TypedFormData<{
  /**
   * @description 项目ID
   */
  projectId?: string
  /**
   * @description 日期
   */
  date?: string
  /**
   * @description 分册等级1、2
   */
  level?: '1' | '2'
  /**
   * @description 扉页
   * @format binary
   */
  file?: Blob | Uint8Array
  /**
   * @description 封面文件名称
   */
  'cover.name'?: string
  /**
   * @description 封面文件路径
   */
  'cover.path'?: string
  /**
   * @description 目录文件名称
   */
  'catalog.name'?: string
  /**
   * @description 目录文件路径
   */
  'catalog.path'?: string
  /**
   * @description 分册文件名称
   */
  'volume.name'?: string
  /**
   * @description 分册文件路径
   */
  'volume.path'?: string
}
>>): Promise<MergeBaseVO>
  /**
   * @summary 查询分册
   * @tag 组册
   */
  get(url: '/merge/{id}/volume', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<Array<VolumeVO>>
  /**
   * @summary 新增分册
   * @tag 组册
   */
  post(url: '/merge/{id}/volume', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, VolumeDTO>, 'path'>): Promise<KvStringString>
  /**
   * @summary 下载分册表
   * @tag 组册
   */
  get(url: '/merge/{id}/volume/file', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<FileSigningUrl>
  /**
   * @summary 上传分册表
   * @tag 组册
   */
  post(url: '/merge/{id}/volume/file', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, TypedFormData<{
  /**
   * @format binary
   */
  file?: Blob | Uint8Array
}
>>, 'path'>): Promise<unknown>
  /**
   * @summary 状态变更
   * @tag 组册
   */
  post(url: '/merge/{id}/status', options: RequireKeys<SwaggerOptions<{id: string}, {status: '1' | '2' | '3' | '4' | '5' | '6'}, {}, unknown>, 'path' | 'query'>): Promise<unknown>
  /**
   * @summary 查询扉页
   * @tag 组册
   */
  get(url: '/merge/{id}/fly', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<FlyPageVO>
  /**
   * @summary 保存扉页
   * @tag 组册
   */
  post(url: '/merge/{id}/fly', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, Array<FlyOcrUserDTO>>, 'path'>): Promise<unknown>
  /**
   * @summary 扉页OCR
   * @tag 组册
   */
  post(url: '/merge/{id}/fly/ocr', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<FlyPageOcrVO>
  /**
   * @summary 查询封面
   * @tag 组册
   */
  get(url: '/merge/{id}/cover', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<FrontCoverVO>
  /**
   * @summary 更新封面
   * @tag 组册
   */
  post(url: '/merge/{id}/cover', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, TypedFormData<{
  /**
   * @description 日期
   */
  date?: string
  /**
   * @description 分册等级1、2
   */
  level?: '1' | '2'
  /**
   * @description 扉页
   * @format binary
   */
  file?: Blob | Uint8Array
  /**
   * @description 封面文件名称
   */
  'cover.name'?: string
  /**
   * @description 封面文件路径
   */
  'cover.path'?: string
  /**
   * @description 目录文件名称
   */
  'catalog.name'?: string
  /**
   * @description 目录文件路径
   */
  'catalog.path'?: string
  /**
   * @description 分册文件名称
   */
  'volume.name'?: string
  /**
   * @description 分册文件路径
   */
  'volume.path'?: string
}
>>, 'path'>): Promise<unknown>
  /**
   * @summary 发起签名
   * @tag 流程管理
   */
  post(url: '/flow/start/sing', options: RequireKeys<SwaggerOptions<{}, {achievementFileList: Array<AchievementFileDTO>, userList: Array<SignUserDTO>}, {}, unknown>, 'query'>): Promise<unknown>
  /**
   * @description 取得所以的分类
   * @summary 查询分类
   * @tag 数据字典
   */
  get(url: '/dict', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<Array<DictVO>>
  /**
   * @summary 新增
   * @tag 数据字典
   */
  post(url: '/dict', options?: SwaggerOptions<{}, {}, {}, DictDTO>): Promise<unknown>
  /**
   * @summary 排序
   * @tag 数据字典
   */
  post(url: '/dict/move', options?: SwaggerOptions<{}, {}, {}, MoveDTOString>): Promise<unknown>
  /**
   * @summary 登录
   * @tag 登录
   */
  post(url: '/auth/login', options?: SwaggerOptions<{}, {}, {}, LoginDTO>): Promise<TokenVO>
  /**
   * @summary 用户信息
   * @tag 用户管理
   */
  get(url: '/users/{id}', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<UserVO>
  /**
   * @summary 列表查询
   * @tag 模板管理
   */
  get(url: '/template/list', options?: SwaggerOptions<{}, {type?: number}, {}, unknown>): Promise<Array<TemplateBaseVO>>
  /**
   * @description 登录回调地址，携带授权码 code
   * @summary 登录回调
   * @tag 第三方登录
   */
  get(url: '/sso/callback/{type}/{key}', options: RequireKeys<SwaggerOptions<{type: 'oauth2' | 'cas', key: string}, {}, {}, unknown>, 'path'>): Promise<unknown>
  /**
   * @description 适配oauth2标准接入
   * @summary 选择登录方式
   * @tag 第三方登录
   */
  get(url: '/sso/authorize/{type}/{key}', options: RequireKeys<SwaggerOptions<{type: 'oauth2' | 'cas', key: string}, {}, {}, unknown>, 'path'>): Promise<string>
  /**
   * @summary 查询
   * @tag 组织机构
   */
  get(url: '/organization', options: RequireKeys<SwaggerOptions<{}, {type: Array<string>}, {}, unknown>, 'query'>): Promise<Array<DeptTreeVO>>
  /**
   * @description 获取当前用户的菜单信息
   * @summary 导航条
   * @tag 公共接口
   */
  get(url: '/navbar', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<Array<MenuTreeVO>>
  /**
   * @summary 分册信息
   * @tag 组册
   */
  get(url: '/merge/{id}/volume/info', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<Array<VolumeBaseVO>>
  /**
   * @summary 查询信息
   * @tag 组册
   */
  get(url: '/merge/{id}/info', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<MergeBaseVO>
  /**
   * @summary 查询目录
   * @tag 组册
   */
  get(url: '/merge/{id}/catalog', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<Array<CatalogVO>>
  /**
   * @summary 查询
   * @tag 组册管理
   */
  get(url: '/manage/merge/{id}', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<MergeRecordVO>
  /**
   * @summary 查询
   * @tag 日志管理
   */
  get(url: '/log/api', options: RequireKeys<SwaggerOptions<{}, {query: PageQueryKeywordQuery}, {}, unknown>, 'query'>): Promise<PageResultLogApiDO>
  /**
   * @summary 签名
   * @tag 流程管理
   */
  get(url: '/flow/{id}/sing', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<unknown>
  /**
   * @summary 获取当前待签署的位置坐标
   * @tag 流程管理
   */
  get(url: '/flow/{id}/point', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<Array<UserSignPointVO>>
  /**
   * @summary 我的待办
   * @tag 流程管理
   */
  get(url: '/flow/run', options: RequireKeys<SwaggerOptions<{}, {query: PageQueryFlowTaskQuery}, {}, unknown>, 'query'>): Promise<PageResultFlowTaskRunVO>
  /**
   * @summary 我的已办
   * @tag 流程管理
   */
  get(url: '/flow/history', options: RequireKeys<SwaggerOptions<{}, {query: PageQueryFlowTaskQuery}, {}, unknown>, 'query'>): Promise<PageResultFlowTaskHistoryVO>
  /**
   * @summary 文件查询
   * @tag 项目信息
   */
  get(url: '/directory/{id}/files', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<Array<DirectoryFileVO>>
  /**
   * @summary 下载文件
   * @tag 项目信息
   */
  get(url: '/directory/{id}/download', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<FileSigningUrl>
  /**
   * @summary 目录查询
   * @tag 项目信息
   */
  get(url: '/directory/{id}', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<Array<DirectoryVO>>
  /**
   * @summary 目录查询
   * @tag 项目信息
   */
  get(url: '/directory', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<Array<DirectoryVO>>
  /**
   * @summary 当前用户信息
   * @tag 公共接口
   */
  get(url: '/common/user/info', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<CurrentUserVO>
  /**
   * @summary 退出
   * @tag 登录
   */
  get(url: '/auth/logout', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<unknown>
  /**
   * @summary 删除分册文件
   * @tag 组册
   */
  delete(url: '/volume/{id}/files/{fileId}', options: RequireKeys<SwaggerOptions<{id: string, fileId: string}, {}, {}, unknown>, 'path'>): Promise<unknown>
  /**
   * @summary 删除
   * @tag 模板管理
   */
  delete(url: '/template/{id}', options: RequireKeys<SwaggerOptions<{id: string}, {}, {}, unknown>, 'path'>): Promise<unknown>
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
          // @ts-ignore
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

interface ISerializer {
  use(fn: Function): void;
}

export class QuerySerializer implements ISerializer {
  private __fn__: URLQuerySerializer = (query) => {
    const params = new URLSearchParams();
    for (const key in query) {
      const value = query[key];
      if (value !== undefined && value !== null) {
        if (Object.prototype.toString.call(value) === "[object Object]") {
          params.append(key, JSON.stringify(value));
        } else if (Array.isArray(value)) {
          value.forEach((v) => params.append(key, v));
        } else {
          params.append(key, value + "");
        }
      }
    }

    return params
  };

  use(fn: URLQuerySerializer) {
    this.__fn__ = fn;
  }
}

type URLQuerySerializer = (query: Record<string, string | number | any[] | Record<string, any>>) => URLSearchParams;

export interface IRuntime {
  readonly interceptors: { readonly request: IRequestInterceptor; readonly response: IResponseInterceptor };
  readonly serializer: { readonly query: QuerySerializer };
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

    this._querySerializer.use((query) => {
      const params = new URLSearchParams();

      for (const key in query) {
        const value = query[key];
        if (value !== undefined && value !== null) {
          if (Object.prototype.toString.call(value) === "[object Object]") {
            params.append(key, JSON.stringify(value));
          } else if (Array.isArray(value)) {
            value.forEach((v) => params.append(key, v));
          } else {
            params.append(key, value + "");
          }
        }
      }

      return params;
    });
  }

  private _requestInterceptor = new RequestInterceptor();
  private _responseInterceptor = new ResponseInterceptor();
  private _querySerializer = new QuerySerializer();

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

  public get serializer() {
    const self = this;

    return {
      get query() {
        return self._querySerializer;
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
      // @ts-expect-error ignore
      const params = this.serializer.query.__fn__(config.query);

      url.search = params.toString();
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
export const api = new Runtime("http://localhost", "/api") as unknown as IClient