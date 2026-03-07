// import type { HttpContext } from '@adonisjs/core/http'
import { PortalService } from '#services/portal_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class PortalsController {
  constructor(protected portalService: PortalService) {}
  async index({ session, view }: HttpContext) {
    const pagedata = session.get('pagedata')
    return view.render('pages/portal/index', { pagedata })
  }

  async view({ params, view, tenant }: HttpContext) {
    const content = await this.portalService.defineContentMain(params.page, tenant)
    return view.render(`components/app/portal/${params.page}`, { content })
  }

  async appoiment({ view }: HttpContext) {
    return view.render('')
  }
}
