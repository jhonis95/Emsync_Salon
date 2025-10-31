import Category from '#models/category'
import Inventory from '#models/inventory'
import Product from '#models/product'
import Tenant from '#models/tenant'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { Unit } from '../../contracts/enums/unit.js'

export default class InventorySeeder extends BaseSeeder {
  public async run() {
    const tenants = await Tenant.all()
    if (tenants.length === 0) {
      console.warn('Nenhum tenant encontrado. Rode primeiro o TenantSeeder.')
      return
    }

    const products = await Product.all()
    if (products.length === 0) {
      console.warn('Nenhum produto encontrado. Rode primeiro o ProductSeeder.')
      return
    }

    const categories = await Category.all()

    // Para cada tenant cria alguns itens no estoque
    for (const tenant of tenants) {
      for (const product of products.slice(0, 3)) {
        await Inventory.create({
          quantaty: Math.floor(Math.random() * 50) + 10, // estoque inicial aleatório
          unit: Unit.UNIT, // depende do seu enum Unit
          categoryId: categories.length ? categories[0].id : null,
          storeId: tenant.id,
          productId: product.id,
        })
      }
    }
  }
}