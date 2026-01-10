import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Tenant from './tenant.js'
import Product from './product.js'
import { v4 as uuidv4 } from 'uuid'
import InventoryStatus from './inventory_status.js'
//import emitter from '@adonisjs/core/services/emitter'
//import { Unit } from '../../contracts/enums/unit.js'

export default class Inventory extends BaseModel {
  public static table = 'inventory'
  @column({ isPrimary: true })
  declare id: string

  @column({ columnName: 'tenant_id' })
  declare tenantId: string

  @column({ columnName: 'product_id' })
  declare productId: string

  @column({ columnName: 'status_id' })
  declare statusId: string | null

  @column()
  declare quantity: number

  @column({ columnName: 'min_stock' })
  declare minStock: number

  @column({ columnName: 'min_stock_alert' })
  declare minStockAlert: number

  @column()
  declare unit: 'pack' | 'box' | 'unit'

  @column()
  declare active: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => InventoryStatus, {
    foreignKey: 'statusId',
  })
  declare status: BelongsTo<typeof InventoryStatus>

  @belongsTo(() => Tenant, {
    foreignKey: 'tenantId',
  })
  declare tenant: BelongsTo<typeof Tenant>

  @belongsTo(() => Product, {
    foreignKey: 'productId',
  })
  declare product: BelongsTo<typeof Product>

  @beforeCreate()
  static assignUuid(inventory: Inventory) {
    inventory.id = uuidv4()
  }

  // @afterSave()
  // public static async checkLowStock(inventory: Inventory) {
  //   if (inventory.quantaty <= inventory.minStock) {
  //     emitter.emit('stock:low', inventory)
  //   }
  // }
}
