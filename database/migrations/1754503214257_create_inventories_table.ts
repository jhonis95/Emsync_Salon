import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'inventory'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.binary('id',16).primary()
      table.integer('quantaty').notNullable().defaultTo(0)
      table.integer('min_stock').defaultTo(0)
      table.enu('unit', ['ml', 'l', 'g', 'kg', 'unit', 'box']).notNullable().defaultTo('unit')
      table.binary('category',16).nullable()
      table.binary('store',16).nullable()
      table.binary('product',16).nullable()

      table.timestamp('created_at', { useTz: false }).notNullable().defaultTo(this.now())
      table
        .timestamp('updated_at', { useTz: false })
        .notNullable()
        .defaultTo(this.raw('CURRENT_TIMESTAMP')) // auto update handled by DB
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}