import Tenant from "#models/tenant";
import User from "#models/user";
import TenantDto from "../dtos/tenant.js";

type TCreateTenantProps={
  company_name: string
}

export class TenantService {
  public async createTenant(data:TCreateTenantProps){
    return await Tenant.create({
      company_name:data.company_name
    })
  }
  public async getAllUsers(id:TenantDto['id']|undefined){
    return await User.findBy('tenantId',Tenant.find(id))
  }
}