import { defineConfig } from '@adonisjs/core/http'

export default defineConfig({
  // Permite que o Adonis aceite cabeçalhos de proxy vindos do localhost (seu Nginx)
  allowMethodSpoofing: false,
  trustProxy: (address) => {
    return address === '127.0.0.1' || address === '::1'
  },
})