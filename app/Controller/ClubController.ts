import { resolve } from "path"
import ClubService from "../service/ClubService.js"
import { error } from "console"

new ClubService 
class ClubController{
    async crearClub({request,response}){
        try{
            const {codClub,club,nombre,direccion,poblacion,provincia,cosPostal,telefono,colores,himno,fax,anioFundacion,presupuesto,presidente,vicepresidente}= request.body()
        const nuevoClub= await ClubService.crear({codClub,club,nombre,direccion,poblacion,provincia,cosPostal,telefono,colores,himno,fax,anioFundacion,presupuesto,presidente,vicepresidente})
            return response.json({mensaje:"datos creados",datos:nuevoClub})
        }catch{
            return response.json({error:"error,no se ha creado nuevos datos"})
         
        }
        
    }
    async listarClub({}){
        try{
            const List=await ClubService.Listar()
            return Response.json({datos:List})
        }catch{
            return Response.json({error:"error en listar los clubes"})

        }
    }
}
export default ClubController