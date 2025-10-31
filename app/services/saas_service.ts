import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'

export class SaasService {
  public async login(ctx: HttpContext) {
    const { request, auth, response, session } = ctx
    const { email, password } = request.only(['email', 'password'])
    // 1. Verifica credenciais
    const user = await User.verifyCredentials(email, password)

    // 2. Carrega os tenants do usuário
    await user.load('storeData')

    try {
      // 3. Faz login normalmente
      await auth.use('web').login(user)

      // 4. Salva tenant na sessão
      session.put('saasData', { tenantName: user.storeData.storeName, userName: user.fullName })
      response.redirect('/app')
    } catch (error) {
      session.flash('saaserror', 'Não foi possível logar')
      return response.redirect('/auth')
    }
  }

  public async logout({ auth, response, session }: HttpContext) {
    await auth.use('web').logout()
    session.clear()
    return response.redirect('/auth')
  }
}
