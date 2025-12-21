import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'open_hours'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()

      table
        .enum('day_of_week', ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'])
        .notNullable()

      // Horários de abertura e fechamento
      table.time('open_time').notNullable()
      table.time('close_time').notNullable()

      // Relacionamento com o Tenant
      table
        .uuid('tenant_id')
        .references('id')
        .inTable('tenants')
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