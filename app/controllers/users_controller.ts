import UserPolicy from '#policies/user_policy'
import { UserService } from '#services/user_service'
import { createUserPropsValidator } from '#validators/user'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class UsersController {
  constructor(protected userService: UserService) {}
  async createUser({ request }: HttpContext) {
    const data = request.all
    const payload = await createUserPropsValidator.validate(data)
    try {
      this.userService.createUser(payload)
    } catch {}
  }
  async getTenant({ auth }: HttpContext) {
    const user = auth.use('web').user?.id
    return this.userService.getTenant(user)
  }
  async editUser({ auth,bouncer,response,params }: HttpContext) {
    // 1. Buscamos o usuário que será editado
    const targetUser = await this.userService.getUser(params.id)
    //const targetUser = await User.findOrFail(params.id)

    // 2. OTIMIZAÇÃO: Carregamos as roles do usuário LOGADO antes de testar a policy
    // Isso faz com que o 'userRoles' já exista dentro do objeto auth.user
    await auth.user!.load('userRoles')

    // 3. Chamamos o bouncer
    // O bouncer passa o 'auth.user' (já com roles) para o primeiro param da Policy
    // E o 'targetUser' para o segundo param
    //[fix] talvez seja melhor colocar a verificação de permissão como methodo de userService
    if(targetUser){
      if (await bouncer.with(UserPolicy).denies('edit', targetUser)) {
        return response.forbidden('Você não tem permissão para editar este usuário')
      }
    }
  }
  async deleteUser({}: HttpContext) {}
}
