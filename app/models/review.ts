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

  @column()
  declare content: string

  @column({ columnName: 'client' })
  declare clientId: string

  @column({ columnName: 'store_review' })
  declare storeReviewId: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => User, {
    foreignKey: 'clientID',
  })
  declare storeData: BelongsTo<typeof User>

  @belongsTo(() => Tenant, {
    foreignKey: 'storeReviewId',
  })
  declare storeReviewData: BelongsTo<typeof Tenant>

  @beforeCreate()
  static assignUuid(order: Review) {
    order.id = uuidv4()
  }
}
