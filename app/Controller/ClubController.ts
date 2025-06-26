
import Pai from "#models/pai"
import ClubService from "../service/ClubService.js"


const clubservice=new ClubService 
class ClubController{
    async crearClub({request,response}){
        try{
            const {codClub,club,nombre,direccion,poblacion,provincia,cosPostal,telefono,colores,himno,fax,anioFundacion,presupuesto,presidente,vicepresidente}= request.body()
        const nuevoClub= await clubservice.crear({codClub,club,nombre,direccion,poblacion,provincia,cosPostal,telefono,colores,himno,fax,anioFundacion,presupuesto,presidente,vicepresidente})
            return response.json({mensaje:"datos creados",datos:nuevoClub})
        }catch(error){
            return response.json({error:error.message})
         
        }
        
    }
    async listarClub({response}){
            const List=await clubservice.Listar()
            return response.json({datos:List})

    }
    async listarId({params,request,response}){
        try{
            const codClub= params.codClub
            const listaIdClub= await clubservice.listarId(codClub)
            if (!listaIdClub) {
        return response.json({ mensaje: 'club no encontrado' })
    }

        return response.json({ mensaje: listaIdClub })
    } catch (error) {
        return response.json({ error: error.message })

        }
    }
    async actualizar({params,request,response}){
        try{
            const codClub= params.codClub
            const {club,nombre,direccion,poblacion,provincia,cosPostal,telefono,colores,himno,fax,anioFundacion,presupuesto,presidente,vicepresidente}= request.body()
            const listado= await clubservice.actualizar(codClub,{club,nombre,direccion,poblacion,provincia,cosPostal,telefono,colores,himno,fax,anioFundacion,presupuesto,presidente,vicepresidente})
            return response.json({mensaje:listado})

        }catch(error){
             return response.json({error:error.message})
        }
    }
    async eliminar({params,request,response}){
        try{
            const codClub= params.codClub
            const respuestass= await clubservice.eliminar(codClub)
            return response.json({mensaje:respuestass})

        }catch(error){
            return response.json({error: error.message})
        }
    }
    async contadorClubes({request,response}){
        try{
            const resultadosClubes= await clubservice.conteoClubes()
            return response.json({mensaje:resultadosClubes})
        }catch(error){
            return response.json({error:error.message})

        }

    }

    }
export default ClubController