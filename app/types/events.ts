import Inventory from '#models/inventory'

declare module '@adonisjs/core/types' {
  interface EventsList {
    'stock:low': Inventory
  }
}
