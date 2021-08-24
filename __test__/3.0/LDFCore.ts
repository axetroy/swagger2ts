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

export type AccountType = 0 | 1 | 2 | -1 | undefined

export type PlatformEnum = 0 | 1 | 2 | 3 | 4 | 5 | undefined

/**
 * @description 登录模型
 */
export interface LoginModel {
  clientId?: string | null /* 客户端 */
  userName?: string | null /* 用户名 */
  password?: string | null /* 密码 */
  accountType?: AccountType
  platform?: PlatformEnum
  pictureId?: string | null /* 验证码图片编号 */
  code?: string | null /* 验证码 */
}

/**
 * @description 用户登录返回信息Dto
 */
export interface LoginUserOutput {
  userId?: string | null /* 用户Id */
  userName?: string | null /* 用户名称 */
  realName?: string | null /* 姓名（昵称） */
}

export interface LoginUserOutputAuthResut {
  error?: string | null
  access_token?: string | null
  expires_in?: number
  token_type?: string | null
  refresh_token?: string | null
  error_description?: string | null
  user?: LoginUserOutput
}

export interface LoginUserOutputAuthResutIResultModel {
  data?: LoginUserOutputAuthResut
}

export interface SpaLoginModel {
  userName?: string | null
  password?: string | null
  returnUrl?: string | null
}

export interface IResultModel {
  successful?: boolean
  code?: number
  msg?: string | null
}

/**
 * @description 客户端枚举
 */
export type ClientEnums = 1 | 2 | undefined /* 客户端枚举 */

export interface MenuOutput {
  id?: string | null /* 标识 */
  name?: string | null /* 名称 */
  link?: string | null /* 链接、路由 */
  remarks?: string | null /* 备注 */
  show?: boolean /* 是否显示 */
  sort?: number /* 排序码 */
  target?: number /* 打开方式 */
  type?: number /* 菜单类型 */
  client?: ClientEnums
  icon?: string | null /* 图标 */
  children?: Array<MenuOutput> /* 子菜单 */
  component?: string | null /* 组件 */
  routeParams?: string | null /* 路由参数 */
}

/**
 * @description 角色Dto
 */
export interface RolesDto {
  id?: string | null /* 标识 */
  roleName?: string | null /* 角色名/组名 */
  code?: string | null /* 编码 */
  remarks?: string | null /* 备注 */
  sortId?: number /* 排序值 */
}

/**
 * @description 用户信息
 */
export interface InitAppUserInfoOutput {
  id?: string | null /* 主键 */
  userId?: string | null /* 用户编号 */
  userName?: string | null /* 用户名 */
  email?: string | null /* 邮箱 */
  phoneNumber?: string | null /* 手机号 */
  headPortraitCode?: string | null /* 头像url */
  realName?: string | null /* 真实姓名 */
  sex?: number /* 性别(1.男 2.女) */
  status?: number /* 状态 */
  contact?: string | null /* 办公电话 */
  rolesId?: Array<string | undefined> /* 角色id */
  rolesName?: Array<string | undefined> /* 角色id */
  userType?: number /* 用户类型 */
  idCard?: string | null /* 身份证号 */
  roles?: Array<RolesDto> /* 角色 */
  enterpriseName?: string | null /* 机构名称 */
}

/**
 * @description 初始化客户端返回Dto
 */
export interface InitAppOutput {
  menus?: Array<MenuOutput> /* 菜单 */
  buttons?: Array<string | undefined> /* 按钮权限点 */
  userInfo?: InitAppUserInfoOutput
}

export interface InitAppOutputIResultModel {
  data?: InitAppOutput
}

/**
 * @description APP版本Dto
 */
export interface AppVersionDto {
  id?: string | null /* Id */
  appId?: string | null /* app_id */
  describe?: string | null /* 更新描述 */
  fileCode?: string | null /* 文件编码 */
  showTips?: boolean /* 是否显示更新提示 */
  version?: string | null /* 版本号 */
  type?: number /* 类型（安卓/IOS） */
  creationTime?: string /* 版本更新时间（前端无需赋值） */
}

export interface AppVersionDtoPageList {
  page?: number
  pageSize?: number
  totalCount?: number
  order?: string | null
  list?: Array<AppVersionDto>
}

export interface AppVersionDtoPageListIResultModel {
  data?: AppVersionDtoPageList
}

/**
 * @description AreaListOutput
 */
export interface AreaListOutput {
  id?: string | null /* 编号 */
  name?: string | null /* 名称 */
  code?: string | null /* 编码 */
  parentId?: string | null /* 父级编号 */
  pinYin?: string | null /* 拼音简码 */
  level?: number /* 级数 */
  type?: boolean /* 启用 */
}

export interface AreaListOutputPageList {
  page?: number
  pageSize?: number
  totalCount?: number
  order?: string | null
  list?: Array<AreaListOutput>
}

export interface AreaListOutputPageListIResultModel {
  data?: AreaListOutputPageList
}

/**
 * @description 区域Dto
 */
export interface AreaDto {
  id?: string | null /* 编号 */
  code?: string | null /* 区域编码 */
  name?: string | null /* 区域名称 */
  enabled?: boolean /* 是否启用 */
  sortId?: number | null /* 排序号 */
  pinYin?: string | null /* 拼音简码 */
  fullPinYin?: string | null /* 拼音 */
  isLeaf?: boolean /* 是否叶子节点 */
  level?: number /* 级数 */
  parentId?: string | null /* 父编号 */
  path?: string | null /* 路径 */
  type?: boolean /* 是否启用 */
}

export interface RemoveModel {
  id?: string | null
  ids?: string | null
}

export interface StringTreeOptionResultModel {
  label?: string | null
  value?: string | null
  disabled?: boolean
  isLeaf?: boolean
  level?: number | null
  data?: any
  id?: string | null
  pid?: string | null
  children?: Array<StringTreeOptionResultModel>
  sortId?: number
}

export interface TreeOptionResultModel {
  label?: string | null
  value?: string | null
  disabled?: boolean
  isLeaf?: boolean
  level?: number | null
  data?: any
  id?: string | null
  pid?: string | null
  children?: Array<StringTreeOptionResultModel>
  sortId?: number
}

export interface TreeOptionResultModelListIResultModel {
  data?: Array<TreeOptionResultModel>
}

export interface StringOptionResultModel {
  label?: string | null
  value?: string | null
  disabled?: boolean
  data?: any
  sortId?: number
}

export interface StringOptionResultModelListIResultModel {
  data?: Array<StringOptionResultModel>
}

export interface AuditListOutput {
  id?: string | null
  route?: string | null
  routeSummary?: string | null
  url?: string | null
  method?: string | null
  statusCode?: number
  remoteIP?: string | null
  userId?: string | null
  userName?: string | null
  creationTime?: string
}

export interface AuditListOutputPageList {
  page?: number
  pageSize?: number
  totalCount?: number
  order?: string | null
  list?: Array<AuditListOutput>
}

export interface AuditListOutputPageListIResultModel {
  data?: AuditListOutputPageList
}

/**
 * @description 数据字典Dto
 */
export interface DictionaryDto {
  id?: string | null /* 标识 */
  extend?: string | null /* 扩展 */
  name?: string | null /* 名称 */
  parentId?: string | null /* 父级id */
  remark?: string | null /* 备注 */
  sortId?: number | null /* 排序 */
  typeId?: string | null /* 数据字典类型 */
  value?: string | null /* 枚举值 */
  isEnable?: boolean /* 启用 */
}

/**
 * @description dictionary_type（数据字典类型）
 */
