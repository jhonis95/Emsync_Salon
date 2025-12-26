import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, manyToMany, hasMany} from '@adonisjs/lucid/orm'
import type { ManyToMany, HasMany } from '@adonisjs/lucid/types/relations'
import { v4 as uuidv4 } from 'uuid'
import User from './user.js'
import Contract from './contract.js'

export default class Tenant extends BaseModel {
  public static table = 'tenant'

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare storeName: string

  @column()
  declare storeDescriprion: string // Mantive o erro de digitação da migração para manter a consistência

  @column()
  declare cnpj: number

  @column()
  declare domain: string | null

  @column()
  declare phone: string | null

  @column()
  declare email: string | null

  @column()
  declare adress: string | null

  @column()
  declare logoUrl: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => User, {
    pivotTable: 'user_tenants', // Nome da tabela de ligação
    pivotForeignKey: 'tenant_id', // FK do model atual na pivot
    pivotRelatedForeignKey: 'user_id', // FK do model relacionado na pivot
  })
  declare users: ManyToMany<typeof User>

  @hasMany(() => Contract, {
    foreignKey: 'tenantId', // Nome da propriedade no Model Contract que guarda o ID
  })
  declare contracts: HasMany<typeof Contract>

  @beforeCreate()
  static assignUuid(tenant: Tenant) {
    tenant.id = uuidv4()
  }
}
