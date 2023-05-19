const {v4: uuidv4} = require("uuid")

const Tarea = function(nombre, estado){
    this.id = uuidv4(); 
    this.nombre = nombre;
    this.estado = estado;
    this.fecha = new Date();
    
}

module.exports = Tarea;