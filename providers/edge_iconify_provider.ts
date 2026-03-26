import type { ApplicationService } from '@adonisjs/core/types'
import { edgeIconify, addCollection } from 'edge-iconify'
import { icons as lucidIcons } from '@iconify-json/lucide'
import edge from 'edge.js'

export default class EdgeIconifyProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  register() {}

  /**
   * The container bindings have booted
   */
  async boot() {
    addCollection(lucidIcons)
    edge.use(edgeIconify)
  }

  /**
   * The application has been booted
   */
  async start() {}

  /**
   * The process has been started
   */
  async ready() {}

  /**
   * Preparing to shutdown the app
   */
  async shutdown() {}
}