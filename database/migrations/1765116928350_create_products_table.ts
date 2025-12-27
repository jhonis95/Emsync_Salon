import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table
        .uuid('tenant_id')
        .references('id')
        .inTable('tenants')
        .onDelete('CASCADE')
        .notNullable()
      table.uuid('product_service_categories_id').references('id').inTable('product_service_categories').onDelete('SET NULL')
      table.string('name')
      table.integer('price')
      table.string('image')

      table.timestamp('created_at', { useTz: false }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: false }).notNullable().defaultTo(this.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}