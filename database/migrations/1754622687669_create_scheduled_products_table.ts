import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'scheduled_product'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.binary('id',16).primary()
      table.timestamp('pick_date',{ useTz: false }).notNullable()
      table.binary('order',16).nullable()
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