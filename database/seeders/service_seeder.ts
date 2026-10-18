import { ServiceFactory } from '#database/factories/service_factory'
import ServiceStatus from '#models/service_status'
import Tenant from '#models/tenant'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class ServiceSeeder extends BaseSeeder {
  public async run() {
    const tenants = await Tenant.all()

    if (tenants.length === 0) {
      console.warn('Nenhum tenant encontrado. Rode primeiro o TenantSeeder.')
      return
    }

    const serviceStatus = await ServiceStatus.all()

    if (serviceStatus.length === 0) {
      console.warn('Nenhum status encontrado. Rode primeiro o ServiceStatusSeeder.')
      return
    }
    // Criar os serviços para cada tenant
    for (const tenant of tenants) {
      await ServiceFactory.merge({ statusId: serviceStatus[0].id, tenantId: tenant.id }).createMany(
        3
      )
    }
  }
}
