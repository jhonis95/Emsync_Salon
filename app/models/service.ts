import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, belongsTo, column } from '@adonisjs/lucid/orm'
import { v4 as uuidv4 } from 'uuid'
import Tenant from './tenant.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import ServiceStatus from './service_status.js'
import ProductServiceCategory from './product_service_category.js'

export default class Service extends BaseModel {
  public static table = 'service'

  @column({ isPrimary: true })
  declare id: string

  @column({ columnName: 'public_id' })
  declare publicId: string

  @column({ columnName: 'tenant_id' })
  declare tenantId: string

  @column({ columnName: 'status_id' })
  declare statusId: string

  @column({ columnName: 'category_id' })
  declare categoryId: string | null

  @column()
  declare name: string

  @column()
  declare price: number

  @column()
  declare image: string | null

  @column()
  declare description: string | null

  @column()
  declare duration: number | null

  @column()
  declare active: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Tenant, {
    foreignKey: 'tenantId',
  })
  declare tenant: BelongsTo<typeof Tenant>

  @belongsTo(() => ServiceStatus, {
    foreignKey: 'statusId',
  })
  declare status: BelongsTo<typeof ServiceStatus>

  @belongsTo(() => ProductServiceCategory, {
    foreignKey: 'categoryId',
  })
  declare category: BelongsTo<typeof ProductServiceCategory>

  @beforeCreate()
  static assignUuid(service: Service) {
    service.id = uuidv4()

    if (!service.publicId) {
      service.publicId = uuidv4()
    }
  }
}
