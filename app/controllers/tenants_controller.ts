import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { TenantService } from '#services/tenant_service'
import { createTenantPropsValidator } from '#validators/tenant'

@inject()
export default class TenantsController {
    constructor(protected tanantService:TenantService){
    }
    async createTenant({request}:HttpContext){
        const data= request.all
        const payload= await createTenantPropsValidator.validate(data)
        try {
            return this.tanantService.createTenant(payload)
        } catch (error) {
            console.log('error in create tanant')
            console.log(error)
        }
    }
    async allUsers({auth}:HttpContext){
        const user=auth.use('web').user?.id
        this.tanantService.getAllUsers(user)
    }
}