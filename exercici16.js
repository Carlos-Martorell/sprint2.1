"use strict";


/*
Exercici 1.6: Array loops

Nivell 1
Exercici 1
forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];
*/
console.log("Exercici 1.6: Array loops");
console.log("Nivell 1");
console.log(" ## Exercici 1");
let noms = ['Anna', 'Bernat', 'Clara'];
console.log("let noms = ['Anna', 'Bernat', 'Clara'];");
noms.forEach(nom => {
    console.log(nom);
}); 

/*
exercici 2  
for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];
*/
console.log(" ## Exercici 2");
let nomsArray = ['Anna', 'Bernat', 'Clara'];
console.log("let nomsArray = ['Anna', 'Bernat', 'Clara'];");
for (let nom of nomsArray) {
    console.log(nom);
}       


/*
Exercici 3
filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui els números parells. let numeros = [1, 2, 3, 4, 5, 6];
.*/
console.log(" ## Exercici 3"); 
let nums = [1, 2, 3, 4, 5, 6];   
console.log("let numeros = [1, 2, 3, 4, 5, 6];");
let numerosPares = nums.filter(num => num % 2 === 0);
console.log("let numerosPares = numeros.filter(num => num % 2 === 0);");
console.log("Array de números parells:", numerosPares); // Output: [2, 4, 6]


/*nivell 2
 exercici 4
 for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.
*/
console.log("Nivell 2");
console.log(" ## Exercici 4");      

let obj = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' };
console.log("let obj = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' };");
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}      


/*
Exercici 5
for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5, llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6];
*/

console.log(" ## Exercici 5");

let numb = [1, 2, 3, 4, 5, 6];
console.log ( "for (let num of numb) {if (num === 5) {console.log('Número trobat:', num);break; }console.log(num);}");
console.log("let numb = [1, 2, 3, 4, 5, 6];");
for (let num of numb) {
    if (num === 5) {
        console.log("Número trobat:", num);
        break; 
    }
    console.log(num);
}
console.log("Bucle aturat al trobar el número 5."); 



/* nivell 3
/* exercici 6
for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array i la seva posició (index): let noms = ['Anna', 'Bernat', 'Clara']
*/
console.log("Nivell 3");
console.log(" ## Exercici 6");  
const nomsIndex = ['Anna', 'Bernat', 'Clara'];
console.log("let nomsIndex = ['Anna', 'Bernat', 'Clara'];");

console.log("for (let [index, nom] of nomsIndex.entries()) { console.log(`Index: ${index}, Nom: ${nom}`); }");
// Utilitzem entries() per obtenir l'índex i el valor de cada element
for (let [index, nom] of nomsIndex.entries()) {
    console.log(`Index: ${index}, Nom: ${nom}`);
}


console.log("/*--------------------------------*/");