import Feature from '#models/feature'
import Plan from '#models/plan'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { v4 as uuidv4 } from 'uuid'

export default class extends BaseSeeder {
  async run() {
    // 1. Criar ou buscar as features (elas existirão apenas uma vez no banco)
    const fAgendamento = await Feature.firstOrCreate({ content: 'Sistema de agendamento' })
    const fPaginaWeb = await Feature.firstOrCreate({ content: 'Página web da empresa' })
    const fPortal = await Feature.firstOrCreate({ content: 'Portal do cliente' })
    const fTudoEssencial = await Feature.firstOrCreate({ content: 'Tudo do plano essencial' })
    const fMediaSocial = await Feature.firstOrCreate({ content: 'Agendamento de media social' })
    const fEmail = await Feature.firstOrCreate({ content: 'Marketing por email' })
    const fWebsite = await Feature.firstOrCreate({ content: 'Website profissional' })
    const fConteudo = await Feature.firstOrCreate({ content: 'Gerenciador de conteúdo' })

    // 2. Buscar os planos (Mensal e Anual)
    const planosEssencial = await Plan.query().where('name', 'Plano Essencial')
    const planosMarketing = await Plan.query().where('name', 'Plano Marketing')

    // 3. Criar os vínculos (Tabela Pivô)
    const idsEssencial = [fAgendamento.id, fPaginaWeb.id, fPortal.id]

    for (const plano of planosEssencial) {
      // O sync() remove vínculos antigos e coloca os novos, evitando duplicatas
      const syncData: Record<string, { id: string }> = {}
      idsEssencial.forEach((id) => {
        syncData[id] = { id: uuidv4() } // Injetamos o ID da tabela pivô aqui
      })
      await plano.related('features').sync(syncData)
    }

    const idsMarketing = [fTudoEssencial.id, fMediaSocial.id, fEmail.id, fWebsite.id, fConteudo.id] // Exemplo de reuso
    for (const plano of planosMarketing) {
      const syncData: Record<string, { id: string }> = {}
      idsMarketing.forEach((id) => {
        syncData[id] = { id: uuidv4() } // Injetamos o ID da tabela pivô aqui
      })

      await plano.related('features').sync(syncData)
    }
  }
}
