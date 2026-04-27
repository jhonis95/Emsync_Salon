import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    adonisjs({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: ['resources/css/app.css', 'resources/js/app.js', 'resources/js/signup.js'],

      /**
       * Paths to watch and reload the browser on file change
       */
      reload: ['resources/views/**/*.edge'],
    }),
  ],
  server: {
    host: '0.0.0.0', // Garante que o Vite ouça em todas as interfaces
    port: 5173,      // Porta padrão do Vite
    strictPort: true,
    hmr: {
        host: 'cortefino.com.br', // Mude para o domínio que está testando ou use localhost se estiver via SSH tunnel
    },
    allowedHosts: true,
  },
})
