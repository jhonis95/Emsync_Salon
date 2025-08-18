import type { HttpContext } from '@adonisjs/core/http'

export default class TenentsHomepagesController {
  async index({ view, tenant }: HttpContext) {
    return view.render(`pages/${tenant?.$attributes.domain}/home`, { tenant }) //[fix] passing all tenant data can cause problens
  }
}
