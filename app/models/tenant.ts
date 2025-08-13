import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import { v4 as uuidv4 } from 'uuid'

export default class Tenant extends BaseModel {
  public static table = 'tenant'

  @column({ isPrimary: true })
  declare id: string

  @column({ columnName: 'store_name' }) // nome no banco de dados: "store_name"
  declare storeName: string

  @column()
  declare cnpj: number

  @column()
  declare domain: string

  @column()
  declare phone: string

  @column()
  declare email: string

  @column({ columnName: 'logo_url' }) // nome no banco de dados: "store_name"
  declare logoUrl: string | null

  @column({ columnName: 'owner' }) // nome no banco de dados: "owner"
  declare ownerId: string | null //no orm retorna o id caso orm use tenant.ownerId

  @belongsTo(() => User, {
    foreignKey: 'ownerId',
  })
  declare ownerData: BelongsTo<typeof User> //no orm retorna a model relacionado(user) junto caso orm use: tenant.ownerData.fullName

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static assignUuid(tenant: Tenant) {
    tenant.id = uuidv4()
  }
}
