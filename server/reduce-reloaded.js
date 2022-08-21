const items = [1,3,1,3, 3, 10, 2];

//utilizar reduce de manera a que podamos retornar un objeto que nos indique el numero de veces que se repite un valor en el array


//reduce((logica para reducir el array), estado inicial de la variable en donde va a terminar el resultado)
const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1
    } else {
        obj[item] = obj[item] + 1
    }
    return obj;
}, {});

console.log(rta);

const data = [
    {
        name: "Nicolas",
        level: "hight"
    },
    {
        name: "Andrea",
        level: "hight"
    },
    {
        name: "Zulema",
        level: "hight"
    },
    {
        name: "Santiago",
        level: "low"
    },
    {
        name: "Valentina",
        level: "medium"
    },
    {
        name: "Lucia",
        level: "hight"
    },

];

const rpa2 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1
    } else {
        obj[item] = obj[item] + 1
    }
    return obj;
}, {})

console.log(rpa2)
