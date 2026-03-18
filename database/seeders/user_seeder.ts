import Tenant from '#models/tenant'
import User from '#models/user'
import UserTenant from '#models/user_tenant'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  public async run() {
    const tenants = await Tenant.all()

    if (tenants.length === 0) {
      console.warn('Nenhum tenant encontrado. Rode primeiro o TenantSeeder.')
      return
    }

    for (const tenant of tenants) {
      // --- Criar outros usuários ---
      const extraUsersData = [
        {
          fullName: `Funcionário 1 - ${tenant.storeName}`,
          internalNote: 'Funcionário auxiliar',
          email: `func1@${tenant.domain || 'example.com'}`,
          phone: '00000000000',
        },
        {
          fullName: `Funcionário 2 - ${tenant.storeName}`,
          internalNote: 'Funcionário auxiliar',
          email: `func2@${tenant.domain || 'example.com'}`,
          phone: '00000000000',
        },
        {
          fullName: `Funcionário 3 - ${tenant.storeName}`,
          internalNote: 'Funcionário auxiliar',
          email: `func3@${tenant.domain || 'example.com'}`,
          phone: '00000000000',
        },
      ]

      for (const data of extraUsersData) {
        let user = await User.create({
          ...data,
          password: 'senha123',
        })

        await UserTenant.create({
          tenantId: tenant.id,
          userId: user.id,
        })
      }
    }
  }
}
