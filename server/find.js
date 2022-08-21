//find y findIndex

const numbers = [5,30,32,4,5,6,50];


let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element === 30){
        rta = element;
    }
}

const rta2 = numbers.find(item => item === 30);


console.log("For: ", rta)
console.log("Find: ", rta2)

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
];

const rta3 = products.find(item => item.id === '🌭');
const rta4 = products.findIndex(item => item.id === '🌭');
console.log("Find", rta3);
console.log("FindIndex", rta4);

/*
Para tener en cuenta.
Find si no encuentra ninguna coincidencia, nos devuelve UNDEFINED.
FindIndex, nos devuelve -1 si no encuentra un elemento que concida. 

*/

