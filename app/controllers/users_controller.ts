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
}
