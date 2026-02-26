import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import { v4 as uuidv4 } from 'uuid'
import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Contract from './contract.js'
import Feature from './feature.js'

export default class Plan extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column({ columnName: 'plan_name' })
  declare name: string

  @column({ columnName: 'subtitle' })
  declare subtitle: string

  @column({ columnName: 'sort_priority' })
  declare sortPriority: number

  @column({ columnName: 'setup_value' })
  declare setupValue: number

  @column({ columnName: 'subscription_value' })
  declare subscriptionValue: number

  @column({columnName:'billing_cycle'})
  declare billingCycle: 'mensal' | 'anual'

  @column()
  declare details: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  //relation
  @hasMany(() => Contract,{foreignKey: 'planId'})
  declare contracts: HasMany<typeof Contract>

  @manyToMany(() => Feature,{
    pivotTable: 'plan_features',
    pivotForeignKey: 'plan_id',
    pivotRelatedForeignKey: 'feature_id', 
  })
  declare public features: ManyToMany<typeof Feature>
  
  @beforeCreate()
  static assignUuid(plan: Plan) {
    plan.id = uuidv4()
  }
}