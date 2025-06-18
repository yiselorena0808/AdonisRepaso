//consultas realizadas al modelo utilizando ORM lucid
import Club from "#models/club";

class ClubService{
    crear(data:<Club>){
       return await Club.create(data)
    }
    Listar(){
        return await Club.query()
    }

}
export default ClubService;
