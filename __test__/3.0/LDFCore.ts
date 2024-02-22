// Generate by swagger2ts
export type AccountType = 0 | 1 | 2 | -1

export type PlatformEnum = 0 | 1 | 2 | 3 | 4 | 5

/**
 * @description 登录模型
 */
export interface LoginModel {
  /**
   * @description 客户端
   */
  clientId?: string | null
  /**
   * @description 用户名
   */
  userName?: string | null
  /**
   * @description 密码
   */
  password?: string | null
  accountType?: AccountType
  platform?: PlatformEnum
  /**
   * @description 验证码图片编号
   */
  pictureId?: string | null
  /**
   * @description 验证码
   */
  code?: string | null
}

/**
 * @description 用户登录返回信息Dto
 */
export interface LoginUserOutput {
  /**
   * @description 用户Id
   */
  userId?: string | null
  /**
   * @description 用户名称
   */
  userName?: string | null
  /**
   * @description 姓名（昵称）
   */
  realName?: string | null
}

export interface LoginUserOutputAuthResut {
  error?: string | null
  access_token?: string | null
  /**
   * @format int32
   */
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
  /**
   * @format int32
   */
  code?: number
  msg?: string | null
}

/**
 * @description 客户端枚举
 */
export type ClientEnums = 1 | 2

export interface MenuOutput {
  /**
   * @description 标识
   */
  id?: string | null
  /**
   * @description 名称
   */
  name?: string | null
  /**
   * @description 链接、路由
   */
  link?: string | null
  /**
   * @description 备注
   */
  remarks?: string | null
  /**
   * @description 是否显示
   */
  show?: boolean
  /**
   * @description 排序码
   * @format int32
   */
  sort?: number
  /**
   * @description 打开方式
   * @format int32
   */
  target?: number
  /**
   * @description 菜单类型
   * @format int32
   */
  type?: number
  client?: ClientEnums
  /**
   * @description 图标
   */
  icon?: string | null
  /**
   * @description 子菜单
   */
  children?: Array<MenuOutput> | null
  /**
   * @description 组件
   */
  component?: string | null
  /**
   * @description 路由参数
   */
  routeParams?: string | null
}

/**
 * @description 角色Dto
 */
export interface RolesDto {
  /**
   * @description 标识
   */
  id?: string | null
  /**
   * @description 角色名/组名
   */
  roleName?: string | null
  /**
   * @description 编码
   */
  code?: string | null
  /**
   * @description 备注
   */
  remarks?: string | null
  /**
   * @description 排序值
   * @format int32
   */
  sortId?: number
}

/**
 * @description 用户信息
 */
export interface InitAppUserInfoOutput {
  /**
   * @description 主键
   */
  id?: string | null
  /**
   * @description 用户编号
   */
  userId?: string | null
  /**
   * @description 用户名
   */
  userName?: string | null
  /**
   * @description 邮箱
   */
  email?: string | null
  /**
   * @description 手机号
   */
  phoneNumber?: string | null
  /**
   * @description 头像url
   */
  headPortraitCode?: string | null
  /**
   * @description 真实姓名
   */
  realName?: string | null
  /**
   * @description 性别(1.男 2.女)
   * @format int32
   */
  sex?: number
  /**
   * @description 状态
   * @format int32
   */
  status?: number
  /**
   * @description 办公电话
   */
  contact?: string | null
  /**
   * @description 角色id
   */
  rolesId?: Array<string> | null
  /**
   * @description 角色id
   */
  rolesName?: Array<string> | null
  /**
   * @description 用户类型
   * @format int32
   */
  userType?: number
  /**
   * @description 身份证号
   */
  idCard?: string | null
  /**
   * @description 角色
   */
  roles?: Array<RolesDto> | null
  /**
   * @description 机构名称
   */
  enterpriseName?: string | null
}

/**
 * @description 初始化客户端返回Dto
 */
export interface InitAppOutput {
  /**
   * @description 菜单
   */
  menus?: Array<MenuOutput> | null
  /**
   * @description 按钮权限点
   */
  buttons?: Array<string> | null
  userInfo?: InitAppUserInfoOutput
}

export interface InitAppOutputIResultModel {
  data?: InitAppOutput
}

/**
 * @description APP版本Dto
 */
export interface AppVersionDto {
  /**
   * @description Id
   */
  id?: string | null
  /**
   * @description app_id
   */
  appId?: string | null
  /**
   * @description 更新描述
   */
  describe?: string | null
  /**
   * @description 文件编码
   */
  fileCode?: string | null
  /**
   * @description 是否显示更新提示
   */
  showTips?: boolean
  /**
   * @description 版本号
   */
  version?: string | null
  /**
   * @description 类型（安卓/IOS）
   * @format int32
   */
  type?: number
  /**
   * @description 版本更新时间（前端无需赋值）
   * @format date-time
   */
  creationTime?: string
}

export interface AppVersionDtoPageList {
  /**
   * @format int32
   */
  page?: number
  /**
   * @format int32
   */
  pageSize?: number
  /**
   * @format int64
   */
  totalCount?: number
  order?: string | null
  list?: Array<AppVersionDto> | null
}

export interface AppVersionDtoPageListIResultModel {
  data?: AppVersionDtoPageList
}

/**
 * @description AreaListOutput
 */
export interface AreaListOutput {
  /**
   * @description 编号
   */
  id?: string | null
  /**
   * @description 名称
   */
  name?: string | null
  /**
   * @description 编码
   */
  code?: string | null
  /**
   * @description 父级编号
   */
  parentId?: string | null
  /**
   * @description 拼音简码
   */
  pinYin?: string | null
  /**
   * @description 级数
   * @format int32
   */
  level?: number
  /**
   * @description 启用
   */
  type?: boolean
}

export interface AreaListOutputPageList {
  /**
   * @format int32
   */
  page?: number
  /**
   * @format int32
   */
  pageSize?: number
  /**
   * @format int64
   */
  totalCount?: number
  order?: string | null
  list?: Array<AreaListOutput> | null
}

export interface AreaListOutputPageListIResultModel {
  data?: AreaListOutputPageList
}

/**
 * @description 区域Dto
 */
export interface AreaDto {
  /**
   * @description 编号
   */
  id?: string | null
  /**
   * @description 区域编码
   */
  code?: string | null
  /**
   * @description 区域名称
   */
  name?: string | null
  /**
   * @description 是否启用
   */
  enabled?: boolean
  /**
   * @description 排序号
   * @format int32
   */
  sortId?: number | null
  /**
   * @description 拼音简码
   */
  pinYin?: string | null
  /**
   * @description 拼音
   */
  fullPinYin?: string | null
  /**
   * @description 是否叶子节点
   */
  isLeaf?: boolean
  /**
   * @description 级数
   * @format int32
   */
  level?: number
  /**
   * @description 父编号
   */
  parentId?: string | null
  /**
   * @description 路径
   */
  path?: string | null
  /**
   * @description 是否启用
   */
  type?: boolean
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
  /**
   * @format int32
   */
  level?: number | null
  data?: unknown | null
  id?: string | null
  pid?: string | null
  children?: Array<StringTreeOptionResultModel> | null
  /**
   * @format int32
   */
  sortId?: number
}

export interface TreeOptionResultModel {
  label?: string | null
  value?: string | null
  disabled?: boolean
  isLeaf?: boolean
  /**
   * @format int32
   */
  level?: number | null
  data?: unknown | null
  id?: string | null
  pid?: string | null
  children?: Array<StringTreeOptionResultModel> | null
  /**
   * @format int32
   */
  sortId?: number
}

export interface TreeOptionResultModelListIResultModel {
  data?: Array<TreeOptionResultModel> | null
}

export interface StringOptionResultModel {
  label?: string | null
  value?: string | null
  disabled?: boolean
  data?: unknown | null
  /**
   * @format int32
   */
  sortId?: number
}

export interface StringOptionResultModelListIResultModel {
  data?: Array<StringOptionResultModel> | null
}

export interface AuditListOutput {
  id?: string | null
  route?: string | null
  routeSummary?: string | null
  url?: string | null
  method?: string | null
  /**
   * @format int32
   */
  statusCode?: number
  remoteIP?: string | null
  userId?: string | null
  userName?: string | null
  /**
   * @format date-time
   */
  creationTime?: string
}

export interface AuditListOutputPageList {
  /**
   * @format int32
   */
  page?: number
  /**
   * @format int32
   */
  pageSize?: number
  /**
   * @format int64
   */
  totalCount?: number
  order?: string | null
  list?: Array<AuditListOutput> | null
}

export interface AuditListOutputPageListIResultModel {
  data?: AuditListOutputPageList
}

/**
 * @description 数据字典Dto
 */
