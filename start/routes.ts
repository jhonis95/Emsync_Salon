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
import env from '#start/env'

router.get('/', [controllers.TenentsHomepages, 'index'])

// SaaS principal
router
  .group(() => {
    router.get('', [controllers.Saas, 'index'])
    router
      .group(() => {
        router.get('', [controllers.Login, 'index']).as('auth.show')
        router.post('', [controllers.Auth, 'loginPortal']).as('auth.login')
        router.get('/page/:page', [controllers.Login, 'view']).as('auth.view')
      })
      .prefix('auth')
      .use([middleware.guest()])

    router
      .group(() => {
        router.get('', [controllers.Saas, 'app']).as('saas.appPage')
        router.get('page/:page', [controllers.Saas, 'view']).as('saas.view')
      })
      .prefix('app')
      .use([middleware.guest()])
  })
  .domain(env.get('SAAS_DOMAIN'))
  .use([middleware.guest()])

// Portal do cliente (tenant)
router.group(() => {
  router
    .group(() => {
      router.get('/', [controllers.Login, 'index']).as('auth.show')
      router.post('/', [controllers.Auth, 'loginPortal']).as('auth.login')
      router.get('/page/:page', [controllers.Login, 'view']).as('auth.view')
    })
    .prefix('auth')
    .use([middleware.guest()])

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
