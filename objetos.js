const producto = {
    nombre:"monitor gamer 20\"",
    precio:300000,
    informacion: {
        peso:"1kg",
        medida:"50cm"
    },
    disponibilidad:["los angeles","chillan","concepcion"]
}

const bodega = {
    nombrebodega:"los angeles",
    stockbodega: 450
}

const datosobjetos = {...producto, ...bodega};
//console.log(datosobjetos);

//console.log(Object.keys(bodega));
//console.log(Object.values(bodega));
console.log(Object.entries(bodega));


/* 
//console.log(producto.informacion.medida);

//let nombre = producto.nombre;
//let precio = producto.precio;
//let medida = producto.informacion.medida;

const {nombre,precio,informacion, informacion: {peso} } = producto;

//console.log(peso);

//Object.freeze(producto); // no permite modificar datos ni estructura
//Object.seal(producto);   // solo permite modificar valores pero no estructura
//delete producto.precio;

console.log(producto.precio);
producto.nombre = "computador";

producto.stock = 60;

console.log(producto.nombre);
console.log(producto.stock);

function imprimir({ nombre, precio, informacion: {peso} }) {
    //console.log(nombre + " " + precio);
    console.log(`nnombre:${nombre} precio:$ ${precio} peso:${peso}`)
}

imprimir(producto)
 */