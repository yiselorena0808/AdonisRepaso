import Router from "@adonisjs/core/services/router";
import ClubController from "../../app/Controller/ClubController.js";
const ClubRouter= new ClubController()

Router.post('/Club',ClubRouter.crearClub);
Router.get('/ListarClub',ClubRouter.listarClub);
Router.get('/listarIdClub/:codClub',ClubRouter.listarId);

Router.put('/actuaClub/:codClub',ClubRouter.actualizar);
Router.delete('/eliminarClub/:codClub',ClubRouter.eliminar);
Router.get('/conteoClubes',ClubRouter.contadorClubes)
