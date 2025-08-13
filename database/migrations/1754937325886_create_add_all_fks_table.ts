import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  async up() {
    // User → Tenant
    this.schema.alterTable('user', (table) => {
      // table.string('store',36).notNullable().alter()
      table.foreign('store').references('tenant.id').onDelete('CASCADE')
    })

    // Tenant → User (owner)
    this.schema.alterTable('tenant', (table) => {
      // table.string('owner',36).notNullable().alter()
      table.foreign('owner').references('user.id').onDelete('CASCADE')
    })

    // Service → Tenant
    this.schema.alterTable('service', (table) => {
      // table.string('store',36).notNullable().alter()
      table.foreign('store').references('tenant.id').onDelete('CASCADE')
    })

    // Inventory → Category, Tenant, Product
    this.schema.alterTable('inventory', (table) => {
      // table.string('category',36).nullable().alter()
      table.foreign('category').references('category.id').onDelete('SET NULL')

      // table.string('store',36).notNullable().alter()
      table.foreign('store').references('tenant.id').onDelete('CASCADE')

      // table.string('product',36).notNullable().alter()
      table.foreign('product').references('product.id').onDelete('CASCADE')
    })

    // Order → User (client), Tenant
    this.schema.alterTable('order', (table) => {
      // table.string('client',36).notNullable().alter()
      table.foreign('client').references('user.id').onDelete('CASCADE')

      // table.string('store',36).notNullable().alter()
      table.foreign('store').references('tenant.id').onDelete('CASCADE')
    })

    // Appointment Service → User (provider), Service, Order
    this.schema.alterTable('appointment_service', (table) => {
      // table.string('provider',36).nullable().alter()
      table.foreign('provider').references('user.id').onDelete('SET NULL')

      // table.string('service',36).notNullable().alter()
      table.foreign('service').references('service.id').onDelete('CASCADE')

      // table.string('order',36).notNullable().alter()
      table.foreign('order').references('order.id').onDelete('CASCADE')
    })

    // Scheduled Product → Order, Product
    this.schema.alterTable('scheduled_product', (table) => {
      // table.string('order',36).notNullable().alter()
      table.foreign('order').references('order.id').onDelete('CASCADE')

      // table.string('product',36).notNullable().alter()
      table.foreign('product').references('product.id').onDelete('CASCADE')
    })

    // Staff → User (employer), Tenant
    this.schema.alterTable('staff', (table) => {
      // table.string('employer',36).notNullable().alter()
      table.foreign('employer').references('user.id').onDelete('CASCADE')

      // table.string('store',36).notNullable().alter()
      table.foreign('store').references('tenant.id').onDelete('CASCADE')
    })

    // Contract → User (signed_by_user), Tenant
    this.schema.alterTable('contract', (table) => {
      // table.string('signed_by_user',36).notNullable().alter()
      table.foreign('signed_by_user').references('user.id').onDelete('CASCADE')

      // table.string('store',36).notNullable().alter()
      table.foreign('store').references('tenant.id').onDelete('CASCADE')
    })

    // Review → User (client), Tenant
    this.schema.alterTable('review', (table) => {
      // table.string('client',36).notNullable().alter()
      table.foreign('client').references('user.id').onDelete('CASCADE')

      // table.string('store_review',36).notNullable().alter()
      table.foreign('store_review').references('tenant.id').onDelete('CASCADE')
    })
  }

  async down() {
    // Remove todas as FKs na ordem inversa
    const tables = [
      'review',
      'contract',
      'staff',
      'scheduled_product',
      'appointment_service',
      'order',
      'inventory',
      'service',
      'tenant',
      'user',
    ]

    tables.forEach((tableName) => {
      this.schema.alterTable(tableName, (table) => {
        table.dropForeign([])
      })
    })
  }
}
