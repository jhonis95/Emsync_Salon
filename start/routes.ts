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
<<<<<<< HEAD
router.group(() => {
    router.get('/', [SaasController, 'index'])
    router.get('/auth', [SaasController, 'login']).as('saas.auth.login.show')
    router.post('/auth', [SaasController, 'auth']).as('saas.auth.login')
    router.group(()=>{
      router.get('/',[SignupsController,'index']).as('saas.singup')
      router.get('/page/:page', [SignupsController, 'view']).as('saas.signup.view')
      router.get('/components/:component',[SignupsController, 'components']).as('saas.singup.component')
    }).prefix('signup')
    router.get('/app', [SaasController, 'app'])
    //.use([middleware.auth({ guards: ['web'] })])
})
.domain('emsyncsalon.com.br')
=======
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
      
    router.group(() => {
      router.get('', [controllers.Saas, 'app']).as('saas.appPage')
      router.get('page/:page', [controllers.Saas, 'view']).as('saas.view')
    })
    .prefix('app')
    .use([middleware.guest()])  
  })
  .domain('emsyncsalon.com.br')
  .use([middleware.guest()])
>>>>>>> adonisV7
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
