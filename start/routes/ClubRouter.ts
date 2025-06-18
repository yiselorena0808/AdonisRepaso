import Router from "@adonisjs/core/services/router";
import ClubController from "../../app/Controller/ClubController.js";
const ClubRouter= new ClubController()

Router.post('/Club',ClubRouter.crearClub);
Router.get('/Listar',ClubRouter.listarClub);
