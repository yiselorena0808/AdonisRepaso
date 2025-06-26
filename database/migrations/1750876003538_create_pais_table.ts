import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'pais'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('codPais')
      table.string('nombrePais')
      table.string('comunitario')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}