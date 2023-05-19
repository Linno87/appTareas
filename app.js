
const db = require("./moduloTareas");
const {mensajeColorido}  = require("./moduloTareas");
const {listarTarea} = require("./moduloTareas");
const argv = require("process").argv;


const accion = argv[2];


let accionesDisponibles = ["listar","crear","filtrar"];

let respuesta = 0

switch (accion) {
    case "listar":
        db.listarTarea()
        break;
    case "crear":
    
        if(argv[3]===undefined){
            mensajeColorido("Debe ingresar el nombre de la tarea", "error")
            
        }else {
            let guardado = db.guardarTareas(argv[3], "pendiente")
            mensajeColorido(guardado,"")
        }
        break
    case "filtrar":
        listarTarea(db.filtrarPorEstado(argv[3]))
        break
    case undefined:
        mensajeColorido("Atencion - Tienes que pasar una acción","cuidado")
        mensajeColorido("Las acciones disponibes son:"+ accionesDisponibles, "cuidado")
        break
    default:
        mensajeColorido("No entiendo qué quieres hacer","cuidado");
        mensajeColorido("Las acciones disponibes son : "+ accionesDisponibles,"cuidado");
        break;
}
respuesta ? console.log(respuesta):"";