export interface DictionaryDto {
  /**
   * @description 标识
   */
  id?: string | null
  /**
   * @description 扩展
   */
  extend?: string | null
  /**
   * @description 名称
   */
  name?: string | null
  /**
   * @description 父级id
   */
  parentId?: string | null
  /**
   * @description 备注
   */
  remark?: string | null
  /**
   * @description 排序
   * @format int32
   */
  sortId?: number | null
  /**
   * @description 数据字典类型
   */
  typeId?: string | null
  /**
   * @description 枚举值
   */
  value?: string | null
  /**
   * @description 启用
   */
  isEnable?: boolean
}

/**
 * @description dictionary_type（数据字典类型）
 */
export interface DictionaryType {
  id?: string | null
  /**
   * @format date-time
   */
  creationTime?: string
  creatorUserId?: string | null
  creatorUserName?: string | null
  /**
   * @format date-time
   */
  lastModificationTime?: string
  lastModifierUserId?: string | null
  lastModifierUserName?: string | null
  isDeleted?: boolean
  /**
   * @description 唯一编码
   */
  code?: string | null
  /**
   * @description 名称
   */
  name?: string | null
  dictionarys?: Array<Dictionary> | null
}

/**
 * @description dictionary（数据字典）
 */
export interface Dictionary {
  id?: string | null
  /**
   * @format date-time
   */
  creationTime?: string
  creatorUserId?: string | null
  creatorUserName?: string | null
  /**
   * @format date-time
   */
  lastModificationTime?: string
  lastModifierUserId?: string | null
  lastModifierUserName?: string | null
  isDeleted?: boolean
  /**
   * @description 数据字典类型
   */
  typeId?: string | null
  /**
   * @description 启用
   */
  isEnable?: boolean
  /**
   * @description 父级Id
   */
  parentId?: string | null
  /**
   * @description 扩展
   */
  extend?: string | null
  /**
   * @description 名称
   */
  name?: string | null
  /**
   * @description 备注
   */
  remark?: string | null
  /**
   * @description 排序
   * @format int32
   */
  sortId?: number | null
  /**
   * @description 枚举值
   */
  value?: string | null
  pDictionary?: Dictionary
  dictionaryType?: DictionaryType
  dictionarys?: Array<Dictionary> | null
}

export interface DictionaryIResultModel {
  data?: Dictionary
}

export interface DictionaryDtoPageList {
  /**
   * @format int32
   */
  page?: number
  /**
   * @format int32
   */
  pageSize?: number
  /**
   * @format int64
   */
  totalCount?: number
  order?: string | null
  list?: Array<DictionaryDto> | null
}

export interface DictionaryDtoPageListIResultModel {
  data?: DictionaryDtoPageList
}

export interface StringRemoveModel {
  id?: string | null
  ids?: string | null
}

export interface DictionaryListIResultModel {
  data?: Array<Dictionary> | null
}

export interface StringTreeOptionResultModelDto {
  label?: string | null
  value?: string | null
  disabled?: boolean
  isLeaf?: boolean
  /**
   * @format int32
   */
  level?: number | null
  data?: unknown | null
  id?: string | null
  pid?: string | null
  /**
   * @description 重写隐藏父类Children
   */
  children?: Array<StringTreeOptionResultModelDto> | null
  /**
   * @format int32
   */
  sortId?: number
  /**
   * @description 扩展
   */
  extend?: string | null
}

export interface StringTreeOptionResultModelDtoListIResultModel {
  data?: Array<StringTreeOptionResultModelDto> | null
}

/**
 * @description 数据字典类型Dto
 */
export interface DictionaryTypeDto {
  /**
   * @description 标识
   */
  id?: string | null
  /**
   * @description 唯一编码
   */
  code?: string | null
  /**
   * @description 名称
   */
  name?: string | null
}

export interface DictionaryTypeIResultModel {
  data?: DictionaryType
}

export interface DictionaryTypeDtoPageList {
  /**
   * @format int32
   */
  page?: number
  /**
   * @format int32
   */
  pageSize?: number
  /**
   * @format int64
   */
  totalCount?: number
  order?: string | null
  list?: Array<DictionaryTypeDto> | null
}

export interface DictionaryTypeDtoPageListIResultModel {
  data?: DictionaryTypeDtoPageList
}

/**
 * @description 企业(enterprise)分页列表输出模型
 */
export interface EnterpriseListOutput {
  /**
   * @description 机构标识
   */
  id?: string | null
  /**
   * @description 行政区代码
   */
  areaCode?: string | null
  /**
   * @description 行政区名称
   */
  areaName?: string | null
  /**
   * @description 机构编码
   */
  code?: string | null
  /**
   * @description 联系人电话
   */
  contactNumber?: string | null
  /**
   * @description 联系人
   */
  contactPerson?: string | null
  /**
   * @description 是否启用
   */
  isEnabled?: boolean
  /**
   * @description 法人代表
   */
  legalRepresentative?: string | null
  /**
   * @description 法人代表电话
   */
  legalRepresentativeNumber?: string | null
  /**
   * @description 级数
   * @format int32
   */
  level?: number
  /**
   * @description 机构名称
   */
  name?: string | null
  /**
   * @description 路径
   */
  path?: string | null
  /**
   * @description 中文全路径
   */
  pathText?: string | null
  /**
   * @description 拼音简码
   */
  pinYin?: string | null
  /**
   * @description 机构简称(用于上报部级数据展示名称)
   */
  simpleName?: string | null
  /**
   * @description 排序号
   * @format int32
   */
  sortId?: number
  /**
   * @description 企业类型(1:企业, 2:个人)
   * @format int32
   */
  type?: number
}

export interface EnterpriseListOutputPageList {
  /**
   * @format int32
   */
  page?: number
  /**
   * @format int32
   */
  pageSize?: number
  /**
   * @format int64
   */
  totalCount?: number
  order?: string | null
  list?: Array<EnterpriseListOutput> | null
}

export interface EnterpriseListOutputPageListIResultModel {
  data?: EnterpriseListOutputPageList
}

/**
 * @description 企业(enterprise)输出模型
 */
export interface EnterpriseOutput {
  /**
   * @description 机构标识
   */
  id?: string | null
  /**
   * @description 行政区代码
   */
  areaCode?: string | null
  /**
   * @description 行政区名称
   */
  areaName?: string | null
  /**
   * @description 机构编码
   */
  code?: string | null
  /**
   * @description 联系人电话
   */
  contactNumber?: string | null
  /**
   * @description 联系人
   */
  contactPerson?: string | null
  /**
   * @description 是否启用
   */
  isEnabled?: boolean
  /**
   * @description 法人代表
   */
  legalRepresentative?: string | null
  /**
   * @description 法人代表电话
   */
  legalRepresentativeNumber?: string | null
  /**
   * @description 级数
   * @format int32
   */
  level?: number
  /**
   * @description 机构名称
   */
  name?: string | null
  /**
   * @description 路径
   */
  path?: string | null
  /**
   * @description 中文全路径
   */
  pathText?: string | null
  /**
   * @description 拼音简码
   */
  pinYin?: string | null
  /**
   * @description 机构简称(用于上报部级数据展示名称)
   */
  simpleName?: string | null
  /**
   * @description 排序号
   * @format int32
   */
  sortId?: number
  /**
   * @description 企业类型(1:企业, 2:个人)
   * @format int32
   */
  type?: number
}

export interface EnterpriseOutputIResultModel {
  data?: EnterpriseOutput
}

/**
 * @description 企业(enterprise)输入模型
 */
export interface EnterpriseInput {
  /**
   * @description 机构标识
   */
  id?: string | null
  /**
   * @description 父级Id
   */
  parentId?: string | null
  /**
   * @description 行政区代码
   */
  areaCode?: string | null
  /**
   * @description 行政区名称
   */
  areaName?: string | null
  /**
   * @description 机构编码
   */
  code?: string | null
  /**
   * @description 联系人电话
   */
  contactNumber?: string | null
  /**
   * @description 联系人
   */
  contactPerson?: string | null
  /**
   * @description 是否启用
   */
  isEnabled?: boolean
  /**
   * @description 法人代表
   */
  legalRepresentative?: string | null
  /**
   * @description 法人代表电话
   */
  legalRepresentativeNumber?: string | null
  /**
   * @description 机构名称
   */
  name?: string | null
  /**
   * @description 排序号
   * @format int32
   */
  sortId?: number
  /**
   * @description 企业类型(1:企业, 2:个人)
   * @format int32
   */
  type?: number
}

/**
 * @description 枚举
 */
export type FaqCategoryOutputType = 0 | 1

/**
 * @description 帮助分类分页列表输出模型
 */
export interface FaqCategoryTreeOutput {
  /**
   * @description 编号
   */
  id?: string | null
  /**
   * @description 父编号
   */
  parentId?: string | null
  /**
   * @description 图标
   */
  icon?: string | null
  /**
   * @description 名称
   */
  name?: string | null
  /**
   * @description 路径
   */
  path?: string | null
  /**
   * @description 备注
   */
  remarks?: string | null
  /**
   * @description 排序码
   * @format int32
   */
  sort?: number
  type?: FaqCategoryOutputType
  /**
   * @description 子级
   */
  children?: Array<FaqCategoryTreeOutput> | null
}

