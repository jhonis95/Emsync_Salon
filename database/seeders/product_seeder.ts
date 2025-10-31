import Product from '#models/product'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class ProductSeeder extends BaseSeeder {
  public async run() {
    const products = [
      {
        name: 'Shampoo Profissional',
        price: 29.9,
        image: '/images/products/shampoo.jpg',
      },
      {
        name: 'Condicionador Hidratante',
        price: 34.9,
        image: '/images/products/condicionador.jpg',
      },
      {
        name: 'Creme para Pentear',
        price: 24.9,
        image: '/images/products/creme.jpg',
      },
      {
        name: 'Máquina de Corte',
        price: 199.9,
        image: '/images/products/maquina-corte.jpg',
      },
      {
        name: 'Tesoura Profissional',
        price: 89.9,
        image: '/images/products/tesoura.jpg',
      },
      {
        name: 'Escova de Cabelo',
        price: 19.9,
        image: '/images/products/escova.jpg',
      },
      {
        name: 'Secador de Cabelo',
        price: 299.9,
        image: '/images/products/secador.jpg',
      },
      {
        name: 'Pomada Modeladora',
        price: 39.9,
        image: '/images/products/pomada.jpg',
      },
    ]

    // Evita duplicar caso rode o seed mais de uma vez
    for (const product of products) {
      await Product.firstOrCreate(
        { name: product.name },
        {
          price: product.price,
          image: product.image,
        }
      )
    }
  }
}
