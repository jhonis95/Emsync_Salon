import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, belongsTo } from '@adonisjs/lucid/orm'
import { v4 as uuidv4 } from 'uuid'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import Tenant from './tenant.js'

export default class Review extends BaseModel {
  public static table = 'review'
  @column({ isPrimary: true })
  declare id: string

  @column({ columnName: 'tenant_id' })
  declare tenantId: string

  @column({ columnName: 'user_id' })
  declare userId: string

  @column()
  declare content: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => User, {
    foreignKey: 'userId',
  })
  declare storeData: BelongsTo<typeof User>

  @belongsTo(() => Tenant, {
    foreignKey: 'tenantId',
  })
  declare storeReviewData: BelongsTo<typeof Tenant>

  @beforeCreate()
  static assignUuid(order: Review) {
    order.id = uuidv4()
  }
}
