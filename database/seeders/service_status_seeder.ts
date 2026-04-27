import ServiceStatus from '#models/service_status'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    const status = [{ name: 'Ativo' }, { name: 'Inativo' }]

    await ServiceStatus.createMany(status)
  }
}
