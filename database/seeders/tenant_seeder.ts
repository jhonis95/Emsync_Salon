import Tenant from '#models/tenant'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  public async run() {
    await Tenant.createMany([
      {
        storeName: 'Salão Estilo & Beleza',
        cnpj: 12345678901234,
        domain: 'estilobeleza.com.br',
        phone: '(11) 98765-4321',
        email: 'contato@estilobeleza.com.br',
        logoUrl: 'https://example.com/logos/estilo.png',
        storeDescriprion:`
        No Salão Estilo & Beleza, acreditamos que a beleza vai muito além do espelho; ela nasce do cuidado e do equilíbrio. Nosso espaço foi projetado para ser o seu refúgio particular em meio à rotina.

        Com uma equipe de especialistas apaixonados e as melhores tecnologias do mercado, oferecemos serviços personalizados de corte, coloração, tratamentos capilares e estética, sempre respeitando a sua identidade. Aqui, você não apenas renova o visual, mas renova as energias.
        `
        // owner não é definido aqui, pode ser atualizado depois
      },
      {
        storeName: 'Barbearia Corte Fino',
        cnpj: 98765432109876,
        domain: 'cortefino.com.br',
        phone: '(21) 99887-6655',
        email: 'contato@cortefino.com.br',
        logoUrl: 'https://example.com/logos/cortefino.png',
        storeDescriprion:`
        Cabelo é atitude, e no Barbearia Corte Fino, a nossa missão é fazer você brilhar. Somos especialistas em transformar tendências em realidade, criando looks que elevam a sua autoestima e refletem a sua personalidade.

        Seja para uma mudança radical, um loiro dos sonhos ou aquele cuidado essencial do dia a dia, entregamos técnica impecável e produtos de alta performance. Venha tomar um café conosco e descubra como podemos potencializar a sua beleza natural.
        `
      },
    ])
  }
}
