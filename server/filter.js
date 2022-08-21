const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];

for (let i = 0; i < words.length; i++) {
    let item = words[i];
    if(item.length >= 6){
        newArray.push(item);
    }
}

console.log("Original", words);
console.log("NewArray", newArray);

const rta = words.filter(item => item.length >= 6);

console.log("Original", words);
console.log("RTA ", rta);


const foods = ['Burguer', 'Pizza', 'Chicken', 'Spagheti', 'Hot Dog', 'Cake'];

const foodsWithA = foods.filter(food => {
    return food.includes('a')
})

console.log(foods)
console.log(foodsWithA)

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
    {
        customerName: "Nicole",
        total: 240,
        delivered: true
    },
]; 

//en este ejemplo, en el array de objetos "orders" tenemos una propiedad llamada delivered, que cuenta con asignacion true o false para determinar si el pedido fue entregado o no, al usar filter y llamar a la propiedad en la arrow function, solo nos trae los que son "true" por defecto ya que filter devuelve un dato segun una condicional, y true o false ya son parte de una condicion.

// const delivered = orders.filter(item => item.delivered);
// console.log(delivered);

// const deliveredAndMoreThan100 = orders.filter(item => item.delivered && item.total >= 100);
// console.log(deliveredAndMoreThan100);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
}

console.log(search('Ni'))

