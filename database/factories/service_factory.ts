import factory from '@adonisjs/lucid/factories'
import Service from '#models/service'

/**
 * const servicesList = [
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
]
 *.define(Service, ({ faker }) => {
    const randomService = faker.helpers.arrayElement(servicesList)

    return {
      name: randomService.name,
      price: randomService.price,
      image: randomService.image,
      description: randomService.description,
      duration: randomService.duration,
      active: true,
    }
  }) 

  uso no seed 
  await ServiceFactory
  .merge({
    tenantId: tenant.id,
    statusId: status.id,
  })
  .createMany(10)
 */

/*
export const ServiceFactory = factory
  .define(Service, async ({ faker }) => {
    return {
      name:faker.commerce.productName(),
      image: faker.helpers.arrayElement([
        'https://loremflickr.com/320/240/hair,cut'
      ]),
      description: faker.commerce.productDescription(),
      duration: faker.helpers.arrayElement([30,20,60,90]),
      price: Number.parseInt(faker.commerce.price({ min: 80, max: 200 })),
    }
  })
  .build()
*/
const servicesList = [
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
]

export const ServiceFactory = factory
  .define(Service, async ({ faker }) => {
    const randomService = faker.helpers.arrayElement(servicesList)
    return {
      name: randomService.name,
      price: randomService.price,
      image: randomService.image,
      description: randomService.description,
      duration: randomService.duration,
      active: true,
    }
  })
  .build()