/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AppsController from '#controllers/apps_controller'
import TenentsHomepagesController from '#controllers/tenents_homepages_controller'
import authController from '#controllers/auth_controller'
import SaasController from '#controllers/saas_controller'

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

router.get('/', [TenentsHomepagesController, 'index'])

// SaaS principal
router.group(()=>{
  router.get('/',[SaasController, 'index'])
  router.get('/auth',[SaasController, 'login'])
  router.post('/auth',[SaasController, 'auth'])
  router.get('/app',[SaasController, 'app']).use([middleware.auth({ guards: ['web']})])
}).domain('emsyncsalon.com.br')

// Portal do cliente (tenant)
router.group(() => {
  router.get('/auth', [authController, 'index']).as('auth.login.show')
  router.post('/auth', [authController, 'login']).as('auth.login')
  router.get('/portaldocliente', [AppsController, 'index'])
    .use([middleware.auth({ guards: ['web']})])
})