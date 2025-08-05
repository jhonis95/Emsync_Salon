import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate } from '@adonisjs/lucid/orm'
import { Status } from '../../contracts/enums/status.js'
import { v4 as uuidv4 } from 'uuid'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare status: Status //[fix] create a enum para status

  @column({ columnName: 'client' })
  declare clientId: string

  @column({ columnName: 'store' })
  declare storeId: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static assignUuid(order: Order) {
    order.id = uuidv4()
  }
}
