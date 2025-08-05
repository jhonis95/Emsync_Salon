import Inventory from '#models/inventory'

export class InventoryService {
  public async updateMinStockValue(inventoryId: string, minStockValue: number) {
    const stock = await Inventory.findOrFail(inventoryId)
    //[unfinished]:need to add erro handle
    stock.minStock = minStockValue
    await stock.save()
  }

  public async adjustStock(inventoryId: string, stockDelta: number) {
    // função responsavel por lidar com entrada e saida do stock
    const stock = await Inventory.findOrFail(inventoryId)
    //[unfinished]:need to add erro handle
    stock.quantaty += stockDelta
    await stock.save()
  }
}
