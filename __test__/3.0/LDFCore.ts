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
export interface LoginModel {clientId: string | undefined | null, userName: string | undefined | null, password: string | undefined | null, accountType: AccountType, platform: PlatformEnum, pictureId: string | undefined | null, code: string | undefined | null}
export interface LoginUserOutput {userId: string | undefined | null, userName: string | undefined | null, realName: string | undefined | null}
export interface LoginUserOutputAuthResut {error: string | undefined | null, access_token: string | undefined | null, expires_in: number | undefined, token_type: string | undefined | null, refresh_token: string | undefined | null, error_description: string | undefined | null, user: LoginUserOutput}
export interface LoginUserOutputAuthResutIResultModel {data: LoginUserOutputAuthResut}
export interface SpaLoginModel {userName: string | undefined | null, password: string | undefined | null, returnUrl: string | undefined | null}
export interface IResultModel {successful: boolean | undefined, code: number | undefined, msg: string | undefined | null}
export type ClientEnums = 1 | 2 | undefined
export interface MenuOutput {id: string | undefined | null, name: string | undefined | null, link: string | undefined | null, remarks: string | undefined | null, show: boolean | undefined, sort: number | undefined, target: number | undefined, type: number | undefined, client: ClientEnums, icon: string | undefined | null, children: Array<MenuOutput>, component: string | undefined | null, routeParams: string | undefined | null}
export interface RolesDto {id: string | undefined | null, roleName: string | undefined | null, code: string | undefined | null, remarks: string | undefined | null, sortId: number | undefined}
export interface InitAppUserInfoOutput {id: string | undefined | null, userId: string | undefined | null, userName: string | undefined | null, email: string | undefined | null, phoneNumber: string | undefined | null, headPortraitCode: string | undefined | null, realName: string | undefined | null, sex: number | undefined, status: number | undefined, contact: string | undefined | null, rolesId: Array<string | undefined>, rolesName: Array<string | undefined>, userType: number | undefined, idCard: string | undefined | null, roles: Array<RolesDto>, enterpriseName: string | undefined | null}
export interface InitAppOutput {menus: Array<MenuOutput>, buttons: Array<string | undefined>, userInfo: InitAppUserInfoOutput}
export interface InitAppOutputIResultModel {data: InitAppOutput}
export interface AppVersionDto {id: string | undefined | null, appId: string | undefined | null, describe: string | undefined | null, fileCode: string | undefined | null, showTips: boolean | undefined, version: string | undefined | null, type: number | undefined, creationTime: string | undefined}
export interface AppVersionDtoPageList {page: number | undefined, pageSize: number | undefined, totalCount: number | undefined, order: string | undefined | null, list: Array<AppVersionDto>}
export interface AppVersionDtoPageListIResultModel {data: AppVersionDtoPageList}
export interface AreaListOutput {id: string | undefined | null, name: string | undefined | null, code: string | undefined | null, parentId: string | undefined | null, pinYin: string | undefined | null, level: number | undefined, type: boolean | undefined}
export interface AreaListOutputPageList {page: number | undefined, pageSize: number | undefined, totalCount: number | undefined, order: string | undefined | null, list: Array<AreaListOutput>}
export interface AreaListOutputPageListIResultModel {data: AreaListOutputPageList}
export interface AreaDto {id: string | undefined | null, code: string | undefined | null, name: string | undefined | null, enabled: boolean | undefined, sortId: number | undefined | null, pinYin: string | undefined | null, fullPinYin: string | undefined | null, isLeaf: boolean | undefined, level: number | undefined, parentId: string | undefined | null, path: string | undefined | null, type: boolean | undefined}
export interface RemoveModel {id: string | undefined | null, ids: string | undefined | null}
export interface StringTreeOptionResultModel {label: string | undefined | null, value: string | undefined | null, disabled: boolean | undefined, isLeaf: boolean | undefined, level: number | undefined | null, data: any, id: string | undefined | null, pid: string | undefined | null, children: Array<StringTreeOptionResultModel>, sortId: number | undefined}
export interface TreeOptionResultModel {label: string | undefined | null, value: string | undefined | null, disabled: boolean | undefined, isLeaf: boolean | undefined, level: number | undefined | null, data: any, id: string | undefined | null, pid: string | undefined | null, children: Array<StringTreeOptionResultModel>, sortId: number | undefined}
export interface TreeOptionResultModelListIResultModel {data: Array<TreeOptionResultModel>}
export interface StringOptionResultModel {label: string | undefined | null, value: string | undefined | null, disabled: boolean | undefined, data: any, sortId: number | undefined}
export interface StringOptionResultModelListIResultModel {data: Array<StringOptionResultModel>}
export interface AuditListOutput {id: string | undefined | null, route: string | undefined | null, routeSummary: string | undefined | null, url: string | undefined | null, method: string | undefined | null, statusCode: number | undefined, remoteIP: string | undefined | null, userId: string | undefined | null, userName: string | undefined | null, creationTime: string | undefined}
export interface AuditListOutputPageList {page: number | undefined, pageSize: number | undefined, totalCount: number | undefined, order: string | undefined | null, list: Array<AuditListOutput>}
export interface AuditListOutputPageListIResultModel {data: AuditListOutputPageList}
export interface DictionaryDto {id: string | undefined | null, extend: string | undefined | null, name: string | undefined | null, parentId: string | undefined | null, remark: string | undefined | null, sortId: number | undefined | null, typeId: string | undefined | null, value: string | undefined | null, isEnable: boolean | undefined}
export interface DictionaryType {id: string | undefined | null, creationTime: string | undefined, creatorUserId: string | undefined | null, creatorUserName: string | undefined | null, lastModificationTime: string | undefined, lastModifierUserId: string | undefined | null, lastModifierUserName: string | undefined | null, isDeleted: boolean | undefined, code: string | undefined | null, name: string | undefined | null, dictionarys: Array<Dictionary>}
export interface Dictionary {id: string | undefined | null, creationTime: string | undefined, creatorUserId: string | undefined | null, creatorUserName: string | undefined | null, lastModificationTime: string | undefined, lastModifierUserId: string | undefined | null, lastModifierUserName: string | undefined | null, isDeleted: boolean | undefined, typeId: string | undefined | null, isEnable: boolean | undefined, parentId: string | undefined | null, extend: string | undefined | null, name: string | undefined | null, remark: string | undefined | null, sortId: number | undefined | null, value: string | undefined | null, pDictionary: Dictionary, dictionaryType: DictionaryType, dictionarys: Array<Dictionary>}
export interface DictionaryIResultModel {data: Dictionary}
export interface DictionaryDtoPageList {page: number | undefined, pageSize: number | undefined, totalCount: number | undefined, order: string | undefined | null, list: Array<DictionaryDto>}
export interface DictionaryDtoPageListIResultModel {data: DictionaryDtoPageList}
export interface StringRemoveModel {id: string | undefined | null, ids: string | undefined | null}
export interface DictionaryListIResultModel {data: Array<Dictionary>}
export interface StringTreeOptionResultModelDto {label: string | undefined | null, value: string | undefined | null, disabled: boolean | undefined, isLeaf: boolean | undefined, level: number | undefined | null, data: any, id: string | undefined | null, pid: string | undefined | null, children: Array<StringTreeOptionResultModelDto>, sortId: number | undefined, extend: string | undefined | null}
export interface StringTreeOptionResultModelDtoListIResultModel {data: Array<StringTreeOptionResultModelDto>}
export interface DictionaryTypeDto {id: string | undefined | null, code: string | undefined | null, name: string | undefined | null}
export interface DictionaryTypeIResultModel {data: DictionaryType}
export interface DictionaryTypeDtoPageList {page: number | undefined, pageSize: number | undefined, totalCount: number | undefined, order: string | undefined | null, list: Array<DictionaryTypeDto>}
export interface DictionaryTypeDtoPageListIResultModel {data: DictionaryTypeDtoPageList}
export interface EnterpriseListOutput {id: string | undefined | null, areaCode: string | undefined | null, areaName: string | undefined | null, code: string | undefined | null, contactNumber: string | undefined | null, contactPerson: string | undefined | null, isEnabled: boolean | undefined, legalRepresentative: string | undefined | null, legalRepresentativeNumber: string | undefined | null, level: number | undefined, name: string | undefined | null, path: string | undefined | null, pathText: string | undefined | null, pinYin: string | undefined | null, simpleName: string | undefined | null, sortId: number | undefined, type: number | undefined}
export interface EnterpriseListOutputPageList {page: number | undefined, pageSize: number | undefined, totalCount: number | undefined, order: string | undefined | null, list: Array<EnterpriseListOutput>}
export interface EnterpriseListOutputPageListIResultModel {data: EnterpriseListOutputPageList}
export interface EnterpriseOutput {id: string | undefined | null, areaCode: string | undefined | null, areaName: string | undefined | null, code: string | undefined | null, contactNumber: string | undefined | null, contactPerson: string | undefined | null, isEnabled: boolean | undefined, legalRepresentative: string | undefined | null, legalRepresentativeNumber: string | undefined | null, level: number | undefined, name: string | undefined | null, path: string | undefined | null, pathText: string | undefined | null, pinYin: string | undefined | null, simpleName: string | undefined | null, sortId: number | undefined, type: number | undefined}
export interface EnterpriseOutputIResultModel {data: EnterpriseOutput}
export interface EnterpriseInput {id: string | undefined | null, parentId: string | undefined | null, areaCode: string | undefined | null, areaName: string | undefined | null, code: string | undefined | null, contactNumber: string | undefined | null, contactPerson: string | undefined | null, isEnabled: boolean | undefined, legalRepresentative: string | undefined | null, legalRepresentativeNumber: string | undefined | null, name: string | undefined | null, sortId: number | undefined, type: number | undefined}
export type FaqCategoryOutputType = 0 | 1 | undefined
export interface FaqCategoryTreeOutput {id: string | undefined | null, parentId: string | undefined | null, icon: string | undefined | null, name: string | undefined | null, path: string | undefined | null, remarks: string | undefined | null, sort: number | undefined, type: FaqCategoryOutputType, children: Array<FaqCategoryTreeOutput>}
export interface FaqCategoryTreeOutputListIResultModel {data: Array<FaqCategoryTreeOutput>}
export interface FaqCategoryOutput {id: string | undefined | null, parentId: string | undefined | null, icon: string | undefined | null, name: string | undefined | null, path: string | undefined | null, remarks: string | undefined | null, sort: number | undefined}
export interface FaqCategoryOutputIResultModel {data: FaqCategoryOutput}
export interface FaqCategoryInput {id: string | undefined | null, parentId: string | undefined | null, icon: string | undefined | null, name: string | undefined | null, path: string | undefined | null, remarks: string | undefined | null, sort: number | undefined}
export interface FaqContentListOutput {id: string | undefined | null, categoryId: string | undefined | null, content: string | undefined | null, readingQuantity: number | undefined, remarks: string | undefined | null, sort: number | undefined, title: string | undefined | null}
export interface FaqContentListOutputPageList {page: number | undefined, pageSize: number | undefined, totalCount: number | undefined, order: string | undefined | null, list: Array<FaqContentListOutput>}
export interface FaqContentListOutputPageListIResultModel {data: FaqContentListOutputPageList}
export interface FaqContentOutput {id: string | undefined | null, categoryId: string | undefined | null, content: string | undefined | null, readingQuantity: number | undefined, remarks: string | undefined | null, sort: number | undefined, title: string | undefined | null}
export interface FaqContentOutputIResultModel {data: FaqContentOutput}
export interface FaqContentInput {id: string | undefined | null, categoryId: string | undefined | null, content: string | undefined | null, readingQuantity: number | undefined, remarks: string | undefined | null, sort: number | undefined, title: string | undefined | null}
export interface LoginLogListOutput {id: string | undefined | null, ip: string | undefined | null, browser: string | undefined | null, os: string | undefined | null, device: string | undefined | null, elapsedMilliseconds: number | undefined, status: boolean | undefined, msg: string | undefined | null, userName: string | undefined | null, creationTime: string | undefined, realName: string | undefined | null}
export interface LoginLogListOutputPageList {page: number | undefined, pageSize: number | undefined, totalCount: number | undefined, order: string | undefined | null, list: Array<LoginLogListOutput>}
export interface LoginLogListOutputPageListIResultModel {data: LoginLogListOutputPageList}
export interface MenuInput {id: string | undefined | null, parentId: string | undefined | null, icon: string | undefined | null, iconColor: string | undefined | null, link: string | undefined | null, moduleCode: string | undefined | null, name: string | undefined | null, remarks: string | undefined | null, routeParams: string | undefined | null, show: boolean | undefined, sort: number | undefined, target: number | undefined, client: ClientEnums, component: string | undefined | null}
export interface Api {id: string | undefined | null, parentId: string | undefined | null, code: string | undefined | null, enable: boolean | undefined, httpMethod: string | undefined | null, level: number | undefined, name: string | undefined | null, path: string | undefined | null, pathText: string | undefined | null, remarks: string | undefined | null}
export interface Enterprise {id: string | undefined | null, creationTime: string | undefined, creatorUserId: string | undefined | null, creatorUserName: string | undefined | null, lastModificationTime: string | undefined, lastModifierUserId: string | undefined | null, lastModifierUserName: string | undefined | null, isDeleted: boolean | undefined, parentId: string | undefined | null, areaCode: string | undefined | null, areaName: string | undefined | null, code: string | undefined | null, contactNumber: string | undefined | null, contactPerson: string | undefined | null, isEnabled: boolean | undefined, legalRepresentative: string | undefined | null, legalRepresentativeNumber: string | undefined | null, level: number | undefined, name: string | undefined | null, path: string | undefined | null, pathText: string | undefined | null, pinYin: string | undefined | null, simpleName: string | undefined | null, sortId: number | undefined, type: number | undefined, organizations: Array<Organizations>, userInfos: Array<UserInfo>}
export interface Organizations {id: string | undefined | null, creationTime: string | undefined, creatorUserId: string | undefined | null, creatorUserName: string | undefined | null, lastModificationTime: string | undefined, lastModifierUserId: string | undefined | null, lastModifierUserName: string | undefined | null, isDeleted: boolean | undefined, enterpriseId: string | undefined | null, leader: string | undefined | null, level: number | undefined, name: string | undefined | null, parentId: string | undefined | null, path: string | undefined | null, pathText: string | undefined | null, sortId: number | undefined, enterprise: Enterprise, userInfos: Array<UserInfo>}
export interface ClaimsIdentity {authenticationType: string | undefined | null, isAuthenticated: boolean | undefined, actor: ClaimsIdentity, bootstrapContext: any, claims: Array<Claim>, label: string | undefined | null, name: string | undefined | null, nameClaimType: string | undefined | null, roleClaimType: string | undefined | null}
export interface Claim {issuer: string | undefined | null, originalIssuer: string | undefined | null, properties: {}, subject: ClaimsIdentity, type: string | undefined | null, value: string | undefined | null, valueType: string | undefined | null}
export interface UserInfo {id: string | undefined | null, creationTime: string | undefined, creatorUserId: string | undefined | null, creatorUserName: string | undefined | null, lastModificationTime: string | undefined, lastModifierUserId: string | undefined | null, lastModifierUserName: string | undefined | null, isDeleted: boolean | undefined, enterpriseId: string | undefined | null, orgId: string | undefined | null, email: string | undefined | null, headPortraitCode: string | undefined | null, idCard: string | undefined | null, passwordHash: string | undefined | null, passwordSalt: string | undefined | null, phoneNumber: string | undefined | null, realName: string | undefined | null, sex: number | undefined, status: number | undefined, type: number | undefined, userName: string | undefined | null, organizations: Organizations, enterprise: Enterprise, roles: Array<Roles>, claims: Array<Claim>}
export interface Roles {id: string | undefined | null, creationTime: string | undefined, creatorUserId: string | undefined | null, creatorUserName: string | undefined | null, lastModificationTime: string | undefined, lastModifierUserId: string | undefined | null, lastModifierUserName: string | undefined | null, isDeleted: boolean | undefined, code: string | undefined | null, remarks: string | undefined | null, roleName: string | undefined | null, sortId: number | undefined, menus: Array<Menu>, users: Array<UserInfo>, buttons: Array<Button>}
export interface Button {id: string | undefined | null, creationTime: string | undefined, creatorUserId: string | undefined | null, creatorUserName: string | undefined | null, lastModificationTime: string | undefined, lastModifierUserId: string | undefined | null, lastModifierUserName: string | undefined | null, isDeleted: boolean | undefined, menuId: string | undefined | null, code: string | undefined | null, enable: boolean | undefined, name: string | undefined | null, remarks: string | undefined | null, menu: Menu, apis: Array<Api>, roles: Array<Roles>}
export interface Menu {id: string | undefined | null, creationTime: string | undefined, creatorUserId: string | undefined | null, creatorUserName: string | undefined | null, lastModificationTime: string | undefined, lastModifierUserId: string | undefined | null, lastModifierUserName: string | undefined | null, isDeleted: boolean | undefined, client: ClientEnums, icon: string | undefined | null, iconColor: string | undefined | null, parentId: string | undefined | null, level: number | undefined, link: string | undefined | null, moduleCode: string | undefined | null, name: string | undefined | null, path: string | undefined | null, remarks: string | undefined | null, routeParams: string | undefined | null, show: boolean | undefined, sort: number | undefined, target: number | undefined, type: number | undefined, component: string | undefined | null, buttons: Array<Button>, menus: Array<Menu>, roles: Array<Roles>}
export interface MenuIResultModel {data: Menu}
export interface MenuPageList {page: number | undefined, pageSize: number | undefined, totalCount: number | undefined, order: string | undefined | null, list: Array<Menu>}
export interface MenuPageListIResultModel {data: MenuPageList}
export interface MenuOutputListIResultModel {data: Array<MenuOutput>}
export interface ButtonInfoDto {id: string | undefined | null, name: string | undefined | null, code: string | undefined | null, remarks: string | undefined | null, apisId: Array<string | undefined>}
export interface ButtonDto {menuId: string | undefined | null, buttons: Array<ButtonInfoDto>}
export interface ButtonDtoIResultModel {data: ButtonDto}
export type NotifySendType = 1 | 2 | 3 | undefined
export interface NotifyListOutput {id: string | undefined | null, title: string | undefined | null, desc: string | undefined | null, payload: any, readed: boolean | undefined, creationTime: string | undefined, type: string | undefined | null, typeLabel: string | undefined | null, sendType: NotifySendType}
export interface NotifyListOutputPageList {page: number | undefined, pageSize: number | undefined, totalCount: number | undefined, order: string | undefined | null, list: Array<NotifyListOutput>}
export interface NotifyListOutputPageListIResultModel {data: NotifyListOutputPageList}
export interface NotifyCountOutput {count: number | undefined}
export interface NotifyCountOutputIResultModel {data: NotifyCountOutput}
export interface NotifyReadedInput {ids: Array<string | undefined>}
export interface StringNotifyInput {sendType: NotifySendType, type: string | undefined | null, title: string | undefined | null, desc: string | undefined | null, payload: string | undefined | null, userIds: Array<string | undefined>, roldCodes: Array<string | undefined>}
export interface OpenApiTreeOutput {id: string | undefined | null, name: string | undefined | null, level: number | undefined, children: Array<OpenApiTreeOutput>}
export interface OpenApiTreeOutputListIResultModel {data: Array<OpenApiTreeOutput>}
export interface OrganizationsListOutput {id: string | undefined | null, enterpriseId: string | undefined | null, leader: string | undefined | null, level: number | undefined, name: string | undefined | null, parentId: string | undefined | null, path: string | undefined | null, pathText: string | undefined | null, sortId: number | undefined}
export interface OrganizationsListOutputPageList {page: number | undefined, pageSize: number | undefined, totalCount: number | undefined, order: string | undefined | null, list: Array<OrganizationsListOutput>}
export interface OrganizationsListOutputPageListIResultModel {data: OrganizationsListOutputPageList}
export interface OrganizationsOutput {id: string | undefined | null, enterpriseId: string | undefined | null, leader: string | undefined | null, level: number | undefined, name: string | undefined | null, parentId: string | undefined | null, path: string | undefined | null, pathText: string | undefined | null, sortId: number | undefined}
export interface OrganizationsOutputIResultModel {data: OrganizationsOutput}
export interface OrganizationsInput {id: string | undefined | null, enterpriseId: string | undefined | null, leader: string | undefined | null, name: string | undefined | null, parentId: string | undefined | null, sortId: number | undefined}
export interface OrganizationTreeOptionsQuery {path: string | undefined | null}
export interface RolesListOutput {id: string | undefined | null, code: string | undefined | null, remarks: string | undefined | null, roleName: string | undefined | null, sortId: number | undefined}
export interface RolesListOutputPageList {page: number | undefined, pageSize: number | undefined, totalCount: number | undefined, order: string | undefined | null, list: Array<RolesListOutput>}
export interface RolesListOutputPageListIResultModel {data: RolesListOutputPageList}
export interface RolesDtoIResultModel {data: RolesDto}
export interface SetMenusDto {roleId: string | undefined | null, menus: string | undefined | null}
export interface RoleButtonDto {id: string | undefined | null, name: string | undefined | null, checked: boolean | undefined}
export interface RoleMenuTreeOutput {id: string | undefined | null, name: string | undefined | null, checked: boolean | undefined, children: Array<RoleMenuTreeOutput>, buttons: Array<RoleButtonDto>}
export interface RoleMenuTreeOutputListIResultModel {data: Array<RoleMenuTreeOutput>}
export interface SampleOutput {id: string | undefined | null}
export interface SampleOutputPageList {page: number | undefined, pageSize: number | undefined, totalCount: number | undefined, order: string | undefined | null, list: Array<SampleOutput>}
export interface SampleOutputPageListIResultModel {data: SampleOutputPageList}
export interface UserInfoListOutput {id: string | undefined | null, userName: string | undefined | null, email: string | undefined | null, phoneNumber: string | undefined | null, headPortraitCode: string | undefined | null, realName: string | undefined | null, sex: number | undefined, status: number | undefined, contact: string | undefined | null, rolesId: Array<string | undefined>, rolesName: Array<string | undefined>, orgId: string | undefined | null, orgName: string | undefined | null, enterpriseId: string | undefined | null, type: number | undefined, userType: number | undefined, idCard: string | undefined | null}
export interface UserInfoListOutputPageList {page: number | undefined, pageSize: number | undefined, totalCount: number | undefined, order: string | undefined | null, list: Array<UserInfoListOutput>}
export interface UserInfoListOutputPageListIResultModel {data: UserInfoListOutputPageList}
export interface UserInfoOutput {id: string | undefined | null, userId: string | undefined | null, userName: string | undefined | null, email: string | undefined | null, phoneNumber: string | undefined | null, headPortraitCode: string | undefined | null, realName: string | undefined | null, sex: number | undefined, status: number | undefined, contact: string | undefined | null, rolesId: Array<string | undefined>, rolesName: Array<string | undefined>, userType: number | undefined, idCard: string | undefined | null, roles: Array<RolesDto>}
export interface UserInfoOutputIResultModel {data: UserInfoOutput}
export interface UserInfoInput {id: string | undefined | null, enterpriseId: string | undefined | null, orgId: string | undefined | null, email: string | undefined | null, headPortraitCode: string | undefined | null, idCard: string | undefined | null, phoneNumber: string | undefined | null, realName: string | undefined | null, sex: number | undefined, status: number | undefined, type: number | undefined, userName: string | undefined | null, password: string | undefined | null, rolesId: Array<string | undefined>}
export interface UsersPwdDto {oldPassword: string | undefined | null, password: string | undefined | null, rePassword: string | undefined | null}
export interface ResetPwdDto {id: string | undefined | null, password: string | undefined | null, rePassword: string | undefined | null}
export interface UpdateUserBasicInfoInput {headPortraitCode: string | undefined | null, realName: string | undefined | null, email: string | undefined | null}

