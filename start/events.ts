import emitter from '@adonisjs/core/services/emitter'

emitter.on('stock:low', function (inventory) {
  //[unfinished]criar novo service[alertService] que lida com os alertas
  /*
        // app/Services/AlertService.ts
        import Product from 'App/Models/Product'

        const lastAlert: Record<string, number> = {} // memória simples; troque por persistência se precisar

        export default class AlertService {
          public static async lowStock(product: Product) {
            const now = Date.now()
            const key = product.id

            // evita spam: só alerta a cada 1h por produto
            if (lastAlert[key] && now - lastAlert[key] < 1000 * 60 * 60) {
              return
            }

            lastAlert[key] = now

            // aqui você dispara email, webhook, grava histórico etc.
            // ex: await NotificationService.sendLowStockAlert(product)
            console.log(`Alerta: estoque baixo para ${product.id} (qty=${product.quantity})`)
          }
        }
    */
  console.log(inventory) // apagar apos criar o service responsavel pelos alertas
})
