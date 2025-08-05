import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'user'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.binary('id', 16).primary()
      table.string('full_name').notNullable()
      table.string('role').nullable()
      table.text('notes').nullable()
      table.string('email').notNullable()
      table.string('password').notNullable()
      table.binary('store', 16).nullable()

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
