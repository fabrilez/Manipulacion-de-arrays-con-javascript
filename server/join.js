const elements = ["Fire", "Air", "Water", "Lan"];

let rtaFinal = '';
const separator = '--'

for (let index = 0; index < elements.length; index++) {
    const finalIteration = elements.length - 1;
    if (index === finalIteration) {
        rtaFinal = rtaFinal + elements[index];
    }else {
        rtaFinal = rtaFinal + elements[index] + separator;
    }
    
}



const rta = elements.join('--')
console.log("For: ", rtaFinal);
console.log("Join: ", rta);

const title = 'Curso de Manipulacion de Arrays';
const rta2 = title
.split(' ')
.join('-')
.toLowerCase()

console.log("Title: ", title);
console.log("URL with split and Join: ", rta2);