export interface DictionaryType {
  id?: string | null
  creationTime?: string
  creatorUserId?: string | null
  creatorUserName?: string | null
  lastModificationTime?: string
  lastModifierUserId?: string | null
  lastModifierUserName?: string | null
  isDeleted?: boolean
  code?: string | null /* 唯一编码 */
  name?: string | null /* 名称 */
  dictionarys?: Array<Dictionary>
}

/**
 * @description dictionary（数据字典）
 */
export interface Dictionary {
  id?: string | null
  creationTime?: string
  creatorUserId?: string | null
  creatorUserName?: string | null
  lastModificationTime?: string
  lastModifierUserId?: string | null
  lastModifierUserName?: string | null
  isDeleted?: boolean
  typeId?: string | null /* 数据字典类型 */
  isEnable?: boolean /* 启用 */
  parentId?: string | null /* 父级Id */
  extend?: string | null /* 扩展 */
  name?: string | null /* 名称 */
  remark?: string | null /* 备注 */
  sortId?: number | null /* 排序 */
  value?: string | null /* 枚举值 */
  pDictionary?: Dictionary
  dictionaryType?: DictionaryType
  dictionarys?: Array<Dictionary>
}

export interface DictionaryIResultModel {
  data?: Dictionary
}

export interface DictionaryDtoPageList {
  page?: number
  pageSize?: number
  totalCount?: number
  order?: string | null
  list?: Array<DictionaryDto>
}

export interface DictionaryDtoPageListIResultModel {
  data?: DictionaryDtoPageList
}

export interface StringRemoveModel {
  id?: string | null
  ids?: string | null
}

export interface DictionaryListIResultModel {
  data?: Array<Dictionary>
}

export interface StringTreeOptionResultModelDto {
  label?: string | null
  value?: string | null
  disabled?: boolean
  isLeaf?: boolean
  level?: number | null
  data?: any
  id?: string | null
  pid?: string | null
  children?: Array<StringTreeOptionResultModelDto> /* 重写隐藏父类Children */
  sortId?: number
  extend?: string | null /* 扩展 */
}

export interface StringTreeOptionResultModelDtoListIResultModel {
  data?: Array<StringTreeOptionResultModelDto>
}

/**
 * @description 数据字典类型Dto
 */
export interface DictionaryTypeDto {
  id?: string | null /* 标识 */
  code?: string | null /* 唯一编码 */
  name?: string | null /* 名称 */
}

export interface DictionaryTypeIResultModel {
  data?: DictionaryType
}

export interface DictionaryTypeDtoPageList {
  page?: number
  pageSize?: number
  totalCount?: number
  order?: string | null
  list?: Array<DictionaryTypeDto>
}

export interface DictionaryTypeDtoPageListIResultModel {
  data?: DictionaryTypeDtoPageList
}

/**
 * @description 企业(enterprise)分页列表输出模型
 */
export interface EnterpriseListOutput {
  id?: string | null /* 机构标识 */
  areaCode?: string | null /* 行政区代码 */
  areaName?: string | null /* 行政区名称 */
  code?: string | null /* 机构编码 */
  contactNumber?: string | null /* 联系人电话 */
  contactPerson?: string | null /* 联系人 */
  isEnabled?: boolean /* 是否启用 */
  legalRepresentative?: string | null /* 法人代表 */
  legalRepresentativeNumber?: string | null /* 法人代表电话 */
  level?: number /* 级数 */
  name?: string | null /* 机构名称 */
  path?: string | null /* 路径 */
  pathText?: string | null /* 中文全路径 */
  pinYin?: string | null /* 拼音简码 */
  simpleName?: string | null /* 机构简称(用于上报部级数据展示名称) */
  sortId?: number /* 排序号 */
  type?: number /* 企业类型(1:企业, 2:个人) */
}

export interface EnterpriseListOutputPageList {
  page?: number
  pageSize?: number
  totalCount?: number
  order?: string | null
  list?: Array<EnterpriseListOutput>
}

export interface EnterpriseListOutputPageListIResultModel {
  data?: EnterpriseListOutputPageList
}

/**
 * @description 企业(enterprise)输出模型
 */
export interface EnterpriseOutput {
  id?: string | null /* 机构标识 */
  areaCode?: string | null /* 行政区代码 */
  areaName?: string | null /* 行政区名称 */
  code?: string | null /* 机构编码 */
  contactNumber?: string | null /* 联系人电话 */
  contactPerson?: string | null /* 联系人 */
  isEnabled?: boolean /* 是否启用 */
  legalRepresentative?: string | null /* 法人代表 */
  legalRepresentativeNumber?: string | null /* 法人代表电话 */
  level?: number /* 级数 */
  name?: string | null /* 机构名称 */
  path?: string | null /* 路径 */
  pathText?: string | null /* 中文全路径 */
  pinYin?: string | null /* 拼音简码 */
  simpleName?: string | null /* 机构简称(用于上报部级数据展示名称) */
  sortId?: number /* 排序号 */
  type?: number /* 企业类型(1:企业, 2:个人) */
}

export interface EnterpriseOutputIResultModel {
  data?: EnterpriseOutput
}

/**
 * @description 企业(enterprise)输入模型
 */
export interface EnterpriseInput {
  id?: string | null /* 机构标识 */
  parentId?: string | null /* 父级Id */
  areaCode?: string | null /* 行政区代码 */
  areaName?: string | null /* 行政区名称 */
  code?: string | null /* 机构编码 */
  contactNumber?: string | null /* 联系人电话 */
  contactPerson?: string | null /* 联系人 */
  isEnabled?: boolean /* 是否启用 */
  legalRepresentative?: string | null /* 法人代表 */
  legalRepresentativeNumber?: string | null /* 法人代表电话 */
  name?: string | null /* 机构名称 */
  sortId?: number /* 排序号 */
  type?: number /* 企业类型(1:企业, 2:个人) */
}

/**
 * @description 枚举
 */
export type FaqCategoryOutputType = 0 | 1 | undefined /* 枚举 */

/**
 * @description 帮助分类分页列表输出模型
 */
export interface FaqCategoryTreeOutput {
  id?: string | null /* 编号 */
  parentId?: string | null /* 父编号 */
  icon?: string | null /* 图标 */
  name?: string | null /* 名称 */
  path?: string | null /* 路径 */
  remarks?: string | null /* 备注 */
  sort?: number /* 排序码 */
  type?: FaqCategoryOutputType
  children?: Array<FaqCategoryTreeOutput> /* 子级 */
}

export interface FaqCategoryTreeOutputListIResultModel {
  data?: Array<FaqCategoryTreeOutput>
}

/**
 * @description 帮助分类输出模型
 */
export interface FaqCategoryOutput {
  id?: string | null /* 编号 */
  parentId?: string | null /* 父编号 */
  icon?: string | null /* 图标 */
  name?: string | null /* 名称 */
  path?: string | null /* 路径 */
  remarks?: string | null /* 备注 */
  sort?: number /* 排序码 */
}

export interface FaqCategoryOutputIResultModel {
  data?: FaqCategoryOutput
}

/**
 * @description 帮助分类输入模型
 */
export interface FaqCategoryInput {
  id?: string | null /* 编号 */
  parentId?: string | null /* 父编号 */
  icon?: string | null /* 图标 */
  name?: string | null /* 名称 */
  path?: string | null /* 路径 */
  remarks?: string | null /* 备注 */
  sort?: number /* 排序码 */
}

/**
 * @description 帮助内容分页列表输出模型
 */
