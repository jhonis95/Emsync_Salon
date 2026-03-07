import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'staff_schedules'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      // Relacionamento com o Staff (usando o ID integer que você definiu)
      table.uuid('staff_id').references('id').inTable('staff').onDelete('CASCADE').notNullable()

      // Dia da semana
      table.enum('day_of_week', ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom']).notNullable()

      // Horários
      table.time('start_time').notNullable() // Ex: 08:00
      table.time('end_time').notNullable() // Ex: 18:00

      // Opcional: Permitir marcar se é dia de folga
      table.boolean('is_day_off').defaultTo(false)

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
