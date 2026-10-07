import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'home': { paramsTuple?: []; params?: {} }
    'ujians.login': { paramsTuple?: []; params?: {} }
    'ujians.register': { paramsTuple?: []; params?: {} }
    'ujians.register_post': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'home': { paramsTuple?: []; params?: {} }
    'ujians.login': { paramsTuple?: []; params?: {} }
    'ujians.register': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'home': { paramsTuple?: []; params?: {} }
    'ujians.login': { paramsTuple?: []; params?: {} }
    'ujians.register': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'ujians.register_post': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}