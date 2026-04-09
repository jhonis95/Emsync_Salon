import factory from '@adonisjs/lucid/factories'
import Service from '#models/service'

const servicesList = [
  {
    name: 'Corte Masculino',
    price: 50,
    image: 'https://img.freepik.com/free-photo/young-man-barbershop-trimming-hair_1303-26254.jpg?t=st=1775616259~exp=1775619859~hmac=284784340033c9ce8f377ffb2f8429f70bfb8f094e00a2d88310ac2272416855&w=1480',
    description: 'Corte de cabelo masculino com acabamento na tesoura ou máquina.',
    duration: 45,
  },
  {
    name: 'Corte Feminino',
    price: 80,
    image: 'https://img.freepik.com/premium-photo/woman-is-cutting-hair-with-comb-another-woman-is-wearing-black-jacket_1034910-67248.jpg?w=1480',
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

export const ServiceFactory = factory
  .define(Service, async ({ faker }) => {
    const randomService = faker.helpers.arrayElement(servicesList)
    return {
      name: randomService.name,
      price: Number.parseInt(faker.commerce.price({ min: 10, max: 100, dec: 2})),
      image: randomService.image,
      description: randomService.description,
      duration: randomService.duration,
      active: true,
    }
  })
  .build()