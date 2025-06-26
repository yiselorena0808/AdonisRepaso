import { error } from 'console'
import PaisService from '../service/PaisService.js'

const paisservice = new PaisService()

class PaisController {
  async crearPais({ request, response }) {
    try{
         const {nombrePais,comunitario} = request.body()

    const nuevo = await paisservice.crear({nombrePais,comunitario})

    return response.json({ mensaje: "datos creados",datos:nuevo})
    }catch(error){
         return response.json({error:error.message })

    }
  }

  async listarPais({ response }) {
    const paises = await paisservice.listar() 
    return response.json({ datos: paises })
  }
  async listarId({ params, response }) {
  try {
    const codPais = params.codPais
    const listaid = await paisservice.listarId(codPais)

    if (!listaid) {
      return response.json({ mensaje: 'País no encontrado' })
    }

    return response.json({ mensaje: listaid })
  } catch (error) {
    return response.json({ error: error.message })
  }
  }
  async actualizar({params,request,response}){
    try{
        const codPais= params.codPais
         const {nombrePais,comunitario} = request.body()
         const listado=await paisservice.actualizar(codPais,{nombrePais,comunitario})
         return response.json({mensaje:listado})

    }catch(error){
        return response.json({error:error.message})
    }

  }
  async eliminar({params,request,response}){
    try{
      const codPais= params.codPais
      const resp= await paisservice.eliminado(codPais)
      return response.json({mensaje:resp})
    }catch(error){
      return response.json({error:error.message})
    }

  }
  async contadorPais({request,response}){
    try{
      const resultado= await paisservice.conteo()
      return response.json({mensaje:resultado})
    }catch(error){
       return response.json({error: error.message})
    }
  }
}

export default PaisController
