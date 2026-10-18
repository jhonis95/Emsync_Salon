import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Plan from './plan.js'
import { v4 as uuidv4 } from 'uuid'
import Feature from './feature.js'

export default class PlanFeature extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column({ columnName: 'plan_id' })
  declare planId: string

  @column({ columnName: 'feature_id' })
  declare featureId: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Relacionamento reverso: Uma feature pertence a um plano
  @belongsTo(() => Plan)
  declare plan: BelongsTo<typeof Plan>

  @belongsTo(() => Feature)
  declare feature: BelongsTo<typeof Feature>

  @beforeCreate()
  static assignUuid(planFeature: PlanFeature) {
    planFeature.id = uuidv4()
  }
}
