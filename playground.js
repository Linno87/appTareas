const autos = require("./autos")
const personas = require("./personas")

let concesionaria = {
   autos,
 
   buscarAuto:function (patente){
      for(i=0; i<autos.length;i++){
         if(autos[i].patente === patente){
            return autos[i]
         }
      }
      return null
   },

  venderAuto:function (patente){
      let autoBuscado = this.buscarAuto(patente)
      if(autoBuscado!=null){
         let index = this.autos.indexOf(autoBuscado);
         this.autos[index].vendido = true;
      }
      return autoBuscado

   },
   autosParaLaVenta: function (){
      let autosALaVenta = this.autos.filter(element => element.vendido === false)
      return autosALaVenta
   },

   
autosNuevos: function(){
     return this.autosParaLaVenta().filter(element => element.km<100)
   },
   listaDeVentas: function(){
     let array = this.autos.filter(element =>element.vendido)
     
     return array.map(auto => auto.precio)
   },
   totalDeVentas: function(){
      return this.listaDeVentas().reduce((acum,num)=>acum +=num, 0)
   },
   puedeComprar: function (auto, persona){
      
      return auto.precio <= persona.capacidadDePagoTotal && (auto.precio/auto.cuotas) <= persona.capacidadDePagoEnCuotas
   },
   autosQuePuedeComprar: function (persona) {

      return this.autosALaVenta().filter(auto => this.puedeComprar(auto,persona))

   }

}

console.log(personas[0]);
console.log(concesionaria.autosQuePuedeComprar(personas[0]))