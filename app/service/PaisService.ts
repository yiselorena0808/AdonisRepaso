import Pai from "#models/pai";

export default class PaisService{
    async crear(datos){
        return await Pai.create(datos)


    }
    async listar(){
        return await Pai.query()

    }
    async listarId(codPais){
        return await Pai.query().where('codPais',codPais)
    }
    async actualizar(codPais:number,datos:{nombrePais:string,comunitario:string}){
        const lista= await Pai.find(codPais)
        
            lista.nombrePais= datos.nombrePais;
            lista.comunitario= datos.comunitario;
        
        await lista.save()
        return lista

    }
    async eliminado(codPais:number){
        const encontrado= await Pai.find(codPais)
        if(encontrado){
            await encontrado.delete()
        return "eliminado"
        }else{
             return "no se ha eliminado"
        }


    }
    async conteo(){
        const resultado= await Pai.query().count('* as conteo')
        return resultado[0].$extras.conteo
    }


  
}

