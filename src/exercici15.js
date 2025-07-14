"use strict";


const numeros = [1, 2, 3, 4];
const quadrats = numeros.map(num => num * num);
console.log("Array de quadrats:", quadrats);     




const numerosArray = [1, 2, 3, 4];
const numerosParella = numerosArray.filter(num => num % 2 === 0);
console.log("Array de números parells:", numerosParella); 




const numerosFind = [1, 10, 8, 11];
console.log("const numerosFind = [1, 10, 8, 11];");
const primerMajorDe10 = numerosFind.find(num => num > 10);
console.log("Primer número major a 10:", primerMajorDe10); 



const numerosReduce = [13, 7, 8, 21];       
const sumaTotal = numerosReduce.reduce((acc, num) => acc + num, 0);
console.log("Suma total dels números:", sumaTotal); 





const numerosArray2 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
const resultatArr = numerosArray2.filter(num => num >= 10).map(num => num * 2).reduce((acc, num) => acc + num, 0);
console.log("Resultat de la suma:", resultatArr); // Output: 88





const numerosArray3 = [11, 12, 13, 14];

const totsMajorsQue10 = numerosArray3.every(num => num > 10);
console.log("Tots els números són majors que 10:", totsMajorsQue10);
const algunsMajorsQue10 = numerosArray3.some(num => num > 10);      
console.log("Alguns números són majors que 10:", algunsMajorsQue10);  


