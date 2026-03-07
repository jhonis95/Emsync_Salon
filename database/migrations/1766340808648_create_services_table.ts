import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'services'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.uuid('public_id').notNullable().unique()

      // Chaves Estrangeiras (Relacionamentos)
      table.uuid('tenant_id').references('id').inTable('tenants').onDelete('CASCADE').notNullable()

      table
        .uuid('status_id') // Alterado de status para status_id seguindo a convenção
        .references('id')
        .inTable('service_statuses')
        .onDelete('RESTRICT') // Evita deletar um status que está sendo usado
        .notNullable()

      table
        .uuid('category_id') // Alterado de category para category_id
        .references('id')
        .inTable('product_service_categories')
        .onDelete('SET NULL') // Se a categoria sumir, o serviço continua existindo
        .nullable()

      // Dados do Serviço
      table.string('name').notNullable()
      table.integer('price').notNullable() // Valor em centavos (ex: 1000 = R$ 10,00)
      table.string('image').nullable()
      table.text('description').nullable()
      table.integer('duration').nullable() // Duração em minutos
      table.boolean('active').defaultTo(true)

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
