import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.foreign('role_id').references('id').inTable('roles').onDelete('SET NULL')
      table.foreign('status_id').references('id').inTable('user_status').onDelete('SET NULL')
      table.string('full_name').notNullable()
      table.string('email').notNullable()
      table.string('password').notNullable()
      table.text('observation')
      table.text('internal_note')
      table.enum('gender', ['homem', 'mulher']).nullable()
      table.string('adress')
      table.string('city')

      table.timestamp('created_at', { useTz: false }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: false }).notNullable().defaultTo(this.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}