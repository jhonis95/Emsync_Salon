import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'staff'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id', 36).primary()
      table.enu('work_day', ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom']).notNullable()
      table.timestamp('start_time', { useTz: false }).notNullable()
      table.timestamp('end_time', { useTz: false }).notNullable()
      table.string('employer', 36).nullable()
      table.string('store', 36).nullable()

      table.timestamp('created_at', { useTz: false }).notNullable().defaultTo(this.now())
      table
        .timestamp('updated_at', { useTz: false })
        .notNullable()
        .defaultTo(this.raw('CURRENT_TIMESTAMP')) // auto update handled by DB
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
