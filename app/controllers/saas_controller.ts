import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { SaasService } from '#services/saas_service'

@inject()
export default class SaasController {
  constructor(protected saasService: SaasService) {}
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    return view.render('pages/app/saasWebpage')
  }

  async app({ view, session }: HttpContext) {
    const saasData = session.get('saasData')
    return view.render('pages/app/saas', { saasData })
  }

  async login({ view, session }: HttpContext) {
    console.log(session.flashMessages.all())
    const flash = session.flashMessages.get('errorsBag') // CORRETO: após redirect, no próximo request
    console.log('flashs', flash)
    return view.render('pages/auth/login', { flash })
  }
  async auth(ctx: HttpContext) {
    await this.saasService.login(ctx)
  }
  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  // async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  // async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  // async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  // async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  // async destroy({ params }: HttpContext) {}
}
