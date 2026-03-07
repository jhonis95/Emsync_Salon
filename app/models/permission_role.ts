import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, belongsTo } from '@adonisjs/lucid/orm'
import { v4 as uuidv4 } from 'uuid'
import Role from './role.js'
import Permission from './permission.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class PermissionRole extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column({ columnName: 'role_id' })
  declare roleId: string

  @column({ columnName: 'permission_id' })
  declare permissionId: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  //relations
  @belongsTo(() => Role)
  declare role: BelongsTo<typeof Role>

  @belongsTo(() => Permission)
  declare permission: BelongsTo<typeof Permission>

  @beforeCreate()
  static assignUuid(permissionRole: PermissionRole) {
    permissionRole.id = uuidv4()
  }
}
