import Estadio from "#models/estadio";

export default class EstadioService{
    async crear(datos){
        return await Estadio.create(datos)
    }
    async listarEstadios(){
        return await Estadio.query()
    }
    async listarIdEst(codEstadio){
        return await Estadio.query().where('codEstadio',codEstadio)
    }
    async actualizarEstadio(codEstadio:number,datos:{estadio:string,direccion:string,codPostal:string,poblacion:string,provincia:string,capacidad:number,sentados:number,inauguracion:Date,dimensiones:string,codClub:number}){
        const listadosEstadios= await Estadio.find(codEstadio)
        listadosEstadios.estadio=datos.estadio;
        listadosEstadios.direccion=datos.direccion;
        listadosEstadios.codPostal=datos.codPostal;
        listadosEstadios.poblacion=datos.poblacion;
        listadosEstadios.provincia=datos.provincia;
        listadosEstadios.capacidad=datos.capacidad;
        listadosEstadios.sentados=datos.sentados;
        listadosEstadios.inauguracion=datos.inauguracion;
        listadosEstadios.dimensiones=datos.dimensiones;
        listadosEstadios.codClub=datos.codClub;
        await listadosEstadios.save()
        return listadosEstadios
    }
    async eliminar(codEstadio:number){
        const encontradoeliminar= await Estadio.find(codEstadio)
        if(encontradoeliminar){
            await encontradoeliminar.delete()
            return "eliminado estadio"
        }else{
            return "no se ha eliminado el estadio"
        }

    }
    async conteoEstadio(){
        const cuentaEstadios= await Estadio.query().count('* as totalEstadios')
        return cuentaEstadios[0].$extras.totalEstadios

    }
}