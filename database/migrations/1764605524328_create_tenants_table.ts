import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tenants'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('store_name').notNullable()
      table.text('store_descriprion').notNullable()
      table.bigInteger('cnpj').notNullable()
      table.string('domain').nullable()
      table.string('phone').nullable()
      table.string('email').nullable()
      table.text('adress').nullable()
      table.string('logo_url').nullable()

      table.timestamp('created_at', { useTz: false }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: false }).notNullable().defaultTo(this.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}