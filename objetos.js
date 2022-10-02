//objetos literales

const lentesLau = {
    graduacion:0.25,
    marco:"metalico",
    color:"dorado",
    cristal:"vidrio"
}

console.log(lentesLau);
console.log("El color de este lente es: "+lentesLau.color);
console.log("La graduacion de los lentes es: "+lentesLau["graduacion"]);

lentesLau.graduacion=0.5
console.log(lentesLau);

//funcion constructora
function Golosina(codigo, marca, nombre, precio){
    this.codigo = codigo;
    this.marca = marca;
    this.nombre = nombre;
    this.precio = precio;
}

const golosina1 = new Golosina(112, "Arcor", "Rocklet", 100);

const golosina2 = new Golosina(390, "Felfort", "Marroc", 200);

console.log(golosina1);
golosina2.precio=80;
console.log(golosina2);

//otra funcion constructora
function Lente(objLiteral){
    this.graduacion=objLiteral.graduacion;
    this.marco=objLiteral.marco;
    this.color=objLiteral.color;
    this.cristal=objLiteral.cristal;
    this.cantidad=1;
}

const lente1 = new Lente(lentesLau)
console.log(lente1);

const lente2 = new Lente({graduacion:2,marco:"plastico",color:"lila",cristal:"policarbonato"});
console.log(lente2);


//Metodos de String
let frase = "Soy un tenista de TOP TEN porque gane 2 grand slam";
//propiedad length
console.log("La longitud de la frase: "+frase.length);
//metodo toLowerCase() pasa todo a minusculas
console.log(frase.toLowerCase());
//metodo toUppercase() pasa todo a mayusculas
console.log(frase.toUpperCase());
//Metodos personalizados

function Automovil(marca,modelo){
    this.marca=marca;
    this.modelo=modelo;
    //metodo para Automoviles
    this.mostrarAuto=function(){console.log("Soy un "+this.marca+" "+this.modelo)}
}

const auto1 = new Automovil("VW","Amarok");
auto1.mostrarAuto();
const auto2 = new Automovil("Fiat","Palio");
auto2.mostrarAuto();


//Clases 
class Computadora{
    constructor(tipo,sistema){
        this.tipo=tipo;
        this.sistema=sistema;
    }
    //metodos
    mostrarCompu(){
        return "Detalles de la PC: "+this.tipo+" "+this.sistema;
    }

    actualizarSistema(nuevoSistema){
        this.sistema=nuevoSistema;
        console.log("Sistema actualizado")
    }
}

const compu1 = new Computadora("notebook","marOs");
const compu2 = new Computadora("escritorio","linux");

console.log(compu1);
let detallesPC=compu2.mostrarCompu();
console.log(detallesPC);

compu2.actualizarSistema("Windows 11");