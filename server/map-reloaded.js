const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true
    },
];

//ejemplo 1

const rta = orders.map(item => item.total);
console.log('original', orders);
console.log('rta', rta);

//ejemplo2 - en este ejemplo el array cambia, porque le estamos asignando la referencia en memoria del array original, por lo que tanto el original como el nuevo array tienen el nuevo elemento

// const rta2 = orders.map(item => {
//     item.tax = .19;
//     return item
// })
// console.log('original', orders);
// console.log('rta2', rta2);

//ejemplo 3 - en este ejemplo se soluciona el problema de arriba, utilizando un operador para "concatenar" los elementos del array original, al nuevo que produce map, agregando la propiedad tax en el

const rta3 = orders.map(item => {
    const result = {...item, tax: .19}
    return result
})

//es lo mismo que arriba pero sin utilizar una variable y directa,mente utilizando return para devolver el array nuevo con la propidad nueva
// const rta4 = orders.map(item => {
//     return {...item, tax: 0.19}
// })

console.log('original', orders);
console.log('rta3', rta3);