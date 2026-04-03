import User from '#models/user'
import { BasePolicy } from '@adonisjs/bouncer'
import type { AuthorizerResponse } from '@adonisjs/bouncer/types'

export default class UserPolicy extends BasePolicy {
    create(user: User): AuthorizerResponse {
      return true
    }

    /**
     * O usuário pode editar se for um 'admin' ou se for o próprio dono do perfil.
     */
    async edit(user: User, targetUser: User): Promise<AuthorizerResponse> {
        /**
         * O ideal é que, se possível, você faça o preload('userRoles') no momento em que o usuário é autenticado ou quando você busca o usuário no Controller, antes de passar pela Policy.
         * caso nao seja vai cair no if para carregamento
         */
        if (!user.userRoles) {
            await user.load('userRoles')
        }
        const isAdmin = user.userRoles.some((role) => role.name === 'admin')
        const isSelf = user.id === targetUser.id

        return isAdmin || isSelf        
    }

    delete(user: User): AuthorizerResponse {
      return true
    }

}