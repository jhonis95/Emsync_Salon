import type { HttpContext } from '@adonisjs/core/http'

export default class TenentsHomepagesController {
  async index({ view, tenant }: HttpContext) {
    //mudar tenant?.$attributes.domain para tenant?.$attributes.template
    //return view.render(`pages/templates/${tenant?.$attributes.domain}/home`, { tenant }) //[fix] passing all tenant data can cause problens
    return view.render(`pages/templates/${tenant?.$attributes.domain}/home`, { tenant })
  }
}
