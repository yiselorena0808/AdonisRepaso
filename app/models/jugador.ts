import { DateTime } from 'luxon'
import { BaseModel, column,belongsTo,type BelongsTo } from '@adonisjs/lucid/orm'
import Pai from './pai.js'

export default class Jugador extends BaseModel {
  @column({ isPrimary: true })
  declare codJugador: number

  @column()
  declare club:string

  @column()
  declare jugador:string

  @column()
  declare dorsal:string

  @column()
  declare codPais:number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Pai,{
    foreignKey:'codPais',
  })
  declare pais:BelongsTo<typeof Pai>


}