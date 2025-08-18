import Tenant from '#models/tenant'
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import hash from '@adonisjs/core/services/hash'

export default class extends BaseSeeder {
  public async run() {
    const tenants = await Tenant.all()

    if (tenants.length === 0) {
      console.warn('Nenhum tenant encontrado. Rode primeiro o TenantSeeder.')
      return
    }

    for (const tenant of tenants) {
      // --- Criar o Owner ---
      const owner = await User.create({
        fullName: `Owner - ${tenant.storeName}`,
        notes: 'Usuário proprietário',
        email: `owner@${tenant.domain || 'example.com'}`,
        password: await hash.make('senha123'),
        storeId: tenant.id,
      })

      // Atualizar o tenant com o owner
      tenant.ownerId = owner.id
      await tenant.save()

      // --- Criar outros usuários ---
      const extraUsersData = [
        {
          fullName: `Funcionário 1 - ${tenant.storeName}`,
          notes: 'Funcionário auxiliar',
          email: `func1@${tenant.domain || 'example.com'}`,
        },
        {
          fullName: `Funcionário 2 - ${tenant.storeName}`,
          notes: 'Funcionário auxiliar',
          email: `func2@${tenant.domain || 'example.com'}`,
        },
        {
          fullName: `Funcionário 3 - ${tenant.storeName}`,
          notes: 'Funcionário auxiliar',
          email: `func3@${tenant.domain || 'example.com'}`,
        },
      ]

      for (const data of extraUsersData) {
        await User.create({
          ...data,
          password: await hash.make('senha123'),
          storeId: tenant.id,
        })
      }
    }
  }
}
