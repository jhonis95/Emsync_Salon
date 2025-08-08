import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, belongsTo } from '@adonisjs/lucid/orm'
import { v4 as uuidv4 } from 'uuid'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Order from './order.js'
import Product from './product.js'

export default class ScheduledProduct extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column({ columnName: 'pick_date' })
  declare pickupDate: DateTime

  @column({columnName: 'order'})
  declare orderId: string

  @column({columnName: 'product'})
  declare productId: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Order, {
    foreignKey: 'orderId',
  })
  declare orderData: BelongsTo<typeof Order>

  @belongsTo(() => Product, {
    foreignKey: 'productId',
  })
  declare productData: BelongsTo<typeof Product>

  @beforeCreate()
  static assignUuid(scheduledProduct: ScheduledProduct) {
    scheduledProduct.id = uuidv4()
  }
}
