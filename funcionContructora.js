// cargar 30 objetos
/* var miAuto={
    marca: "toyota",
    modelo: "corolla",
    ano: 2019,
    detalleDelAuto: function(){
        console.log(`Auto${this.modelo} ${this.ano}`);
    }
};

//funcion contructora
function auto (marca,modelo,ano){
this.marca = marca;
this.modelo = modelo;
this.ano = ano;
}
var autoNuevo = new auto("tesla","model 3","2020");
var autoNuevo2 = new auto("toyota","corolla","2000");
var autoNuevo3 = new auto("ford","ecosport","2000"); */
//loop
function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  var autos = [];
  for(let i = 0 ; i < 30 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }