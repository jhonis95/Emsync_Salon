import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'appointment_services'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.timestamp('start_time').nullable()
      table.timestamp('end_time').nullable()
      table.timestamp('last_change').nullable()

      // Relacionamento com a tabela 'services'
      table
        .uuid('service_id')
        .references('id')
        .inTable('services')
        .onDelete('CASCADE')
        .notNullable()

      // Relacionamento com a tabela 'orders'
      table
        .uuid('order_id')
        .references('id')
        .inTable('orders')
        .onDelete('CASCADE')
        .notNullable()

      table.timestamp('created_at', { useTz: false }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: false }).notNullable().defaultTo(this.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}