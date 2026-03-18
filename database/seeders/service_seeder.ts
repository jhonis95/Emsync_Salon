import Service from '#models/service'
import Tenant from '#models/tenant'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class ServiceSeeder extends BaseSeeder {
  public async run() {
    const tenants = await Tenant.all()

    if (tenants.length === 0) {
      console.warn('Nenhum tenant encontrado. Rode primeiro o TenantSeeder.')
      return
    }

    // Serviços comuns de salão/barbearia
    const services = [
      {
        name: 'Corte Masculino',
        price: 50,
        image: '/images/services/corte-masculino.jpg',
        description: 'Corte de cabelo masculino com acabamento na tesoura ou máquina.',
        duration: 45,
      },
      {
        name: 'Corte Feminino',
        price: 80,
        image: '/images/services/corte-feminino.jpg',
        description: 'Corte de cabelo feminino com finalização escovada.',
        duration: 60,
      },
      {
        name: 'Barba',
        price: 35,
        image: '/images/services/barba.jpg',
        description: 'Aparar e modelar a barba com toalha quente.',
        duration: 30,
      },
      {
        name: 'Hidratação Capilar',
        price: 90,
        image: '/images/services/hidratacao.jpg',
        description: 'Tratamento de hidratação profunda para cabelos ressecados.',
        duration: 60,
      },
      {
        name: 'Coloração',
        price: 150,
        image: '/images/services/coloracao.jpg',
        description: 'Coloração capilar com tintura profissional.',
        duration: 120,
      },
      {
        name: 'Manicure',
        price: 40,
        image: '/images/services/manicure.jpg',
        description: 'Manicure completa com esmaltação.',
        duration: 40,
      },
      {
        name: 'Pedicure',
        price: 50,
        image: '/images/services/pedicure.jpg',
        description: 'Pedicure relaxante com tratamento dos pés.',
        duration: 50,
      },
    ]

    // Criar os serviços para cada tenant
    for (const tenant of tenants) {
      for (const service of services) {
        await Service.firstOrCreate(
          { name: service.name, tenantId: tenant.id },
          {
            price: service.price,
            image: service.image,
            description: service.description,
            duration: service.duration,
            tenantId: tenant.id,
          }
        )
      }
    }
  }
}
