const { leerJSON, escribirJSON } = require("../appTareas/funcionesDeTareas.js");
require("colors");

const Tarea = require("../moduloTareas/Tarea.js");


module.exports = {
  tareas: leerJSON(),
  listarTarea: function (array = this.tareas) {
    array.forEach(({nombre, estado}, index) => {
      console.log(
        ` ${index +1} - ${nombre} - ${
          estado === "pendiente"
            ? estado.red
            : estado === "en progreso"
            ? estado.yellow
            : estado.green}`);
    });
  },
  guardarTareas: function (tarea, estado) {
    const tareas = this.tareas;
    let nuevaTarea = new Tarea(tarea, estado);

    tareas.push(nuevaTarea);
    escribirJSON(tareas);
    this.mensajeColorido("Nueva tarea creada","")
    return `${tarea} --> ${estado}`;
  },

  filtrarPorEstado : function (estado) {
      const filtrado = this.tareas.filter(elem => elem.estado === estado)
      return filtrado;
  },

  mensajeColorido: function (texto, estilo) {
    estilo === "error"
      ? console.log(texto.red)
      : estilo === "cuidado"
      ? console.log(texto.yellow)
      : console.log(texto.green);
  },
};
