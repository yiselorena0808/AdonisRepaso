import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clubs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('codClub')
      table.string('club')
      table.string('nombre').notNullable()
      table.string('direccion').notNullable()
      table.string('poblacion')
      table.string('provincia')
      table.string('cosPostal')
      table.string('telefono')
      table.string('colores')
      table.string('himno')
      table.string('fax')
      table.integer('anioFundacion')
      table.string('presupuesto')
      table.string('presidente')
      table.string('vicepresidente')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}