export interface FaqCategoryTreeOutputListIResultModel {
  data?: Array<FaqCategoryTreeOutput> | null
}

/**
 * @description 帮助分类输出模型
 */
export interface FaqCategoryOutput {
  /**
   * @description 编号
   */
  id?: string | null
  /**
   * @description 父编号
   */
  parentId?: string | null
  /**
   * @description 图标
   */
  icon?: string | null
  /**
   * @description 名称
   */
  name?: string | null
  /**
   * @description 路径
   */
  path?: string | null
  /**
   * @description 备注
   */
  remarks?: string | null
  /**
   * @description 排序码
   * @format int32
   */
  sort?: number
}

export interface FaqCategoryOutputIResultModel {
  data?: FaqCategoryOutput
}

/**
 * @description 帮助分类输入模型
 */
export interface FaqCategoryInput {
  /**
   * @description 编号
   */
  id?: string | null
  /**
   * @description 父编号
   */
  parentId?: string | null
  /**
   * @description 图标
   */
  icon?: string | null
  /**
   * @description 名称
   */
  name?: string | null
  /**
   * @description 路径
   */
  path?: string | null
  /**
   * @description 备注
   */
  remarks?: string | null
  /**
   * @description 排序码
   * @format int32
   */
  sort?: number
}

/**
 * @description 帮助内容分页列表输出模型
 */
export interface FaqContentListOutput {
  /**
   * @description 标识
   */
  id?: string | null
  /**
   * @description 分类标识
   */
  categoryId?: string | null
  /**
   * @description 内容
   */
  content?: string | null
  /**
   * @description 阅读量
   * @format int32
   */
  readingQuantity?: number
  /**
   * @description 备注
   */
  remarks?: string | null
  /**
   * @description 排序码
   * @format int32
   */
  sort?: number
  /**
   * @description 标题
   */
  title?: string | null
}

export interface FaqContentListOutputPageList {
  /**
   * @format int32
   */
  page?: number
  /**
   * @format int32
   */
  pageSize?: number
  /**
   * @format int64
   */
  totalCount?: number
  order?: string | null
  list?: Array<FaqContentListOutput> | null
}

export interface FaqContentListOutputPageListIResultModel {
  data?: FaqContentListOutputPageList
}

/**
 * @description 帮助内容输出模型
 */
export interface FaqContentOutput {
  /**
   * @description 标识
   */
  id?: string | null
  /**
   * @description 分类标识
   */
  categoryId?: string | null
  /**
   * @description 内容
   */
  content?: string | null
  /**
   * @description 阅读量
   * @format int32
   */
  readingQuantity?: number
  /**
   * @description 备注
   */
  remarks?: string | null
  /**
   * @description 排序码
   * @format int32
   */
  sort?: number
  /**
   * @description 标题
   */
  title?: string | null
}

export interface FaqContentOutputIResultModel {
  data?: FaqContentOutput
}

/**
 * @description 帮助内容输入模型
 */
export interface FaqContentInput {
  /**
   * @description 标识
   */
  id?: string | null
  /**
   * @description 分类标识
   */
  categoryId?: string | null
  /**
   * @description 内容
   */
  content?: string | null
  /**
   * @description 阅读量
   * @format int32
   */
  readingQuantity?: number
  /**
   * @description 备注
   */
  remarks?: string | null
  /**
   * @description 排序码
   * @format int32
   */
  sort?: number
  /**
   * @description 标题
   */
  title?: string | null
}

/**
 * @description LoginLogListOutput
 */
export interface LoginLogListOutput {
  /**
   * @description Id
   */
  id?: string | null
  /**
   * @description 登录IP
   */
  ip?: string | null
  /**
   * @description 浏览器
   */
  browser?: string | null
  /**
   * @description 操作系统
   */
  os?: string | null
  /**
   * @description 设备
   */
  device?: string | null
  /**
   * @description 耗时（毫秒）
   * @format int64
   */
  elapsedMilliseconds?: number
  /**
   * @description 登录状态（true成功，false失败）
   */
  status?: boolean
  /**
   * @description 返回消息
   */
  msg?: string | null
  /**
   * @description 用户名
   */
  userName?: string | null
  /**
   * @description 创建时间
   * @format date-time
   */
  creationTime?: string
  /**
   * @description 姓名（昵称）
   */
  realName?: string | null
}

export interface LoginLogListOutputPageList {
  /**
   * @format int32
   */
  page?: number
  /**
   * @format int32
   */
  pageSize?: number
  /**
   * @format int64
   */
  totalCount?: number
  order?: string | null
  list?: Array<LoginLogListOutput> | null
}

export interface LoginLogListOutputPageListIResultModel {
  data?: LoginLogListOutputPageList
}

export interface MenuInput {
  /**
   * @description 标识
   */
  id?: string | null
  /**
   * @description 父级Id
   */
  parentId?: string | null
  /**
   * @description 图标
   */
  icon?: string | null
  /**
   * @description 图表颜色
   */
  iconColor?: string | null
  /**
   * @description 链接、路由
   */
  link?: string | null
  /**
   * @description 所属模块
   */
  moduleCode?: string | null
  /**
   * @description 名称
   */
  name?: string | null
  /**
   * @description 备注
   */
  remarks?: string | null
  /**
   * @description 路由参数
   */
  routeParams?: string | null
  /**
   * @description 是否显示
   */
  show?: boolean
  /**
   * @description 排序码
   * @format int32
   */
  sort?: number
  /**
   * @description 打开方式
   * @format int32
   */
  target?: number
  client?: ClientEnums
  /**
   * @description 组件
   */
  component?: string | null
}

/**
 * @description 接口(api)
 */
export interface Api {
  id?: string | null
  /**
   * @description 父级id(默认为"")
   */
  parentId?: string | null
  /**
   * @description 权限点
   */
  code?: string | null
  /**
   * @description 启用(默认为启用)
   */
  enable?: boolean
  /**
   * @description 请求方式
   */
  httpMethod?: string | null
  /**
   * @description 层级(从1开始)
   * @format int32
   */
  level?: number
  /**
   * @description 资源名称
   */
  name?: string | null
  /**
   * @description id全路径
   */
  path?: string | null
  /**
   * @description 中文全路径
   */
  pathText?: string | null
  /**
   * @description 备注
   */
  remarks?: string | null
}

/**
 * @description 企业(enterprise)
 */
export interface Enterprise {
  id?: string | null
  /**
   * @format date-time
   */
  creationTime?: string
  creatorUserId?: string | null
  creatorUserName?: string | null
  /**
   * @format date-time
   */
  lastModificationTime?: string
  lastModifierUserId?: string | null
  lastModifierUserName?: string | null
  isDeleted?: boolean
  /**
   * @description 父级编号
   */
  parentId?: string | null
  /**
   * @description 行政区代码
   */
  areaCode?: string | null
  /**
   * @description 行政区名称
   */
  areaName?: string | null
  /**
   * @description 机构编码
   */
  code?: string | null
  /**
   * @description 联系人电话
   */
  contactNumber?: string | null
  /**
   * @description 联系人
   */
  contactPerson?: string | null
  /**
   * @description 是否启用
   */
  isEnabled?: boolean
  /**
   * @description 法人代表
   */
  legalRepresentative?: string | null
  /**
   * @description 法人代表电话
   */
  legalRepresentativeNumber?: string | null
  /**
   * @description 级数
   * @format int32
   */
  level?: number
  /**
   * @description 机构名称
   */
  name?: string | null
  /**
   * @description 路径
   */
  path?: string | null
  /**
   * @description 中文全路径
   */
  pathText?: string | null
  /**
   * @description 拼音简码
   */
  pinYin?: string | null
  /**
   * @description 机构简称(用于上报部级数据展示名称)
   */
  simpleName?: string | null
  /**
   * @description 排序号
   * @format int32
   */
  sortId?: number
  /**
   * @description 企业类型(1:企业, 2:个人)
   * @format int32
   */
  type?: number
  organizations?: Array<Organizations> | null
  userInfos?: Array<UserInfo> | null
}

/**
 * @description 组织架构(organizations)
 */
export interface Organizations {
  id?: string | null
  /**
   * @format date-time
   */
  creationTime?: string
  creatorUserId?: string | null
  creatorUserName?: string | null
  /**
   * @format date-time
   */
  lastModificationTime?: string
  lastModifierUserId?: string | null
  lastModifierUserName?: string | null
  isDeleted?: boolean
  /**
   * @description 所属企业id
   */
  enterpriseId?: string | null
  /**
   * @description 负责人
   */
  leader?: string | null
  /**
   * @description 级别
   * @format int32
   */
  level?: number
  /**
   * @description 名称
   */
  name?: string | null
  /**
   * @description 父级编号
   */
  parentId?: string | null
  /**
   * @description 路径
   */
  path?: string | null
  /**
   * @description 中文路径
   */
  pathText?: string | null
  /**
   * @description 排序号
   * @format int32
   */
  sortId?: number
  enterprise?: Enterprise
  userInfos?: Array<UserInfo> | null
}