export interface FaqContentListOutput {
  id?: string | null /* 标识 */
  categoryId?: string | null /* 分类标识 */
  content?: string | null /* 内容 */
  readingQuantity?: number /* 阅读量 */
  remarks?: string | null /* 备注 */
  sort?: number /* 排序码 */
  title?: string | null /* 标题 */
}

export interface FaqContentListOutputPageList {
  page?: number
  pageSize?: number
  totalCount?: number
  order?: string | null
  list?: Array<FaqContentListOutput>
}

export interface FaqContentListOutputPageListIResultModel {
  data?: FaqContentListOutputPageList
}

/**
 * @description 帮助内容输出模型
 */
export interface FaqContentOutput {
  id?: string | null /* 标识 */
  categoryId?: string | null /* 分类标识 */
  content?: string | null /* 内容 */
  readingQuantity?: number /* 阅读量 */
  remarks?: string | null /* 备注 */
  sort?: number /* 排序码 */
  title?: string | null /* 标题 */
}

export interface FaqContentOutputIResultModel {
  data?: FaqContentOutput
}

/**
 * @description 帮助内容输入模型
 */
export interface FaqContentInput {
  id?: string | null /* 标识 */
  categoryId?: string | null /* 分类标识 */
  content?: string | null /* 内容 */
  readingQuantity?: number /* 阅读量 */
  remarks?: string | null /* 备注 */
  sort?: number /* 排序码 */
  title?: string | null /* 标题 */
}

/**
 * @description LoginLogListOutput
 */
export interface LoginLogListOutput {
  id?: string | null /* Id */
  ip?: string | null /* 登录IP */
  browser?: string | null /* 浏览器 */
  os?: string | null /* 操作系统 */
  device?: string | null /* 设备 */
  elapsedMilliseconds?: number /* 耗时（毫秒） */
  status?: boolean /* 登录状态（true成功，false失败） */
  msg?: string | null /* 返回消息 */
  userName?: string | null /* 用户名 */
  creationTime?: string /* 创建时间 */
  realName?: string | null /* 姓名（昵称） */
}

export interface LoginLogListOutputPageList {
  page?: number
  pageSize?: number
  totalCount?: number
  order?: string | null
  list?: Array<LoginLogListOutput>
}

export interface LoginLogListOutputPageListIResultModel {
  data?: LoginLogListOutputPageList
}

export interface MenuInput {
  id?: string | null /* 标识 */
  parentId?: string | null /* 父级Id */
  icon?: string | null /* 图标 */
  iconColor?: string | null /* 图表颜色 */
  link?: string | null /* 链接、路由 */
  moduleCode?: string | null /* 所属模块 */
  name?: string | null /* 名称 */
  remarks?: string | null /* 备注 */
  routeParams?: string | null /* 路由参数 */
  show?: boolean /* 是否显示 */
  sort?: number /* 排序码 */
  target?: number /* 打开方式 */
  client?: ClientEnums
  component?: string | null /* 组件 */
}

/**
 * @description 接口(api)
 */
export interface Api {
  id?: string | null
  parentId?: string | null /* 父级id(默认为"") */
  code?: string | null /* 权限点 */
  enable?: boolean /* 启用(默认为启用) */
  httpMethod?: string | null /* 请求方式 */
  level?: number /* 层级(从1开始) */
  name?: string | null /* 资源名称 */
  path?: string | null /* id全路径 */
  pathText?: string | null /* 中文全路径 */
  remarks?: string | null /* 备注 */
}

/**
 * @description 企业(enterprise)
 */
export interface Enterprise {
  id?: string | null
  creationTime?: string
  creatorUserId?: string | null
  creatorUserName?: string | null
  lastModificationTime?: string
  lastModifierUserId?: string | null
  lastModifierUserName?: string | null
  isDeleted?: boolean
  parentId?: string | null /* 父级编号 */
  areaCode?: string | null /* 行政区代码 */
  areaName?: string | null /* 行政区名称 */
  code?: string | null /* 机构编码 */
  contactNumber?: string | null /* 联系人电话 */
  contactPerson?: string | null /* 联系人 */
  isEnabled?: boolean /* 是否启用 */
  legalRepresentative?: string | null /* 法人代表 */
  legalRepresentativeNumber?: string | null /* 法人代表电话 */
  level?: number /* 级数 */
  name?: string | null /* 机构名称 */
  path?: string | null /* 路径 */
  pathText?: string | null /* 中文全路径 */
  pinYin?: string | null /* 拼音简码 */
  simpleName?: string | null /* 机构简称(用于上报部级数据展示名称) */
  sortId?: number /* 排序号 */
  type?: number /* 企业类型(1:企业, 2:个人) */
  organizations?: Array<Organizations>
  userInfos?: Array<UserInfo>
}

/**
 * @description 组织架构(organizations)
 */
export interface Organizations {
  id?: string | null
  creationTime?: string
  creatorUserId?: string | null
  creatorUserName?: string | null
  lastModificationTime?: string
  lastModifierUserId?: string | null
  lastModifierUserName?: string | null
  isDeleted?: boolean
  enterpriseId?: string | null /* 所属企业id */
  leader?: string | null /* 负责人 */
  level?: number /* 级别 */
  name?: string | null /* 名称 */
  parentId?: string | null /* 父级编号 */
  path?: string | null /* 路径 */
  pathText?: string | null /* 中文路径 */
  sortId?: number /* 排序号 */
  enterprise?: Enterprise
  userInfos?: Array<UserInfo>
}

export interface ClaimsIdentity {
  authenticationType?: string | null
  isAuthenticated?: boolean
  actor?: ClaimsIdentity
  bootstrapContext?: any
  claims?: Array<Claim>
  label?: string | null
  name?: string | null
  nameClaimType?: string | null
  roleClaimType?: string | null
}

export interface Claim {
  issuer?: string | null
  originalIssuer?: string | null
  properties?: {}
  subject?: ClaimsIdentity
  type?: string | null
  value?: string | null
  valueType?: string | null
}

/**
 * @description 用户(user_info)
 */
export interface UserInfo {
  id?: string | null
  creationTime?: string
  creatorUserId?: string | null
  creatorUserName?: string | null
  lastModificationTime?: string
  lastModifierUserId?: string | null
  lastModifierUserName?: string | null
  isDeleted?: boolean
  enterpriseId?: string | null /* 企业Id */
  orgId?: string | null /* 组织架构Id */
  email?: string | null /* 邮箱 */
  headPortraitCode?: string | null /* 头像 */
  idCard?: string | null /* 身份证 */
  passwordHash?: string | null /* 密码加密字符 */
  passwordSalt?: string | null /* 密码加密盐值 */
  phoneNumber?: string | null /* 手机号 */
  realName?: string | null /* 真实姓名 */
  sex?: number /* 性别(1.男 2.女) */
  status?: number /* 状态 */
  type?: number /* 用户类型 */
  userName?: string | null /* 用户名 */
  organizations?: Organizations
  enterprise?: Enterprise
  roles?: Array<Roles>
  claims?: Array<Claim> /* 用户身份声明 */
}

/**
 * @description 角色(roles)
 */
export interface Roles {
  id?: string | null
  creationTime?: string
  creatorUserId?: string | null
  creatorUserName?: string | null
  lastModificationTime?: string
  lastModifierUserId?: string | null
  lastModifierUserName?: string | null
  isDeleted?: boolean
  code?: string | null /* 枚举编码 */
  remarks?: string | null /* 备注 */
  roleName?: string | null /* 角色名/组名 */
  sortId?: number /* 排序值 */
  menus?: Array<Menu> /* Menus导航属性 */
  users?: Array<UserInfo> /* Users导航属性 */
  buttons?: Array<Button> /* Buttons导航属性 */
}

