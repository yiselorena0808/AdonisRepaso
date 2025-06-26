import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, type HasMany} from '@adonisjs/lucid/orm'
import Club from './club.js'

export default class Estadio extends BaseModel {
  @column({ isPrimary: true,columnName:'codEstadio' })
  declare codEstadio: number

  @column()
  declare estadio:string

  @column()
  declare direccion:string
  
  @column({columnName:'codPostal'})
  declare codPostal:string

  @column()
  declare poblacion:string

  @column()
  declare provincia:string

  @column()
  declare capacidad:number

  @column()
  declare sentados:number

  @column()
  declare inauguracion:Date

  @column()
  declare dimensiones:string

  @column({columnName:'codClub'})
  declare codClub:number


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  //relacion hasmany

  @hasMany(()=>Club,{
    foreignKey: 'codClub',
  })
  declare estadios:HasMany<typeof Estadio>
}