export interface SwaggerApi{
  /**
   * @tag Account
   * @summary 登录(密码模式)
   */
  post(url: "/api/Account/LoginWithPwd", options: {path?: MapString, query?: MapString, header?: MapString, body: LoginModel}): Promise<LoginUserOutputAuthResutIResultModel>
  /**
   * @tag Account
   * @summary 登录
   */
  post(url: "/api/Account/Login", options: {path?: MapString, query?: MapString, header?: MapString, body: SpaLoginModel}): Promise<IResultModel>
  /**
   * @tag Account
   * @summary 退出登录
   */
  get(url: "/api/Account/Logout", options: {path?: MapString, query: {logoutId: string | undefined | null}, header?: MapString, body?: any}): Promise<IResultModel>
  /**
   * @tag Account
   * @summary Ids登录错误信息
   */
  get(url: "/api/Account/Error", options: {path?: MapString, query: {errorId: string | undefined | null}, header?: MapString, body?: any}): Promise<IResultModel>
  /**
   * @tag App
   * @summary 获取初始化数据
   */
  get(url: "/api/App/Init", options: {path?: MapString, query: {client: ClientEnums}, header?: MapString, body?: any}): Promise<InitAppOutputIResultModel>
  /**
   * @tag AppVersion
   * @summary 获取最新版本信息
   */
  get(url: "/api/AppVersion/GetVersion", options: {path?: MapString, query: {type: number | undefined}, header?: MapString, body?: any}): Promise<IResultModel>
  /**
   * @tag AppVersion
   * @summary 增加版本信息
   */
  post(url: "/api/AppVersion/Add", options: {path?: MapString, query?: MapString, header?: MapString, body: AppVersionDto}): Promise<IResultModel>
  /**
   * @tag AppVersion
   * @summary 获取版本记录
   */
  get(url: "/api/AppVersion/GetVersionRecords", options: {path?: MapString, query: {Type: number | undefined, Keyword: string | undefined | null, Page: number | undefined, PageSize: number | undefined, TotalCount: number | undefined, Order: string | undefined | null}, header?: MapString, body?: any}): Promise<AppVersionDtoPageListIResultModel>
  /**
   * @tag Area
   * @summary 分页查询
   */
  get(url: "/api/Area/Page", options: {path?: MapString, query: {Level: number | undefined | null, ParentCode: string | undefined | null, ParentId: string | undefined | null, Code: string | undefined | null, Name: string | undefined | null, Keyword: string | undefined | null, Page: number | undefined, PageSize: number | undefined, TotalCount: number | undefined, Order: string | undefined | null}, header?: MapString, body?: any}): Promise<AreaListOutputPageListIResultModel>
  /**
   * @tag Area
   * @summary 添加区域
   */
  post(url: "/api/Area/Add", options: {path?: MapString, query?: MapString, header?: MapString, body: AreaDto}): Promise<IResultModel>
  /**
   * @tag Area
   * @summary 编辑区域
   */
  post(url: "/api/Area/Edit", options: {path?: MapString, query?: MapString, header?: MapString, body: AreaDto}): Promise<IResultModel>
  /**
   * @tag Area
   * @summary 删除区域
   */
  post(url: "/api/Area/Remove", options: {path?: MapString, query?: MapString, header?: MapString, body: RemoveModel}): Promise<IResultModel>
  /**
   * @tag Area
   * @summary 级联下拉选项
   */
  get(url: "/api/Area/TreeOptions", options: {path?: MapString, query: {Level: number | undefined | null, LevelFull: number | undefined | null, ParentCode: string | undefined | null, AreaCode: string | undefined | null, AreaCodeFull: string | undefined | null}, header?: MapString, body?: any}): Promise<TreeOptionResultModelListIResultModel>
  /**
   * @tag Area
   * @summary 特定级别的下拉选项
   */
  get(url: "/api/Area/OptionsBySpecificLevel", options: {path?: MapString, query: {Level: number | undefined | null, LevelFull: number | undefined | null, ParentCode: string | undefined | null, AreaCode: string | undefined | null, AreaCodeFull: string | undefined | null}, header?: MapString, body?: any}): Promise<StringOptionResultModelListIResultModel>
  /**
   * @tag Area
   * @summary 格式化区域数据
   */
  post(url: "/api/Area/DataFormat", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<IResultModel>
  /**
   * @tag Audit
   * @summary 列表查询
   */
  get(url: "/api/Audit/Page", options: {path?: MapString, query: {FilterNoUserLog: boolean | undefined, Route: string | undefined | null, RouteSummary: string | undefined | null, Url: string | undefined | null, Method: string | undefined | null, StatusCode: number | undefined | null, RemoteIP: string | undefined | null, UserId: string | undefined | null, UserName: string | undefined | null, CreationTimeStart: string | undefined | null, CreationTimeEnd: string | undefined | null, Keyword: string | undefined | null, Page: number | undefined, PageSize: number | undefined, TotalCount: number | undefined, Order: string | undefined | null}, header?: MapString, body?: any}): Promise<AuditListOutputPageListIResultModel>
  /**
   * @tag Dictionary
   * @summary 新增
   */
  post(url: "/api/Dictionary/Add", options: {path?: MapString, query?: MapString, header?: MapString, body: DictionaryDto}): Promise<IResultModel>
  /**
   * @tag Dictionary
   * @summary 详情
   */
  get(url: "/api/Dictionary/Detail", options: {path?: MapString, query: {id: string | undefined | null}, header?: MapString, body?: any}): Promise<DictionaryIResultModel>
  /**
   * @tag Dictionary
   * @summary 修改
   */
  post(url: "/api/Dictionary/Edit", options: {path?: MapString, query?: MapString, header?: MapString, body: DictionaryDto}): Promise<IResultModel>
  /**
   * @tag Dictionary
   * @summary 分页查询
   */
  get(url: "/api/Dictionary/Page", options: {path?: MapString, query: {Keyword: string | undefined | null, Page: number | undefined, PageSize: number | undefined, TotalCount: number | undefined, Order: string | undefined | null}, header?: MapString, body?: any}): Promise<DictionaryDtoPageListIResultModel>
  /**
   * @tag Dictionary
   * @summary 移除
   */
  post(url: "/api/Dictionary/Remove", options: {path?: MapString, query?: MapString, header?: MapString, body: StringRemoveModel}): Promise<IResultModel>
  /**
   * @tag Dictionary
   * @summary 根据类型树形获取
   */
  get(url: "/api/Dictionary/ListByType", options: {path?: MapString, query: {typeId: string | undefined | null}, header?: MapString, body?: any}): Promise<DictionaryListIResultModel>
  /**
   * @tag Dictionary
   * @summary 根据数据字典类型code获取对应下拉选项
   */
  get(url: "/api/Dictionary/OptionsByCode", options: {path?: MapString, query: {code: string | undefined | null, isLoadAll: boolean | undefined}, header?: MapString, body?: any}): Promise<StringOptionResultModelListIResultModel>
  /**
   * @tag Dictionary
   * @summary 根据数据字典类型code获取对应下拉选项（多个）
   */
  get(url: "/api/Dictionary/OptionsListByCodes", options: {path?: MapString, query: {codes: string | undefined | null, isLoadAll: boolean | undefined}, header?: MapString, body?: any}): Promise<StringOptionResultModelListIResultModel>
  /**
   * @tag Dictionary
   * @summary 根据类型树形获取(树形)
   */
  get(url: "/api/Dictionary/TreeOptionsByCode", options: {path?: MapString, query: {code: string | undefined | null, isLoadAll: boolean | undefined}, header?: MapString, body?: any}): Promise<StringTreeOptionResultModelDtoListIResultModel>
  /**
   * @tag DictionaryType
   * @summary 新增
   */
  post(url: "/api/DictionaryType/Add", options: {path?: MapString, query?: MapString, header?: MapString, body: DictionaryTypeDto}): Promise<IResultModel>
  /**
   * @tag DictionaryType
   * @summary 详情
   */
  get(url: "/api/DictionaryType/Detail", options: {path?: MapString, query: {id: string | undefined | null}, header?: MapString, body?: any}): Promise<DictionaryTypeIResultModel>
  /**
   * @tag DictionaryType
   * @summary 修改
   */
  post(url: "/api/DictionaryType/Edit", options: {path?: MapString, query?: MapString, header?: MapString, body: DictionaryTypeDto}): Promise<IResultModel>
  /**
   * @tag DictionaryType
   * @summary 分页查询
   */
  get(url: "/api/DictionaryType/Page", options: {path?: MapString, query: {Keyword: string | undefined | null, Page: number | undefined, PageSize: number | undefined, TotalCount: number | undefined, Order: string | undefined | null}, header?: MapString, body?: any}): Promise<DictionaryTypeDtoPageListIResultModel>
  /**
   * @tag DictionaryType
   * @summary 移除
   */
  post(url: "/api/DictionaryType/Remove", options: {path?: MapString, query?: MapString, header?: MapString, body: StringRemoveModel}): Promise<IResultModel>
  /**
   * @tag DictionaryType
   * @summary 下拉选择
   */
  get(url: "/api/DictionaryType/Options", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<StringOptionResultModelListIResultModel>
  /**
   * @tag Enterprise
   * @summary 分页列表
   */
  get(url: "/api/Enterprise/Page", options: {path?: MapString, query: {Id: string | undefined | null, Code: string | undefined | null, Level: number | undefined | null, Name: string | undefined | null, Path: string | undefined | null, Keyword: string | undefined | null, Page: number | undefined, PageSize: number | undefined, TotalCount: number | undefined, Order: string | undefined | null}, header?: MapString, body?: any}): Promise<EnterpriseListOutputPageListIResultModel>
  /**
   * @tag Enterprise
   * @summary 详情
   */
  get(url: "/api/Enterprise/Detail", options: {path?: MapString, query: {id: string | undefined | null}, header?: MapString, body?: any}): Promise<EnterpriseOutputIResultModel>
  /**
   * @tag Enterprise
   * @summary 添加
   */
  post(url: "/api/Enterprise/Add", options: {path?: MapString, query?: MapString, header?: MapString, body: EnterpriseInput}): Promise<IResultModel>
  /**
   * @tag Enterprise
   * @summary 编辑
   */
  post(url: "/api/Enterprise/Edit", options: {path?: MapString, query?: MapString, header?: MapString, body: EnterpriseInput}): Promise<IResultModel>
  /**
   * @tag Enterprise
   * @summary 删除
   */
  post(url: "/api/Enterprise/Remove", options: {path?: MapString, query?: MapString, header?: MapString, body: StringRemoveModel}): Promise<IResultModel>
  /**
   * @tag Enterprise
   * @summary 级联下拉选项
   */
  get(url: "/api/Enterprise/TreeOptions", options: {path?: MapString, query: {Path: string | undefined | null}, header?: MapString, body?: any}): Promise<TreeOptionResultModelListIResultModel>
  /**
   * @tag FaqCategory
   * @summary 获取所有树形帮助分类
   */
  get(url: "/api/FaqCategory/Tree", options: {path?: MapString, query: {ParentId: string | undefined | null, Name: string | undefined | null, Keyword: string | undefined | null, Page: number | undefined, PageSize: number | undefined, TotalCount: number | undefined, Order: string | undefined | null}, header?: MapString, body?: any}): Promise<FaqCategoryTreeOutputListIResultModel>
  /**
   * @tag FaqCategory
   * @summary 获取所有树形帮助分类并附带内容
   */
  get(url: "/api/FaqCategory/TreeAdnContnet", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<FaqCategoryTreeOutputListIResultModel>
  /**
   * @tag FaqCategory
   * @summary 详情
   */
  get(url: "/api/FaqCategory/Detail", options: {path?: MapString, query: {id: string | undefined | null}, header?: MapString, body?: any}): Promise<FaqCategoryOutputIResultModel>
  /**
   * @tag FaqCategory
   * @summary 添加
   */
  post(url: "/api/FaqCategory/Add", options: {path?: MapString, query?: MapString, header?: MapString, body: FaqCategoryInput}): Promise<IResultModel>
  /**
   * @tag FaqCategory
   * @summary 编辑
   */
  post(url: "/api/FaqCategory/Edit", options: {path?: MapString, query?: MapString, header?: MapString, body: FaqCategoryInput}): Promise<IResultModel>
  /**
   * @tag FaqCategory
   * @summary 删除
   */
  post(url: "/api/FaqCategory/Remove", options: {path?: MapString, query?: MapString, header?: MapString, body: StringRemoveModel}): Promise<IResultModel>
  /**
   * @tag FaqContent
   * @summary 分页列表
   */
  get(url: "/api/FaqContent/Page", options: {path?: MapString, query: {CategoryId: string | undefined | null, Keyword: string | undefined | null, Page: number | undefined, PageSize: number | undefined, TotalCount: number | undefined, Order: string | undefined | null}, header?: MapString, body?: any}): Promise<FaqContentListOutputPageListIResultModel>
  /**
   * @tag FaqContent
   * @summary 详情
   */
  get(url: "/api/FaqContent/Detail", options: {path?: MapString, query: {id: string | undefined | null, isView: boolean | undefined}, header?: MapString, body?: any}): Promise<FaqContentOutputIResultModel>
  /**
   * @tag FaqContent
   * @summary 添加
   */
  post(url: "/api/FaqContent/Add", options: {path?: MapString, query?: MapString, header?: MapString, body: FaqContentInput}): Promise<IResultModel>
  /**
   * @tag FaqContent
   * @summary 编辑
   */
  post(url: "/api/FaqContent/Edit", options: {path?: MapString, query?: MapString, header?: MapString, body: FaqContentInput}): Promise<IResultModel>
  /**
   * @tag FaqContent
   * @summary 删除
   */
  post(url: "/api/FaqContent/Remove", options: {path?: MapString, query?: MapString, header?: MapString, body: StringRemoveModel}): Promise<IResultModel>
  /**
   * @tag File
   * @summary 文件上传
   */
  post(url: "/api/File/Upload", options: {path?: MapString, query?: MapString, header?: MapString, body: null}): Promise<IResultModel>
  /**
   * @tag File
   * @summary 图片上传
   */
  post(url: "/api/File/UploadPic", options: {path?: MapString, query?: MapString, header?: MapString, body: null}): Promise<IResultModel>
  /**
   * @tag File
   * @summary 获取文件(返回byte[])
   */
  get(url: "/api/File/Get", options: {path?: MapString, query: {code: string | undefined | null}, header?: MapString, body?: any}): Promise<null>
  /**
   * @tag File
   * @summary 下载文件(返回Stream)
   */
  get(url: "/api/File/Download", options: {path?: MapString, query: {code: string | undefined | null}, header?: MapString, body?: any}): Promise<null>
  /**
   * @tag File
   */
  get(url: "/api/File/DownloadByStream", options: {path?: MapString, query: {code: string | undefined | null}, header?: MapString, body?: any}): Promise<null>
  /**
   * @tag File
   * @summary 删除文件
   */
  post(url: "/api/File/Remove", options: {path?: MapString, query?: MapString, header?: MapString, body: null}): Promise<IResultModel>
  /**
   * @tag LoginLog
   * @summary 列表
   */
  get(url: "/api/LoginLog/Page", options: {path?: MapString, query: {UserName: string | undefined | null, Keyword: string | undefined | null, Page: number | undefined, PageSize: number | undefined, TotalCount: number | undefined, Order: string | undefined | null}, header?: MapString, body?: any}): Promise<LoginLogListOutputPageListIResultModel>
  /**
   * @tag Menu
   * @summary 新增
   */
  post(url: "/api/Menu/Add", options: {path?: MapString, query?: MapString, header?: MapString, body: MenuInput}): Promise<IResultModel>
  /**
   * @tag Menu
   * @summary 修改
   */
  post(url: "/api/Menu/Edit", options: {path?: MapString, query?: MapString, header?: MapString, body: MenuInput}): Promise<IResultModel>
  /**
   * @tag Menu
   * @summary 详情
   */
  get(url: "/api/Menu/Detail", options: {path?: MapString, query: {id: string | undefined | null}, header?: MapString, body?: any}): Promise<MenuIResultModel>
  /**
   * @tag Menu
   * @summary 分页
   */
  get(url: "/api/Menu/Page", options: {path?: MapString, query: {Keyword: string | undefined | null, Page: number | undefined, PageSize: number | undefined, TotalCount: number | undefined, Order: string | undefined | null}, header?: MapString, body?: any}): Promise<MenuPageListIResultModel>
  /**
   * @tag Menu
   * @summary 获取所有树形菜单
   */
  get(url: "/api/Menu/Tree", options: {path?: MapString, query: {client: ClientEnums}, header?: MapString, body?: any}): Promise<MenuOutputListIResultModel>
  /**
   * @tag Menu
   * @summary 获取角色树形菜单
   */
  get(url: "/api/Menu/LoadTreeByRole", options: {path?: MapString, query: {roleId: string | undefined | null}, header?: MapString, body?: any}): Promise<MenuOutputListIResultModel>
  /**
   * @tag Menu
   * @summary 获取菜单按钮
   */
  get(url: "/api/Menu/Buttons", options: {path?: MapString, query: {menuId: string | undefined | null}, header?: MapString, body?: any}): Promise<ButtonDtoIResultModel>
  /**
   * @tag Menu
   * @summary 配置菜单按钮
   */
  post(url: "/api/Menu/SetButton", options: {path?: MapString, query?: MapString, header?: MapString, body: ButtonDto}): Promise<IResultModel>
  /**
   * @tag Menu
   * @summary 级联下拉选项
   */
  get(url: "/api/Menu/TreeOptions", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<TreeOptionResultModelListIResultModel>
  /**
   * @tag Menu
   * @summary 删除
   */
  post(url: "/api/Menu/Remove", options: {path?: MapString, query?: MapString, header?: MapString, body: StringRemoveModel}): Promise<IResultModel>
  /**
   * @tag Notify
   * @summary 获取消息类型
   */
  get(url: "/api/Notify/Options", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<StringOptionResultModelListIResultModel>
  /**
   * @tag Notify
   * @summary 获取通知列表
   */
  get(url: "/api/Notify/Page", options: {path?: MapString, query: {Type: string | undefined | null, Readed: boolean | undefined | null, Keyword: string | undefined | null, Page: number | undefined, PageSize: number | undefined, TotalCount: number | undefined, Order: string | undefined | null}, header?: MapString, body?: any}): Promise<NotifyListOutputPageListIResultModel>
  /**
   * @tag Notify
   * @summary 获取通知列表(信息预览框使用)
   */
  get(url: "/api/Notify/PageLite", options: {path?: MapString, query: {Type: string | undefined | null, Readed: boolean | undefined | null, Keyword: string | undefined | null, Page: number | undefined, PageSize: number | undefined, TotalCount: number | undefined, Order: string | undefined | null}, header?: MapString, body?: any}): Promise<NotifyListOutputPageListIResultModel>
  /**
   * @tag Notify
   * @summary 获取未读消息数量
   */
  get(url: "/api/Notify/UnReadedCount", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<NotifyCountOutputIResultModel>
  /**
   * @tag Notify
   * @summary 通知已读
   */
  post(url: "/api/Notify/Readed", options: {path?: MapString, query?: MapString, header?: MapString, body: NotifyReadedInput}): Promise<IResultModel>
  /**
   * @tag Notify
   * @summary 全部已读
   */
  post(url: "/api/Notify/ReadAll", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<IResultModel>
  /**
   * @tag Notify
   * @summary 删除消息(参数传到Ids属性,多个用,分开)
   */
  post(url: "/api/Notify/Remove", options: {path?: MapString, query?: MapString, header?: MapString, body: StringRemoveModel}): Promise<IResultModel>
  /**
   * @tag Notify
   * @summary 删除所有消息
   */
  post(url: "/api/Notify/RemoveAll", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<IResultModel>
  /**
   * @tag Notify
   * @summary 添加消息，外部调用（泛型参数报404）
   */
  post(url: "/api/Notify/Addmsg", options: {path?: MapString, query?: MapString, header?: MapString, body: StringNotifyInput}): Promise<IResultModel>
  /**
   * @tag OpenApi
   * @summary 同步本系统API信息到数据库
   */
  post(url: "/api/OpenApi/SyncCurrent", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<IResultModel>
  /**
   * @tag OpenApi
   * @summary 同步所有系统API信息(未实现)
   */
  post(url: "/api/OpenApi/SyncAll", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<IResultModel>
  /**
   * @tag OpenApi
   * @summary 同步API信息到数据库
   */
  post(url: "/api/OpenApi/AddOrUpdate", options: {path?: MapString, query: {data: string | undefined | null}, header?: MapString, body?: any}): Promise<IResultModel>
  /**
   * @tag OpenApi
   * @summary 树形下拉选项
   */
  get(url: "/api/OpenApi/TreeOptions", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<OpenApiTreeOutputListIResultModel>
  /**
   * @tag Organizations
   * @summary 分页列表
   */
  get(url: "/api/Organizations/Page", options: {path?: MapString, query: {EnterpriseId: string | undefined | null, Name: string | undefined | null, Path: string | undefined | null, Keyword: string | undefined | null, Page: number | undefined, PageSize: number | undefined, TotalCount: number | undefined, Order: string | undefined | null}, header?: MapString, body?: any}): Promise<OrganizationsListOutputPageListIResultModel>
  /**
   * @tag Organizations
   * @summary 详情
   */
  get(url: "/api/Organizations/Detail", options: {path?: MapString, query: {id: string | undefined | null}, header?: MapString, body?: any}): Promise<OrganizationsOutputIResultModel>
  /**
   * @tag Organizations
   * @summary 添加
   */
  post(url: "/api/Organizations/Add", options: {path?: MapString, query?: MapString, header?: MapString, body: OrganizationsInput}): Promise<IResultModel>
  /**
   * @tag Organizations
   * @summary 编辑
   */
  post(url: "/api/Organizations/Edit", options: {path?: MapString, query?: MapString, header?: MapString, body: OrganizationsInput}): Promise<IResultModel>
  /**
   * @tag Organizations
   * @summary 删除
   */
  post(url: "/api/Organizations/Remove", options: {path?: MapString, query?: MapString, header?: MapString, body: StringRemoveModel}): Promise<IResultModel>
  /**
   * @tag Organizations
   * @summary 级联下拉选项
   */
  get(url: "/api/Organizations/TreeOptions", options: {path?: MapString, query?: MapString, header?: MapString, body: OrganizationTreeOptionsQuery}): Promise<TreeOptionResultModelListIResultModel>
  /**
   * @tag Roles
   * @summary 分页查询
   */
  get(url: "/api/Roles/Page", options: {path?: MapString, query: {RoleName: string | undefined | null, Code: string | undefined | null, Keyword: string | undefined | null, Page: number | undefined, PageSize: number | undefined, TotalCount: number | undefined, Order: string | undefined | null}, header?: MapString, body?: any}): Promise<RolesListOutputPageListIResultModel>
  /**
   * @tag Roles
   * @summary 获取单个信息
   */
  get(url: "/api/Roles/Detail", options: {path?: MapString, query: {id: string | undefined | null}, header?: MapString, body?: any}): Promise<RolesDtoIResultModel>
  /**
   * @tag Roles
   * @summary 新增
   */
  post(url: "/api/Roles/Add", options: {path?: MapString, query?: MapString, header?: MapString, body: RolesDto}): Promise<IResultModel>
  /**
   * @tag Roles
   * @summary 修改
   */
  post(url: "/api/Roles/Edit", options: {path?: MapString, query?: MapString, header?: MapString, body: RolesDto}): Promise<IResultModel>
  /**
   * @tag Roles
   * @summary 移除
   */
  post(url: "/api/Roles/Remove", options: {path?: MapString, query?: MapString, header?: MapString, body: StringRemoveModel}): Promise<IResultModel>
  /**
   * @tag Roles
   * @summary 下拉选择
   */
  get(url: "/api/Roles/Options", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<StringOptionResultModelListIResultModel>
  /**
   * @tag Roles
   * @summary 设置菜单按钮
   */
  post(url: "/api/Roles/SetMenus", options: {path?: MapString, query?: MapString, header?: MapString, body: SetMenusDto}): Promise<IResultModel>
  /**
   * @tag Roles
   * @summary 获取菜单按钮
   */
  get(url: "/api/Roles/GetMenus", options: {path?: MapString, query: {roleId: string | undefined | null}, header?: MapString, body?: any}): Promise<RoleMenuTreeOutputListIResultModel>
  /**
   * @tag Sample
   * @summary 测试
   */
  get(url: "/api/Sample/Test", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<IResultModel>
  /**
   * @tag Sample
   * @summary 输出日志
   */
  get(url: "/api/Sample/LogInfo", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<null>
  /**
   * @tag Sample
   */
  get(url: "/api/Sample/ResolveApis", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<IResultModel>
  /**
   * @tag Sample
   * @summary 更新
   */
  post(url: "/api/Sample/Update", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<IResultModel>
  /**
   * @tag Sample
   * @summary Page New
   */
  get(url: "/api/Sample/PageNew", options: {path?: MapString, query: {Keyword: string | undefined | null, Page: number | undefined, PageSize: number | undefined, TotalCount: number | undefined, Order: string | undefined | null}, header?: MapString, body?: any}): Promise<SampleOutputPageListIResultModel>
  /**
   * @tag Sample
   * @summary Page
   */
  get(url: "/api/Sample/Page", options: {path?: MapString, query: {Keyword: string | undefined | null, Page: number | undefined, PageSize: number | undefined, TotalCount: number | undefined, Order: string | undefined | null}, header?: MapString, body?: any}): Promise<IResultModel>
  /**
   * @tag Sample
   */
  get(url: "/api/Sample/TestGlobalExceptionFilter", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<IResultModel>
  /**
   * @tag Sample
   * @summary 获取登录信息
   */
  get(url: "/api/Sample/LoginInfo", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<IResultModel>
  /**
   * @tag Test
   * @summary 缓存测试
   */
  get(url: "/api/Test/TestCache", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<IResultModel>
  /**
   * @tag Test
   * @summary 随便测试
   */
  get(url: "/api/Test/Test2", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<IResultModel>
  /**
   * @tag Test
   * @summary Aes测试
   */
  get(url: "/api/Test/TestAes", options: {path?: MapString, query: {text: string | undefined | null}, header?: MapString, body?: any}): Promise<IResultModel>
  /**
   * @tag Test
   * @summary 时间返回格式测试
   */
  get(url: "/api/Test/TestDateTime", options: {path?: MapString, query: {time: string | undefined}, header?: MapString, body?: any}): Promise<IResultModel>
  /**
   * @tag Test
   * @summary 测试获取用户EID
   */
  get(url: "/api/Test/GetLoginEid", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<IResultModel>
  /**
   * @tag Test
   * @summary 测试异常抛出
   */
  get(url: "/api/Test/ThrowEx", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<IResultModel>
  /**
   * @tag Test
   * @summary OpenApiPolicy
   */
  get(url: "/api/Test/OpenApiPolicy", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<IResultModel>
  /**
   * @tag UserInfo
   * @summary 列表
   */
  get(url: "/api/UserInfo/Page", options: {path?: MapString, query: {UserName: string | undefined | null, RealName: string | undefined | null, PhoneNumber: string | undefined | null, EnterpriseId: string | undefined | null, Keyword: string | undefined | null, Page: number | undefined, PageSize: number | undefined, TotalCount: number | undefined, Order: string | undefined | null}, header?: MapString, body?: any}): Promise<UserInfoListOutputPageListIResultModel>
  /**
   * @tag UserInfo
   * @summary 获取单个信息
   */
  get(url: "/api/UserInfo/Detail", options: {path?: MapString, query: {id: string | undefined | null}, header?: MapString, body?: any}): Promise<UserInfoOutputIResultModel>
  /**
   * @tag UserInfo
   * @summary 添加
   */
  post(url: "/api/UserInfo/Add", options: {path?: MapString, query?: MapString, header?: MapString, body: UserInfoInput}): Promise<IResultModel>
  /**
   * @tag UserInfo
   * @summary 编辑
   */
  post(url: "/api/UserInfo/Edit", options: {path?: MapString, query?: MapString, header?: MapString, body: UserInfoInput}): Promise<IResultModel>
  /**
   * @tag UserInfo
   * @summary 修改密码
   */
  post(url: "/api/UserInfo/UpdatePwd", options: {path?: MapString, query?: MapString, header?: MapString, body: UsersPwdDto}): Promise<IResultModel>
  /**
   * @tag UserInfo
   * @summary 重置密码
   */
  post(url: "/api/UserInfo/ResetPwd", options: {path?: MapString, query?: MapString, header?: MapString, body: ResetPwdDto}): Promise<IResultModel>
  /**
   * @tag UserInfo
   * @summary 基本信息修改
   */
  post(url: "/api/UserInfo/UpdateUserBasicInfo", options: {path?: MapString, query?: MapString, header?: MapString, body: UpdateUserBasicInfoInput}): Promise<IResultModel>
  /**
   * @tag Websocket
   * @summary Socket预连接
   */
  get(url: "/api/Websocket/PreConnect", options: {path?: MapString, query?: MapString, header?: MapString, body?: any}): Promise<IResultModel>
  /* default methods */
  get<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any }): Promise<T>
  post<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any }): Promise<T>
  delete<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any }): Promise<T>
  put<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any }): Promise<T>
  head<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any }): Promise<T>
  options<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any }): Promise<T>
  trace<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any }): Promise<T>
  patch<T = unknown>(url: string, options: { path?: MapAny, query?: MapAny, header?: MapString, body?: any }): Promise<T>
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

    return baseUrl.replace(/\//$, "");
  }

  public set domain(domain: string) {
    this._domain = domain;
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

    return fetch(url, {
      method: config.method,
      body: config.body,
      headers: headers,
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

export const defaultApi = new Http("http://localhost", "")