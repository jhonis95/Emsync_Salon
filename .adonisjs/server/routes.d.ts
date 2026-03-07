import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'tenents_homepages.index': { paramsTuple?: []; params?: {} }
    'portal.auth.login.show': { paramsTuple?: []; params?: {} }
    'portal.auth.login': { paramsTuple?: []; params?: {} }
    'portal.index': { paramsTuple?: []; params?: {} }
    'portal.view': { paramsTuple: [ParamValue]; params: {'page': ParamValue} }
    'portal.view.service': { paramsTuple?: []; params?: {} }
    'saas.index': { paramsTuple?: []; params?: {} }
    'saas.auth.login.show': { paramsTuple?: []; params?: {} }
    'saas.auth.login': { paramsTuple?: []; params?: {} }
    'saas.singup': { paramsTuple?: []; params?: {} }
    'saas.signup.view': { paramsTuple: [ParamValue]; params: {'page': ParamValue} }
    'saas.app': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'tenents_homepages.index': { paramsTuple?: []; params?: {} }
    'portal.auth.login.show': { paramsTuple?: []; params?: {} }
    'portal.index': { paramsTuple?: []; params?: {} }
    'portal.view': { paramsTuple: [ParamValue]; params: {'page': ParamValue} }
    'portal.view.service': { paramsTuple?: []; params?: {} }
    'saas.index': { paramsTuple?: []; params?: {} }
    'saas.auth.login.show': { paramsTuple?: []; params?: {} }
    'saas.singup': { paramsTuple?: []; params?: {} }
    'saas.signup.view': { paramsTuple: [ParamValue]; params: {'page': ParamValue} }
    'saas.app': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'tenents_homepages.index': { paramsTuple?: []; params?: {} }
    'portal.auth.login.show': { paramsTuple?: []; params?: {} }
    'portal.index': { paramsTuple?: []; params?: {} }
    'portal.view': { paramsTuple: [ParamValue]; params: {'page': ParamValue} }
    'portal.view.service': { paramsTuple?: []; params?: {} }
    'saas.index': { paramsTuple?: []; params?: {} }
    'saas.auth.login.show': { paramsTuple?: []; params?: {} }
    'saas.singup': { paramsTuple?: []; params?: {} }
    'saas.signup.view': { paramsTuple: [ParamValue]; params: {'page': ParamValue} }
    'saas.app': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'portal.auth.login': { paramsTuple?: []; params?: {} }
    'saas.auth.login': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}