const totals = [1,2,3,4];

let sum= 0;

for(i = 0; i < totals.length; i++){
    const item = totals[i];
    sum = sum + item;
}
console.log("With For: ", sum);

//.reduce recibe dos argumentos, el estado inicial de la variable acumuladora, y la logica/funcion que se debe de implementar para ir sumando los datos en el acumulador, en este caso nuestro arrow function y el estado inicial 

const rta = totals.reduce((sum, item) => sum + item, 0);
console.log("With .reduce: ", rta);

/*   
Prueba de escritorio
const rta = totals.reduce((sum, item) => sum + item, 0);
const totals = [1,2,3,4];
rta = 0;
sum = 0;
item = 0;
iteration = 0;

iteration|sum|item|rta
    1     0  +  1 =  1
    2     1  +  2 =  3
    3     3  +  3 =  6
    4     6  +  4 =  10
------------------------
sum = 10;
rta = sum;

*/ 