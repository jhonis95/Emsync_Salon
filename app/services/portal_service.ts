
export class PortalService {
  // Your code here
  public async defineContentMain(menu:string){
    if(menu=='product'){
      const content={
        section_name:'Produtos',
        menu_1:'Seleção de produto',
        products:[{name:'product1'}]
      }
      return content
    }
    if(menu=='service'){
      const content={
        section_name:'Serviços',
        menu_1:'Seleção de serviços',
        services:[{name:'product1'}],
        menu_2:'Selecionar data',
        menu_3:'Confirmar',
      }
      return content
    }
  }
}