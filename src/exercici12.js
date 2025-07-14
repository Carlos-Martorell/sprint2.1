"use strict";


const potConduir = (edat) => {
    return edat >= 18 ? "Pots conduir" : "No pots conduir";
};
console.log(potConduir(20));
console.log(potConduir(16));




const num1 = 12;
const num2 = 8;
const resultat = num1 > num2 ? 'num1 és més gran' : 'num2 és més gran';
console.log(resultat); 




const numero = -5;
const tipus = numero > 0
  ? 'Positiu'
  : numero < 0
    ? 'Negatiu'
    : 'Zero';
console.log(`El número és: ${tipus}`); 




const trobarMaxim = (a, b, c) => {
    return a > b && a > c ? a : b > c ? b : c;
}
trobarMaxim(5, 10, 3);
console.log("trobarMaxim(7, 2, 9) = " +
    trobarMaxim(7, 2, 9));




const parOImpar = (numeros) => {
    for (let i = 0; i < numeros.length; i++) {
      const resultat = numeros[i] % 2 === 0 ? 'parell' : 'imparell';
      console.log(`El número ${numeros[i]} és ${resultat}`);
    }
  };
parOImpar([1, 2, 3, 4, 5, 6]);

