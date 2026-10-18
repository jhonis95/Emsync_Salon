import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'staff'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()

      // Relacionamento com Tenant
      table.uuid('tenant_id').references('id').inTable('tenants').onDelete('CASCADE').notNullable()

      // Relacionamento com Usuário
      table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE').notNullable()

      // Departamento
      table
        .uuid('staff_departments_id')
        .references('id')
        .inTable('staff_departments')
        .onDelete('SET NULL')
        .nullable()

      // Cargo / Job Title
      table
        .uuid('staff_job_title_id')
        .references('id')
        .inTable('staff_job_titles')
        .onDelete('SET NULL')
        .nullable()

      // Status do funcionário
      table.enum('status', ['active', 'inactive', 'in licence']).defaultTo('active')

      // Salário em centavos (integer é melhor para cálculos financeiros)
      table.integer('salary').nullable()

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
