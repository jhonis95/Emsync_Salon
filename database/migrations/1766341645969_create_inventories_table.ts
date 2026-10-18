import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'inventories'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      // Relacionamentos
      table.uuid('tenant_id').references('id').inTable('tenants').onDelete('CASCADE').notNullable()

      table
        .uuid('product_id') // Alterado de product para product_id
        .references('id')
        .inTable('products')
        .onDelete('CASCADE')
        .notNullable()

      table
        .uuid('status_id') // Alterado de status para status_id
        .references('id')
        .inTable('inventory_statuses')
        .onDelete('SET NULL')
        .nullable()

      // Quantidades e Alertas
      table.integer('quantity').notNullable().defaultTo(0)
      table.integer('min_stock').defaultTo(0)
      table.integer('min_stock_alert').defaultTo(10)

      // Unidade usando ENUM nativo do banco
      table.enum('unit', ['pack', 'box', 'unit']).defaultTo('unit')

      table.boolean('active').defaultTo(true)

      table.timestamp('created_at', { useTz: false }).defaultTo(this.now())
      table
        .timestamp('updated_at', { useTz: false })
        .notNullable()
        .defaultTo(this.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
