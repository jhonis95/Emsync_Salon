import Service from '#models/service'
import Tenant from '#models/tenant'
import { portalHomePageCollection } from '../../content/collections/portal.ts'

export class PortalService {
  // Your code here
  public async defineContentMain(menu: string, tenant: Tenant | undefined) {

    if (menu == 'home') {
      const homePageContent= await portalHomePageCollection.load()
      const staticContent=await homePageContent.all()

      const dynamicContent={
        infoCards: [
          {
            title: 'Suas Avaliações',
            number: '00',
            image:
              'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXItc3Rhci1pY29uIGx1Y2lkZS11c2VyLXN0YXIiPjxwYXRoIGQ9Ik0xNi4wNTEgMTIuNjE2YTEgMSAwIDAgMSAxLjkwOS4wMjRsLjczNyAxLjQ1MmExIDEgMCAwIDAgLjczNy41MzVsMS42MzQuMjU2YTEgMSAwIDAgMSAuNTg4IDEuODA2bC0xLjE3MiAxLjE2OGExIDEgMCAwIDAtLjI4Mi44NjZsLjI1OSAxLjYxM2ExIDEgMCAwIDEtMS41NDEgMS4xMzRsLTEuNDY1LS43NWExIDEgMCAwIDAtLjkxMiAwbC0xLjQ2NS43NWExIDEgMCAwIDEtMS41MzktMS4xMzNsLjI1OC0xLjYxM2ExIDEgMCAwIDAtLjI4Mi0uODY2bC0xLjE1Ni0xLjE1M2ExIDEgMCAwIDEgLjU3Mi0xLjgyMmwxLjYzMy0uMjU2YTEgMSAwIDAgMCAuNzM3LS41MzV6Ii8+PHBhdGggZD0iTTggMTVIN2E0IDQgMCAwIDAtNCA0djIiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjciIHI9IjQiLz48L3N2Zz4=',
          },
          {
            title: 'Próximos Agendamentos',
            number: '00',
            image:
              'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNhbGVuZGFyLWNoZWNrLWljb24gbHVjaWRlLWNhbGVuZGFyLWNoZWNrIj48cGF0aCBkPSJNOCAydjQiLz48cGF0aCBkPSJNMTYgMnY0Ii8+PHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB4PSIzIiB5PSI0IiByeD0iMiIvPjxwYXRoIGQ9Ik0zIDEwaDE4Ii8+PHBhdGggZD0ibTkgMTYgMiAyIDQtNCIvPjwvc3ZnPg==',
          },
          {
            title: 'Pedidos Ativos',
            number: '00',
            image:
              'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJveC1pY29uIGx1Y2lkZS1ib3giPjxwYXRoIGQ9Ik0yMSA4YTIgMiAwIDAgMC0xLTEuNzNsLTctNGEyIDIgMCAwIDAtMiAwbC03IDRBMiAyIDAgMCAwIDMgOHY4YTIgMiAwIDAgMCAxIDEuNzNsNyA0YTIgMiAwIDAgMCAyIDBsNy00QTIgMiAwIDAgMCAyMSAxNloiLz48cGF0aCBkPSJtMy4zIDcgOC43IDUgOC43LTUiLz48cGF0aCBkPSJNMTIgMjJWMTIiLz48L3N2Zz4=',
          },
        ],
        nextAppointment: [
          {
            image: '',
            title: 'Nome Do Serviço',
            text: 'Profissional: ainda não registrado',
            date: '00/00',
            time: '00:00',
          },
        ],
        orders: [
          {
            image:
              'https://img.freepik.com/fotos-gratis/garrafa-de-oleo-para-o-cabelo-no-cabelo-castanho_23-2151968681.jpg?t=st=1766538548~exp=1766542148~hmac=2d2bc3a9fa14e21325b6160280fafca9b453d54f1206fb59c5157c4d7c8a2167&w=1060',
            title: 'Nome do Produto',
            status: 'status',
            date: '00/00',
            time: '00:00',
          },
        ],
      }
      return {staticContent, dynamicContent }
    }
    if (menu == 'product') {
      return {
        section_name: 'Produtos',
        menu_1: 'Seleção de produto',
        products: [{ name: 'product1' }],
      }
    }

    if (menu == 'service') {
      return {
        headerText: {
          title: 'Agendar Serviços',
          subtitle: 'Escolha seu serviço e horário em poucos passos',
        },
        serviceMenuData: {
          title: 'Escolha o Serviço',
          subtitle: 'Selecione o serviço que deseja agendar',
          services: await Service.query().where('storeId', tenant?.id ?? ''),
        },

        //old
        menu_1: 'Seleção de serviços',
        services: await Service.query().where('storeId', tenant?.id ?? ''),
        menu_2: 'Selecionar data',
        store: {
          days_avalible: '',
        },
        menu_3: 'Confirmar',
      }
    }
  }
}
