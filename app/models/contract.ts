import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, belongsTo } from '@adonisjs/lucid/orm'
import { v4 as uuidv4 } from 'uuid'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Tenant from './tenant.js'
import User from './user.js'

export default class Contract extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column({columnName:'start_day'})
  declare startDay: DateTime

  @column({columnName: 'end_day'})
  declare endDay: DateTime

  @column({columnName: 'document_link'})
  declare documentLink: string

  @column({columnName: 'receipt_link'})
  declare receiptLink: string | null

  @column({columnName: 'payment_method'})
  declare paymentMethod: string //[fix] add enum for the types

  @column({columnName: 'contract_status'})
  declare contractStatus: string //[fix] add enum for the types

  @column({columnName: 'signed_by_user'})
  declare signedByUserId: string

  @column({ columnName: 'store' }) // nome no banco de dados: "store"
  declare storeId: string //no orm retorna o id caso orm use user.storeId

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => User, {
    foreignKey: 'signedByUserId',
  })
  declare signedByUserData: BelongsTo<typeof User>

  @belongsTo(() => Tenant, {
    foreignKey: 'storeId',
  })
  declare storeData: BelongsTo<typeof Tenant> //no orm retorna a model relacionado(user) junto caso orm use: user.storeData.fullName

  @beforeCreate()
  static assignUuid(contract: Contract) {
    contract.id = uuidv4()
  }
}