import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'jugadors'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('codJugador')
      table.string('club')
      table.string('jugador')
      table.string('dorsal')
      table.integer('codPais').notNullable().references('codPais').inTable('pais').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}