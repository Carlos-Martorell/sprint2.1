"use strict";


/*
Exercici 1.2: Operador ternari

Nivell 1

Exercici 1
Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'. */
console.log("Exercici 1.2: Operador ternari");
console.log("Nivell 1");
console.log(" ## Exercici 1");
const potConduir = (edat) => {
    return edat >= 18 ? "Pots conduir" : "No pots conduir";
};
console.log("const potConduir = (edat) => { return edat >= 18 ? 'Pots conduir' : 'No pots conduir'; }");
console.log("edat = 20");
console.log(potConduir(20));
console.log("edat = 16");
console.log(potConduir(16));

/*exercici 2
Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'. */
console.log(" ## Exercici 2");

const num1 = 12;
console.log("num1 = 12;");
const num2 = 8;
console.log("num2 = 8;");
const resultat = num1 > num2 ? 'num1 és més gran' : 'num2 és més gran';
console.log(resultat); 
console.log("const resultat = num1 > num2 ? 'num1 és més gran' : 'num2 és més gran';");


/*
Nivell 2
exercici 3
Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.

Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.*/
console.log("Nivell 2");
console.log(" ## Exercici 3");
const numero = -5;

const tipus = numero > 0
  ? 'Positiu'
  : numero < 0
    ? 'Negatiu'
    : 'Zero';

console.log("const tipus = numero > 0 ? 'Positiu' : numero < 0 ? 'Negatiu' : 'Zero';");
console.log("numero = -5;");
console.log(`El número és: ${tipus}`); 

const trobarMaxim = (a, b, c) => {
    return a > b && a > c ? a : b > c ? b : c;
}
console.log("const trobarMaxim = (a, b, c) => { return a > b && a > c ? a : b > c ? b : c; }");
console.log("trobarMaxim(5, 10, 3) = " +
    trobarMaxim(5, 10, 3)); // Output: 10
console.log("trobarMaxim(7, 2, 9) = " +
    trobarMaxim(7, 2, 9)); // Output: 9

/*
Nivell 3
exercici 4
Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.*/
console.log("Nivell 3");
console.log(" ## Exercici 4");

const parOImpar = (numeros) => {
    for (let i = 0; i < numeros.length; i++) {
      const resultat = numeros[i] % 2 === 0 ? 'parell' : 'imparell';
      console.log(`El número ${numeros[i]} és ${resultat}`);
    }
  };

console.log("const parOImpar = (numeros) => { for (let i = 0; i < numeros.length; i++) { const resultat = numeros[i] % 2 === 0 ? 'parell' : 'imparell'; console.log(`El número ${numeros[i]} és ${resultat}`); } };");
console.log("Llista de números: [1, 2, 3, 4, 5, 6]");
console.log("Resultats:");
// Crida a la funció amb un array de números
parOImpar([1, 2, 3, 4, 5, 6]);

console.log("/*--------------------------------*/");