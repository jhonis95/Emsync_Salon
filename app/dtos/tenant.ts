import { BaseModelDto } from '@adocasts.com/dto/base'
import Tenant from '#models/tenant'
import UserDto from './user.js'

export default class TenantDto extends BaseModelDto {
  declare id: string
  declare company_name: string
  declare createdAt: string
  declare updatedAt: string
  declare users: UserDto[]

  constructor(tenant?: Tenant) {
    super()

    if (!tenant) return
    this.id = tenant.id
    this.company_name = tenant.company_name
    this.createdAt = tenant.createdAt.toISO()!
    this.updatedAt = tenant.updatedAt.toISO()!
    this.users = UserDto.fromArray(tenant.users)
  }
}