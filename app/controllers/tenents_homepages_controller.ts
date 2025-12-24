import type { HttpContext } from '@adonisjs/core/http'

export default class TenentsHomepagesController {
  async index({ view, tenant, request }: HttpContext) {
    //mudar tenant?.$attributes.domain para tenant?.$attributes.template
    //return view.render(`pages/templates/${tenant?.$attributes.domain}/home`, { tenant }) //[fix] passing all tenant data can cause problens
    // return view.render(`pages/templates/${tenant?.$attributes.domain}/home`, { tenant })
    // console.log(request.request.headers.host)
    return view.render(`pages/templates/${request.request.headers.host}/home`, { tenant })
  }
}
