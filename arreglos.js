
const numeros = [1,2,3,4,5,6]
console.log(numeros[2]);

const nombres = ["aaa", "bbb", "ccc"];
console.log(nombres);

const varios = [1, "hola", 2.5, true, {numero: 1, nombre: "alejandro"}];
console.log(varios);

console.log(numeros.length);

for (let index = 0; index < numeros.length; index++) {
    console.log("for " + numeros[index]);    
}

numeros.push(200);  // agregar elementos al final
numeros.unshift(300); // agregar elementos al inicio
//numeros.pop()
console.log(numeros); 

for (const iterator of numeros) {
    console.log("iterador " + iterator)
}

numeros.forEach(function(el){
    console.log("foreach " + el)
})

const numerosnuevos = numeros.map(function(el){
    return el * 2;
})
console.log(numeros);
console.log(numerosnuevos);

const numerosmayores = numeros.filter(elem => elem > 10);
console.log(numerosmayores);

const sumaarreglo = numeros.reduce((total,elem)=> total + elem,0)
console.log(sumaarreglo);
