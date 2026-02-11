/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import TenentsHomepagesController from '#controllers/tenents_homepages_controller'
import authController from '#controllers/auth_controller'
import SaasController from '#controllers/saas_controller'

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
import PortalsController from '#controllers/portals_controller'
import SingupsController from '#controllers/singups_controller'

// import env from '#start/env'

// const saasDomain = env.get('SAAS_DOMAIN_LOCAL', '') as string

router.get('/', [TenentsHomepagesController, 'index'])

// SaaS principal
router.group(() => {
    router.get('/', [SaasController, 'index'])
    router.get('/auth', [SaasController, 'login']).as('saas.auth.login.show')
    router.post('/auth', [SaasController, 'auth']).as('saas.auth.login')
    router.group(()=>{
      router.get('/',[SingupsController,'index']).as('saas.singup')
      router.get('/view/:page', [SingupsController, 'view']).as('saas.signup.view')
    }).prefix('signup')
    router.get('/app', [SaasController, 'app'])
    //.use([middleware.auth({ guards: ['web'] })])
})
.domain('emsyncsalon.com.br')
// Portal do cliente (tenant)
router.group(() => {
  router.get('/auth', [authController, 'index']).as('portal.auth.login.show')
  router.post('/auth', [authController, 'login']).as('portal.auth.login')
  router
    .group(() => {
      router.get('/', [PortalsController, 'index']).as('portal.index')
      router
        .group(() => {
          router.get('/:page', [PortalsController, 'view']).as('portal.view')
          router.get('/service/appoiment', [PortalsController, 'appoiment']).as('portal.view.service')
        })
        .prefix('view')
    })
    .prefix('portaldocliente')
    //.use([middleware.auth({ guards: ['web'] })])
})
