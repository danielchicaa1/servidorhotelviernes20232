import { modeloReservas } from "../models/modeloReserva.js";
export class ServicioReserva {
  constructor() {}

  async buscarTodas() {
    let reservas=await modeloReservas.find()
    return reservas
  }
  async buscarPorId(id) {
    let reserva=await modeloReservas.findId(id)
    return reserva
  }
  async modificar(id, datos) {
    return await modeloReservas.findByIdAndUpdate(id,datos)
  }
  async registrar(datos) {
    let reservaNueva= modeloReservas(datos)
    return await reservaNueva.save()
  }
  async eliminar(id) {
    return await modeloReservas.findByIdAndDelete(id)
  }
}
