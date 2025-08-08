import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'appointment_services'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.binary('id',16).primary()
      table.timestamp('start_time', { useTz: true }).notNullable()
      table.timestamp('end_time', { useTz: true }).notNullable()
      table.timestamp('last_change', { useTz: true }).notNullable()
      table.binary('provider',16).nullable()
      table.binary('service',16).nullable()
      table.binary('order',16).nullable()

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