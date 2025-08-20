import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'

export class LoginService {
  // Your code here
  public async login(ctx: HttpContext) {
    const { request, auth, response, tenant, session } = ctx
    const { email, password } = request.only(['email', 'password'])

    const user = await User.query()
      .where('store', tenant?.$attributes.id) // tenant.id, não o objeto inteiro
      .andWhere('email', email) // filtra também pelo email
      .first()

    if (!user) {
      throw new Error('Usuário não encontrado para este tenant')
    }

    const isValid = await hash.verify(user.password, password)
    if (!isValid) {
      session.flash('error', 'Senha incorreta')
      return response.redirect().back()
    }

    // Login e salvar dados na sessão
    try {
      await auth.use('web').login(user)
      session.put('pagedata', { storeName: tenant?.$attributes.storeName, userName: user.fullName })
      return response.redirect('/portaldocliente')
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
