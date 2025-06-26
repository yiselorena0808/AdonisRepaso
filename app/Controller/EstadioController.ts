import { error } from "console";
import EstadioService from "../service/EstadioService.js";

const estadioservice= new EstadioService()
class EstadioController{
    async crearEstadio({request,response}){
        try{
            const {estadio,direccion,codPostal,poblacion,provincia,capacidad,sentados,inauguracion,dimensiones,codClub}= request.body()
            const nuevoEstadio= await estadioservice.crear({estadio,direccion,codPostal,poblacion,provincia,capacidad,sentados,inauguracion,dimensiones,codClub})

            return response.json({mensaje:"datos creados",datos:nuevoEstadio})
        }catch(error){
            return response.json({error:error.message})
        }
    }
    async listarEstadio({response}){
        const Estadios= await estadioservice.listarEstadios()
        return response.json({datos:Estadios})
    }
    async listarIdEstadios({params,request,response}){
        try{
            const codEstadio=params.codEstadio
            const listarIdEstadios= await estadioservice.listarIdEst(codEstadio)
            if (!listarIdEstadios) {
      return response.json({ mensaje: 'estadio no encontrado' })
    }
    return response.json({ mensaje: listarIdEstadios })
        }catch(error){
            return response.json({error: error.message})
        }
    }
    async actualizarEstadio({params,request,response}){
        try{
            const codEstadio= params.codEstadio
            const {estadio,direccion,codPostal,poblacion,provincia,capacidad,sentados,inauguracion,dimensiones,codClub}= request.body()
            const actu=await estadioservice.actualizarEstadio(codEstadio,{estadio,direccion,codPostal,poblacion,provincia,capacidad,sentados,inauguracion,dimensiones,codClub})
            return response.json({mensaje:actu})
        }catch(error){
            return response.json({error:error.message})
        }

    }
    async eliminarEstadio({params,request,response}){
        try{
            const codEstadio= params.codEstadio
            const resul= await estadioservice.eliminar(codEstadio)
            return response.json({mensaje:resul})
        }catch(error){
            return response.json({error:error.message})

        }

    }
    async contadorEstadios({request,response}){
        try{
            const resull= await estadioservice.conteoEstadio()
            return response.json({mensaje:resull})
        }catch(error){
            return response.json({error:error.message})
        }
    }
}
export default EstadioController;