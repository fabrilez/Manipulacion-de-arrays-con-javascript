const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const rtaSlice = animals.slice(0, 5);
console.log("Slice: ", rtaSlice)

const elements = [1,1,2,2,3,3]
const anotherElements = [4,4,5,5,6,6]
const newArray = [...elements];
for (let index = 0; index < anotherElements.length; index++) {
    const element = anotherElements[index];
    newArray.push(element)
}



const rta = elements.concat(anotherElements);
console.log("For: ", newArray)
console.log('Concat: ', rta)

const operator = [...elements, ...anotherElements]
console.log("operator:", operator)