/**
 * @description 按钮(button)
 */
export interface Button {
  id?: string | null
  creationTime?: string
  creatorUserId?: string | null
  creatorUserName?: string | null
  lastModificationTime?: string
  lastModifierUserId?: string | null
  lastModifierUserName?: string | null
  isDeleted?: boolean
  menuId?: string | null /* 菜单编号 */
  code?: string | null /* 权限点 */
  enable?: boolean /* 启用(默认为启用) */
  name?: string | null /* 资源名称 */
  remarks?: string | null /* 备注 */
  menu?: Menu
  apis?: Array<Api>
  roles?: Array<Roles>
}

/**
 * @description 菜单(menu)
 */
export interface Menu {
  id?: string | null
  creationTime?: string
  creatorUserId?: string | null
  creatorUserName?: string | null
  lastModificationTime?: string
  lastModifierUserId?: string | null
  lastModifierUserName?: string | null
  isDeleted?: boolean
  client?: ClientEnums
  icon?: string | null /* 图标 */
  iconColor?: string | null /* 图表颜色 */
  parentId?: string | null /* 父级编号 */
  level?: number /* 等级 */
  link?: string | null /* 链接、路由 */
  moduleCode?: string | null /* 所属模块 */
  name?: string | null /* 名称 */
  path?: string | null /* 路径 */
  remarks?: string | null /* 备注 */
  routeParams?: string | null /* 路由参数 */
  show?: boolean /* 是否显示 */
  sort?: number /* 排序码 */
  target?: number /* 打开方式（1：当前页面，2：新页面） */
  type?: number /* 菜单类型 */
  component?: string | null /* 组件 */
  buttons?: Array<Button>
  menus?: Array<Menu>
  roles?: Array<Roles>
}

export interface MenuIResultModel {
  data?: Menu
}

export interface MenuPageList {
  page?: number
  pageSize?: number
  totalCount?: number
  order?: string | null
  list?: Array<Menu>
}

export interface MenuPageListIResultModel {
  data?: MenuPageList
}

export interface MenuOutputListIResultModel {
  data?: Array<MenuOutput>
}

/**
 * @description 按钮信息
 */
export interface ButtonInfoDto {
  id?: string | null /* 菜单唯一标识 */
  name?: string | null /* 名称 */
  code?: string | null /* 权限点 */
  remarks?: string | null /* 备注 */
  apisId?: Array<string | undefined> /* 按钮关联的接口 */
}

/**
 * @description 按钮配置Dto
 */
export interface ButtonDto {
  menuId?: string | null /* 菜单Id */
  buttons?: Array<ButtonInfoDto> /* 按钮信息 */
}

export interface ButtonDtoIResultModel {
  data?: ButtonDto
}

/**
 * @description 消息发送类型
 */
export type NotifySendType = 1 | 2 | 3 | undefined /* 消息发送类型 */

/**
 * @description 通知分页返回模型
 */
export interface NotifyListOutput {
  id?: string | null /* 通知标识 */
  title?: string | null /* 通知标题 */
  desc?: string | null /* 通知描述 */
  payload?: any /* 通知数据 */
  readed?: boolean /* 是否已读(true:已读) */
  creationTime?: string /* 通知创建时间 */
  type?: string | null /* 通知类型 */
  typeLabel?: string | null /* 类型文本 */
  sendType?: NotifySendType
}

export interface NotifyListOutputPageList {
  page?: number
  pageSize?: number
  totalCount?: number
  order?: string | null
  list?: Array<NotifyListOutput>
}

export interface NotifyListOutputPageListIResultModel {
  data?: NotifyListOutputPageList
}

export interface NotifyCountOutput {
  count?: number /* 未读数量 */
}

export interface NotifyCountOutputIResultModel {
  data?: NotifyCountOutput
}

/**
 * @description 已读
 */
export interface NotifyReadedInput {
  ids?: Array<string | undefined> /* 已读Ids */
}

/**
 * @description 通知添加模型
 */
export interface StringNotifyInput {
  sendType?: NotifySendType
  type?: string | null /* 类型 */
  title?: string | null /* 标题 */
  desc?: string | null /* 描述 */
  payload?: string | null /* 数据 */
  userIds?: Array<string | undefined> /* 用户Id(发送类型为用户时必填) */
  roldCodes?: Array<string | undefined> /* 用户角色(发送类型为角色时必填) */
}

export interface OpenApiTreeOutput {
  id?: string | null /* 标识 */
  name?: string | null /* 名称 */
  level?: number /* 层级，从1开始 */
  children?: Array<OpenApiTreeOutput> /* 子级 */
}

export interface OpenApiTreeOutputListIResultModel {
  data?: Array<OpenApiTreeOutput>
}

/**
 * @description 组织架构(organizations)分页列表输出模型
 */
export interface OrganizationsListOutput {
  id?: string | null /* 标识 */
  enterpriseId?: string | null /* 所属企业id */
  leader?: string | null /* 负责人 */
  level?: number /* 级别 */
  name?: string | null /* 名称 */
  parentId?: string | null /* 父级编号 */
  path?: string | null /* 路径 */
  pathText?: string | null /* 中文路径 */
  sortId?: number /* 排序号 */
}

export interface OrganizationsListOutputPageList {
  page?: number
  pageSize?: number
  totalCount?: number
  order?: string | null
  list?: Array<OrganizationsListOutput>
}

export interface OrganizationsListOutputPageListIResultModel {
  data?: OrganizationsListOutputPageList
}

/**
 * @description 组织架构(organizations)输出模型
 */
export interface OrganizationsOutput {
  id?: string | null /* 标识 */
  enterpriseId?: string | null /* 所属企业id */
  leader?: string | null /* 负责人 */
  level?: number /* 级别 */
  name?: string | null /* 名称 */
  parentId?: string | null /* 父级编号 */
  path?: string | null /* 路径 */
  pathText?: string | null /* 中文路径 */
  sortId?: number /* 排序号 */
}

export interface OrganizationsOutputIResultModel {
  data?: OrganizationsOutput
}

/**
 * @description 组织架构(organizations)输入模型
 */
export interface OrganizationsInput {
  id?: string | null /* 标识 */
  enterpriseId?: string | null /* 所属企业id */
  leader?: string | null /* 负责人 */
  name?: string | null /* 名称 */
  parentId?: string | null /* 父级编号 */
  sortId?: number /* 排序号 */
}

/**
 * @description 组织架构级联选项参数
 */
export interface OrganizationTreeOptionsQuery {
  path?: string | null /* 路径 */
}

/**
 * @description 角色(roles)分页列表输出模型
 */
export interface RolesListOutput {
  id?: string | null /* 角色标识 */
  code?: string | null /* 枚举编码 */
  remarks?: string | null /* 备注 */
  roleName?: string | null /* 角色名/组名 */
  sortId?: number /* 排序值 */
}

export interface RolesListOutputPageList {
  page?: number
  pageSize?: number
  totalCount?: number
  order?: string | null
  list?: Array<RolesListOutput>
}

export interface RolesListOutputPageListIResultModel {
  data?: RolesListOutputPageList
}

export interface RolesDtoIResultModel {
  data?: RolesDto
}

/**
 * @description 设置菜单Dto
 */
export interface SetMenusDto {
  roleId?: string | null /* 角色Id */
  menus?: string | null /* 菜单Ids */
}

