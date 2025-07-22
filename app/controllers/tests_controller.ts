import type { HttpContext } from '@adonisjs/core/http'

export default class TestsController {
    async testHandle({request}:HttpContext){
        const data = request.body()

        console.log('Received data:', data)

        return { message: 'Check logs for request data' }
    }
}