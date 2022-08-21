const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// const productIndex = products.findIndex(item => item.id === '🍔');
// if(productIndex !== -1){
//     myProducts.push(products[productIndex]);
//     products.splice(productIndex, 1);
// }

// console.log("products", products);
// console.log("myProducts", myProducts);
// console.log("-".repeat(10));

const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicioso'
    }
}

const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes,
}

console.log(productsV2);

//Reto 1
//Eliminar un elemento sin borrarlo del la lista original.

const products2 = products.filter(item => item.id !== '🍔')
console.log('nuevo array sin modificar el original', products2)

/*Reto 2
Modificar una nueva lista sin modificar la original. */

const update2 = products.map(item => {
    if (item.id === update.id) {
      return {
        ...item,
        ...update.changes,
      }
    }
    return {...item};
  })

  console.log('update sin modificar el original', update2);