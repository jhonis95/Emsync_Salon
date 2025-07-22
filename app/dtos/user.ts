import { BaseModelDto } from '@adocasts.com/dto/base'
import User from '#models/user'
import TenantDto from './tenant.js'

export default class UserDto extends BaseModelDto {
  declare id: string
  declare tenantId: string
  declare fullName: string | null
  declare email: string
  declare password: string
  declare createdAt: string
  declare updatedAt: string | null
  declare tenant: TenantDto | null

  constructor(user?: User) {
    super()

    if (!user) return
    this.id = user.id
    this.tenantId = user.tenantId
    this.fullName = user.fullName
    this.email = user.email
    this.password = user.password
    this.createdAt = user.createdAt.toISO()!
    this.updatedAt = user.updatedAt?.toISO()!
    this.tenant = user.tenant && new TenantDto(user.tenant)
  }
}