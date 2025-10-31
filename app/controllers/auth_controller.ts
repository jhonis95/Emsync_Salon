import { LoginService } from '#services/login_service'
import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'

@inject()
export default class AuthController {
  constructor(protected loginService: LoginService) {}
  /**
   * Display a list of resource
   */
  async index({ view, tenant }: HttpContext) {
    const storeData = tenant
    return view.render('pages/auth/authportal', {
      store: {
        name: storeData?.$attributes.storeName,
        logo: storeData?.$attributes.logoUrl,
      },
    })
  }

  async login(ctx: HttpContext) {
    await this.loginService.login(ctx)
  }
  /**
   * Display form to create a new record
   */
  // async create({request}: HttpContext) {}

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
