import Tenant from '#models/tenant'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  public async run() {
    await Tenant.createMany([
      {
        storeName: 'Salão Estilo & Beleza',
        cnpj: 12345678901234,
        domain: 'estilobeleza.com.br',
        phone: '(11) 98765-4321',
        email: 'contato@estilobeleza.com.br',
        logoUrl: 'https://example.com/logos/estilo.png',
        // owner não é definido aqui, pode ser atualizado depois
      },
      {
        storeName: 'Barbearia Corte Fino',
        cnpj: 98765432109876,
        domain: 'cortefino.com.br',
        phone: '(21) 99887-6655',
        email: 'contato@cortefino.com.br',
        logoUrl: 'https://example.com/logos/cortefino.png',
      },
    ])
  }
}
