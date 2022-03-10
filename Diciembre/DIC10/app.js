// VARIABLES
/* 
var, let -> variables
const -> constante 
*/

var x = 5;
let y = 6;

const PI = 3.14;

let z = "asiudgsuia";
let a = 'asdhasiud';

let b = true;

let c = ["hola", "adios", 6];
const d = ['j', 5, true, "u"];

let e = Math.PI;

console.log(x);
console.log(y);
console.log(PI);
console.log(!b);
console.log(c[0]);
console.log(e);

// BUCLES
for(let i = 0; i < c.length; i++){
    console.log(c[i]);
}

// CONDICIONAL
if(x > y){
    console.log("X es mayor");
}else{
    console.log("Y ES MAYOR");
}

// SWITCH
switch (y) {
    case 6:
        console.log("El valor es 6");
        break;

    default:
        break;
}

let pc = {
    ram : 4, 
    potencia : 5,
    cpu : "intel", 
    gpu : "gtx"
}

let ifp = {
    director : "Serafin",
    coordinador : "Hammu",
    ciclos : {
        dam : "Desarrollo de Aplicaciones Multiplataforma",
        son : "Sonido"
    },
    profesores : {
        dam : ["Paco", "Sergio", "Naza"],
        mkt : "Esther"
    }
}

console.log(ifp.profesores.dam[0]);
// alert("Me pica un pie");
let f = prompt("Escribe una cosa");
alert(f);