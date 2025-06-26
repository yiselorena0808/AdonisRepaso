import Router from "@adonisjs/core/services/router";
import PaisController from "../../app/Controller/PaisController.js";

const PaisRouter= new PaisController()

Router.get('/pais',PaisRouter.listarPais)
Router.post('/crearPais',PaisRouter.crearPais)
Router.get('/listarId/:codPais', PaisRouter.listarId)
Router.put('/actua/:codPais',PaisRouter.actualizar)
Router.delete('/eliminar/:codPais',PaisRouter.eliminar)
Router.get('/conteos',PaisRouter.contadorPais)
