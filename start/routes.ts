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
import router from '@adonisjs/core/services/router'
// import { middleware } from './kernel.js'
// Update the import path to match your project's structure, for example:
// const tenantController = () => import('../app/controllers/tenants_controller.js')
// const userController = () => import('../app/controllers/users_controller.js')
// const testController = () => import('../app/controllers/tests_controller.js')
const authController = () => import('../app/controllers/auth_controller.js')
// const AppsController = () => import('../app/controllers/apps_controller.js')

router.get('/', [TenentsHomepagesController, 'index'])
// router.on('/auth').render('pages/auth',{user:'jonatan de oliveira'})

router.group(() => {
  router.get('/auth', [authController, 'index']).as('auth.login.show')
  router.post('/auth', [authController, 'login']).as('auth.login')
})

router.group(()=>{
  router.get('/app',[AppsController,'index'])
})

// router.group(() => {
//   router
//     .get('/auth', async ({ view }) => {
//       return view.render('pages/auth', { user: 'jonatan de oliveira' })
//     })
//     .as('auth')
// })
// router.group(() => {
//   router.post('/api/tenant/create', [tenantController, 'createTenant'])
//   router.get('/api/tenant/users', [tenantController, 'allUsers'])
// })
// //.use(middleware.auth({guards:['web']})) use to make sure the router group just allow authenticade user to get that route
// router.group(() => {
//   router.post('/api/user/create', [userController, 'createUser'])
//   router.get('/api/user/tanant', [userController, 'getTenant'])
// })
// router.group(() => {
//   router.post('/test', [testController, 'testHandle'])
// })
