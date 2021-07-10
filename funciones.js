function sumar(num1 = 100, num2 = 10){  // si se asignan valores, los toma por defecto cuando no se proporcionan los datos
    return num1 + num2;
}

console.log(sumar(3,1));

const imprimir = function() {
    return "imprimiendo datos 1...";
}
console.log(imprimir());

const imprimir2 = ()=> {
    return "imprimiendo datos 2...";
}
console.log(imprimir2());

const imprimir3 = ()=> console.log("imprimiendo datos 3...");
console.log(imprimir3());

const imprimir4 = ()=> "imprimiendo datos 4...";
console.log(imprimir4());

const imprimir5 = nombre => `imprimiendo datos 5... ${nombre}`;
console.log(imprimir5("Alejandro"));

const imprimir6 = (nombre,edad) => `imprimiendo datos 6... ${nombre} edad: ${edad}`;
console.log(imprimir6("Alejandro",31));

const imprimir7 = (nombre,edad) => {
    edad+=10;
    return `imprimiendo datos 7... ${nombre} edad: ${edad}`;
}
console.log(imprimir7("Alejandro",31));