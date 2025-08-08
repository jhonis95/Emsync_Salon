import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'contract'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.binary('id',16).primary()
      table.timestamp('start_day',{ useTz: false }).notNullable()
      table.timestamp('end_day',{ useTz: false }).notNullable()
      table.string('document_link').notNullable()
      table.string('receipt_link').nullable()
      table.string('payment_method').nullable()//[fix] create a new enum
      table.string('contract_status').nullable()//[fix] create a new enum
      table.binary('signed_by_user',16).nullable()
      table.binary('store',16).nullable()

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