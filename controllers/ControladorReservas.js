export class ControladorReservas {
  constructor() {}

  buscarTodas(request, response) {
    try {
      response.status(200).json({
        mensaje: "exito buscando los datos",
        datos: "aca los datos",
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
  buscarPorId(request, response) {
    try {
      let id = request.params.id;
      response.status(200).json({
        mensaje: "exito buscando los datos",
        datos: "aca los datos",
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
  modificar(request, response) {
    try {
      let id = request.params.id;
      let datos = request.body;
      response.status(200).json({
        mensaje: "exito buscando los datos",
        datos: "aca los datos",
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
  registrar(request, response) {
    try {
      let datos = request.body;
      response.status(200).json({
        mensaje: "exito buscando los datos",
        datos: "aca los datos",
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
  eliminar(request, response) {
    try {
      let id = request.params.id;
      response.status(200).json({
        mensaje: "exito buscando los datos",
        datos: "aca los datos",
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
}
