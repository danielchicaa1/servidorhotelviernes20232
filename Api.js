//Esta clase representa un servidor
import cors from 'cors'
import express from "express";
import {rutasAPI} from "./routes/rutasHoteles.js"

import {establecerConexionBD} from "./database/conexion.js"


export class Api {
  constructor() {
    this.app = express()
    this.conectarBD()
    this.procesarPeticiones()
  }

  //1. Levantar el servidor
  levantarServidor() {
    this.app.listen(3000, function () {
      console.log("servidor operando");
    });
  }

  //2. Atiende las peticiones y responde
  procesarPeticiones() {
    this.app.unsubscribe(cors())
    this.app.use(express.json())
    this.app.use("/",rutasAPI)
    
  }

  //3. Se conecta a la Base de Datos
  conectarBD(){
    establecerConexionBD()
  }
  
}
