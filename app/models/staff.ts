import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, belongsTo, column } from '@adonisjs/lucid/orm'
import { WorkDay } from '../../contracts/enums/workDays.js'
import { v4 as uuidv4 } from 'uuid'
import Tenant from './tenant.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class Staff extends BaseModel {
  public static table = 'staff'
  @column({ isPrimary: true })
  declare id: string

  @column({ columnName: 'work_day' })
  declare workDay: WorkDay

  @column({ columnName: 'start_time' })
  declare startTime: DateTime

  @column({ columnName: 'end_time' })
  declare endTime: DateTime

  @column({ columnName: 'employer' })
  declare employerId: string

  @column({ columnName: 'store' })
  declare storeId: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => User, {
    foreignKey: 'employerId',
  })
  declare employerData: BelongsTo<typeof User>

  @belongsTo(() => Tenant, {
    foreignKey: 'storeId',
  })
  declare storeData: BelongsTo<typeof Tenant>

  @beforeCreate()
  static assignUuid(staff: Staff) {
    staff.id = uuidv4()
  }
}