/**
 * @description 角色按钮
 */
export interface RoleButtonDto {
  id?: string | null /* 标识 */
  name?: string | null /* 名称 */
  checked?: boolean /* 是否选中 */
}

export interface RoleMenuTreeOutput {
  id?: string | null /* 标识 */
  name?: string | null /* 名称 */
  checked?: boolean /* 是否选中 */
  children?: Array<RoleMenuTreeOutput> /* 子级 */
  buttons?: Array<RoleButtonDto> /* 按钮 */
}

export interface RoleMenuTreeOutputListIResultModel {
  data?: Array<RoleMenuTreeOutput>
}

/**
 * @description 示例
 */
export interface SampleOutput {
  id?: string | null
}

export interface SampleOutputPageList {
  page?: number
  pageSize?: number
  totalCount?: number
  order?: string | null
  list?: Array<SampleOutput>
}

export interface SampleOutputPageListIResultModel {
  data?: SampleOutputPageList
}

/**
 * @description 用户列表Dto
 */
export interface UserInfoListOutput {
  id?: string | null /* 主键 */
  userName?: string | null /* 用户名 */
  email?: string | null /* 邮箱 */
  phoneNumber?: string | null /* 手机号 */
  headPortraitCode?: string | null /* 头像url */
  realName?: string | null /* 真实姓名 */
  sex?: number /* 性别(1.男 2.女) */
  status?: number /* 状态 */
  contact?: string | null /* 办公电话 */
  rolesId?: Array<string | undefined> /* 角色id */
  rolesName?: Array<string | undefined> /* 角色id */
  orgId?: string | null /* 企业部门主键 */
  orgName?: string | null /* 企业部门名称 */
  enterpriseId?: string | null /* 企业主键 */
  type?: number /* 员工类型 */
  userType?: number /* 用户类型 */
  idCard?: string | null /* 身份证号 */
}

export interface UserInfoListOutputPageList {
  page?: number
  pageSize?: number
  totalCount?: number
  order?: string | null
  list?: Array<UserInfoListOutput>
}

export interface UserInfoListOutputPageListIResultModel {
  data?: UserInfoListOutputPageList
}

/**
 * @description 用户信息
 */
export interface UserInfoOutput {
  id?: string | null /* 主键 */
  userId?: string | null /* 用户编号 */
  userName?: string | null /* 用户名 */
  email?: string | null /* 邮箱 */
  phoneNumber?: string | null /* 手机号 */
  headPortraitCode?: string | null /* 头像url */
  realName?: string | null /* 真实姓名 */
  sex?: number /* 性别(1.男 2.女) */
  status?: number /* 状态 */
  contact?: string | null /* 办公电话 */
  rolesId?: Array<string | undefined> /* 角色id */
  rolesName?: Array<string | undefined> /* 角色id */
  userType?: number /* 用户类型 */
  idCard?: string | null /* 身份证号 */
  roles?: Array<RolesDto> /* 角色 */
}

export interface UserInfoOutputIResultModel {
  data?: UserInfoOutput
}

/**
 * @description 用户信息
 */
export interface UserInfoInput {
  id?: string | null /* 标识 */
  enterpriseId?: string | null /* 企业Id(可空) */
  orgId?: string | null /* 组织架构Id(可空) */
  email?: string | null /* 邮箱 */
  headPortraitCode?: string | null /* 头像 */
  idCard?: string | null /* 身份证 */
  phoneNumber?: string | null /* 手机号 */
  realName?: string | null /* 真实姓名 */
  sex?: number /* 性别(1.男 2.女) */
  status?: number /* 状态 */
  type?: number /* 用户类型 */
  userName?: string | null /* 用户名 */
  password?: string | null /* 密码 */
  rolesId?: Array<string | undefined> /* 角色Ids */
}

/**
 * @description 修改密码Dto
 */
export interface UsersPwdDto {
  oldPassword?: string | null /* 旧密码 */
  password?: string | null /* 新密码 */
  rePassword?: string | null /* 确认新密码 */
}

/**
 * @description 重置密码Dto
 */
export interface ResetPwdDto {
  id?: string | null /* 用户Id */
  password?: string | null /* 重置后密码 */
  rePassword?: string | null /* 重置后密码确认 */
}

/**
 * @description UpdateUserBasicInfoInput
 */
export interface UpdateUserBasicInfoInput {
  headPortraitCode?: string | null /* 文件Code */
  realName?: string | null /* 姓名 */
  email?: string | null /* 电子邮件 */
}

export interface SwaggerApi{
  /**
   * @tag Account
   * @summary 登录(密码模式)
   */
  post(url: "/api/Account/LoginWithPwd", options: {body: LoginModel} & IDefaultOptions): Promise<LoginUserOutputAuthResutIResultModel>

