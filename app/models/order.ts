import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import { v4 as uuidv4 } from 'uuid'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Tenant from './tenant.js'
import User from './user.js'
import ScheduledProduct from './scheduled_product.js'

export default class Order extends BaseModel {
  public static table = 'order'
  @column({ isPrimary: true })
  declare id: string

  @column({ columnName: 'tenant_id' })
  declare tenantId: string

  @column({ columnName: 'user_id' })
  declare userId: string

  @column()
  declare status: 'finalizado' | 'agendado' | 'atrazado'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // --- Relacionamentos ---
  @belongsTo(() => Tenant, { foreignKey: 'tenantId' })
  declare tenant: BelongsTo<typeof Tenant>

  @belongsTo(() => User, { foreignKey: 'userId' })
  declare user: BelongsTo<typeof User>

  @hasMany(() => ScheduledProduct, { foreignKey: 'orderId' })
  declare scheduled_product: HasMany<typeof ScheduledProduct>

  @beforeCreate()
  static assignUuid(order: Order) {
    order.id = uuidv4()
  }
}
