import { LoginService } from '#services/login_service'
import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { loginUserVilidatorSchema } from '#validators/user'
import vine from '@vinejs/vine'

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

  async loginPortal({ response, request, tenant, auth, session }: HttpContext) {
    if (!tenant) {
      return response.abort('Tenant não encontrado')
    }

    try {
      if (tenant) {
        const data = request.only(['email', 'password'])
        const validator = vine.create(loginUserVilidatorSchema)
        const payload = await validator.validate(data)
        
        const user =await this.loginService.verifyCredentials(payload.password, payload.email)
        await this.loginService.verifyUserToTenant(user.id, tenant.id)
        await auth.use('web').login(user)
        session.put('pagedata', {
          storeName: tenant.$attributes.storeName,
          userName: user.fullName,
        })
        return response.redirect('/portaldocliente')
      }
    } catch (error: any) {
      //[fix] corrigir erro de tipagem
      session.flash('error', error.message)
      return response.redirect().back()
    }
  }
  /**
   * 
  async signupApp({response, request, auth, session}:HttpContext){  
    const data = request.only(['email', 'password'])
    const validator = vine.create(loginUserVilidatorSchema)
    const payload = await validator.validate(data)
    try {
      const user = await this.loginService.findUserByEmail(payload.email)
      await this.loginService.verifyCredentials(user,payload.password)
      await auth.use('web').login(user)
  
      session.put('pagedata', { storeName: 'Emsync Salon', userName: user.fullName })
      return response.redirect('/app')
      
    } catch (error: any) { //[fix] corrigir erro de tipagem
      session.flash('error', error.message)
      return response.redirect().back() 
    }
  }

   */

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
