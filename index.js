/* 
// console.log("Hola Mundo 3");
// como declarar variables :  var, let o const

var nombre = "Alejandro";
var nombre2;
nombre2 = "Antonio"
console.log(nombre + " " + nombre2); 
*/

/* 
ar nombre = "AA";
if (true) {
    var nombre = "BB";
} 
*/

/* 
const persona = {
    nombre: "Alejandro",
    apellido: "Matus",
    edad: 31,
     NombreCompleto() {
        //return this.nombre + " " + this.apellido;
        return `${this.nombre} ${this.apellido}`;
    } 
}
//console.log(persona)

console.log(persona.NombreCompleto());
 */

/* 
let dato = "bla bla bla";
let dato2 = "ppffff";
console.log(dato.length);
console.log(dato.toUpperCase());
console.log(dato.toLowerCase());
console.log(dato.concat(dato2));
console.log(dato.indexOf("a"));
console.log(dato.includes("es"));
console.log(dato.trimStart());
console.log(dato.trimEnd());
console.log(dato.replace("bla","hola"));
console.log(dato.substring(2,5));

var palabra =dato.split(" ");
console.log(palabra);
console.log(dato.repeat(3));
 */

/* 
let num1 = 3;
let num2 = "3";

if (num1 === num2) {
    console.log("iguales");
} else {    
    console.log("distinto");
} 
*/

//concat++;  //aumenta
//concat--;  //disminuye


let numtexto ="456";
let numReal = Number.parseInt(numtexto);

if ( Number.isInteger(numtexto)) {
    console.log("es Numero");
} else {
    console.log("es texto");
}
