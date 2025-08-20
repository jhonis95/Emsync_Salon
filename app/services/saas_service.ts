import User from "#models/user"
import { HttpContext } from "@adonisjs/core/http"

export class SaasService {
  public async login(ctx: HttpContext){
    const { request, auth, response, session  } = ctx
    const { email, password } = request.only(['email', 'password'])
    // 1. Verifica credenciais
    const user = await User.verifyCredentials(email, password)

    // 2. Carrega os tenants do usuário
    await user.load('storeData')

    if (!user.storeData) {
      return response.badRequest({ message: 'Usuário não está vinculado a nenhuma loja' })
    }
    try {
      // 3. Faz login normalmente
      await auth.use('web').login(user)
  
      // 4. Salva tenant na sessão
      session.put('saasData', { tenantName:user.storeData.storeName, userName:user.fullName })
      response.redirect('/app')
    } catch (error) {
      session.flash('error', 'Não foi possível logar')
      return response.redirect().back()
    }
  }
  public async logout({ auth, response, session }: HttpContext) {
    await auth.use('web').logout()
    session.clear()
    return response.redirect('/auth')
  }
}