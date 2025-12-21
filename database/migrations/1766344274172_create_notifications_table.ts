import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'notifications'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()

      table
        .uuid('tenant_id')
        .references('id')
        .inTable('tenants')
        .onDelete('CASCADE')
        .notNullable()

      // O autor da notificação
      table
        .uuid('sender_id')
        .references('id')
        .inTable('users')
        .onDelete('SET NULL') // Se o usuário for deletado, mantém a notificação
        .nullable()

      // O destinatário
      table
        .uuid('receiver_id')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .nullable()

      // Snapshot do e-mail (copiado no momento do envio)
      table.string('sent_email_to').nullable()
      
      table.text('message').notNullable()
      
      // Status da notificação
      table.enum('status', ['pending', 'sent', 'read', 'failed']).defaultTo('pending')

      table.timestamp('created_at', { useTz: false }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: false }).notNullable().defaultTo(this.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}