import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, belongsTo } from '@adonisjs/lucid/orm'
import { v4 as uuidv4 } from 'uuid'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Tenant from './tenant.js'
import User from './user.js'
import Plan from './plan.js'

export default class Contract extends BaseModel {
  public static table = 'contracts'

  @column({ isPrimary: true })
  declare id: string

  @column({ columnName: 'signed_by_user_id' })
  declare signedByUserId: string

  @column({ columnName: 'tenant_id' })
  declare tenantId: string

  @column({ columnName: 'plan_id' })
  declare planId: string | null

  @column.dateTime()
  declare startDay: DateTime

  @column.dateTime()
  declare endDay: DateTime

  @column()
  declare documentLink: string

  @column()
  declare receiptLink: string | null

  @column()
  declare paymentMethod: 'pix' | 'credito' | 'debito'

  @column()
  declare contractStatus: 'pago' | 'nao_pago'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Relacionamentos
  @belongsTo(() => User, {
    foreignKey: 'signedByUserId',
  })
  declare signer: BelongsTo<typeof User>

  @belongsTo(() => Tenant, {
    foreignKey: 'tenantId',
  })
  declare tenant: BelongsTo<typeof Tenant>

  @belongsTo(() => Plan, {
    foreignKey: 'planId',
  })
  declare plan: BelongsTo<typeof Plan>

  @beforeCreate()
  static assignUuid(contract: Contract) {
    contract.id = uuidv4()
  }
}
