import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import { v4 as uuidv4 } from 'uuid'
import ProductServiceCategory from './product_service_category.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import ScheduledProduct from './scheduled_product.js'
import Inventory from './inventory.js'
import Tenant from './tenant.ts'

export default class Product extends BaseModel {
  public static table = 'products'
  @column({ isPrimary: true })
  declare id: string
  
  @column({ columnName: 'tenant_id' })
  declare tenantId: string

  @column({ columnName: 'public_id' })
  declare publicId: string

  @column({ columnName: 'product_service_categories_id' })
  declare categoryId: string | null

  @column()
  declare name: string

  @column()
  declare price: number

  @column()
  declare image: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Relacionamento com a Categoria
  @belongsTo(() => ProductServiceCategory, {
    foreignKey: 'categoryId',
  })
  declare category: BelongsTo<typeof ProductServiceCategory>

  @belongsTo(() => Tenant, {
    foreignKey: 'tenantId',
  })
  declare tenant: BelongsTo<typeof Tenant>


  @hasMany(() => ScheduledProduct, { foreignKey: 'productId' })
  declare scheduledProducts: HasMany<typeof ScheduledProduct>

  @hasMany(() => Inventory, {
    foreignKey: 'productId',
  })
  declare inventories: HasMany<typeof Inventory>

  @beforeCreate()
  static assignUuid(product: Product) {
    product.id = uuidv4()
    product.publicId = uuidv4()
  }
}
