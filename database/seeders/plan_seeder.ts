import Plan from '#models/plan'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    await Plan.createMany([
      {
        name: 'Plano Essencial',
        subtitle: 'plano para empresas que estão começando',
        sortPriority: 1,
        subscriptionValue: 97,
        billingCycle: 'mensal',
        details: 'O foco é agendamento online e aumento da presença online sem burocracia técnica.',
      },
      {
        name: 'Plano Marketing',
        subtitle: 'plano para empresas que estão investindo em divugação',
        sortPriority: 2,
        subscriptionValue: 170,
        billingCycle: 'mensal',
        details:
          'É ideal para empresas que profissionalizaram a gestão e querem estabelecer uma marca forte e presente.',
      },
      {
        name: 'Plano Essencial',
        subtitle: 'plano para empresas que estão começando',
        sortPriority: 1,
        subscriptionValue: 1164,
        billingCycle: 'anual',
        details: 'O foco é agendamento online e aumento da presença online sem burocracia técnica.',
      },
      {
        name: 'Plano Marketing',
        subtitle: 'plano para empresas que estão investindo em divugação',
        sortPriority: 2,
        subscriptionValue: 2040,
        billingCycle: 'anual',
        details:
          'É ideal para empresas que profissionalizaram a gestão e querem estabelecer uma marca forte e presente.',
      },
    ])
  }
}
