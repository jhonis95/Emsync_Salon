import Tenant from '#models/tenant'
import User from '#models/user'
import TenantDto from '../dtos/tenant.js'

type TCreateTenantProps = {
  company_name: string
}

export class TenantService {
  public async createTenant(data: TCreateTenantProps) {
    return await Tenant.create({
      storeName: data.company_name,
    })
  }
  public async getAllUsers(id: TenantDto['id'] | undefined) {
    return await User.findBy('tenantId', Tenant.find(id))
  }

  public async generateStoreAvalibleTimeSlots(start: string, end: string, interval: number) {
    const slots: string[] = []
    let [h, m] = start.split(':').map(Number)
    const [eh, em] = end.split(':').map(Number)

    while (h < eh || (h === eh && m < em)) {
      slots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`)
      m += interval
      if (m >= 60) {
        h += Math.floor(m / 60)
        m = m % 60
      }
    }

    return slots
    // Exemplo para 1 em 1 hora
    //console.log(generateSlots("09:00", "18:00", 60))

    // Saída:
    // ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]
  }
}
