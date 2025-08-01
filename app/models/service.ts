import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, belongsTo, column } from '@adonisjs/lucid/orm'
import { v4 as uuidv4 } from 'uuid'
import Tenant from './tenant.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Service extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column()
  declare price: number

  @column()
  declare image: string

  @column()
  declare description: string | null

  @column()
  declare duration: number

  @column({columnName: 'store'})// nome no banco de dados: "store"
  declare storeId: string //no orm retorna o id caso orm use user.storeId

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Tenant,{
    foreignKey:'storeId'
  })
  declare storeData: BelongsTo<typeof Tenant>

  @beforeCreate()
  static assignUuid(service: Service) {
    service.id = uuidv4()
  }
}