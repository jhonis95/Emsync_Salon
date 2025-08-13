import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tenant'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id', 36).primary() // corresponde ao @column({ isPrimary: true })
      table.string('store_name').notNullable() // @column({ columnName: 'store_name' })
      table.bigInteger('cnpj').notNullable()
      table.string('domain').nullable()
      table.string('phone').notNullable()
      table.string('email').notNullable()
      table.string('logo_url').nullable() // @column({ columnName: 'logo_url' })

      table.string('owner', 36).nullable()
      // corresponde ao @column({ columnName: 'owner' }) e @belongsTo(() => User)

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
