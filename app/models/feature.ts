import { DateTime } from 'luxon'
import { v4 as uuidv4 } from 'uuid'
import { BaseModel, beforeCreate, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Plan from './plan.js'

export default class Feature extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare content: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Plan, {
    pivotTable: 'plan_features',
    pivotForeignKey: 'feature_id',
    pivotRelatedForeignKey: 'plan_id',
  })
  declare public plans: ManyToMany<typeof Plan>

  @beforeCreate()
  static assignUuid(feature: Feature) {
    feature.id = uuidv4()
  }
}
