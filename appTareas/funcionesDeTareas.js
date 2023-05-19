
const {readFileSync} = require('fs');
const {writeFileSync} = require('fs');
const path = require('path');




module.exports = {
    
    leerJSON : () => JSON.parse(readFileSync(path.join(__dirname,'./tareas.json'), "utf8")),
    escribirJSON : (tareas) => writeFileSync(path.join(__dirname,"tareas.json"), JSON.stringify(tareas, null,3)),
    
}
