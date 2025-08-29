// import type { HttpContext } from '@adonisjs/core/http'
import { PortalService } from '#services/portal_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'


@inject()
export default class PortalsController {
    constructor(protected portalService: PortalService) {}
    async index({ session, view }: HttpContext) {
      const pagedata = session.get('pagedata')
      return view.render('pages/clientPortal', { pagedata })
    }
    async view({ params, view }: HttpContext) {
      const content = await this.portalService.defineContentMain(params.page)
    
      return view.render(`components/portal/${params.page}`, {content})
    }
}