export interface ClaimsIdentity {
  authenticationType?: string | null
  isAuthenticated?: boolean
  actor?: ClaimsIdentity
  bootstrapContext?: unknown | null
  claims?: Array<Claim> | null
  label?: string | null
  name?: string | null
  nameClaimType?: string | null
  roleClaimType?: string | null
}

export interface Claim {
  issuer?: string | null
  originalIssuer?: string | null
  properties?: {
    [key: string]: string
  } | null
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
  /**
   * @format date-time
   */
  creationTime?: string
  creatorUserId?: string | null
  creatorUserName?: string | null
  /**
   * @format date-time
   */
  lastModificationTime?: string
  lastModifierUserId?: string | null
  lastModifierUserName?: string | null
  isDeleted?: boolean
  /**
   * @description 企业Id
   */
  enterpriseId?: string | null
  /**
   * @description 组织架构Id
   */
  orgId?: string | null
  /**
   * @description 邮箱
   */
  email?: string | null
  /**
   * @description 头像
   */
  headPortraitCode?: string | null
  /**
   * @description 身份证
   */
  idCard?: string | null
  /**
   * @description 密码加密字符
   */
  passwordHash?: string | null
  /**
   * @description 密码加密盐值
   */
  passwordSalt?: string | null
  /**
   * @description 手机号
   */
  phoneNumber?: string | null
  /**
   * @description 真实姓名
   */
  realName?: string | null
  /**
   * @description 性别(1.男 2.女)
   * @format int32
   */
  sex?: number
  /**
   * @description 状态
   * @format int32
   */
  status?: number
  /**
   * @description 用户类型
   * @format int32
   */
  type?: number
  /**
   * @description 用户名
   */
  userName?: string | null
  organizations?: Organizations
  enterprise?: Enterprise
  roles?: Array<Roles> | null
  /**
   * @description 用户身份声明
   */
  claims?: Array<Claim> | null
}

/**
 * @description 角色(roles)
 */
export interface Roles {
  id?: string | null
  /**
   * @format date-time
   */
  creationTime?: string
  creatorUserId?: string | null
  creatorUserName?: string | null
  /**
   * @format date-time
   */
  lastModificationTime?: string
  lastModifierUserId?: string | null
  lastModifierUserName?: string | null
  isDeleted?: boolean
  /**
   * @description 枚举编码
   */
  code?: string | null
  /**
   * @description 备注
   */
  remarks?: string | null
  /**
   * @description 角色名/组名
   */
  roleName?: string | null
  /**
   * @description 排序值
   * @format int32
   */
  sortId?: number
  /**
   * @description Menus导航属性
   */
  menus?: Array<Menu> | null
  /**
   * @description Users导航属性
   */
  users?: Array<UserInfo> | null
  /**
   * @description Buttons导航属性
   */
  buttons?: Array<Button> | null
}

/**
 * @description 按钮(button)
 */
export interface Button {
  id?: string | null
  /**
   * @format date-time
   */
  creationTime?: string
  creatorUserId?: string | null
  creatorUserName?: string | null
  /**
   * @format date-time
   */
  lastModificationTime?: string
  lastModifierUserId?: string | null
  lastModifierUserName?: string | null
  isDeleted?: boolean
  /**
   * @description 菜单编号
   */
  menuId?: string | null
  /**
   * @description 权限点
   */
  code?: string | null
  /**
   * @description 启用(默认为启用)
   */
  enable?: boolean
  /**
   * @description 资源名称
   */
  name?: string | null
  /**
   * @description 备注
   */
  remarks?: string | null
  menu?: Menu
  apis?: Array<Api> | null
  roles?: Array<Roles> | null
}

/**
 * @description 菜单(menu)
 */
export interface Menu {
  id?: string | null
  /**
   * @format date-time
   */
  creationTime?: string
  creatorUserId?: string | null
  creatorUserName?: string | null
  /**
   * @format date-time
   */
  lastModificationTime?: string
  lastModifierUserId?: string | null
  lastModifierUserName?: string | null
  isDeleted?: boolean
  client?: ClientEnums
  /**
   * @description 图标
   */
  icon?: string | null
  /**
   * @description 图表颜色
   */
  iconColor?: string | null
  /**
   * @description 父级编号
   */
  parentId?: string | null
  /**
   * @description 等级
   * @format int32
   */
  level?: number
  /**
   * @description 链接、路由
   */
  link?: string | null
  /**
   * @description 所属模块
   */
  moduleCode?: string | null
  /**
   * @description 名称
   */
  name?: string | null
  /**
   * @description 路径
   */
  path?: string | null
  /**
   * @description 备注
   */
  remarks?: string | null
  /**
   * @description 路由参数
   */
  routeParams?: string | null
  /**
   * @description 是否显示
   */
  show?: boolean
  /**
   * @description 排序码
   * @format int32
   */
  sort?: number
  /**
   * @description 打开方式（1：当前页面，2：新页面）
   * @format int32
   */
  target?: number
  /**
   * @description 菜单类型
   * @format int32
   */
  type?: number
  /**
   * @description 组件
   */
  component?: string | null
  buttons?: Array<Button> | null
  menus?: Array<Menu> | null
  roles?: Array<Roles> | null
}

export interface MenuIResultModel {
  data?: Menu
}

export interface MenuPageList {
  /**
   * @format int32
   */
  page?: number
  /**
   * @format int32
   */
  pageSize?: number
  /**
   * @format int64
   */
  totalCount?: number
  order?: string | null
  list?: Array<Menu> | null
}

export interface MenuPageListIResultModel {
  data?: MenuPageList
}

export interface MenuOutputListIResultModel {
  data?: Array<MenuOutput> | null
}

/**
 * @description 按钮信息
 */
export interface ButtonInfoDto {
  /**
   * @description 菜单唯一标识
   */
  id?: string | null
  /**
   * @description 名称
   */
  name?: string | null
  /**
   * @description 权限点
   */
  code?: string | null
  /**
   * @description 备注
   */
  remarks?: string | null
  /**
   * @description 按钮关联的接口
   */
  apisId?: Array<string> | null
}

/**
 * @description 按钮配置Dto
 */
export interface ButtonDto {
  /**
   * @description 菜单Id
   */
  menuId?: string | null
  /**
   * @description 按钮信息
   */
  buttons?: Array<ButtonInfoDto> | null
}

export interface ButtonDtoIResultModel {
  data?: ButtonDto
}

/**
 * @description 消息发送类型
 */
export type NotifySendType = 1 | 2 | 3

/**
 * @description 通知分页返回模型
 */
export interface NotifyListOutput {
  /**
   * @description 通知标识
   */
  id?: string | null
  /**
   * @description 通知标题
   */
  title?: string | null
  /**
   * @description 通知描述
   */
  desc?: string | null
  /**
   * @description 通知数据
   */
  payload?: unknown | null
  /**
   * @description 是否已读(true:已读)
   */
  readed?: boolean
  /**
   * @description 通知创建时间
   * @format date-time
   */
  creationTime?: string
  /**
   * @description 通知类型
   */
  type?: string | null
  /**
   * @description 类型文本
   */
  typeLabel?: string | null
  sendType?: NotifySendType
}

export interface NotifyListOutputPageList {
  /**
   * @format int32
   */
  page?: number
  /**
   * @format int32
   */
  pageSize?: number
  /**
   * @format int64
   */
  totalCount?: number
  order?: string | null
  list?: Array<NotifyListOutput> | null
}

export interface NotifyListOutputPageListIResultModel {
  data?: NotifyListOutputPageList
}

export interface NotifyCountOutput {
  /**
   * @description 未读数量
   * @format int64
   */
  count?: number
}

export interface NotifyCountOutputIResultModel {
  data?: NotifyCountOutput
}

/**
 * @description 已读
 */
export interface NotifyReadedInput {
  /**
   * @description 已读Ids
   */
  ids?: Array<string> | null
}

/**
 * @description 通知添加模型
 */
export interface StringNotifyInput {
  sendType?: NotifySendType
  /**
   * @description 类型
   */
  type?: string | null
  /**
   * @description 标题
   */
  title?: string | null
  /**
   * @description 描述
   */
  desc?: string | null
  /**
   * @description 数据
   */
  payload?: string | null
  /**
   * @description 用户Id(发送类型为用户时必填)
   */
  userIds?: Array<string> | null
  /**
   * @description 用户角色(发送类型为角色时必填)
   */
  roldCodes?: Array<string> | null
}

export interface OpenApiTreeOutput {
  /**
   * @description 标识
   */
  id?: string | null
  /**
   * @description 名称
   */
  name?: string | null
  /**
   * @description 层级，从1开始
   * @format int32
   */
  level?: number
  /**
   * @description 子级
   */
  children?: Array<OpenApiTreeOutput> | null
}

