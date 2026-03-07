import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'plans'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('plan_name')
      table.string('subtitle')
      table.integer('sort_priority').notNullable()
      table.decimal('setup_value', 10, 2)
      table.decimal('subscription_value', 10, 2)
      table.enum('billing_cycle', ['mensal', 'anual'])
      table.text('details')

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
