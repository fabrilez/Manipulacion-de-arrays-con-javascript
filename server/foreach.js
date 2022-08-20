const letters = ['a', 'b', 'c'];

for(let i = 0; i < letters.length; i++){
    console.log('For ' + letters[i]);
}

letters.forEach(item => console.log('foreach ' + item))