import { DateTime } from 'luxon'
import { BaseModel, column,belongsTo,type BelongsTo } from '@adonisjs/lucid/orm'
import Estadio from './estadio.js'


export default class Club extends BaseModel {
  @column({ isPrimary: true,columnName:'codClub' })
  declare codClub: number

  @column()
  declare club:string

  @column()
  declare nombre:string

  @column()
  declare direccion:string
  
  @column()
  declare poblacion:string

  @column()
  declare provincia:string

  @column({columnName:'cosPostal'})
  declare cosPostal:string

  @column()
  declare telefono:string

  @column()
  declare colores:string

  @column()
  declare himno:string

  @column()
  declare fax:string

  @column({columnName:'anioFundacion'})
  declare anioFundacion:number

  @column()
  declare presupuesto:string

  @column()
  declare presidente:string

  @column()
  declare vicepresidente:string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Estadio,{
    foreignKey:'codClub',
  })
  declare estadios:BelongsTo<typeof Estadio>
}