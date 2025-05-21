/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')
// router.on('/auth').render('pages/auth',{user:'jonatan de oliveira'})
router.group(()=>{
    router.get('/auth',async ({ view })=>{
        return view.render('pages/auth',{user:'jonatan de oliveira'})
    })
})
