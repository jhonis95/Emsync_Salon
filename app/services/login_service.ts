import User from "#models/user";
import { HttpContext } from "@adonisjs/core/http";
import Hash from '@adonisjs/core/services/hash'

export class LoginService {
  // Your code here
  public async login(ctx: HttpContext) {
    const { request, auth, response, tenant,session } = ctx
    const { email, password } = request.only(['email', 'password'])

    // Busca o usuário pelo campo name
    // const user = await User.verifyCredentials(email, password)
    const user = await User
      .query()
      .where('store', tenant?.$attributes.id)  // tenant.id, não o objeto inteiro
      .andWhere('email', email)          // filtra também pelo email
      .first()

    if (!user) {
      throw new Error('Usuário não encontrado para este tenant')
    }
// const testHash = await Hash.make('senha123')
// console.log('test hash:', testHash)
// console.log('verify test:', await Hash.verify(testHash, 'senha123'))

//     console.log('Password raw:', password, ' length:', password.length)
//     console.log('Hash:', user.password)
// Verifica senha
    const isValid = await Hash.verify(user.password,password)
//     console.log('isValid:', isValid)

    if (!isValid) {
      session.flash('error', 'Senha incorreta')
      return response.redirect().back()
    }

    // Login e salvar dados na sessão
    try {
      await auth.use('web').login(user)
      session.put('pagedata', { storeName: tenant?.$attributes.storeName, userName: auth.user?.$attributes.name })
      return response.redirect('/dashboard')
    } catch (error) {
      session.flash('error', 'Não foi possível logar')
      return response.redirect().back()
    }
  }

  public async logout({ auth, response, session }: HttpContext) {
    await auth.use('web').logout()
    session.clear()
    return response.redirect('/login')
  }
}