export interface OpenApiTreeOutputListIResultModel {
  data?: Array<OpenApiTreeOutput> | null
}

/**
 * @description 组织架构(organizations)分页列表输出模型
 */
export interface OrganizationsListOutput {
  /**
   * @description 标识
   */
  id?: string | null
  /**
   * @description 所属企业id
   */
  enterpriseId?: string | null
  /**
   * @description 负责人
   */
  leader?: string | null
  /**
   * @description 级别
   * @format int32
   */
  level?: number
  /**
   * @description 名称
   */
  name?: string | null
  /**
   * @description 父级编号
   */
  parentId?: string | null
  /**
   * @description 路径
   */
  path?: string | null
  /**
   * @description 中文路径
   */
  pathText?: string | null
  /**
   * @description 排序号
   * @format int32
   */
  sortId?: number
}

export interface OrganizationsListOutputPageList {
  /**
   * @format int32
   */
  page?: number
  /**
   * @format int32
   */
  pageSize?: number
  /**
   * @format int64
   */
  totalCount?: number
  order?: string | null
  list?: Array<OrganizationsListOutput> | null
}

export interface OrganizationsListOutputPageListIResultModel {
  data?: OrganizationsListOutputPageList
}

/**
 * @description 组织架构(organizations)输出模型
 */
export interface OrganizationsOutput {
  /**
   * @description 标识
   */
  id?: string | null
  /**
   * @description 所属企业id
   */
  enterpriseId?: string | null
  /**
   * @description 负责人
   */
  leader?: string | null
  /**
   * @description 级别
   * @format int32
   */
  level?: number
  /**
   * @description 名称
   */
  name?: string | null
  /**
   * @description 父级编号
   */
  parentId?: string | null
  /**
   * @description 路径
   */
  path?: string | null
  /**
   * @description 中文路径
   */
  pathText?: string | null
  /**
   * @description 排序号
   * @format int32
   */
  sortId?: number
}

export interface OrganizationsOutputIResultModel {
  data?: OrganizationsOutput
}

/**
 * @description 组织架构(organizations)输入模型
 */
export interface OrganizationsInput {
  /**
   * @description 标识
   */
  id?: string | null
  /**
   * @description 所属企业id
   */
  enterpriseId?: string | null
  /**
   * @description 负责人
   */
  leader?: string | null
  /**
   * @description 名称
   */
  name?: string | null
  /**
   * @description 父级编号
   */
  parentId?: string | null
  /**
   * @description 排序号
   * @format int32
   */
  sortId?: number
}

/**
 * @description 组织架构级联选项参数
 */
export interface OrganizationTreeOptionsQuery {
  /**
   * @description 路径
   */
  path?: string | null
}

/**
 * @description 角色(roles)分页列表输出模型
 */
export interface RolesListOutput {
  /**
   * @description 角色标识
   */
  id?: string | null
  /**
   * @description 枚举编码
   */
  code?: string | null
  /**
   * @description 备注
   */
  remarks?: string | null
  /**
   * @description 角色名/组名
   */
  roleName?: string | null
  /**
   * @description 排序值
   * @format int32
   */
  sortId?: number
}

export interface RolesListOutputPageList {
  /**
   * @format int32
   */
  page?: number
  /**
   * @format int32
   */
  pageSize?: number
  /**
   * @format int64
   */
  totalCount?: number
  order?: string | null
  list?: Array<RolesListOutput> | null
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
  /**
   * @description 角色Id
   */
  roleId?: string | null
  /**
   * @description 菜单Ids
   */
  menus?: string | null
}

/**
 * @description 角色按钮
 */
export interface RoleButtonDto {
  /**
   * @description 标识
   */
  id?: string | null
  /**
   * @description 名称
   */
  name?: string | null
  /**
   * @description 是否选中
   */
  checked?: boolean
}

export interface RoleMenuTreeOutput {
  /**
   * @description 标识
   */
  id?: string | null
  /**
   * @description 名称
   */
  name?: string | null
  /**
   * @description 是否选中
   */
  checked?: boolean
  /**
   * @description 子级
   */
  children?: Array<RoleMenuTreeOutput> | null
  /**
   * @description 按钮
   */
  buttons?: Array<RoleButtonDto> | null
}

export interface RoleMenuTreeOutputListIResultModel {
  data?: Array<RoleMenuTreeOutput> | null
}

/**
 * @description 示例
 */
export interface SampleOutput {
  id?: string | null
}

export interface SampleOutputPageList {
  /**
   * @format int32
   */
  page?: number
  /**
   * @format int32
   */
  pageSize?: number
  /**
   * @format int64
   */
  totalCount?: number
  order?: string | null
  list?: Array<SampleOutput> | null
}

export interface SampleOutputPageListIResultModel {
  data?: SampleOutputPageList
}

/**
 * @description 用户列表Dto
 */
export interface UserInfoListOutput {
  /**
   * @description 主键
   */
  id?: string | null
  /**
   * @description 用户名
   */
  userName?: string | null
  /**
   * @description 邮箱
   */
  email?: string | null
  /**
   * @description 手机号
   */
  phoneNumber?: string | null
  /**
   * @description 头像url
   */
  headPortraitCode?: string | null
  /**
   * @description 真实姓名
   */
  realName?: string | null
  /**
   * @description 性别(1.男 2.女)
   * @format int32
   */
  sex?: number
  /**
   * @description 状态
   * @format int32
   */
  status?: number
  /**
   * @description 办公电话
   */
  contact?: string | null
  /**
   * @description 角色id
   */
  rolesId?: Array<string> | null
  /**
   * @description 角色id
   */
  rolesName?: Array<string> | null
  /**
   * @description 企业部门主键
   */
  orgId?: string | null
  /**
   * @description 企业部门名称
   */
  orgName?: string | null
  /**
   * @description 企业主键
   */
  enterpriseId?: string | null
  /**
   * @description 员工类型
   * @format int32
   */
  type?: number
  /**
   * @description 用户类型
   * @format int32
   */
  userType?: number
  /**
   * @description 身份证号
   */
  idCard?: string | null
}

export interface UserInfoListOutputPageList {
  /**
   * @format int32
   */
  page?: number
  /**
   * @format int32
   */
  pageSize?: number
  /**
   * @format int64
   */
  totalCount?: number
  order?: string | null
  list?: Array<UserInfoListOutput> | null
}

export interface UserInfoListOutputPageListIResultModel {
  data?: UserInfoListOutputPageList
}

/**
 * @description 用户信息
 */
export interface UserInfoOutput {
  /**
   * @description 主键
   */
  id?: string | null
  /**
   * @description 用户编号
   */
  userId?: string | null
  /**
   * @description 用户名
   */
  userName?: string | null
  /**
   * @description 邮箱
   */
  email?: string | null
  /**
   * @description 手机号
   */
  phoneNumber?: string | null
  /**
   * @description 头像url
   */
  headPortraitCode?: string | null
  /**
   * @description 真实姓名
   */
  realName?: string | null
  /**
   * @description 性别(1.男 2.女)
   * @format int32
   */
  sex?: number
  /**
   * @description 状态
   * @format int32
   */
  status?: number
  /**
   * @description 办公电话
   */
  contact?: string | null
  /**
   * @description 角色id
   */
  rolesId?: Array<string> | null
  /**
   * @description 角色id
   */
  rolesName?: Array<string> | null
  /**
   * @description 用户类型
   * @format int32
   */
  userType?: number
  /**
   * @description 身份证号
   */
  idCard?: string | null
  /**
   * @description 角色
   */
  roles?: Array<RolesDto> | null
}

export interface UserInfoOutputIResultModel {
  data?: UserInfoOutput
}

/**
 * @description 用户信息
 */
export interface UserInfoInput {
  /**
   * @description 标识
   */
  id?: string | null
  /**
   * @description 企业Id(可空)
   */
  enterpriseId?: string | null
  /**
   * @description 组织架构Id(可空)
   */
  orgId?: string | null
  /**
   * @description 邮箱
   */
  email?: string | null
  /**
   * @description 头像
   */
  headPortraitCode?: string | null
  /**
   * @description 身份证
   */
  idCard?: string | null
  /**
   * @description 手机号
   */
  phoneNumber?: string | null
  /**
   * @description 真实姓名
   */
  realName?: string | null
  /**
   * @description 性别(1.男 2.女)
   * @format int32
   */
  sex?: number
  /**
   * @description 状态
   * @format int32
   */
  status?: number
  /**
   * @description 用户类型
   * @format int32
   */
  type?: number
  /**
   * @description 用户名
   */
  userName?: string | null
  /**
   * @description 密码
   */
  password?: string | null
  /**
   * @description 角色Ids
   */
  rolesId?: Array<string> | null
}

/**
 * @description 修改密码Dto
 */
export interface UsersPwdDto {
  /**
   * @description 旧密码
   */
  oldPassword?: string | null
  /**
   * @description 新密码
   */
  password?: string | null
  /**
   * @description 确认新密码
   */
  rePassword?: string | null
}

