import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, belongsTo, column, manyToMany, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany,HasMany } from '@adonisjs/lucid/types/relations'
import { v4 as uuidv4 } from 'uuid'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { compose } from '@adonisjs/core/helpers'
import hash from '@adonisjs/core/services/hash'
import Tenant from './tenant.js'
import UserStatus from './user_status.js'
import Role from './role.js'
import Contract from './contract.js'


const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  public static table = 'users'

  @column({ isPrimary: true })
  declare id: string

  @column({ columnName: 'status_id' })
  declare statusId: string | null

  @column()
  declare fullName: string

  @column()
  declare email: string

  @column({ serializeAs: null }) // Esconde a senha ao converter para JSON
  declare password: string

  @column()
  declare phone: number

  @column()
  declare observation: string | null

  @column()
  declare internalNote: string | null

  @column()
  declare gender: 'homem' | 'mulher' | null

  @column()
  declare adress: string | null

  @column()
  declare city: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Relacionamentos
  @belongsTo(() => UserStatus, { foreignKey: 'statusId' })
  declare status: BelongsTo<typeof UserStatus>

  @manyToMany(() => Role, {
    pivotTable: 'role_users',
    pivotForeignKey: 'user_id',
    pivotRelatedForeignKey: 'role_id',
  })
  declare userRoles: ManyToMany<typeof Role>

  @manyToMany(() => Tenant, {
    pivotTable: 'user_tenants',
    pivotForeignKey: 'user_id',
    pivotRelatedForeignKey: 'tenant_id',
  })
  declare tenants: ManyToMany<typeof Tenant>

  @hasMany(() => Contract, {
    foreignKey: 'signedByUserId', // Nome da propriedade no Model Contract que guarda o ID
  })
  declare contracts: HasMany<typeof Contract>

  @beforeCreate()
  static assignUuid(user: User) {
    user.id = uuidv4()
  }
}
