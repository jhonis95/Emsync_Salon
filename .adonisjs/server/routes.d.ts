import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'tenents_homepages.index': { paramsTuple?: []; params?: {} }
    'auth.show': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'auth.view': { paramsTuple: [ParamValue]; params: {'page': ParamValue} }
    'portal.index': { paramsTuple?: []; params?: {} }
    'portal.view': { paramsTuple: [ParamValue]; params: {'page': ParamValue} }
    'portal.view.service': { paramsTuple?: []; params?: {} }
    'saas.index': { paramsTuple?: []; params?: {} }
    'emsyncsalon.com.br@auth.show': { paramsTuple?: []; params?: {} }
    'emsyncsalon.com.br@auth.login': { paramsTuple?: []; params?: {} }
    'emsyncsalon.com.br@auth.view': { paramsTuple: [ParamValue]; params: {'page': ParamValue} }
    'saas.appPage': { paramsTuple?: []; params?: {} }
    'saas.view': { paramsTuple: [ParamValue]; params: {'page': ParamValue} }
  }
  GET: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'tenents_homepages.index': { paramsTuple?: []; params?: {} }
    'auth.show': { paramsTuple?: []; params?: {} }
    'auth.view': { paramsTuple: [ParamValue]; params: {'page': ParamValue} }
    'portal.index': { paramsTuple?: []; params?: {} }
    'portal.view': { paramsTuple: [ParamValue]; params: {'page': ParamValue} }
    'portal.view.service': { paramsTuple?: []; params?: {} }
    'saas.index': { paramsTuple?: []; params?: {} }
    'emsyncsalon.com.br@auth.show': { paramsTuple?: []; params?: {} }
    'emsyncsalon.com.br@auth.view': { paramsTuple: [ParamValue]; params: {'page': ParamValue} }
    'saas.appPage': { paramsTuple?: []; params?: {} }
    'saas.view': { paramsTuple: [ParamValue]; params: {'page': ParamValue} }
  }
  HEAD: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'tenents_homepages.index': { paramsTuple?: []; params?: {} }
    'auth.show': { paramsTuple?: []; params?: {} }
    'auth.view': { paramsTuple: [ParamValue]; params: {'page': ParamValue} }
    'portal.index': { paramsTuple?: []; params?: {} }
    'portal.view': { paramsTuple: [ParamValue]; params: {'page': ParamValue} }
    'portal.view.service': { paramsTuple?: []; params?: {} }
    'saas.index': { paramsTuple?: []; params?: {} }
    'emsyncsalon.com.br@auth.show': { paramsTuple?: []; params?: {} }
    'emsyncsalon.com.br@auth.view': { paramsTuple: [ParamValue]; params: {'page': ParamValue} }
    'saas.appPage': { paramsTuple?: []; params?: {} }
    'saas.view': { paramsTuple: [ParamValue]; params: {'page': ParamValue} }
  }
  POST: {
    'auth.login': { paramsTuple?: []; params?: {} }
    'emsyncsalon.com.br@auth.login': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}