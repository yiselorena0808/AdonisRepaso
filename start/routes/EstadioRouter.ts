import EstadioController from "../../app/Controller/EstadioController.js";
import Router from "@adonisjs/core/services/router";

const EstadioRouter= new EstadioController()

Router.post('/crearEstadio',EstadioRouter.crearEstadio);
Router.get('/listarEstadio',EstadioRouter.listarEstadio);
Router.get('/listarIdEstadio/:codEstadio',EstadioRouter.listarIdEstadios);

Router.put('/editarEstadio/:codEstadio',EstadioRouter.actualizarEstadio);
Router.delete('/eliminarEstadio/:codEstadio',EstadioRouter.eliminarEstadio);
Router.get('/cuentaEstadios',EstadioRouter.contadorEstadios);