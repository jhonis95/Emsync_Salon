import { ProductFactory } from '#database/factories/product_factory'
import Tenant from '#models/tenant'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class ProductSeeder extends BaseSeeder {
  public async run() {
    const tenants = await Tenant.all()

    if (tenants.length === 0) {
      console.warn('Nenhum tenant encontrado. Rode primeiro o TenantSeeder.')
      return
    }

    for (const tenant of tenants) {
      await ProductFactory.merge({ tenantId: tenant.id }).createMany(4)
    }
  }
}
