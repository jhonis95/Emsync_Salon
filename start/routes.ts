/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'

// import env from '#start/env'

// const saasDomain = env.get('SAAS_DOMAIN_LOCAL', '') as string

router.get('/', [controllers.TenentsHomepages, 'index'])

// SaaS principal
router
  .group(() => {
    router.get('/', [controllers.Saas, 'index'])
    router.get('/auth', [controllers.Saas, 'login']).as('saas.auth.login.show')
    router.post('/auth', [controllers.Saas, 'auth']).as('saas.auth.login')
    router
      .group(() => {
        router.get('/', [controllers.Signups, 'index']).as('saas.singup')
        router.get('/page/:page', [controllers.Signups, 'view']).as('saas.signup.view')
      })
      .prefix('signup')
    router.get('/app', [controllers.Saas, 'app'])
    //.use([middleware.auth({ guards: ['web'] })])
  })
  .domain('emsyncsalon.com.br').use([middleware.guest()])
// Portal do cliente (tenant)
router.group(() => {
  router.get('/auth', [controllers.Auth, 'index']).as('portal.auth.login.show')
  router.post('/auth', [controllers.Auth, 'login']).as('portal.auth.login')
  router
    .group(() => {
      router.get('/', [controllers.Portals, 'index']).as('portal.index')
      router
        .group(() => {
          router.get('/:page', [controllers.Portals, 'view']).as('portal.view')
          router
            .get('/service/appoiment', [controllers.Portals, 'appoiment'])
            .as('portal.view.service')
        })
        .prefix('view')
    })
    .prefix('portaldocliente')
  .use([middleware.auth({ guards: ['web'] })])
})
