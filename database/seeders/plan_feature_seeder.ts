import Plan from '#models/plan'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    const planoEssention = await Plan.findBy('plan_name','Plano Essencial')
    const planoMarketing = await Plan.findBy('plan_name','Plano Marketing')

    if(planoEssention){
      await planoEssention.related('features').createMany([
        { content: 'Sistema de agendamento' },
        { content: 'Página web da empresa' },
        { content: 'Portal do cliente' }, // Corrigido erro de digitação de "cliete"
      ])
    }
    if(planoMarketing){
      await planoMarketing.related('features').createMany([
        { content: 'Tudo do plano essencial' },
        { content: 'Agendamento de media social' },
        { content: 'Marketing por email' },
        { content: 'Website profissional' },
        { content: 'Gerenciador de conteúdo' },
      ])
    }
  

  }
}