  /**
   * @tag Account
   * @summary 登录
   */
  post(url: "/api/Account/Login", options: {body: SpaLoginModel} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Account
   * @summary 退出登录
   */
  get(url: "/api/Account/Logout", options: {query: {
    logoutId?: string | null
  }} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Account
   * @summary Ids登录错误信息
   */
  get(url: "/api/Account/Error", options: {query: {
    errorId?: string | null
  }} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag App
   * @summary 获取初始化数据
   */
  get(url: "/api/App/Init", options: {query: {
    client?: ClientEnums
  }} & IDefaultOptions): Promise<InitAppOutputIResultModel>

  /**
   * @tag AppVersion
   * @summary 获取最新版本信息
   */
  get(url: "/api/AppVersion/GetVersion", options: {query: {
    type?: number
  }} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag AppVersion
   * @summary 增加版本信息
   */
  post(url: "/api/AppVersion/Add", options: {body: AppVersionDto} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag AppVersion
   * @summary 获取版本记录
   */
  get(url: "/api/AppVersion/GetVersionRecords", options: {query: {
    Type?: number /* 类型 */
    Keyword?: string | null
    Page?: number
    PageSize?: number
    TotalCount?: number
    Order?: string | null
  }} & IDefaultOptions): Promise<AppVersionDtoPageListIResultModel>

  /**
   * @tag Area
   * @summary 分页查询
   */
  get(url: "/api/Area/Page", options: {query: {
    Level?: number | null /* 层级 */
    ParentCode?: string | null /* 父级编号 */
    ParentId?: string | null /* 父级编号 */
    Code?: string | null /* 编码 */
    Name?: string | null /* 名称 */
    Keyword?: string | null
    Page?: number
    PageSize?: number
    TotalCount?: number
    Order?: string | null
  }} & IDefaultOptions): Promise<AreaListOutputPageListIResultModel>

  /**
   * @tag Area
   * @summary 添加区域
   */
  post(url: "/api/Area/Add", options: {body: AreaDto} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Area
   * @summary 编辑区域
   */
  post(url: "/api/Area/Edit", options: {body: AreaDto} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Area
   * @summary 删除区域
   */
  post(url: "/api/Area/Remove", options: {body: RemoveModel} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Area
   * @summary 级联下拉选项
   */
  get(url: "/api/Area/TreeOptions", options: {query: {
    Level?: number | null /* 层级(>=) 从1开始 */
    LevelFull?: number | null /* 层级(全等) 从1开始 */
    ParentCode?: string | null /* 父级编号 */
    AreaCode?: string | null /* 区域编码(startWith) */
    AreaCodeFull?: string | null /* 区域编码(全等) */
  }} & IDefaultOptions): Promise<TreeOptionResultModelListIResultModel>

  /**
   * @tag Area
   * @summary 特定级别的下拉选项
   */
  get(url: "/api/Area/OptionsBySpecificLevel", options: {query: {
    Level?: number | null /* 层级(>=) 从1开始 */
    LevelFull?: number | null /* 层级(全等) 从1开始 */
    ParentCode?: string | null /* 父级编号 */
    AreaCode?: string | null /* 区域编码(startWith) */
    AreaCodeFull?: string | null /* 区域编码(全等) */
  }} & IDefaultOptions): Promise<StringOptionResultModelListIResultModel>

  /**
   * @tag Area
   * @summary 格式化区域数据
   */
  post(url: "/api/Area/DataFormat", options: {} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Audit
   * @summary 列表查询
   */
  get(url: "/api/Audit/Page", options: {query: {
    FilterNoUserLog?: boolean
    Route?: string | null
    RouteSummary?: string | null
    Url?: string | null
    Method?: string | null
    StatusCode?: number | null
    RemoteIP?: string | null
    UserId?: string | null
    UserName?: string | null
    CreationTimeStart?: string | null
    CreationTimeEnd?: string | null
    Keyword?: string | null
    Page?: number
    PageSize?: number
    TotalCount?: number
    Order?: string | null
  }} & IDefaultOptions): Promise<AuditListOutputPageListIResultModel>

  /**
   * @tag Dictionary
   * @summary 新增
   */
  post(url: "/api/Dictionary/Add", options: {body: DictionaryDto} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Dictionary
   * @summary 详情
   */
  get(url: "/api/Dictionary/Detail", options: {query: {
    id?: string | null
  }} & IDefaultOptions): Promise<DictionaryIResultModel>

  /**
   * @tag Dictionary
   * @summary 修改
   */
  post(url: "/api/Dictionary/Edit", options: {body: DictionaryDto} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Dictionary
   * @summary 分页查询
   */
  get(url: "/api/Dictionary/Page", options: {query: {
    Keyword?: string | null
    Page?: number
    PageSize?: number
    TotalCount?: number
    Order?: string | null
  }} & IDefaultOptions): Promise<DictionaryDtoPageListIResultModel>

  /**
   * @tag Dictionary
   * @summary 移除
   */
  post(url: "/api/Dictionary/Remove", options: {body: StringRemoveModel} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Dictionary
   * @summary 根据类型树形获取
   */
  get(url: "/api/Dictionary/ListByType", options: {query: {
    typeId?: string | null
  }} & IDefaultOptions): Promise<DictionaryListIResultModel>

  /**
   * @tag Dictionary
   * @summary 根据数据字典类型code获取对应下拉选项
   */
  get(url: "/api/Dictionary/OptionsByCode", options: {query: {
    code?: string | null
    isLoadAll?: boolean /* false只加载启用的，true加载所有 */
  }} & IDefaultOptions): Promise<StringOptionResultModelListIResultModel>

  /**
   * @tag Dictionary
   * @summary 根据数据字典类型code获取对应下拉选项（多个）
   */
  get(url: "/api/Dictionary/OptionsListByCodes", options: {query: {
    codes?: string | null
    isLoadAll?: boolean /* false只加载启用的，true加载所有 */
  }} & IDefaultOptions): Promise<StringOptionResultModelListIResultModel>

  /**
   * @tag Dictionary
   * @summary 根据类型树形获取(树形)
   */
  get(url: "/api/Dictionary/TreeOptionsByCode", options: {query: {
    code?: string | null
    isLoadAll?: boolean /* false只加载启用的，true加载所有 */
  }} & IDefaultOptions): Promise<StringTreeOptionResultModelDtoListIResultModel>

  /**
   * @tag DictionaryType
   * @summary 新增
   */
  post(url: "/api/DictionaryType/Add", options: {body: DictionaryTypeDto} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag DictionaryType
   * @summary 详情
   */
  get(url: "/api/DictionaryType/Detail", options: {query: {
    id?: string | null
  }} & IDefaultOptions): Promise<DictionaryTypeIResultModel>

  /**
   * @tag DictionaryType
   * @summary 修改
   */
  post(url: "/api/DictionaryType/Edit", options: {body: DictionaryTypeDto} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag DictionaryType
   * @summary 分页查询
   */
  get(url: "/api/DictionaryType/Page", options: {query: {
    Keyword?: string | null
    Page?: number
    PageSize?: number
    TotalCount?: number
    Order?: string | null
  }} & IDefaultOptions): Promise<DictionaryTypeDtoPageListIResultModel>

  /**
   * @tag DictionaryType
   * @summary 移除
   */
  post(url: "/api/DictionaryType/Remove", options: {body: StringRemoveModel} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag DictionaryType
   * @summary 下拉选择
   */
  get(url: "/api/DictionaryType/Options", options: {} & IDefaultOptions): Promise<StringOptionResultModelListIResultModel>

  /**
   * @tag Enterprise
   * @summary 分页列表
   */
  get(url: "/api/Enterprise/Page", options: {query: {
    Id?: string | null /* 机构标识 */
    Code?: string | null /* 机构编码 */
    Level?: number | null /* 级数 */
    Name?: string | null /* 机构名称 */
    Path?: string | null /* 路径 */
    Keyword?: string | null
    Page?: number
    PageSize?: number
    TotalCount?: number
    Order?: string | null
  }} & IDefaultOptions): Promise<EnterpriseListOutputPageListIResultModel>

  /**
   * @tag Enterprise
   * @summary 详情
   */
  get(url: "/api/Enterprise/Detail", options: {query: {
    id?: string | null
  }} & IDefaultOptions): Promise<EnterpriseOutputIResultModel>

  /**
   * @tag Enterprise
   * @summary 添加
   */
  post(url: "/api/Enterprise/Add", options: {body: EnterpriseInput} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Enterprise
   * @summary 编辑
   */
  post(url: "/api/Enterprise/Edit", options: {body: EnterpriseInput} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Enterprise
   * @summary 删除
   */
  post(url: "/api/Enterprise/Remove", options: {body: StringRemoveModel} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Enterprise
   * @summary 级联下拉选项
   */
  get(url: "/api/Enterprise/TreeOptions", options: {query: {
    Path?: string | null /* 路径 */
  }} & IDefaultOptions): Promise<TreeOptionResultModelListIResultModel>

  /**
   * @tag FaqCategory
   * @summary 获取所有树形帮助分类
   */
  get(url: "/api/FaqCategory/Tree", options: {query: {
    ParentId?: string | null /* 父编号 */
    Name?: string | null /* 名称 */
    Keyword?: string | null
    Page?: number
    PageSize?: number
    TotalCount?: number
    Order?: string | null
  }} & IDefaultOptions): Promise<FaqCategoryTreeOutputListIResultModel>

  /**
   * @tag FaqCategory
   * @summary 获取所有树形帮助分类并附带内容
   */
  get(url: "/api/FaqCategory/TreeAdnContnet", options: {} & IDefaultOptions): Promise<FaqCategoryTreeOutputListIResultModel>

  /**
   * @tag FaqCategory
   * @summary 详情
   */
  get(url: "/api/FaqCategory/Detail", options: {query: {
    id?: string | null
  }} & IDefaultOptions): Promise<FaqCategoryOutputIResultModel>

  /**
   * @tag FaqCategory
   * @summary 添加
   */
  post(url: "/api/FaqCategory/Add", options: {body: FaqCategoryInput} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag FaqCategory
   * @summary 编辑
   */
  post(url: "/api/FaqCategory/Edit", options: {body: FaqCategoryInput} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag FaqCategory
   * @summary 删除
   */
  post(url: "/api/FaqCategory/Remove", options: {body: StringRemoveModel} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag FaqContent
   * @summary 分页列表
   */
  get(url: "/api/FaqContent/Page", options: {query: {
    CategoryId?: string | null /* 所属分类 */
    Keyword?: string | null
    Page?: number
    PageSize?: number
    TotalCount?: number
    Order?: string | null
  }} & IDefaultOptions): Promise<FaqContentListOutputPageListIResultModel>

  /**
   * @tag FaqContent
   * @summary 详情
   */
  get(url: "/api/FaqContent/Detail", options: {query: {
    id?: string | null
    isView?: boolean
  }} & IDefaultOptions): Promise<FaqContentOutputIResultModel>

  /**
   * @tag FaqContent
   * @summary 添加
   */
  post(url: "/api/FaqContent/Add", options: {body: FaqContentInput} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag FaqContent
   * @summary 编辑
   */
  post(url: "/api/FaqContent/Edit", options: {body: FaqContentInput} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag FaqContent
   * @summary 删除
   */
  post(url: "/api/FaqContent/Remove", options: {body: StringRemoveModel} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag File
   * @summary 文件上传
   */
  post(url: "/api/File/Upload", options: {body: RuntimeForm<{
    module?: string | null
  }>} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag File
   * @summary 图片上传
   */
  post(url: "/api/File/UploadPic", options: {body: RuntimeForm<{
    module?: string | null
    width?: number | null
    height?: number | null
  }>} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag File
   * @summary 获取文件(返回byte[])
   */
  get(url: "/api/File/Get", options: {query: {
    code?: string | null
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag File
   * @summary 下载文件(返回Stream)
   */
  get(url: "/api/File/Download", options: {query: {
    code?: string | null
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag File
   */
  get(url: "/api/File/DownloadByStream", options: {query: {
    code?: string | null
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag File
   * @summary 删除文件
   */
  post(url: "/api/File/Remove", options: {body: RuntimeForm<{
    code?: string | null
  }>} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag LoginLog
   * @summary 列表
   */
  get(url: "/api/LoginLog/Page", options: {query: {
    UserName?: string | null /* 用户名 */
    Keyword?: string | null
    Page?: number
    PageSize?: number
    TotalCount?: number
    Order?: string | null
  }} & IDefaultOptions): Promise<LoginLogListOutputPageListIResultModel>

  /**
   * @tag Menu
   * @summary 新增
   */
  post(url: "/api/Menu/Add", options: {body: MenuInput} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Menu
   * @summary 修改
   */
  post(url: "/api/Menu/Edit", options: {body: MenuInput} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Menu
   * @summary 详情
   */
  get(url: "/api/Menu/Detail", options: {query: {
    id?: string | null
  }} & IDefaultOptions): Promise<MenuIResultModel>

  /**
   * @tag Menu
   * @summary 分页
   */
  get(url: "/api/Menu/Page", options: {query: {
    Keyword?: string | null
    Page?: number
    PageSize?: number
    TotalCount?: number
    Order?: string | null
  }} & IDefaultOptions): Promise<MenuPageListIResultModel>

  /**
   * @tag Menu
   * @summary 获取所有树形菜单
   */
  get(url: "/api/Menu/Tree", options: {query: {
    client?: ClientEnums
  }} & IDefaultOptions): Promise<MenuOutputListIResultModel>

  /**
   * @tag Menu
   * @summary 获取角色树形菜单
   */
  get(url: "/api/Menu/LoadTreeByRole", options: {query: {
    roleId?: string | null
  }} & IDefaultOptions): Promise<MenuOutputListIResultModel>

  /**
   * @tag Menu
   * @summary 获取菜单按钮
   */
  get(url: "/api/Menu/Buttons", options: {query: {
    menuId?: string | null
  }} & IDefaultOptions): Promise<ButtonDtoIResultModel>

  /**
   * @tag Menu
   * @summary 配置菜单按钮
   */
  post(url: "/api/Menu/SetButton", options: {body: ButtonDto} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Menu
   * @summary 级联下拉选项
   */
  get(url: "/api/Menu/TreeOptions", options: {} & IDefaultOptions): Promise<TreeOptionResultModelListIResultModel>

  /**
   * @tag Menu
   * @summary 删除
   */
  post(url: "/api/Menu/Remove", options: {body: StringRemoveModel} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Notify
   * @summary 获取消息类型
   */
  get(url: "/api/Notify/Options", options: {} & IDefaultOptions): Promise<StringOptionResultModelListIResultModel>

  /**
   * @tag Notify
   * @summary 获取通知列表
   */
  get(url: "/api/Notify/Page", options: {query: {
    Type?: string | null /* 请求参数类型 */
    Readed?: boolean | null /* 是否已读 */
    Keyword?: string | null
    Page?: number
    PageSize?: number
    TotalCount?: number
    Order?: string | null
  }} & IDefaultOptions): Promise<NotifyListOutputPageListIResultModel>

  /**
   * @tag Notify
   * @summary 获取通知列表(信息预览框使用)
   */
  get(url: "/api/Notify/PageLite", options: {query: {
    Type?: string | null /* 请求参数类型 */
    Readed?: boolean | null /* 是否已读 */
    Keyword?: string | null
    Page?: number
    PageSize?: number
    TotalCount?: number
    Order?: string | null
  }} & IDefaultOptions): Promise<NotifyListOutputPageListIResultModel>

  /**
   * @tag Notify
   * @summary 获取未读消息数量
   */
  get(url: "/api/Notify/UnReadedCount", options: {} & IDefaultOptions): Promise<NotifyCountOutputIResultModel>

  /**
   * @tag Notify
   * @summary 通知已读
   */
  post(url: "/api/Notify/Readed", options: {body: NotifyReadedInput} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Notify
   * @summary 全部已读
   */
  post(url: "/api/Notify/ReadAll", options: {} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Notify
   * @summary 删除消息(参数传到Ids属性,多个用,分开)
   */
  post(url: "/api/Notify/Remove", options: {body: StringRemoveModel} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Notify
   * @summary 删除所有消息
   */
  post(url: "/api/Notify/RemoveAll", options: {} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Notify
   * @summary 添加消息，外部调用（泛型参数报404）
   */
  post(url: "/api/Notify/Addmsg", options: {body: StringNotifyInput} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag OpenApi
   * @summary 同步本系统API信息到数据库
   */
  post(url: "/api/OpenApi/SyncCurrent", options: {} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag OpenApi
   * @summary 同步所有系统API信息(未实现)
   */
  post(url: "/api/OpenApi/SyncAll", options: {} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag OpenApi
   * @summary 同步API信息到数据库
   */
  post(url: "/api/OpenApi/AddOrUpdate", options: {query: {
    data?: string | null
  }} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag OpenApi
   * @summary 树形下拉选项
   */
  get(url: "/api/OpenApi/TreeOptions", options: {} & IDefaultOptions): Promise<OpenApiTreeOutputListIResultModel>

  /**
   * @tag Organizations
   * @summary 分页列表
   */
  get(url: "/api/Organizations/Page", options: {query: {
    EnterpriseId?: string | null /* 所属企业id */
    Name?: string | null /* 名称 */
    Path?: string | null /* 路径 */
    Keyword?: string | null
    Page?: number
    PageSize?: number
    TotalCount?: number
    Order?: string | null
  }} & IDefaultOptions): Promise<OrganizationsListOutputPageListIResultModel>

  /**
   * @tag Organizations
   * @summary 详情
   */
  get(url: "/api/Organizations/Detail", options: {query: {
    id?: string | null
  }} & IDefaultOptions): Promise<OrganizationsOutputIResultModel>

  /**
   * @tag Organizations
   * @summary 添加
   */
  post(url: "/api/Organizations/Add", options: {body: OrganizationsInput} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Organizations
   * @summary 编辑
   */
  post(url: "/api/Organizations/Edit", options: {body: OrganizationsInput} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Organizations
   * @summary 删除
   */
  post(url: "/api/Organizations/Remove", options: {body: StringRemoveModel} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Organizations
   * @summary 级联下拉选项
   */
  get(url: "/api/Organizations/TreeOptions", options: {body: OrganizationTreeOptionsQuery} & IDefaultOptions): Promise<TreeOptionResultModelListIResultModel>

  /**
   * @tag Roles
   * @summary 分页查询
   */
  get(url: "/api/Roles/Page", options: {query: {
    RoleName?: string | null /* 角色名称 */
    Code?: string | null /* 角色Code(编码) */
    Keyword?: string | null
    Page?: number
    PageSize?: number
    TotalCount?: number
    Order?: string | null
  }} & IDefaultOptions): Promise<RolesListOutputPageListIResultModel>

  /**
   * @tag Roles
   * @summary 获取单个信息
   */
  get(url: "/api/Roles/Detail", options: {query: {
    id?: string | null
  }} & IDefaultOptions): Promise<RolesDtoIResultModel>

  /**
   * @tag Roles
   * @summary 新增
   */
  post(url: "/api/Roles/Add", options: {body: RolesDto} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Roles
   * @summary 修改
   */
  post(url: "/api/Roles/Edit", options: {body: RolesDto} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Roles
   * @summary 移除
   */
  post(url: "/api/Roles/Remove", options: {body: StringRemoveModel} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Roles
   * @summary 下拉选择
   */
  get(url: "/api/Roles/Options", options: {} & IDefaultOptions): Promise<StringOptionResultModelListIResultModel>

  /**
   * @tag Roles
   * @summary 设置菜单按钮
   */
  post(url: "/api/Roles/SetMenus", options: {body: SetMenusDto} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Roles
   * @summary 获取菜单按钮
   */
  get(url: "/api/Roles/GetMenus", options: {query: {
    roleId?: string | null
  }} & IDefaultOptions): Promise<RoleMenuTreeOutputListIResultModel>

  /**
   * @tag Sample
   * @summary 测试
   */
  get(url: "/api/Sample/Test", options: {} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Sample
   * @summary 输出日志
   */
  get(url: "/api/Sample/LogInfo", options: {} & IDefaultOptions): Promise<null>

  /**
   * @tag Sample
   */
  get(url: "/api/Sample/ResolveApis", options: {} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Sample
   * @summary 更新
   */
  post(url: "/api/Sample/Update", options: {} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Sample
   * @summary Page New
   */
  get(url: "/api/Sample/PageNew", options: {query: {
    Keyword?: string | null
    Page?: number
    PageSize?: number
    TotalCount?: number
    Order?: string | null
  }} & IDefaultOptions): Promise<SampleOutputPageListIResultModel>

  /**
   * @tag Sample
   * @summary Page
   */
  get(url: "/api/Sample/Page", options: {query: {
    Keyword?: string | null
    Page?: number
    PageSize?: number
    TotalCount?: number
    Order?: string | null
  }} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Sample
   */
  get(url: "/api/Sample/TestGlobalExceptionFilter", options: {} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Sample
   * @summary 获取登录信息
   */
  get(url: "/api/Sample/LoginInfo", options: {} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Test
   * @summary 缓存测试
   */
  get(url: "/api/Test/TestCache", options: {} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Test
   * @summary 随便测试
   */
  get(url: "/api/Test/Test2", options: {} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Test
   * @summary Aes测试
   */
  get(url: "/api/Test/TestAes", options: {query: {
    text?: string | null
  }} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Test
   * @summary 时间返回格式测试
   */
  get(url: "/api/Test/TestDateTime", options: {query: {
    time?: string
  }} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Test
   * @summary 测试获取用户EID
   */
  get(url: "/api/Test/GetLoginEid", options: {} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Test
   * @summary 测试异常抛出
   */
  get(url: "/api/Test/ThrowEx", options: {} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Test
   * @summary OpenApiPolicy
   */
  get(url: "/api/Test/OpenApiPolicy", options: {} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag UserInfo
   * @summary 列表
   */
  get(url: "/api/UserInfo/Page", options: {query: {
    UserName?: string | null /* 账户 */
    RealName?: string | null /* 姓名 */
    PhoneNumber?: string | null /* 手机号 */
    EnterpriseId?: string | null /* 机构Id */
    Keyword?: string | null
    Page?: number
    PageSize?: number
    TotalCount?: number
    Order?: string | null
  }} & IDefaultOptions): Promise<UserInfoListOutputPageListIResultModel>

  /**
   * @tag UserInfo
   * @summary 获取单个信息
   */
  get(url: "/api/UserInfo/Detail", options: {query: {
    id?: string | null
  }} & IDefaultOptions): Promise<UserInfoOutputIResultModel>

  /**
   * @tag UserInfo
   * @summary 添加
   */
  post(url: "/api/UserInfo/Add", options: {body: UserInfoInput} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag UserInfo
   * @summary 编辑
   */
  post(url: "/api/UserInfo/Edit", options: {body: UserInfoInput} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag UserInfo
   * @summary 修改密码
   */
  post(url: "/api/UserInfo/UpdatePwd", options: {body: UsersPwdDto} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag UserInfo
   * @summary 重置密码
   */
  post(url: "/api/UserInfo/ResetPwd", options: {body: ResetPwdDto} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag UserInfo
   * @summary 基本信息修改
   */
  post(url: "/api/UserInfo/UpdateUserBasicInfo", options: {body: UpdateUserBasicInfoInput} & IDefaultOptions): Promise<IResultModel>

  /**
   * @tag Websocket
   * @summary Socket预连接
   */
  get(url: "/api/Websocket/PreConnect", options: {} & IDefaultOptions): Promise<IResultModel>
}

// swagger runtime. generate by swagger2ts
interface IRuntimeHeaderMapString {
  [key: string]: string;
}

interface IRuntimeHeaderConfig {
  common: IRuntimeHeaderMapString;
  [method: string]: IRuntimeHeaderMapString;
}

interface IRuntimeRequestCommonOptions extends Omit<RequestInit, "body" | "method"> {
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

export interface IRuntime {
  get interceptors(): { readonly request: IRequestInterceptor; readonly response: IResponseInterceptor };
  get defaults(): { readonly timeout: number; readonly headers: IRuntimeHeaderConfig };
  get baseURL(): string;
  get domain(): string;
  get prefix(): string;
  request<T>(config: IRuntimeRequestOptions): Promise<T>;
}

export class Runtime implements IRuntime {
  constructor(private _domain: string, private _prefix: string) {
    const methods = ["get", "post", "delete", "put", "head", "options", "trace", "patch"];

    for (const method of methods) {
      // @ts-expect-error ignore
      this[method] = (url: string, config: IRuntimeRequestCommonOptions) => {
        return this.request({
          method: method.toUpperCase(),
          url,
          ...config,
        });
      };
    }
  }

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
      } as IRuntimeHeaderConfig,
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
}

export const defaultApi = new Runtime("http://localhost", "") as unknown as (SwaggerApi & IRuntime)