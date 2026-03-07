import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, hasMany } from '@adonisjs/lucid/orm'
import { v4 as uuidv4 } from 'uuid'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Product from './product.js'

export default class ProductServiceCategory extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  //reations
  @hasMany(() => Product, {
    foreignKey: 'categoryId', // Nome da propriedade no Model Contract que guarda o ID
  })
  declare product: HasMany<typeof Product>

  //[fix] add @hasMany services

  @beforeCreate()
  static assignUuid(productServiceCategory: ProductServiceCategory) {
    productServiceCategory.id = uuidv4()
  }
}
