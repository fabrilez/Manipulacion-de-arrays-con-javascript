//devuleve un objeto con los numeros de veces que se repite un rango de valores, del 1 al 5, del 6 al 8 y de 9 al 10, cuantas veces aparecen los numeros en esos rangos.

const elements = [1,2,8,5,1,1,6,8,9,5,9,10]

const rpa = elements.reduce((obj, item) => {
    if (item >= 1 && item <= 5) {
        obj["1-5"] += 1;
    }else if(item >= 6 && item <= 8){
        obj["6-8"] += 1;
    }else if(item >= 9 && item <= 10){
        obj["9-10"] += 1;
    }
    return obj;
}, {"1-5": 0, "6-8": 0, "9-10": 0})

console.log(rpa);

