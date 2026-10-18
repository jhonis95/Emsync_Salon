import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'contracts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table
        .uuid('signed_by_user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
      table.uuid('tenant_id').notNullable().references('id').inTable('tenants').onDelete('CASCADE')
      table.uuid('plan_id').notNullable().references('id').inTable('plans').onDelete('CASCADE')
      // Dates
      table.dateTime('start_day').notNullable()
      table.dateTime('end_day').notNullable()
      // Files/links
      table.string('document_link').notNullable()
      table.string('receipt_link')
      // Enums
      table.enum('payment_method', ['pix', 'credito', 'debito'])
      table.enum('contract_status', ['pago', 'nao_pago'])
      // Timestamps
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
