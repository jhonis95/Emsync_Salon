import Service from "#models/service"
import Tenant from "#models/tenant"

export class PortalService {
  // Your code here
  public async defineContentMain(menu: string, tenant:Tenant|undefined) {
    if (menu=='home'){
      return {
        headerText: {
          title: 'Bem-vindo, Cliente!',
          subtitle: 'Aqui está um resumo das suas atividades e agendamentos.'
        },
        infoCards:[
          {
            title:'Suas Avaliações',
            content:'00',
            image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXItc3Rhci1pY29uIGx1Y2lkZS11c2VyLXN0YXIiPjxwYXRoIGQ9Ik0xNi4wNTEgMTIuNjE2YTEgMSAwIDAgMSAxLjkwOS4wMjRsLjczNyAxLjQ1MmExIDEgMCAwIDAgLjczNy41MzVsMS42MzQuMjU2YTEgMSAwIDAgMSAuNTg4IDEuODA2bC0xLjE3MiAxLjE2OGExIDEgMCAwIDAtLjI4Mi44NjZsLjI1OSAxLjYxM2ExIDEgMCAwIDEtMS41NDEgMS4xMzRsLTEuNDY1LS43NWExIDEgMCAwIDAtLjkxMiAwbC0xLjQ2NS43NWExIDEgMCAwIDEtMS41MzktMS4xMzNsLjI1OC0xLjYxM2ExIDEgMCAwIDAtLjI4Mi0uODY2bC0xLjE1Ni0xLjE1M2ExIDEgMCAwIDEgLjU3Mi0xLjgyMmwxLjYzMy0uMjU2YTEgMSAwIDAgMCAuNzM3LS41MzV6Ii8+PHBhdGggZD0iTTggMTVIN2E0IDQgMCAwIDAtNCA0djIiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjciIHI9IjQiLz48L3N2Zz4='
          },
          {
            title:'Próximos Agendamentos',
            content:'00',
            image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNhbGVuZGFyLWNoZWNrLWljb24gbHVjaWRlLWNhbGVuZGFyLWNoZWNrIj48cGF0aCBkPSJNOCAydjQiLz48cGF0aCBkPSJNMTYgMnY0Ii8+PHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB4PSIzIiB5PSI0IiByeD0iMiIvPjxwYXRoIGQ9Ik0zIDEwaDE4Ii8+PHBhdGggZD0ibTkgMTYgMiAyIDQtNCIvPjwvc3ZnPg=='
          },
          {
            title:'Pedidos Ativos',
            content:'00',
            image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJveC1pY29uIGx1Y2lkZS1ib3giPjxwYXRoIGQ9Ik0yMSA4YTIgMiAwIDAgMC0xLTEuNzNsLTctNGEyIDIgMCAwIDAtMiAwbC03IDRBMiAyIDAgMCAwIDMgOHY4YTIgMiAwIDAgMCAxIDEuNzNsNyA0YTIgMiAwIDAgMCAyIDBsNy00QTIgMiAwIDAgMCAyMSAxNloiLz48cGF0aCBkPSJtMy4zIDcgOC43IDUgOC43LTUiLz48cGF0aCBkPSJNMTIgMjJWMTIiLz48L3N2Zz4='
          }
        ],
        quickActionCards:[
          {
            title:'Suas Agender Serviço',
            text:'Reserve um horário para seu serviços',
            image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNhbGVuZGFyLWNoZWNrMi1pY29uIGx1Y2lkZS1jYWxlbmRhci1jaGVjay0yIj48cGF0aCBkPSJNOCAydjQiLz48cGF0aCBkPSJNMTYgMnY0Ii8+PHBhdGggZD0iTTIxIDE0VjZhMiAyIDAgMCAwLTItMkg1YTIgMiAwIDAgMC0yIDJ2MTRhMiAyIDAgMCAwIDIgMmg4Ii8+PHBhdGggZD0iTTMgMTBoMTgiLz48cGF0aCBkPSJtMTYgMjAgMiAyIDQtNCIvPjwvc3ZnPg==',
            buttonText:'Agendar Agora'
          },
          {
            title:'Comprar Produtos',
            text:'Adquira produtos profissionais',
            image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhhbmQtY29pbnMtaWNvbiBsdWNpZGUtaGFuZC1jb2lucyI+PHBhdGggZD0iTTExIDE1aDJhMiAyIDAgMSAwIDAtNGgtM2MtLjYgMC0xLjEuMi0xLjQuNkwzIDE3Ii8+PHBhdGggZD0ibTcgMjEgMS42LTEuNGMuMy0uNC44LS42IDEuNC0uNmg0YzEuMSAwIDIuMS0uNCAyLjgtMS4ybDQuNi00LjRhMiAyIDAgMCAwLTIuNzUtMi45MWwtNC4yIDMuOSIvPjxwYXRoIGQ9Im0yIDE2IDYgNiIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iOSIgcj0iMi45Ii8+PGNpcmNsZSBjeD0iNiIgY3k9IjUiIHI9IjMiLz48L3N2Zz4=',
            buttonText:'Ver Produtos'
          }
        ],
        nextAppointment:[
          {
            image:'',
            title:'Nome Do Serviço',
            text:'Profissional: ainda não registrado',
            date:'00/00',
            time:'00:00'
          },
        ],
        orders:[
          {
            image:'https://img.freepik.com/fotos-gratis/garrafa-de-oleo-para-o-cabelo-no-cabelo-castanho_23-2151968681.jpg?t=st=1766538548~exp=1766542148~hmac=2d2bc3a9fa14e21325b6160280fafca9b453d54f1206fb59c5157c4d7c8a2167&w=1060',
            title:'Nome do Produto',
            status:'status',
            date:'00/00',
            time:'00:00'
          }
        ],
      }
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
    }
  }
}
