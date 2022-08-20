const letters = ["a", "b", "c"];

const newArray = letters.map(item => item, "++");
console.log("old", letters);
console.log("new", newArray);