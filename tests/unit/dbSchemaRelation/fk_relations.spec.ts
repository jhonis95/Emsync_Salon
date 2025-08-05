import db from '@adonisjs/lucid/services/db'
import { test } from '@japa/runner'

function fkTest(
  table: string,
  column: string,
  referencedTable: string,
  referencedColumn: string = 'id'
) {
  return db.rawQuery(
    `SELECT * FROM information_schema.key_column_usage WHERE table_name = ? AND column_name = ? AND referenced_table_name = ? AND referenced_column_name = ?`,
    [table, column, referencedTable, referencedColumn]
  )
}

test.group('Db schema relation fk relations', () => {
  test('user.store references tenant.id', async (assert) => {
    const fk = await fkTest('users', 'store', 'tenants')
    assert.assert.isAbove(fk[0].length, 0)
  })

  test('tenant.owner references user.id', async (assert) => {
    const fk = await fkTest('tenants', 'owner', 'users')
    assert.assert.isAbove(fk[0].length, 0)
  })

  test('service.store references tenant.id', async (assert) => {
    const fk = await fkTest('services', 'store', 'tenants')
    assert.assert.isAbove(fk[0].length, 0)
  })

  test('inventory.category references category.id', async (assert) => {
    const fk = await fkTest('inventories', 'category', 'categories')
    assert.assert.isAbove(fk[0].length, 0)
  })

  test('inventory.store references tenant.id', async (assert) => {
    const fk = await fkTest('inventories', 'store', 'tenants')
    assert.assert.isAbove(fk[0].length, 0)
  })

  test('inventory.product references product.id', async (assert) => {
    const fk = await fkTest('inventories', 'product', 'products')
    assert.assert.isAbove(fk[0].length, 0)
  })

  test('order.client references user.id', async (assert) => {
    const fk = await fkTest('orders', 'client', 'users')
    assert.assert.isAbove(fk[0].length, 0)
  })

  test('order.store references tenant.id', async (assert) => {
    const fk = await fkTest('orders', 'store', 'tenants')
    assert.assert.isAbove(fk[0].length, 0)
  })

  test('appoiment_service.provider references user.id', async (assert) => {
    const fk = await fkTest('appoiment_services', 'provider', 'users')
    assert.assert.isAbove(fk[0].length, 0)
  })

  test('appoiment_service.service references service.id', async (assert) => {
    const fk = await fkTest('appoiment_services', 'service', 'services')
    assert.assert.isAbove(fk[0].length, 0)
  })

  test('appoiment_service.order references order.id', async (assert) => {
    const fk = await fkTest('appoiment_services', 'order', 'orders')
    assert.assert.isAbove(fk[0].length, 0)
  })

  test('scheduled_product.order references order.id', async (assert) => {
    const fk = await fkTest('scheduled_products', 'order', 'orders')
    assert.assert.isAbove(fk[0].length, 0)
  })

  test('scheduled_product.product references product.id', async (assert) => {
    const fk = await fkTest('scheduled_products', 'product', 'products')
    assert.assert.isAbove(fk[0].length, 0)
  })

  test('staff.employer references user.id', async (assert) => {
    const fk = await fkTest('staff', 'employer', 'users')
    assert.assert.isAbove(fk[0].length, 0)
  })

  test('staff.store references tenant.id', async (assert) => {
    const fk = await fkTest('staff', 'store', 'tenants')
    assert.assert.isAbove(fk[0].length, 0)
  })

  test('contract.store references tenant.id', async (assert) => {
    const fk = await fkTest('contracts', 'store', 'tenants')
    assert.assert.isAbove(fk[0].length, 0)
  })

  test('contract.signed_by_user references user.id', async (assert) => {
    const fk = await fkTest('contracts', 'signed_by_user', 'users')
    assert.assert.isAbove(fk[0].length, 0)
  })

  test('contract.status references status.id', async (assert) => {
    const fk = await fkTest('contracts', 'status', 'statuses')
    assert.assert.isAbove(fk[0].length, 0)
  })

  test('review.client references user.id', async (assert) => {
    const fk = await fkTest('reviews', 'client', 'users')
    assert.assert.isAbove(fk[0].length, 0)
  })

  test('review.review_store references tenant.id', async (assert) => {
    const fk = await fkTest('reviews', 'review_store', 'tenants')
    assert.assert.isAbove(fk[0].length, 0)
  })
})
