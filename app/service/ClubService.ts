//consultas realizadas al modelo utilizando ORM lucid
import Club from "#models/club";
import Pai from "#models/pai";

export default class ClubService{
    async crear(datos){
       return await Club.create(datos)
    }
    async Listar(){
        return await Club.query()
    }
    async listarId(codClub){
        return await Club.query().where('codClub',codClub)
    }
    async actualizar(codClub:number,datos:{club:string,nombre:string,direccion:string,poblacion:string,provincia:string,cosPostal:string,telefono:string,colores:string
        ,himno:string,fax:string,anioFundacion:number,presupuesto:string,presidente:string,vicepresidente:string}){
            const lista= await Club.find(codClub)
            
                lista.club= datos.club;
                lista.nombre= datos.nombre;
                lista.direccion= datos.direccion;
                lista.poblacion= datos.poblacion;
                lista.provincia= datos.provincia;
                lista.cosPostal= datos.cosPostal;
                lista.telefono= datos.telefono;
                lista.colores= datos.colores;
                lista.himno= datos.himno;
                lista.fax= datos.fax;
                lista.anioFundacion= datos.anioFundacion;
                lista.presupuesto= datos.presupuesto;
                lista.presidente= datos.presidente;
                lista.vicepresidente= datos.vicepresidente;
            
            await lista.save()
            return lista
    
        }
        async eliminar(codClub:number){
        const encontradosClubes= await Club.find(codClub)
        if(encontradosClubes){
            await encontradosClubes.delete()
            return "eliminado"
        }else{
            return "no se ha eliminado el club"
        }


    }
    async conteoClubes(){
        const resultadosClubes= await Club.query().count('* as conteoClubes')
        return resultadosClubes[0].$extras.conteoClubes
    }

}

