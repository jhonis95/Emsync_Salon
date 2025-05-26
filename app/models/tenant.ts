import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import { v4 as uuidv4 } from 'uuid'

export default class Tenant extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare company_name: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static assignUuid(tenant: Tenant) {
    tenant.id = uuidv4()
  }

  @hasMany(() => User)
  declare users: HasMany<typeof User>
}