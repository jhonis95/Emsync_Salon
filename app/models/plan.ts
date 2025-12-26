import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, hasMany } from '@adonisjs/lucid/orm'
import { v4 as uuidv4 } from 'uuid'
import Tenant from './tenant.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Contract from './contract.js'

export default class Plan extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column({ columnName: 'plan_name' })
  declare planName: string

  @column({ columnName: 'setup_value' })
  declare setupValue: number

  @column({ columnName: 'subscription_value' })
  declare subscriptionValue: number

  @column()
  declare details: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  //relation
  @hasMany(() => Contract,{foreignKey: 'planId'})
  declare contracts: HasMany<typeof Contract>
  
  @beforeCreate()
  static assignUuid(plan: Plan) {
    plan.id = uuidv4()
  }
}