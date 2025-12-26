import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, belongsTo } from '@adonisjs/lucid/orm'
import { v4 as uuidv4 } from 'uuid'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import Tenant from './tenant.js'

export default class UserTenant extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column({ columnName: 'user_id' })
  declare userId: string

  @column({ columnName: 'tenant_id' })
  declare tenantId: string
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
  
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Relacionamentos para facilitar a busca se você estiver consultando a pivot diretamente
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Tenant)
  declare tenant: BelongsTo<typeof Tenant>

  @beforeCreate()
  static assignUuid(userTenant: UserTenant) {
    userTenant.id = uuidv4()
  }
}