/**
 * @description 重置密码Dto
 */
export interface ResetPwdDto {
  /**
   * @description 用户Id
   */
  id?: string | null
  /**
   * @description 重置后密码
   */
  password?: string | null
  /**
   * @description 重置后密码确认
   */
  rePassword?: string | null
}

/**
 * @description UpdateUserBasicInfoInput
 */
export interface UpdateUserBasicInfoInput {
  /**
   * @description 文件Code
   */
  headPortraitCode?: string | null
  /**
   * @description 姓名
   */
  realName?: string | null
  /**
   * @description 电子邮件
   */
  email?: string | null
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
   * @summary 登录(密码模式)
   * @tag Account
   */
  post(url: '/api/Account/LoginWithPwd', options?: SwaggerOptions<{}, {}, {}, LoginModel>): Promise<LoginUserOutputAuthResutIResultModel>
  /**
   * @summary 登录
   * @tag Account
   */
  post(url: '/api/Account/Login', options?: SwaggerOptions<{}, {}, {}, SpaLoginModel>): Promise<IResultModel>
  /**
   * @summary 退出登录
   * @tag Account
   */
  get(url: '/api/Account/Logout', options?: SwaggerOptions<{}, {logoutId?: string | null}, {}, unknown>): Promise<IResultModel>
  /**
   * @summary Ids登录错误信息
   * @tag Account
   */
  get(url: '/api/Account/Error', options?: SwaggerOptions<{}, {errorId?: string | null}, {}, unknown>): Promise<IResultModel>
  /**
   * @summary 获取初始化数据
   * @tag App
   */
  get(url: '/api/App/Init', options?: SwaggerOptions<{}, {client?: ClientEnums}, {}, unknown>): Promise<InitAppOutputIResultModel>
  /**
   * @summary 获取最新版本信息
   * @tag AppVersion
   */
  get(url: '/api/AppVersion/GetVersion', options?: SwaggerOptions<{}, {type?: number}, {}, unknown>): Promise<IResultModel>
  /**
   * @summary 增加版本信息
   * @tag AppVersion
   */
  post(url: '/api/AppVersion/Add', options?: SwaggerOptions<{}, {}, {}, AppVersionDto>): Promise<IResultModel>
  /**
   * @summary 获取版本记录
   * @tag AppVersion
   */
  get(url: '/api/AppVersion/GetVersionRecords', options?: SwaggerOptions<{}, {Type?: number, Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, {}, unknown>): Promise<AppVersionDtoPageListIResultModel>
  /**
   * @summary 分页查询
   * @tag Area
   */
  get(url: '/api/Area/Page', options?: SwaggerOptions<{}, {Level?: number | null, ParentCode?: string | null, ParentId?: string | null, Code?: string | null, Name?: string | null, Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, {}, unknown>): Promise<AreaListOutputPageListIResultModel>
  /**
   * @summary 添加区域
   * @tag Area
   */
  post(url: '/api/Area/Add', options?: SwaggerOptions<{}, {}, {}, AreaDto>): Promise<IResultModel>
  /**
   * @summary 编辑区域
   * @tag Area
   */
  post(url: '/api/Area/Edit', options?: SwaggerOptions<{}, {}, {}, AreaDto>): Promise<IResultModel>
  /**
   * @summary 删除区域
   * @tag Area
   */
  post(url: '/api/Area/Remove', options?: SwaggerOptions<{}, {}, {}, RemoveModel>): Promise<IResultModel>
  /**
   * @summary 级联下拉选项
   * @tag Area
   */
  get(url: '/api/Area/TreeOptions', options?: SwaggerOptions<{}, {Level?: number | null, LevelFull?: number | null, ParentCode?: string | null, AreaCode?: string | null, AreaCodeFull?: string | null}, {}, unknown>): Promise<TreeOptionResultModelListIResultModel>
  /**
   * @summary 特定级别的下拉选项
   * @tag Area
   */
  get(url: '/api/Area/OptionsBySpecificLevel', options?: SwaggerOptions<{}, {Level?: number | null, LevelFull?: number | null, ParentCode?: string | null, AreaCode?: string | null, AreaCodeFull?: string | null}, {}, unknown>): Promise<StringOptionResultModelListIResultModel>
  /**
   * @summary 格式化区域数据
   * @tag Area
   */
  post(url: '/api/Area/DataFormat', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<IResultModel>
  /**
   * @summary 列表查询
   * @tag Audit
   */
  get(url: '/api/Audit/Page', options?: SwaggerOptions<{}, {FilterNoUserLog?: boolean, Route?: string | null, RouteSummary?: string | null, Url?: string | null, Method?: string | null, StatusCode?: number | null, RemoteIP?: string | null, UserId?: string | null, UserName?: string | null, CreationTimeStart?: string | null, CreationTimeEnd?: string | null, Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, {}, unknown>): Promise<AuditListOutputPageListIResultModel>
  /**
   * @summary 新增
   * @tag Dictionary
   */
  post(url: '/api/Dictionary/Add', options?: SwaggerOptions<{}, {}, {}, DictionaryDto>): Promise<IResultModel>
  /**
   * @summary 详情
   * @tag Dictionary
   */
  get(url: '/api/Dictionary/Detail', options?: SwaggerOptions<{}, {id?: string | null}, {}, unknown>): Promise<DictionaryIResultModel>
  /**
   * @summary 修改
   * @tag Dictionary
   */
  post(url: '/api/Dictionary/Edit', options?: SwaggerOptions<{}, {}, {}, DictionaryDto>): Promise<IResultModel>
  /**
   * @summary 分页查询
   * @tag Dictionary
   */
  get(url: '/api/Dictionary/Page', options?: SwaggerOptions<{}, {Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, {}, unknown>): Promise<DictionaryDtoPageListIResultModel>
  /**
   * @summary 移除
   * @tag Dictionary
   */
  post(url: '/api/Dictionary/Remove', options?: SwaggerOptions<{}, {}, {}, StringRemoveModel>): Promise<IResultModel>
  /**
   * @summary 根据类型树形获取
   * @tag Dictionary
   */
  get(url: '/api/Dictionary/ListByType', options?: SwaggerOptions<{}, {typeId?: string | null}, {}, unknown>): Promise<DictionaryListIResultModel>
  /**
   * @summary 根据数据字典类型code获取对应下拉选项
   * @tag Dictionary
   */
  get(url: '/api/Dictionary/OptionsByCode', options?: SwaggerOptions<{}, {code?: string | null, isLoadAll?: boolean}, {}, unknown>): Promise<StringOptionResultModelListIResultModel>
  /**
   * @summary 根据数据字典类型code获取对应下拉选项（多个）
   * @tag Dictionary
   */
  get(url: '/api/Dictionary/OptionsListByCodes', options?: SwaggerOptions<{}, {codes?: string | null, isLoadAll?: boolean}, {}, unknown>): Promise<StringOptionResultModelListIResultModel>
  /**
   * @summary 根据类型树形获取(树形)
   * @tag Dictionary
   */
  get(url: '/api/Dictionary/TreeOptionsByCode', options?: SwaggerOptions<{}, {code?: string | null, isLoadAll?: boolean}, {}, unknown>): Promise<StringTreeOptionResultModelDtoListIResultModel>
  /**
   * @summary 新增
   * @tag DictionaryType
   */
  post(url: '/api/DictionaryType/Add', options?: SwaggerOptions<{}, {}, {}, DictionaryTypeDto>): Promise<IResultModel>
  /**
   * @summary 详情
   * @tag DictionaryType
   */
  get(url: '/api/DictionaryType/Detail', options?: SwaggerOptions<{}, {id?: string | null}, {}, unknown>): Promise<DictionaryTypeIResultModel>
  /**
   * @summary 修改
   * @tag DictionaryType
   */
  post(url: '/api/DictionaryType/Edit', options?: SwaggerOptions<{}, {}, {}, DictionaryTypeDto>): Promise<IResultModel>
  /**
   * @summary 分页查询
   * @tag DictionaryType
   */
  get(url: '/api/DictionaryType/Page', options?: SwaggerOptions<{}, {Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, {}, unknown>): Promise<DictionaryTypeDtoPageListIResultModel>
  /**
   * @summary 移除
   * @tag DictionaryType
   */
  post(url: '/api/DictionaryType/Remove', options?: SwaggerOptions<{}, {}, {}, StringRemoveModel>): Promise<IResultModel>
  /**
   * @summary 下拉选择
   * @tag DictionaryType
   */
  get(url: '/api/DictionaryType/Options', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<StringOptionResultModelListIResultModel>
  /**
   * @summary 分页列表
   * @tag Enterprise
   */
  get(url: '/api/Enterprise/Page', options?: SwaggerOptions<{}, {Id?: string | null, Code?: string | null, Level?: number | null, Name?: string | null, Path?: string | null, Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, {}, unknown>): Promise<EnterpriseListOutputPageListIResultModel>
  /**
   * @summary 详情
   * @tag Enterprise
   */
  get(url: '/api/Enterprise/Detail', options?: SwaggerOptions<{}, {id?: string | null}, {}, unknown>): Promise<EnterpriseOutputIResultModel>
  /**
   * @summary 添加
   * @tag Enterprise
   */
  post(url: '/api/Enterprise/Add', options?: SwaggerOptions<{}, {}, {}, EnterpriseInput>): Promise<IResultModel>
  /**
   * @summary 编辑
   * @tag Enterprise
   */
  post(url: '/api/Enterprise/Edit', options?: SwaggerOptions<{}, {}, {}, EnterpriseInput>): Promise<IResultModel>
  /**
   * @summary 删除
   * @tag Enterprise
   */
  post(url: '/api/Enterprise/Remove', options?: SwaggerOptions<{}, {}, {}, StringRemoveModel>): Promise<IResultModel>
  /**
   * @summary 级联下拉选项
   * @tag Enterprise
   */
  get(url: '/api/Enterprise/TreeOptions', options?: SwaggerOptions<{}, {Path?: string | null}, {}, unknown>): Promise<TreeOptionResultModelListIResultModel>
  /**
   * @summary 获取所有树形帮助分类
   * @tag FaqCategory
   */
  get(url: '/api/FaqCategory/Tree', options?: SwaggerOptions<{}, {ParentId?: string | null, Name?: string | null, Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, {}, unknown>): Promise<FaqCategoryTreeOutputListIResultModel>
  /**
   * @summary 获取所有树形帮助分类并附带内容
   * @tag FaqCategory
   */
  get(url: '/api/FaqCategory/TreeAdnContnet', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<FaqCategoryTreeOutputListIResultModel>
  /**
   * @summary 详情
   * @tag FaqCategory
   */
  get(url: '/api/FaqCategory/Detail', options?: SwaggerOptions<{}, {id?: string | null}, {}, unknown>): Promise<FaqCategoryOutputIResultModel>
  /**
   * @summary 添加
   * @tag FaqCategory
   */
  post(url: '/api/FaqCategory/Add', options?: SwaggerOptions<{}, {}, {}, FaqCategoryInput>): Promise<IResultModel>
  /**
   * @summary 编辑
   * @tag FaqCategory
   */
  post(url: '/api/FaqCategory/Edit', options?: SwaggerOptions<{}, {}, {}, FaqCategoryInput>): Promise<IResultModel>
  /**
   * @summary 删除
   * @tag FaqCategory
   */
  post(url: '/api/FaqCategory/Remove', options?: SwaggerOptions<{}, {}, {}, StringRemoveModel>): Promise<IResultModel>
  /**
   * @summary 分页列表
   * @tag FaqContent
   */
  get(url: '/api/FaqContent/Page', options?: SwaggerOptions<{}, {CategoryId?: string | null, Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, {}, unknown>): Promise<FaqContentListOutputPageListIResultModel>
  /**
   * @summary 详情
   * @tag FaqContent
   */
  get(url: '/api/FaqContent/Detail', options?: SwaggerOptions<{}, {id?: string | null, isView?: boolean}, {}, unknown>): Promise<FaqContentOutputIResultModel>
  /**
   * @summary 添加
   * @tag FaqContent
   */
  post(url: '/api/FaqContent/Add', options?: SwaggerOptions<{}, {}, {}, FaqContentInput>): Promise<IResultModel>
  /**
   * @summary 编辑
   * @tag FaqContent
   */
  post(url: '/api/FaqContent/Edit', options?: SwaggerOptions<{}, {}, {}, FaqContentInput>): Promise<IResultModel>
  /**
   * @summary 删除
   * @tag FaqContent
   */
  post(url: '/api/FaqContent/Remove', options?: SwaggerOptions<{}, {}, {}, StringRemoveModel>): Promise<IResultModel>
  /**
   * @summary 文件上传
   * @tag File
   */
  post(url: '/api/File/Upload', options?: SwaggerOptions<{}, {}, {}, FormData>): Promise<IResultModel>
  /**
   * @summary 图片上传
   * @tag File
   */
  post(url: '/api/File/UploadPic', options?: SwaggerOptions<{}, {}, {}, FormData>): Promise<IResultModel>
  /**
   * @summary 获取文件(返回byte[])
   * @tag File
   */
  get(url: '/api/File/Get', options?: SwaggerOptions<{}, {code?: string | null}, {}, unknown>): Promise<unknown>
  /**
   * @summary 下载文件(返回Stream)
   * @tag File
   */
  get(url: '/api/File/Download', options?: SwaggerOptions<{}, {code?: string | null}, {}, unknown>): Promise<unknown>
  get(url: '/api/File/DownloadByStream', options?: SwaggerOptions<{}, {code?: string | null}, {}, unknown>): Promise<unknown>
  /**
   * @summary 删除文件
   * @tag File
   */
  post(url: '/api/File/Remove', options?: SwaggerOptions<{}, {}, {}, FormData>): Promise<IResultModel>
  /**
   * @summary 列表
   * @tag LoginLog
   */
  get(url: '/api/LoginLog/Page', options?: SwaggerOptions<{}, {UserName?: string | null, Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, {}, unknown>): Promise<LoginLogListOutputPageListIResultModel>
  /**
   * @summary 新增
   * @tag Menu
   */
  post(url: '/api/Menu/Add', options?: SwaggerOptions<{}, {}, {}, MenuInput>): Promise<IResultModel>
  /**
   * @summary 修改
   * @tag Menu
   */
  post(url: '/api/Menu/Edit', options?: SwaggerOptions<{}, {}, {}, MenuInput>): Promise<IResultModel>
  /**
   * @summary 详情
   * @tag Menu
   */
  get(url: '/api/Menu/Detail', options?: SwaggerOptions<{}, {id?: string | null}, {}, unknown>): Promise<MenuIResultModel>
  /**
   * @summary 分页
   * @tag Menu
   */
  get(url: '/api/Menu/Page', options?: SwaggerOptions<{}, {Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, {}, unknown>): Promise<MenuPageListIResultModel>
  /**
   * @summary 获取所有树形菜单
   * @tag Menu
   */
  get(url: '/api/Menu/Tree', options?: SwaggerOptions<{}, {client?: ClientEnums}, {}, unknown>): Promise<MenuOutputListIResultModel>
  /**
   * @summary 获取角色树形菜单
   * @tag Menu
   */
  get(url: '/api/Menu/LoadTreeByRole', options?: SwaggerOptions<{}, {roleId?: string | null}, {}, unknown>): Promise<MenuOutputListIResultModel>
  /**
   * @summary 获取菜单按钮
   * @tag Menu
   */
  get(url: '/api/Menu/Buttons', options?: SwaggerOptions<{}, {menuId?: string | null}, {}, unknown>): Promise<ButtonDtoIResultModel>
  /**
   * @summary 配置菜单按钮
   * @tag Menu
   */
  post(url: '/api/Menu/SetButton', options?: SwaggerOptions<{}, {}, {}, ButtonDto>): Promise<IResultModel>
  /**
   * @summary 级联下拉选项
   * @tag Menu
   */
  get(url: '/api/Menu/TreeOptions', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<TreeOptionResultModelListIResultModel>
  /**
   * @summary 删除
   * @tag Menu
   */
  post(url: '/api/Menu/Remove', options?: SwaggerOptions<{}, {}, {}, StringRemoveModel>): Promise<IResultModel>
  /**
   * @summary 获取消息类型
   * @tag Notify
   */
  get(url: '/api/Notify/Options', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<StringOptionResultModelListIResultModel>
  /**
   * @summary 获取通知列表
   * @tag Notify
   */
  get(url: '/api/Notify/Page', options?: SwaggerOptions<{}, {Type?: string | null, Readed?: boolean | null, Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, {}, unknown>): Promise<NotifyListOutputPageListIResultModel>
  /**
   * @summary 获取通知列表(信息预览框使用)
   * @tag Notify
   */
  get(url: '/api/Notify/PageLite', options?: SwaggerOptions<{}, {Type?: string | null, Readed?: boolean | null, Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, {}, unknown>): Promise<NotifyListOutputPageListIResultModel>
  /**
   * @summary 获取未读消息数量
   * @tag Notify
   */
  get(url: '/api/Notify/UnReadedCount', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<NotifyCountOutputIResultModel>
  /**
   * @summary 通知已读
   * @tag Notify
   */
  post(url: '/api/Notify/Readed', options?: SwaggerOptions<{}, {}, {}, NotifyReadedInput>): Promise<IResultModel>
  /**
   * @summary 全部已读
   * @tag Notify
   */
  post(url: '/api/Notify/ReadAll', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<IResultModel>
  /**
   * @summary 删除消息(参数传到Ids属性,多个用,分开)
   * @tag Notify
   */
  post(url: '/api/Notify/Remove', options?: SwaggerOptions<{}, {}, {}, StringRemoveModel>): Promise<IResultModel>
  /**
   * @summary 删除所有消息
   * @tag Notify
   */
  post(url: '/api/Notify/RemoveAll', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<IResultModel>
  /**
   * @summary 添加消息，外部调用（泛型参数报404）
   * @tag Notify
   */
  post(url: '/api/Notify/Addmsg', options?: SwaggerOptions<{}, {}, {}, StringNotifyInput>): Promise<IResultModel>
  /**
   * @summary 同步本系统API信息到数据库
   * @tag OpenApi
   */
  post(url: '/api/OpenApi/SyncCurrent', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<IResultModel>
  /**
   * @summary 同步所有系统API信息(未实现)
   * @tag OpenApi
   */
  post(url: '/api/OpenApi/SyncAll', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<IResultModel>
  /**
   * @summary 同步API信息到数据库
   * @tag OpenApi
   */
  post(url: '/api/OpenApi/AddOrUpdate', options?: SwaggerOptions<{}, {data?: string | null}, {}, unknown>): Promise<IResultModel>
  /**
   * @summary 树形下拉选项
   * @tag OpenApi
   */
  get(url: '/api/OpenApi/TreeOptions', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<OpenApiTreeOutputListIResultModel>
  /**
   * @summary 分页列表
   * @tag Organizations
   */
  get(url: '/api/Organizations/Page', options?: SwaggerOptions<{}, {EnterpriseId?: string | null, Name?: string | null, Path?: string | null, Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, {}, unknown>): Promise<OrganizationsListOutputPageListIResultModel>
  /**
   * @summary 详情
   * @tag Organizations
   */
  get(url: '/api/Organizations/Detail', options?: SwaggerOptions<{}, {id?: string | null}, {}, unknown>): Promise<OrganizationsOutputIResultModel>
  /**
   * @summary 添加
   * @tag Organizations
   */
  post(url: '/api/Organizations/Add', options?: SwaggerOptions<{}, {}, {}, OrganizationsInput>): Promise<IResultModel>
  /**
   * @summary 编辑
   * @tag Organizations
   */
  post(url: '/api/Organizations/Edit', options?: SwaggerOptions<{}, {}, {}, OrganizationsInput>): Promise<IResultModel>
  /**
   * @summary 删除
   * @tag Organizations
   */
  post(url: '/api/Organizations/Remove', options?: SwaggerOptions<{}, {}, {}, StringRemoveModel>): Promise<IResultModel>
  /**
   * @summary 级联下拉选项
   * @tag Organizations
   */
  get(url: '/api/Organizations/TreeOptions', options?: SwaggerOptions<{}, {}, {}, OrganizationTreeOptionsQuery>): Promise<TreeOptionResultModelListIResultModel>
  /**
   * @summary 分页查询
   * @tag Roles
   */
  get(url: '/api/Roles/Page', options?: SwaggerOptions<{}, {RoleName?: string | null, Code?: string | null, Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, {}, unknown>): Promise<RolesListOutputPageListIResultModel>
  /**
   * @summary 获取单个信息
   * @tag Roles
   */
  get(url: '/api/Roles/Detail', options?: SwaggerOptions<{}, {id?: string | null}, {}, unknown>): Promise<RolesDtoIResultModel>
  /**
   * @summary 新增
   * @tag Roles
   */
  post(url: '/api/Roles/Add', options?: SwaggerOptions<{}, {}, {}, RolesDto>): Promise<IResultModel>
  /**
   * @summary 修改
   * @tag Roles
   */
  post(url: '/api/Roles/Edit', options?: SwaggerOptions<{}, {}, {}, RolesDto>): Promise<IResultModel>
  /**
   * @summary 移除
   * @tag Roles
   */
  post(url: '/api/Roles/Remove', options?: SwaggerOptions<{}, {}, {}, StringRemoveModel>): Promise<IResultModel>
  /**
   * @summary 下拉选择
   * @tag Roles
   */
  get(url: '/api/Roles/Options', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<StringOptionResultModelListIResultModel>
  /**
   * @summary 设置菜单按钮
   * @tag Roles
   */
  post(url: '/api/Roles/SetMenus', options?: SwaggerOptions<{}, {}, {}, SetMenusDto>): Promise<IResultModel>
  /**
   * @summary 获取菜单按钮
   * @tag Roles
   */
  get(url: '/api/Roles/GetMenus', options?: SwaggerOptions<{}, {roleId?: string | null}, {}, unknown>): Promise<RoleMenuTreeOutputListIResultModel>
  /**
   * @summary 测试
   * @tag Sample
   */
  get(url: '/api/Sample/Test', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<IResultModel>
  /**
   * @summary 输出日志
   * @tag Sample
   */
  get(url: '/api/Sample/LogInfo', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<unknown>
  get(url: '/api/Sample/ResolveApis', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<IResultModel>
  /**
   * @summary 更新
   * @tag Sample
   */
  post(url: '/api/Sample/Update', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<IResultModel>
  /**
   * @summary Page New
   * @tag Sample
   */
  get(url: '/api/Sample/PageNew', options?: SwaggerOptions<{}, {Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, {}, unknown>): Promise<SampleOutputPageListIResultModel>
  /**
   * @summary Page
   * @tag Sample
   */
  get(url: '/api/Sample/Page', options?: SwaggerOptions<{}, {Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, {}, unknown>): Promise<IResultModel>
  get(url: '/api/Sample/TestGlobalExceptionFilter', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<IResultModel>
  /**
   * @summary 获取登录信息
   * @tag Sample
   */
  get(url: '/api/Sample/LoginInfo', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<IResultModel>
  /**
   * @summary 缓存测试
   * @tag Test
   */
  get(url: '/api/Test/TestCache', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<IResultModel>
  /**
   * @summary 随便测试
   * @tag Test
   */
  get(url: '/api/Test/Test2', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<IResultModel>
  /**
   * @summary Aes测试
   * @tag Test
   */
  get(url: '/api/Test/TestAes', options?: SwaggerOptions<{}, {text?: string | null}, {}, unknown>): Promise<IResultModel>
  /**
   * @summary 时间返回格式测试
   * @tag Test
   */
  get(url: '/api/Test/TestDateTime', options?: SwaggerOptions<{}, {time?: string}, {}, unknown>): Promise<IResultModel>
  /**
   * @summary 测试获取用户EID
   * @tag Test
   */
  get(url: '/api/Test/GetLoginEid', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<IResultModel>
  /**
   * @summary 测试异常抛出
   * @tag Test
   */
  get(url: '/api/Test/ThrowEx', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<IResultModel>
  /**
   * @summary OpenApiPolicy
   * @tag Test
   */
  get(url: '/api/Test/OpenApiPolicy', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<IResultModel>
  /**
   * @summary 列表
   * @tag UserInfo
   */
  get(url: '/api/UserInfo/Page', options?: SwaggerOptions<{}, {UserName?: string | null, RealName?: string | null, PhoneNumber?: string | null, EnterpriseId?: string | null, Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, {}, unknown>): Promise<UserInfoListOutputPageListIResultModel>
  /**
   * @summary 获取单个信息
   * @tag UserInfo
   */
  get(url: '/api/UserInfo/Detail', options?: SwaggerOptions<{}, {id?: string | null}, {}, unknown>): Promise<UserInfoOutputIResultModel>
  /**
   * @summary 添加
   * @tag UserInfo
   */
  post(url: '/api/UserInfo/Add', options?: SwaggerOptions<{}, {}, {}, UserInfoInput>): Promise<IResultModel>
  /**
   * @summary 编辑
   * @tag UserInfo
   */
  post(url: '/api/UserInfo/Edit', options?: SwaggerOptions<{}, {}, {}, UserInfoInput>): Promise<IResultModel>
  /**
   * @summary 修改密码
   * @tag UserInfo
   */
  post(url: '/api/UserInfo/UpdatePwd', options?: SwaggerOptions<{}, {}, {}, UsersPwdDto>): Promise<IResultModel>
  /**
   * @summary 重置密码
   * @tag UserInfo
   */
  post(url: '/api/UserInfo/ResetPwd', options?: SwaggerOptions<{}, {}, {}, ResetPwdDto>): Promise<IResultModel>
  /**
   * @summary 基本信息修改
   * @tag UserInfo
   */
  post(url: '/api/UserInfo/UpdateUserBasicInfo', options?: SwaggerOptions<{}, {}, {}, UpdateUserBasicInfoInput>): Promise<IResultModel>
  /**
   * @summary Socket预连接
   * @tag Websocket
   */
  get(url: '/api/Websocket/PreConnect', options?: SwaggerOptions<{}, {}, {}, unknown>): Promise<IResultModel>
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

export interface IRuntimeForm {
  [key: string]: any;
}

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

    config = await this._requestInterceptor.run(config);

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
        : config.body instanceof RuntimeForm
        ? config.body.formData()
        : config.body instanceof Blob
        ? config.body
        : typeof config.body === "object"
        ? JSON.stringify(config.body)
        : config.body.toString();

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
export const defaultApi = new Runtime("http://localhost", "") as unknown as IClient