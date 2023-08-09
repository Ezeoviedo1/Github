//objetos del mundo fisico, pasar propiedades al paradigma javascript, pasar propiedades
var miAuto={
    marca: "toyota",
    modelo: "corolla",
    ano: 2019,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.ano}`);
    }
};

miAuto.detalleDelAuto();
//this es una variable que hace referencia al objeto 

var paletaPadel={
    marca: "adidas",
    modelo: "adipower",
    grip: "corto",
    ano: 2022,
    paleta: function(){
        console.log(`paleta, ${this.marca} ${this.grip}`);
    }
}

// generar 30 objetos

