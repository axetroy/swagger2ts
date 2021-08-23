// Generate by swagger2ts
/* default type by generation start */
interface MapAny {
  [key: string]: any
}
interface MapString {
  [key: string]: string | undefined
}
/* default type by generation end */

export type AccountType = 0 | 1 | 2 | -1 | undefined
export type PlatformEnum = 0 | 1 | 2 | 3 | 4 | 5 | undefined
export interface LoginModel {clientId?: string | null, userName?: string | null, password?: string | null, accountType?: AccountType, platform?: PlatformEnum, pictureId?: string | null, code?: string | null}
export interface LoginUserOutput {userId?: string | null, userName?: string | null, realName?: string | null}
export interface LoginUserOutputAuthResut {error?: string | null, access_token?: string | null, expires_in?: number, token_type?: string | null, refresh_token?: string | null, error_description?: string | null, user?: LoginUserOutput}
export interface LoginUserOutputAuthResutIResultModel {data?: LoginUserOutputAuthResut}
export interface SpaLoginModel {userName?: string | null, password?: string | null, returnUrl?: string | null}
export interface IResultModel {successful?: boolean, code?: number, msg?: string | null}
export type ClientEnums = 1 | 2 | undefined
export interface MenuOutput {id?: string | null, name?: string | null, link?: string | null, remarks?: string | null, show?: boolean, sort?: number, target?: number, type?: number, client?: ClientEnums, icon?: string | null, children?: Array<MenuOutput>, component?: string | null, routeParams?: string | null}
export interface RolesDto {id?: string | null, roleName?: string | null, code?: string | null, remarks?: string | null, sortId?: number}
export interface InitAppUserInfoOutput {id?: string | null, userId?: string | null, userName?: string | null, email?: string | null, phoneNumber?: string | null, headPortraitCode?: string | null, realName?: string | null, sex?: number, status?: number, contact?: string | null, rolesId?: Array<string | undefined>, rolesName?: Array<string | undefined>, userType?: number, idCard?: string | null, roles?: Array<RolesDto>, enterpriseName?: string | null}
export interface InitAppOutput {menus?: Array<MenuOutput>, buttons?: Array<string | undefined>, userInfo?: InitAppUserInfoOutput}
export interface InitAppOutputIResultModel {data?: InitAppOutput}
export interface AppVersionDto {id?: string | null, appId?: string | null, describe?: string | null, fileCode?: string | null, showTips?: boolean, version?: string | null, type?: number, creationTime?: string}
export interface AppVersionDtoPageList {page?: number, pageSize?: number, totalCount?: number, order?: string | null, list?: Array<AppVersionDto>}
export interface AppVersionDtoPageListIResultModel {data?: AppVersionDtoPageList}
export interface AreaListOutput {id?: string | null, name?: string | null, code?: string | null, parentId?: string | null, pinYin?: string | null, level?: number, type?: boolean}
export interface AreaListOutputPageList {page?: number, pageSize?: number, totalCount?: number, order?: string | null, list?: Array<AreaListOutput>}
export interface AreaListOutputPageListIResultModel {data?: AreaListOutputPageList}
export interface AreaDto {id?: string | null, code?: string | null, name?: string | null, enabled?: boolean, sortId?: number | null, pinYin?: string | null, fullPinYin?: string | null, isLeaf?: boolean, level?: number, parentId?: string | null, path?: string | null, type?: boolean}
export interface RemoveModel {id?: string | null, ids?: string | null}
export interface StringTreeOptionResultModel {label?: string | null, value?: string | null, disabled?: boolean, isLeaf?: boolean, level?: number | null, data?: any, id?: string | null, pid?: string | null, children?: Array<StringTreeOptionResultModel>, sortId?: number}
export interface TreeOptionResultModel {label?: string | null, value?: string | null, disabled?: boolean, isLeaf?: boolean, level?: number | null, data?: any, id?: string | null, pid?: string | null, children?: Array<StringTreeOptionResultModel>, sortId?: number}
export interface TreeOptionResultModelListIResultModel {data?: Array<TreeOptionResultModel>}
export interface StringOptionResultModel {label?: string | null, value?: string | null, disabled?: boolean, data?: any, sortId?: number}
export interface StringOptionResultModelListIResultModel {data?: Array<StringOptionResultModel>}
export interface AuditListOutput {id?: string | null, route?: string | null, routeSummary?: string | null, url?: string | null, method?: string | null, statusCode?: number, remoteIP?: string | null, userId?: string | null, userName?: string | null, creationTime?: string}
export interface AuditListOutputPageList {page?: number, pageSize?: number, totalCount?: number, order?: string | null, list?: Array<AuditListOutput>}
export interface AuditListOutputPageListIResultModel {data?: AuditListOutputPageList}
export interface DictionaryDto {id?: string | null, extend?: string | null, name?: string | null, parentId?: string | null, remark?: string | null, sortId?: number | null, typeId?: string | null, value?: string | null, isEnable?: boolean}
export interface DictionaryType {id?: string | null, creationTime?: string, creatorUserId?: string | null, creatorUserName?: string | null, lastModificationTime?: string, lastModifierUserId?: string | null, lastModifierUserName?: string | null, isDeleted?: boolean, code?: string | null, name?: string | null, dictionarys?: Array<Dictionary>}
export interface Dictionary {id?: string | null, creationTime?: string, creatorUserId?: string | null, creatorUserName?: string | null, lastModificationTime?: string, lastModifierUserId?: string | null, lastModifierUserName?: string | null, isDeleted?: boolean, typeId?: string | null, isEnable?: boolean, parentId?: string | null, extend?: string | null, name?: string | null, remark?: string | null, sortId?: number | null, value?: string | null, pDictionary?: Dictionary, dictionaryType?: DictionaryType, dictionarys?: Array<Dictionary>}
export interface DictionaryIResultModel {data?: Dictionary}
export interface DictionaryDtoPageList {page?: number, pageSize?: number, totalCount?: number, order?: string | null, list?: Array<DictionaryDto>}
export interface DictionaryDtoPageListIResultModel {data?: DictionaryDtoPageList}
export interface StringRemoveModel {id?: string | null, ids?: string | null}
export interface DictionaryListIResultModel {data?: Array<Dictionary>}
export interface StringTreeOptionResultModelDto {label?: string | null, value?: string | null, disabled?: boolean, isLeaf?: boolean, level?: number | null, data?: any, id?: string | null, pid?: string | null, children?: Array<StringTreeOptionResultModelDto>, sortId?: number, extend?: string | null}
export interface StringTreeOptionResultModelDtoListIResultModel {data?: Array<StringTreeOptionResultModelDto>}
export interface DictionaryTypeDto {id?: string | null, code?: string | null, name?: string | null}
export interface DictionaryTypeIResultModel {data?: DictionaryType}
export interface DictionaryTypeDtoPageList {page?: number, pageSize?: number, totalCount?: number, order?: string | null, list?: Array<DictionaryTypeDto>}
export interface DictionaryTypeDtoPageListIResultModel {data?: DictionaryTypeDtoPageList}
export interface EnterpriseListOutput {id?: string | null, areaCode?: string | null, areaName?: string | null, code?: string | null, contactNumber?: string | null, contactPerson?: string | null, isEnabled?: boolean, legalRepresentative?: string | null, legalRepresentativeNumber?: string | null, level?: number, name?: string | null, path?: string | null, pathText?: string | null, pinYin?: string | null, simpleName?: string | null, sortId?: number, type?: number}
export interface EnterpriseListOutputPageList {page?: number, pageSize?: number, totalCount?: number, order?: string | null, list?: Array<EnterpriseListOutput>}
export interface EnterpriseListOutputPageListIResultModel {data?: EnterpriseListOutputPageList}
export interface EnterpriseOutput {id?: string | null, areaCode?: string | null, areaName?: string | null, code?: string | null, contactNumber?: string | null, contactPerson?: string | null, isEnabled?: boolean, legalRepresentative?: string | null, legalRepresentativeNumber?: string | null, level?: number, name?: string | null, path?: string | null, pathText?: string | null, pinYin?: string | null, simpleName?: string | null, sortId?: number, type?: number}
export interface EnterpriseOutputIResultModel {data?: EnterpriseOutput}
export interface EnterpriseInput {id?: string | null, parentId?: string | null, areaCode?: string | null, areaName?: string | null, code?: string | null, contactNumber?: string | null, contactPerson?: string | null, isEnabled?: boolean, legalRepresentative?: string | null, legalRepresentativeNumber?: string | null, name?: string | null, sortId?: number, type?: number}
export type FaqCategoryOutputType = 0 | 1 | undefined
export interface FaqCategoryTreeOutput {id?: string | null, parentId?: string | null, icon?: string | null, name?: string | null, path?: string | null, remarks?: string | null, sort?: number, type?: FaqCategoryOutputType, children?: Array<FaqCategoryTreeOutput>}
export interface FaqCategoryTreeOutputListIResultModel {data?: Array<FaqCategoryTreeOutput>}
export interface FaqCategoryOutput {id?: string | null, parentId?: string | null, icon?: string | null, name?: string | null, path?: string | null, remarks?: string | null, sort?: number}
export interface FaqCategoryOutputIResultModel {data?: FaqCategoryOutput}
export interface FaqCategoryInput {id?: string | null, parentId?: string | null, icon?: string | null, name?: string | null, path?: string | null, remarks?: string | null, sort?: number}
export interface FaqContentListOutput {id?: string | null, categoryId?: string | null, content?: string | null, readingQuantity?: number, remarks?: string | null, sort?: number, title?: string | null}
export interface FaqContentListOutputPageList {page?: number, pageSize?: number, totalCount?: number, order?: string | null, list?: Array<FaqContentListOutput>}
export interface FaqContentListOutputPageListIResultModel {data?: FaqContentListOutputPageList}
export interface FaqContentOutput {id?: string | null, categoryId?: string | null, content?: string | null, readingQuantity?: number, remarks?: string | null, sort?: number, title?: string | null}
export interface FaqContentOutputIResultModel {data?: FaqContentOutput}
export interface FaqContentInput {id?: string | null, categoryId?: string | null, content?: string | null, readingQuantity?: number, remarks?: string | null, sort?: number, title?: string | null}
export interface LoginLogListOutput {id?: string | null, ip?: string | null, browser?: string | null, os?: string | null, device?: string | null, elapsedMilliseconds?: number, status?: boolean, msg?: string | null, userName?: string | null, creationTime?: string, realName?: string | null}
export interface LoginLogListOutputPageList {page?: number, pageSize?: number, totalCount?: number, order?: string | null, list?: Array<LoginLogListOutput>}
export interface LoginLogListOutputPageListIResultModel {data?: LoginLogListOutputPageList}
export interface MenuInput {id?: string | null, parentId?: string | null, icon?: string | null, iconColor?: string | null, link?: string | null, moduleCode?: string | null, name?: string | null, remarks?: string | null, routeParams?: string | null, show?: boolean, sort?: number, target?: number, client?: ClientEnums, component?: string | null}
export interface Api {id?: string | null, parentId?: string | null, code?: string | null, enable?: boolean, httpMethod?: string | null, level?: number, name?: string | null, path?: string | null, pathText?: string | null, remarks?: string | null}
export interface Enterprise {id?: string | null, creationTime?: string, creatorUserId?: string | null, creatorUserName?: string | null, lastModificationTime?: string, lastModifierUserId?: string | null, lastModifierUserName?: string | null, isDeleted?: boolean, parentId?: string | null, areaCode?: string | null, areaName?: string | null, code?: string | null, contactNumber?: string | null, contactPerson?: string | null, isEnabled?: boolean, legalRepresentative?: string | null, legalRepresentativeNumber?: string | null, level?: number, name?: string | null, path?: string | null, pathText?: string | null, pinYin?: string | null, simpleName?: string | null, sortId?: number, type?: number, organizations?: Array<Organizations>, userInfos?: Array<UserInfo>}
export interface Organizations {id?: string | null, creationTime?: string, creatorUserId?: string | null, creatorUserName?: string | null, lastModificationTime?: string, lastModifierUserId?: string | null, lastModifierUserName?: string | null, isDeleted?: boolean, enterpriseId?: string | null, leader?: string | null, level?: number, name?: string | null, parentId?: string | null, path?: string | null, pathText?: string | null, sortId?: number, enterprise?: Enterprise, userInfos?: Array<UserInfo>}
export interface ClaimsIdentity {authenticationType?: string | null, isAuthenticated?: boolean, actor?: ClaimsIdentity, bootstrapContext?: any, claims?: Array<Claim>, label?: string | null, name?: string | null, nameClaimType?: string | null, roleClaimType?: string | null}
export interface Claim {issuer?: string | null, originalIssuer?: string | null, properties?: {}, subject?: ClaimsIdentity, type?: string | null, value?: string | null, valueType?: string | null}
export interface UserInfo {id?: string | null, creationTime?: string, creatorUserId?: string | null, creatorUserName?: string | null, lastModificationTime?: string, lastModifierUserId?: string | null, lastModifierUserName?: string | null, isDeleted?: boolean, enterpriseId?: string | null, orgId?: string | null, email?: string | null, headPortraitCode?: string | null, idCard?: string | null, passwordHash?: string | null, passwordSalt?: string | null, phoneNumber?: string | null, realName?: string | null, sex?: number, status?: number, type?: number, userName?: string | null, organizations?: Organizations, enterprise?: Enterprise, roles?: Array<Roles>, claims?: Array<Claim>}
export interface Roles {id?: string | null, creationTime?: string, creatorUserId?: string | null, creatorUserName?: string | null, lastModificationTime?: string, lastModifierUserId?: string | null, lastModifierUserName?: string | null, isDeleted?: boolean, code?: string | null, remarks?: string | null, roleName?: string | null, sortId?: number, menus?: Array<Menu>, users?: Array<UserInfo>, buttons?: Array<Button>}
export interface Button {id?: string | null, creationTime?: string, creatorUserId?: string | null, creatorUserName?: string | null, lastModificationTime?: string, lastModifierUserId?: string | null, lastModifierUserName?: string | null, isDeleted?: boolean, menuId?: string | null, code?: string | null, enable?: boolean, name?: string | null, remarks?: string | null, menu?: Menu, apis?: Array<Api>, roles?: Array<Roles>}
export interface Menu {id?: string | null, creationTime?: string, creatorUserId?: string | null, creatorUserName?: string | null, lastModificationTime?: string, lastModifierUserId?: string | null, lastModifierUserName?: string | null, isDeleted?: boolean, client?: ClientEnums, icon?: string | null, iconColor?: string | null, parentId?: string | null, level?: number, link?: string | null, moduleCode?: string | null, name?: string | null, path?: string | null, remarks?: string | null, routeParams?: string | null, show?: boolean, sort?: number, target?: number, type?: number, component?: string | null, buttons?: Array<Button>, menus?: Array<Menu>, roles?: Array<Roles>}
export interface MenuIResultModel {data?: Menu}
export interface MenuPageList {page?: number, pageSize?: number, totalCount?: number, order?: string | null, list?: Array<Menu>}
export interface MenuPageListIResultModel {data?: MenuPageList}
export interface MenuOutputListIResultModel {data?: Array<MenuOutput>}
export interface ButtonInfoDto {id?: string | null, name?: string | null, code?: string | null, remarks?: string | null, apisId?: Array<string | undefined>}
export interface ButtonDto {menuId?: string | null, buttons?: Array<ButtonInfoDto>}
export interface ButtonDtoIResultModel {data?: ButtonDto}
export type NotifySendType = 1 | 2 | 3 | undefined
export interface NotifyListOutput {id?: string | null, title?: string | null, desc?: string | null, payload?: any, readed?: boolean, creationTime?: string, type?: string | null, typeLabel?: string | null, sendType?: NotifySendType}
export interface NotifyListOutputPageList {page?: number, pageSize?: number, totalCount?: number, order?: string | null, list?: Array<NotifyListOutput>}
export interface NotifyListOutputPageListIResultModel {data?: NotifyListOutputPageList}
export interface NotifyCountOutput {count?: number}
export interface NotifyCountOutputIResultModel {data?: NotifyCountOutput}
export interface NotifyReadedInput {ids?: Array<string | undefined>}
export interface StringNotifyInput {sendType?: NotifySendType, type?: string | null, title?: string | null, desc?: string | null, payload?: string | null, userIds?: Array<string | undefined>, roldCodes?: Array<string | undefined>}
export interface OpenApiTreeOutput {id?: string | null, name?: string | null, level?: number, children?: Array<OpenApiTreeOutput>}
export interface OpenApiTreeOutputListIResultModel {data?: Array<OpenApiTreeOutput>}
export interface OrganizationsListOutput {id?: string | null, enterpriseId?: string | null, leader?: string | null, level?: number, name?: string | null, parentId?: string | null, path?: string | null, pathText?: string | null, sortId?: number}
export interface OrganizationsListOutputPageList {page?: number, pageSize?: number, totalCount?: number, order?: string | null, list?: Array<OrganizationsListOutput>}
export interface OrganizationsListOutputPageListIResultModel {data?: OrganizationsListOutputPageList}
export interface OrganizationsOutput {id?: string | null, enterpriseId?: string | null, leader?: string | null, level?: number, name?: string | null, parentId?: string | null, path?: string | null, pathText?: string | null, sortId?: number}
export interface OrganizationsOutputIResultModel {data?: OrganizationsOutput}
export interface OrganizationsInput {id?: string | null, enterpriseId?: string | null, leader?: string | null, name?: string | null, parentId?: string | null, sortId?: number}
export interface OrganizationTreeOptionsQuery {path?: string | null}
export interface RolesListOutput {id?: string | null, code?: string | null, remarks?: string | null, roleName?: string | null, sortId?: number}
export interface RolesListOutputPageList {page?: number, pageSize?: number, totalCount?: number, order?: string | null, list?: Array<RolesListOutput>}
export interface RolesListOutputPageListIResultModel {data?: RolesListOutputPageList}
export interface RolesDtoIResultModel {data?: RolesDto}
export interface SetMenusDto {roleId?: string | null, menus?: string | null}
export interface RoleButtonDto {id?: string | null, name?: string | null, checked?: boolean}
export interface RoleMenuTreeOutput {id?: string | null, name?: string | null, checked?: boolean, children?: Array<RoleMenuTreeOutput>, buttons?: Array<RoleButtonDto>}
export interface RoleMenuTreeOutputListIResultModel {data?: Array<RoleMenuTreeOutput>}
export interface SampleOutput {id?: string | null}
export interface SampleOutputPageList {page?: number, pageSize?: number, totalCount?: number, order?: string | null, list?: Array<SampleOutput>}
export interface SampleOutputPageListIResultModel {data?: SampleOutputPageList}
export interface UserInfoListOutput {id?: string | null, userName?: string | null, email?: string | null, phoneNumber?: string | null, headPortraitCode?: string | null, realName?: string | null, sex?: number, status?: number, contact?: string | null, rolesId?: Array<string | undefined>, rolesName?: Array<string | undefined>, orgId?: string | null, orgName?: string | null, enterpriseId?: string | null, type?: number, userType?: number, idCard?: string | null}
export interface UserInfoListOutputPageList {page?: number, pageSize?: number, totalCount?: number, order?: string | null, list?: Array<UserInfoListOutput>}
export interface UserInfoListOutputPageListIResultModel {data?: UserInfoListOutputPageList}
export interface UserInfoOutput {id?: string | null, userId?: string | null, userName?: string | null, email?: string | null, phoneNumber?: string | null, headPortraitCode?: string | null, realName?: string | null, sex?: number, status?: number, contact?: string | null, rolesId?: Array<string | undefined>, rolesName?: Array<string | undefined>, userType?: number, idCard?: string | null, roles?: Array<RolesDto>}
export interface UserInfoOutputIResultModel {data?: UserInfoOutput}
export interface UserInfoInput {id?: string | null, enterpriseId?: string | null, orgId?: string | null, email?: string | null, headPortraitCode?: string | null, idCard?: string | null, phoneNumber?: string | null, realName?: string | null, sex?: number, status?: number, type?: number, userName?: string | null, password?: string | null, rolesId?: Array<string | undefined>}
export interface UsersPwdDto {oldPassword?: string | null, password?: string | null, rePassword?: string | null}
export interface ResetPwdDto {id?: string | null, password?: string | null, rePassword?: string | null}
export interface UpdateUserBasicInfoInput {headPortraitCode?: string | null, realName?: string | null, email?: string | null}

export interface SwaggerApi{
  /**
   * @tag Account
   * @summary 登录(密码模式)
   */
  post(url: "/api/Account/LoginWithPwd", options: {path?: MapString, query?: MapString, header?: MapString, body: LoginModel, signal?: AbortSignal}): Promise<LoginUserOutputAuthResutIResultModel>
  /**
   * @tag Account
   * @summary 登录
   */
  post(url: "/api/Account/Login", options: {path?: MapString, query?: MapString, header?: MapString, body: SpaLoginModel, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Account
   * @summary 退出登录
   */
  get(url: "/api/Account/Logout", options: {path?: MapString, query: {logoutId?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Account
   * @summary Ids登录错误信息
   */
  get(url: "/api/Account/Error", options: {path?: MapString, query: {errorId?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag App
   * @summary 获取初始化数据
   */
  get(url: "/api/App/Init", options: {path?: MapString, query: {client?: ClientEnums}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<InitAppOutputIResultModel>
  /**
   * @tag AppVersion
   * @summary 获取最新版本信息
   */
  get(url: "/api/AppVersion/GetVersion", options: {path?: MapString, query: {type?: number}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag AppVersion
   * @summary 增加版本信息
   */
  post(url: "/api/AppVersion/Add", options: {path?: MapString, query?: MapString, header?: MapString, body: AppVersionDto, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag AppVersion
   * @summary 获取版本记录
   */
  get(url: "/api/AppVersion/GetVersionRecords", options: {path?: MapString, query: {Type?: number, Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<AppVersionDtoPageListIResultModel>
  /**
   * @tag Area
   * @summary 分页查询
   */
  get(url: "/api/Area/Page", options: {path?: MapString, query: {Level?: number | null, ParentCode?: string | null, ParentId?: string | null, Code?: string | null, Name?: string | null, Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<AreaListOutputPageListIResultModel>
  /**
   * @tag Area
   * @summary 添加区域
   */
  post(url: "/api/Area/Add", options: {path?: MapString, query?: MapString, header?: MapString, body: AreaDto, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Area
   * @summary 编辑区域
   */
  post(url: "/api/Area/Edit", options: {path?: MapString, query?: MapString, header?: MapString, body: AreaDto, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Area
   * @summary 删除区域
   */
  post(url: "/api/Area/Remove", options: {path?: MapString, query?: MapString, header?: MapString, body: RemoveModel, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Area
   * @summary 级联下拉选项
   */
  get(url: "/api/Area/TreeOptions", options: {path?: MapString, query: {Level?: number | null, LevelFull?: number | null, ParentCode?: string | null, AreaCode?: string | null, AreaCodeFull?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<TreeOptionResultModelListIResultModel>
  /**
   * @tag Area
   * @summary 特定级别的下拉选项
   */
  get(url: "/api/Area/OptionsBySpecificLevel", options: {path?: MapString, query: {Level?: number | null, LevelFull?: number | null, ParentCode?: string | null, AreaCode?: string | null, AreaCodeFull?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<StringOptionResultModelListIResultModel>
  /**
   * @tag Area
   * @summary 格式化区域数据
   */
  post(url: "/api/Area/DataFormat", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Audit
   * @summary 列表查询
   */
  get(url: "/api/Audit/Page", options: {path?: MapString, query: {FilterNoUserLog?: boolean, Route?: string | null, RouteSummary?: string | null, Url?: string | null, Method?: string | null, StatusCode?: number | null, RemoteIP?: string | null, UserId?: string | null, UserName?: string | null, CreationTimeStart?: string | null, CreationTimeEnd?: string | null, Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<AuditListOutputPageListIResultModel>
  /**
   * @tag Dictionary
   * @summary 新增
   */
  post(url: "/api/Dictionary/Add", options: {path?: MapString, query?: MapString, header?: MapString, body: DictionaryDto, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Dictionary
   * @summary 详情
   */
  get(url: "/api/Dictionary/Detail", options: {path?: MapString, query: {id?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<DictionaryIResultModel>
  /**
   * @tag Dictionary
   * @summary 修改
   */
  post(url: "/api/Dictionary/Edit", options: {path?: MapString, query?: MapString, header?: MapString, body: DictionaryDto, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Dictionary
   * @summary 分页查询
   */
  get(url: "/api/Dictionary/Page", options: {path?: MapString, query: {Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<DictionaryDtoPageListIResultModel>
  /**
   * @tag Dictionary
   * @summary 移除
   */
  post(url: "/api/Dictionary/Remove", options: {path?: MapString, query?: MapString, header?: MapString, body: StringRemoveModel, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Dictionary
   * @summary 根据类型树形获取
   */
  get(url: "/api/Dictionary/ListByType", options: {path?: MapString, query: {typeId?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<DictionaryListIResultModel>
  /**
   * @tag Dictionary
   * @summary 根据数据字典类型code获取对应下拉选项
   */
  get(url: "/api/Dictionary/OptionsByCode", options: {path?: MapString, query: {code?: string | null, isLoadAll?: boolean}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<StringOptionResultModelListIResultModel>
  /**
   * @tag Dictionary
   * @summary 根据数据字典类型code获取对应下拉选项（多个）
   */
  get(url: "/api/Dictionary/OptionsListByCodes", options: {path?: MapString, query: {codes?: string | null, isLoadAll?: boolean}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<StringOptionResultModelListIResultModel>
  /**
   * @tag Dictionary
   * @summary 根据类型树形获取(树形)
   */
  get(url: "/api/Dictionary/TreeOptionsByCode", options: {path?: MapString, query: {code?: string | null, isLoadAll?: boolean}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<StringTreeOptionResultModelDtoListIResultModel>
  /**
   * @tag DictionaryType
   * @summary 新增
   */
  post(url: "/api/DictionaryType/Add", options: {path?: MapString, query?: MapString, header?: MapString, body: DictionaryTypeDto, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag DictionaryType
   * @summary 详情
   */
  get(url: "/api/DictionaryType/Detail", options: {path?: MapString, query: {id?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<DictionaryTypeIResultModel>
  /**
   * @tag DictionaryType
   * @summary 修改
   */
  post(url: "/api/DictionaryType/Edit", options: {path?: MapString, query?: MapString, header?: MapString, body: DictionaryTypeDto, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag DictionaryType
   * @summary 分页查询
   */
  get(url: "/api/DictionaryType/Page", options: {path?: MapString, query: {Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<DictionaryTypeDtoPageListIResultModel>
  /**
   * @tag DictionaryType
   * @summary 移除
   */
  post(url: "/api/DictionaryType/Remove", options: {path?: MapString, query?: MapString, header?: MapString, body: StringRemoveModel, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag DictionaryType
   * @summary 下拉选择
   */
  get(url: "/api/DictionaryType/Options", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<StringOptionResultModelListIResultModel>
  /**
   * @tag Enterprise
   * @summary 分页列表
   */
  get(url: "/api/Enterprise/Page", options: {path?: MapString, query: {Id?: string | null, Code?: string | null, Level?: number | null, Name?: string | null, Path?: string | null, Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<EnterpriseListOutputPageListIResultModel>
  /**
   * @tag Enterprise
   * @summary 详情
   */
  get(url: "/api/Enterprise/Detail", options: {path?: MapString, query: {id?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<EnterpriseOutputIResultModel>
  /**
   * @tag Enterprise
   * @summary 添加
   */
  post(url: "/api/Enterprise/Add", options: {path?: MapString, query?: MapString, header?: MapString, body: EnterpriseInput, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Enterprise
   * @summary 编辑
   */
  post(url: "/api/Enterprise/Edit", options: {path?: MapString, query?: MapString, header?: MapString, body: EnterpriseInput, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Enterprise
   * @summary 删除
   */
  post(url: "/api/Enterprise/Remove", options: {path?: MapString, query?: MapString, header?: MapString, body: StringRemoveModel, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Enterprise
   * @summary 级联下拉选项
   */
  get(url: "/api/Enterprise/TreeOptions", options: {path?: MapString, query: {Path?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<TreeOptionResultModelListIResultModel>
  /**
   * @tag FaqCategory
   * @summary 获取所有树形帮助分类
   */
  get(url: "/api/FaqCategory/Tree", options: {path?: MapString, query: {ParentId?: string | null, Name?: string | null, Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<FaqCategoryTreeOutputListIResultModel>
  /**
   * @tag FaqCategory
   * @summary 获取所有树形帮助分类并附带内容
   */
  get(url: "/api/FaqCategory/TreeAdnContnet", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<FaqCategoryTreeOutputListIResultModel>
  /**
   * @tag FaqCategory
   * @summary 详情
   */
  get(url: "/api/FaqCategory/Detail", options: {path?: MapString, query: {id?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<FaqCategoryOutputIResultModel>
  /**
   * @tag FaqCategory
   * @summary 添加
   */
  post(url: "/api/FaqCategory/Add", options: {path?: MapString, query?: MapString, header?: MapString, body: FaqCategoryInput, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag FaqCategory
   * @summary 编辑
   */
  post(url: "/api/FaqCategory/Edit", options: {path?: MapString, query?: MapString, header?: MapString, body: FaqCategoryInput, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag FaqCategory
   * @summary 删除
   */
  post(url: "/api/FaqCategory/Remove", options: {path?: MapString, query?: MapString, header?: MapString, body: StringRemoveModel, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag FaqContent
   * @summary 分页列表
   */
  get(url: "/api/FaqContent/Page", options: {path?: MapString, query: {CategoryId?: string | null, Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<FaqContentListOutputPageListIResultModel>
  /**
   * @tag FaqContent
   * @summary 详情
   */
  get(url: "/api/FaqContent/Detail", options: {path?: MapString, query: {id?: string | null, isView?: boolean}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<FaqContentOutputIResultModel>
  /**
   * @tag FaqContent
   * @summary 添加
   */
  post(url: "/api/FaqContent/Add", options: {path?: MapString, query?: MapString, header?: MapString, body: FaqContentInput, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag FaqContent
   * @summary 编辑
   */
  post(url: "/api/FaqContent/Edit", options: {path?: MapString, query?: MapString, header?: MapString, body: FaqContentInput, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag FaqContent
   * @summary 删除
   */
  post(url: "/api/FaqContent/Remove", options: {path?: MapString, query?: MapString, header?: MapString, body: StringRemoveModel, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag File
   * @summary 文件上传
   */
  post(url: "/api/File/Upload", options: {path?: MapString, query?: MapString, header?: MapString, body: FormData /* {module?: string | null} */, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag File
   * @summary 图片上传
   */
  post(url: "/api/File/UploadPic", options: {path?: MapString, query?: MapString, header?: MapString, body: FormData /* {module?: string | null, width?: number | null, height?: number | null} */, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag File
   * @summary 获取文件(返回byte[])
   */
  get(url: "/api/File/Get", options: {path?: MapString, query: {code?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<null>
  /**
   * @tag File
   * @summary 下载文件(返回Stream)
   */
  get(url: "/api/File/Download", options: {path?: MapString, query: {code?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<null>
  /**
   * @tag File
   */
  get(url: "/api/File/DownloadByStream", options: {path?: MapString, query: {code?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<null>
  /**
   * @tag File
   * @summary 删除文件
   */
  post(url: "/api/File/Remove", options: {path?: MapString, query?: MapString, header?: MapString, body: FormData /* {code?: string | null} */, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag LoginLog
   * @summary 列表
   */
  get(url: "/api/LoginLog/Page", options: {path?: MapString, query: {UserName?: string | null, Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<LoginLogListOutputPageListIResultModel>
  /**
   * @tag Menu
   * @summary 新增
   */
  post(url: "/api/Menu/Add", options: {path?: MapString, query?: MapString, header?: MapString, body: MenuInput, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Menu
   * @summary 修改
   */
  post(url: "/api/Menu/Edit", options: {path?: MapString, query?: MapString, header?: MapString, body: MenuInput, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Menu
   * @summary 详情
   */
  get(url: "/api/Menu/Detail", options: {path?: MapString, query: {id?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<MenuIResultModel>
  /**
   * @tag Menu
   * @summary 分页
   */
  get(url: "/api/Menu/Page", options: {path?: MapString, query: {Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<MenuPageListIResultModel>
  /**
   * @tag Menu
   * @summary 获取所有树形菜单
   */
  get(url: "/api/Menu/Tree", options: {path?: MapString, query: {client?: ClientEnums}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<MenuOutputListIResultModel>
  /**
   * @tag Menu
   * @summary 获取角色树形菜单
   */
  get(url: "/api/Menu/LoadTreeByRole", options: {path?: MapString, query: {roleId?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<MenuOutputListIResultModel>
  /**
   * @tag Menu
   * @summary 获取菜单按钮
   */
  get(url: "/api/Menu/Buttons", options: {path?: MapString, query: {menuId?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<ButtonDtoIResultModel>
  /**
   * @tag Menu
   * @summary 配置菜单按钮
   */
  post(url: "/api/Menu/SetButton", options: {path?: MapString, query?: MapString, header?: MapString, body: ButtonDto, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Menu
   * @summary 级联下拉选项
   */
  get(url: "/api/Menu/TreeOptions", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<TreeOptionResultModelListIResultModel>
  /**
   * @tag Menu
   * @summary 删除
   */
  post(url: "/api/Menu/Remove", options: {path?: MapString, query?: MapString, header?: MapString, body: StringRemoveModel, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Notify
   * @summary 获取消息类型
   */
  get(url: "/api/Notify/Options", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<StringOptionResultModelListIResultModel>
  /**
   * @tag Notify
   * @summary 获取通知列表
   */
  get(url: "/api/Notify/Page", options: {path?: MapString, query: {Type?: string | null, Readed?: boolean | null, Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<NotifyListOutputPageListIResultModel>
  /**
   * @tag Notify
   * @summary 获取通知列表(信息预览框使用)
   */
  get(url: "/api/Notify/PageLite", options: {path?: MapString, query: {Type?: string | null, Readed?: boolean | null, Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<NotifyListOutputPageListIResultModel>
  /**
   * @tag Notify
   * @summary 获取未读消息数量
   */
  get(url: "/api/Notify/UnReadedCount", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<NotifyCountOutputIResultModel>
  /**
   * @tag Notify
   * @summary 通知已读
   */
  post(url: "/api/Notify/Readed", options: {path?: MapString, query?: MapString, header?: MapString, body: NotifyReadedInput, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Notify
   * @summary 全部已读
   */
  post(url: "/api/Notify/ReadAll", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Notify
   * @summary 删除消息(参数传到Ids属性,多个用,分开)
   */
  post(url: "/api/Notify/Remove", options: {path?: MapString, query?: MapString, header?: MapString, body: StringRemoveModel, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Notify
   * @summary 删除所有消息
   */
  post(url: "/api/Notify/RemoveAll", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Notify
   * @summary 添加消息，外部调用（泛型参数报404）
   */
  post(url: "/api/Notify/Addmsg", options: {path?: MapString, query?: MapString, header?: MapString, body: StringNotifyInput, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag OpenApi
   * @summary 同步本系统API信息到数据库
   */
  post(url: "/api/OpenApi/SyncCurrent", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag OpenApi
   * @summary 同步所有系统API信息(未实现)
   */
  post(url: "/api/OpenApi/SyncAll", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag OpenApi
   * @summary 同步API信息到数据库
   */
  post(url: "/api/OpenApi/AddOrUpdate", options: {path?: MapString, query: {data?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag OpenApi
   * @summary 树形下拉选项
   */
  get(url: "/api/OpenApi/TreeOptions", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<OpenApiTreeOutputListIResultModel>
  /**
   * @tag Organizations
   * @summary 分页列表
   */
  get(url: "/api/Organizations/Page", options: {path?: MapString, query: {EnterpriseId?: string | null, Name?: string | null, Path?: string | null, Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<OrganizationsListOutputPageListIResultModel>
  /**
   * @tag Organizations
   * @summary 详情
   */
  get(url: "/api/Organizations/Detail", options: {path?: MapString, query: {id?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<OrganizationsOutputIResultModel>
  /**
   * @tag Organizations
   * @summary 添加
   */
  post(url: "/api/Organizations/Add", options: {path?: MapString, query?: MapString, header?: MapString, body: OrganizationsInput, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Organizations
   * @summary 编辑
   */
  post(url: "/api/Organizations/Edit", options: {path?: MapString, query?: MapString, header?: MapString, body: OrganizationsInput, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Organizations
   * @summary 删除
   */
  post(url: "/api/Organizations/Remove", options: {path?: MapString, query?: MapString, header?: MapString, body: StringRemoveModel, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Organizations
   * @summary 级联下拉选项
   */
  get(url: "/api/Organizations/TreeOptions", options: {path?: MapString, query?: MapString, header?: MapString, body: OrganizationTreeOptionsQuery, signal?: AbortSignal}): Promise<TreeOptionResultModelListIResultModel>
  /**
   * @tag Roles
   * @summary 分页查询
   */
  get(url: "/api/Roles/Page", options: {path?: MapString, query: {RoleName?: string | null, Code?: string | null, Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<RolesListOutputPageListIResultModel>
  /**
   * @tag Roles
   * @summary 获取单个信息
   */
  get(url: "/api/Roles/Detail", options: {path?: MapString, query: {id?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<RolesDtoIResultModel>
  /**
   * @tag Roles
   * @summary 新增
   */
  post(url: "/api/Roles/Add", options: {path?: MapString, query?: MapString, header?: MapString, body: RolesDto, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Roles
   * @summary 修改
   */
  post(url: "/api/Roles/Edit", options: {path?: MapString, query?: MapString, header?: MapString, body: RolesDto, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Roles
   * @summary 移除
   */
  post(url: "/api/Roles/Remove", options: {path?: MapString, query?: MapString, header?: MapString, body: StringRemoveModel, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Roles
   * @summary 下拉选择
   */
  get(url: "/api/Roles/Options", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<StringOptionResultModelListIResultModel>
  /**
   * @tag Roles
   * @summary 设置菜单按钮
   */
  post(url: "/api/Roles/SetMenus", options: {path?: MapString, query?: MapString, header?: MapString, body: SetMenusDto, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Roles
   * @summary 获取菜单按钮
   */
  get(url: "/api/Roles/GetMenus", options: {path?: MapString, query: {roleId?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<RoleMenuTreeOutputListIResultModel>
  /**
   * @tag Sample
   * @summary 测试
   */
  get(url: "/api/Sample/Test", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Sample
   * @summary 输出日志
   */
  get(url: "/api/Sample/LogInfo", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<null>
  /**
   * @tag Sample
   */
  get(url: "/api/Sample/ResolveApis", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Sample
   * @summary 更新
   */
  post(url: "/api/Sample/Update", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Sample
   * @summary Page New
   */
  get(url: "/api/Sample/PageNew", options: {path?: MapString, query: {Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<SampleOutputPageListIResultModel>
  /**
   * @tag Sample
   * @summary Page
   */
  get(url: "/api/Sample/Page", options: {path?: MapString, query: {Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Sample
   */
  get(url: "/api/Sample/TestGlobalExceptionFilter", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Sample
   * @summary 获取登录信息
   */
  get(url: "/api/Sample/LoginInfo", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Test
   * @summary 缓存测试
   */
  get(url: "/api/Test/TestCache", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Test
   * @summary 随便测试
   */
  get(url: "/api/Test/Test2", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Test
   * @summary Aes测试
   */
  get(url: "/api/Test/TestAes", options: {path?: MapString, query: {text?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Test
   * @summary 时间返回格式测试
   */
  get(url: "/api/Test/TestDateTime", options: {path?: MapString, query: {time?: string}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Test
   * @summary 测试获取用户EID
   */
  get(url: "/api/Test/GetLoginEid", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Test
   * @summary 测试异常抛出
   */
  get(url: "/api/Test/ThrowEx", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Test
   * @summary OpenApiPolicy
   */
  get(url: "/api/Test/OpenApiPolicy", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag UserInfo
   * @summary 列表
   */
  get(url: "/api/UserInfo/Page", options: {path?: MapString, query: {UserName?: string | null, RealName?: string | null, PhoneNumber?: string | null, EnterpriseId?: string | null, Keyword?: string | null, Page?: number, PageSize?: number, TotalCount?: number, Order?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<UserInfoListOutputPageListIResultModel>
  /**
   * @tag UserInfo
   * @summary 获取单个信息
   */
  get(url: "/api/UserInfo/Detail", options: {path?: MapString, query: {id?: string | null}, header?: MapString, body?: any, signal?: AbortSignal}): Promise<UserInfoOutputIResultModel>
  /**
   * @tag UserInfo
   * @summary 添加
   */
  post(url: "/api/UserInfo/Add", options: {path?: MapString, query?: MapString, header?: MapString, body: UserInfoInput, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag UserInfo
   * @summary 编辑
   */
  post(url: "/api/UserInfo/Edit", options: {path?: MapString, query?: MapString, header?: MapString, body: UserInfoInput, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag UserInfo
   * @summary 修改密码
   */
  post(url: "/api/UserInfo/UpdatePwd", options: {path?: MapString, query?: MapString, header?: MapString, body: UsersPwdDto, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag UserInfo
   * @summary 重置密码
   */
  post(url: "/api/UserInfo/ResetPwd", options: {path?: MapString, query?: MapString, header?: MapString, body: ResetPwdDto, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag UserInfo
   * @summary 基本信息修改
   */
  post(url: "/api/UserInfo/UpdateUserBasicInfo", options: {path?: MapString, query?: MapString, header?: MapString, body: UpdateUserBasicInfoInput, signal?: AbortSignal}): Promise<IResultModel>
  /**
   * @tag Websocket
   * @summary Socket预连接
   */
  get(url: "/api/Websocket/PreConnect", options: {path?: MapString, query?: MapString, header?: MapString, body?: any, signal?: AbortSignal}): Promise<IResultModel>
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
  body?: any; // the request body
  signal?: AbortSignal; // abort signal to cancel request
  timeout?: number; // defaults to 60 * 1000 ms. if zero. then there is no timeout
}

interface RuntimeRequestOptions extends RuntimeRequestCommonOptions {
  url: string;
  method: string;
}

interface IRequestInterceptor {
  use(fn: RequestInterceptorFn): InterceptorCancelFn;
}

interface IResponseInterceptor {
  use(success: ResponseInterceptorSuccessFn<any>, error: ResponseInterceptorErrorFn<any>): InterceptorCancelFn;
}

type InterceptorCancelFn = () => void;
type RequestInterceptorFn = (config: RuntimeRequestOptions) => Promise<RuntimeRequestOptions>;
type ResponseInterceptorSuccessFn<T> = (config: RuntimeRequestOptions, response: Response, data: T) => Promise<T>;
type ResponseInterceptorErrorFn<T> = (config: RuntimeRequestOptions, Error: Error) => Promise<T>;
class RequestInterceptor implements IRequestInterceptor {
  private _fns: RequestInterceptorFn[] = [];
  public use(fn: RequestInterceptorFn) {
    this._fns.push(fn);

    return () => {
      const index = this._fns.findIndex((v) => v === fn);

      if (index > -1) {
        this._fns.splice(index, 1);
      }
    };
  }

  async run(config: RuntimeRequestOptions): Promise<RuntimeRequestOptions> {
    for (const fn of this._fns) {
      config = await fn(config);
    }

    return config;
  }
}

class ResponseInterceptor implements IResponseInterceptor {
  private _fnsSuccess: ResponseInterceptorSuccessFn<any>[] = [];
  private _fnsError: ResponseInterceptorErrorFn<any>[] = [];
  public use(successFn: ResponseInterceptorSuccessFn<any>, errorFn: ResponseInterceptorErrorFn<any>) {
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

  async runSuccess<T>(config: RuntimeRequestOptions, response: Response, data: T): Promise<T> {
    for (const fn of this._fnsSuccess) {
      data = await fn(config, response, data);
    }

    return data;
  }

  async runError<T>(config: RuntimeRequestOptions, err: Error): Promise<T> {
    let res = null;

    for (const fn of this._fnsError) {
      res = await fn(config, err);
    }

    return res;
  }
}

class Runtime {
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
      } as { common: RuntimeHeaderMapString; [method: string]: RuntimeHeaderMapString },
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

  public async request<T>(config: RuntimeRequestOptions): Promise<T> {
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
          body: config.body,
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

export const defaultApi = new Runtime("http://localhost", "") as unknown as (SwaggerApi & Runtime)