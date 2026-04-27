import { SignupService } from '#services/signup_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class SingupsController {
  constructor(protected signupService: SignupService) {}
  async index({ view }: HttpContext) {
    return view.render('pages/auth/index')
  }
  async view({ view, params }: HttpContext) {
    const content = await this.signupService.defineMainPage(params.page)
    return view.render(`pages/auth/${params.page}`, { plansContent: content })
  }
  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  // async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  // async destroy({ params }: HttpContext) {}
}
