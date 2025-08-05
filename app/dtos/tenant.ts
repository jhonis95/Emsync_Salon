import { BaseModelDto } from '@adocasts.com/dto/base'
import Tenant from '#models/tenant'

export default class TenantDto extends BaseModelDto {
  declare id: string
  declare company_name: string
  declare createdAt: string
  declare updatedAt: string

  constructor(tenant?: Tenant) {
    super()

    if (!tenant) return
    this.id = tenant.id
    this.company_name = tenant.storeName
    this.createdAt = tenant.createdAt.toISO()!
    this.updatedAt = tenant.updatedAt.toISO()!
  }
}
