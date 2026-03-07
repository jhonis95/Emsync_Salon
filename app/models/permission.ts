import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, manyToMany } from '@adonisjs/lucid/orm'
import { v4 as uuidv4 } from 'uuid'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Role from './role.js'

export default class Permission extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column()
  declare description: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  //relations
  @manyToMany(() => Role, {
    pivotTable: 'permission_roles',
    pivotForeignKey: 'permission_id',
    pivotRelatedForeignKey: 'role_id',
  })
  declare roles: ManyToMany<typeof Role>

  @beforeCreate()
  static assignUuid(permission: Permission) {
    permission.id = uuidv4()
  }
}
