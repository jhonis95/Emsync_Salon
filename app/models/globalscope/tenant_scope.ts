import { ModelQueryBuilderContract } from '@adonisjs/lucid/types/model'
import { HttpContext } from '@adonisjs/core/http'

export const TenantScope = (builder: ModelQueryBuilderContract<any>) => {
  const ctx = HttpContext.get()
  const tenantId = ctx?.tenant?.id

  if (tenantId) {
    builder.where('tenant_id', tenantId)
  }
}

// the way to use in any model
// @beforeFind()
// @beforeFetch()
// public static applyTenantScope(builder: ModelQueryBuilderContract<typeof Agendamento>) {
//   TenantScope(builder)
// }

// is using for: [modelName].query().where('status', 'ativo') ao inves de Servico.query().where('tenant_id', tenant.id).where('status', 'ativo')
// ou Agendamento.query().where('tenant_id', tenant.id).all() para apenas Agendamento.all()

// gemini talk: https://gemini.google.com/u/1/app/797145d413f13f38?pageId=none