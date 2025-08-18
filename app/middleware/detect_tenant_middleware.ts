import Tenant from '#models/tenant'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

// Extender o HttpContext para incluir tenant
declare module '@adonisjs/core/http' {
  interface HttpContext {
    tenant?: typeof Tenant.prototype
  }
}

export default class DetectTenantMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const hostname = ctx.request.hostname()

    if (!hostname) {
      return ctx.response.status(400).send('Hostname não fornecido')
    }

    const tenant = await Tenant.findBy('domain', hostname)
    if (!tenant) {
      return ctx.response.status(404).send('Tenant não encontrado')
    }

    ctx.tenant = tenant

    await next()
  }
}
