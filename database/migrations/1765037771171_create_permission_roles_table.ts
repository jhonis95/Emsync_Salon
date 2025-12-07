import { BaseSchema } from '@adonisjs/lucid/schema'

//Quais permissões um role possui.
export default class extends BaseSchema {
  protected tableName = 'permission_roles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.foreign('role_id').references('id').inTable('roles').onDelete('CASCADE').notNullable()
      table.foreign('permission_id').references('id').inTable('permissions').onDelete('CASCADE').notNullable()
      table.unique(['role_id','permission_id'])

      table.timestamp('created_at', { useTz: false }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: false }).notNullable().defaultTo(this.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}