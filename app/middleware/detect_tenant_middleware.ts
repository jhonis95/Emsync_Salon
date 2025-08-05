import Tenant from '#models/tenant'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

// Extend the Request interface to include 'tenant'
//later it can be put on hook
declare module '@adonisjs/core/http' {
  interface Request {
    tenant?: typeof Tenant.prototype
  }
}

export default class DetectTenantMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */
    const hostname = ctx.request.hostname()
    if (!hostname) {
      return ctx.response.status(400).send('Hostname não fornecido')
    }
    const tenant = await Tenant.query().where('domain', hostname).first()

    if (!tenant) {
      return ctx.response.status(404).send('Tenant não encontrado')
    }
    ctx.request.tenant = tenant

    /**
     * Call next method in the pipeline and return its output
     */
    const output = await next()
    return output
  }
}
