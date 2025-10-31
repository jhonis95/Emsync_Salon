import Service from "#models/service"
import Tenant from "#models/tenant"

export class PortalService {
  // Your code here
  public async defineContentMain(menu: string, tenant:Tenant|undefined) {
    if(!tenant){
      return
    }
    if (menu == 'product') {
      const content = {
        section_name: 'Produtos',
        menu_1: 'Seleção de produto',
        products: [{ name: 'product1' }],
      }
      return content
    }
    if (menu == 'service') {
      const content = {
        sectionTitle: {
          title:'Agendar Serviços',
          subtitle:'Escolha seu serviço e horário em poucos passos'
        },
        serviceMenuData:{
          title:'Escolha o Serviço',
          subtitle:'Selecione o serviço que deseja agendar',
          services: await Service.query().where('storeId', tenant?.id ?? ''),
        },

        //old
        menu_1: 'Seleção de serviços',
        services: await Service.query().where('storeId', tenant?.id ?? ''),
        menu_2: 'Selecionar data',
        store:{
          days_avalible:''
        },
        menu_3: 'Confirmar',
      }
      return content
    }
  }
}
