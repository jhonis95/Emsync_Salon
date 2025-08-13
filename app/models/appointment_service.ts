import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, belongsTo } from '@adonisjs/lucid/orm'
import { v4 as uuidv4 } from 'uuid'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Order from './order.js'
import Service from './service.js'
import User from './user.js'

export default class AppointmentService extends BaseModel {
  public static table = 'appointment_service'
  @column({ isPrimary: true })
  declare id: string

  @column({ columnName: 'start_time' })
  declare startTime: DateTime

  @column({ columnName: 'end_time' })
  declare endTime: DateTime

  @column({ columnName: 'last_change' })
  declare lastChenge: DateTime

  @column({ columnName: 'provider' })
  declare providerId: string

  @column({ columnName: 'service' })
  declare serviceId: string

  @column({ columnName: 'order' })
  declare orderId: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => User, {
    foreignKey: 'providerId',
  })
  declare providerData: BelongsTo<typeof User>

  @belongsTo(() => Service, {
    foreignKey: 'serviceId',
  })
  declare serviceData: BelongsTo<typeof Service>

  @belongsTo(() => Order, {
    foreignKey: 'orderId',
  })
  declare orderData: BelongsTo<typeof Order>

  @beforeCreate()
  static assignUuid(appointmentService: AppointmentService) {
    appointmentService.id = uuidv4()
  }
}
