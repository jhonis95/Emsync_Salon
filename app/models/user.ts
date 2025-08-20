import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Tenant from './tenant.js'
import { v4 as uuidv4 } from 'uuid'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { compose } from '@adonisjs/core/helpers'
import hash from '@adonisjs/core/services/hash'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  public static table = 'user'

  @column({ isPrimary: true })
  declare id: string

  @column({ columnName: 'full_name' })
  declare fullName: string

  @column()
  declare role: string //[fix] add enum or new table

  @column()
  declare notes: string | null

  @column()
  declare email: string

  @column({ serializeAs: null }) // won't be included in the output in case the model be call: tenant.password (result: not fauld)
  declare password: string

  @column({ columnName: 'store' }) // nome no banco de dados: "store"
  declare storeId: string //no orm retorna o id caso orm use user.storeId

  @belongsTo(() => Tenant, {
    foreignKey: 'storeId',
  })
  declare storeData: BelongsTo<typeof Tenant> //no orm retorna a model relacionado(user) junto caso orm use: user.storeData.fullName

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @beforeCreate()
  static assignUuid(user: User) {
    user.id = uuidv4()
  }
}
