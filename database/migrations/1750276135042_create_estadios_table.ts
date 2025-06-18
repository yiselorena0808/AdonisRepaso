import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'estadios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('codEstadio')
      table.string('estadio').notNullable()
      table.string('direccion').notNullable()
      table.string('codPostal')
      table.string('poblacion')
      table.string('provincia').notNullable()
      table.integer('capacidad').notNullable()
      table.integer('sentados')
      table.date('inauguracion')
      table.string('dimensiones')
      table.integer('codClub').notNullable().references('codClub').inTable('clubs').onDelete('CASCADE').onUpdate('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}