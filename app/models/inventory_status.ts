import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, hasMany } from '@adonisjs/lucid/orm'
import { v4 as uuidv4 } from 'uuid'
import Inventory from './inventory.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class InventoryStatus extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Inventory, {
    foreignKey: 'statusId',
  })
  declare inventories: HasMany<typeof Inventory>

  @beforeCreate()
  static assignUuid(inventoryStatus: InventoryStatus) {
    inventoryStatus.id = uuidv4()
  }
}