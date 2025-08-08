import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'order'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.binary('id',16).primary()
      table
        .enu('status', ['finalizado', 'agendado', 'atrazado'])
        .notNullable()
        .defaultTo('agendado')
      table.binary('client',16).nullable()
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