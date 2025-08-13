import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    
    return view.render('pages/auth',{
      store:{
        name:'Estilo Baleza',
        logo: ''
      }
    })
  }

  /**
   * Display form to create a new record
   */
  // async create({request}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  // async store({ request }: HttpContext) {}
  async login({ request }: HttpContext) {}
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
