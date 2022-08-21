//aplanar una matriz sin el metodo flat

const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

function profundidad(lista){
    let newArray = [];
    if(typeof lista != "object"){
        return [lista];
    }
    lista.forEach(element => {
        newArray = [...newArray, ...profundidad(element)]
    });
    return newArray;
}

console.log(profundidad(matriz));

const matriz2 = [
    0,
    [1,2,3],
    [4,5,[6,7,8,[9,10]]],
    [[11,12,[13,14],15],16]
]

function aplanarMatriz(matriz){
    let array = [];
    for(element of matriz){
        if(Array.isArray(element)){
            array = array.concat(aplanarMatriz(element))
        }else{
            array.push(element)
        }
    }
    return array;
}

console.log(aplanarMatriz(matriz2))


//aplanar con el metodo float: 
const rta = matriz.flat(3);
const rta2 = matriz2.flat(6);

console.log(rta)
console.log(rta2)