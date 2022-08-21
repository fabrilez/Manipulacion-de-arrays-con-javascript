const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
const numbers = [1, 30, 4, 21, 100000];
/*
¿Por qué a - b o b - a?
La función que le enviamos a sort es la función compareFn donde:

Si compareFn(a, b) devuelve un valor mayor que 0, ordena b antes a.
Si compareFn(a, b) devuelve un valor menor que 0, ordena a antes b.
Si compareFn(a, b) devuelve 0 a y b se consideran iguales.

*/
numbers.sort((a, b) => a - b);
console.log(numbers);
const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];

words.sort((a, b) => a - b);

//en caso de que trabajemos en browers con una version no compatible con sort actual, debemos de hacer asi el algoritmo: 
//words.sort((a, b) => a.localeCompare(b));
console.log(words);

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
//orders.sort((a,b) => a.total - b.total); ascendente
orders.sort((a,b) => b.total - a.total);
console.log(orders);


//reto 

const orders2 = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
      date: new Date (2021, 3, 8, 4),
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
      date: new Date (2021, 9, 12, 3),
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
      date: new Date (2021, 8, 2, 2),
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
      date: new Date(2021, 1, 1, 9, 30),
    },
  ];
  const newOrders = orders2.sort((a,b) => a.date - b.date);
  console.log(newOrders);
  console.log(orders2);