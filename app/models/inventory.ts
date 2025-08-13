import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, belongsTo, afterSave } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Category from './category.js'
import Tenant from './tenant.js'
import Product from './product.js'
import { v4 as uuidv4 } from 'uuid'
import emitter from '@adonisjs/core/services/emitter'
import { Unit } from '../../contracts/enums/unit.js'

export default class Inventory extends BaseModel {
  public static table = 'inventory'
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare quantaty: number

  @column({ columnName: 'min_stock' })
  declare minStock: number

  @column()
  declare unit: Unit | null

  @column({ columnName: 'category' })
  declare categoryId: string | null

  @column({ columnName: 'store' })
  declare storeId: string

  @column({ columnName: 'product' })
  declare productId: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Category, {
    foreignKey: 'categoryId',
  })
  declare categoryData: BelongsTo<typeof Category>

  @belongsTo(() => Tenant, {
    foreignKey: 'storeId',
  })
  declare storeData: BelongsTo<typeof Tenant>

  @belongsTo(() => Product, {
    foreignKey: 'productId',
  })
  declare productData: BelongsTo<typeof Product>

  @beforeCreate()
  static assignUuid(inventory: Inventory) {
    inventory.id = uuidv4()
  }

  @afterSave()
  public static async checkLowStock(inventory: Inventory) {
    if (inventory.quantaty <= inventory.minStock) {
      emitter.emit('stock:low', inventory)
    }
  }
}
