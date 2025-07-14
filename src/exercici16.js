"use strict";



let noms = ['Anna', 'Bernat', 'Clara'];
noms.forEach(nom => {
    console.log(nom);
}); 




let nomsArray = ['Anna', 'Bernat', 'Clara'];
for (let nom of nomsArray) {
    console.log(nom);
}       



let nums = [1, 2, 3, 4, 5, 6];   
let numerosPares = nums.filter(num => num % 2 === 0);
console.log("Array de números parells:", numerosPares); 




let obj = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' };
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}      




let numb = [1, 2, 3, 4, 5, 6];
for (let num of numb) {
    if (num === 5) {
        console.log("Número trobat:", num);
        break; 
    }
    console.log(num);
}







const nomsIndex = ['Anna', 'Bernat', 'Clara'];
for (let [index, nom] of nomsIndex.entries()) {
    console.log(`Index: ${index}, Nom: ${nom}`);
}
