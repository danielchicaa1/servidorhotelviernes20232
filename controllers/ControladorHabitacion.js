
import { ServicioHabitacion } from "../services/ServicioHabitacion";
export class ControladorHabitacion {
  constructor() {}
  
  //OPERACION O METODO
  async buscarTodas(request, response) {
    try {
    let servicioHabitacion=new ServicioHabitacion();
      response.status(200).json({
        // estado:true,
        mensaje: "exito buscando los datos",
        datos: await servicioHabitacion.buscarTodas()
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
  //OPERACION O METODO
  async buscarPorId(request, response) {
    try {
    let servicioHabitacion = new ServicioHabitacion();
      let id = request.params.id;
      response.status(200).json({
        mensaje: "exito buscando los datos",
        datos: await servicioHabitacion.buscarPorId(id)
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
  async modificar(request, response) {
    try {
    let servicioHabitacion = new ServicioHabitacion();
      let id = request.params.id;
      let datos = request.body;
      await servicioHabitacion.modificar(id, datos) // antes de la respuesta
      response.status(200).json({
        mensaje: "exito modificando los datos",
        datos: " ", // ver la respuesta de await
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
  async registrar(request, response) {
    try {
    let servicioHabitacion = new ServicioHabitacion();
      let datos = request.body;
      // tomar 2 fechas del objeto datos
      // la diferencia en dias de esas dos fechas
      await servicioHabitacion.registrar(datos)
      response.status(200).json({
        mensaje: "exito registrando los datos",
        datos: "aca los datos",
        diferencia:"diferencia en dias calculada"
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
  async eliminar(request, response) {
    try {
    let servicioHabitacion = new ServicioHabitacion();
      let id = request.params.id;
      await servicioHabitacion.eliminar(id); //eliminar
      response.status(200).json({
        mensaje: "exito eliminando los datos",
        datos: "aca los datos",
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
}