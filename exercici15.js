"use strict";


/*
Exercici 1.5: Array transformations

Nivell 1
Exercici 1
Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.
*/
console.log("Exercici 1.5: Array transformations");
console.log("Nivell 1");
console.log(" ## Exercici 1");
const numeros = [1, 2, 3, 4];
console.log("const numeros = [1, 2, 3, 4];");
const quadrats = numeros.map(num => num * num);
console.log("const quadrats = numeros.map(num => num * num);");
console.log("Array de quadrats:", quadrats); // Output: [1, 4, 9, 16]       


/*
exercici 2  
Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.*/
console.log(" ## Exercici 2");

const numerosArray = [1, 2, 3, 4];
console.log("const numerosArray = [1, 2, 3, 4];");
const numerosParella = numerosArray.filter(num => num % 2 === 0);
console.log("const numerosParella = numerosArray.filter(num => num % 2 === 0);");
console.log("Array de números parells:", numerosParella); // Output: [2, 4] 



/*
Exercici 3
Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.*/
console.log(" ## Exercici 3");  
const numerosFind = [1, 10, 8, 11];
console.log("const numerosFind = [1, 10, 8, 11];");
const primerMajorDe10 = numerosFind.find(num => num > 10);
console.log("const primerMajorDe10 = numerosFind.find(num => num > 10);");
console.log("Primer número major a 10:", primerMajorDe10); // Output: 11


/* exercici 4
Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.*/
console.log(" ## Exercici 4");  
const numerosReduce = [13, 7, 8, 21];       
console.log("const numerosReduce = [13, 7, 8, 21];");
const sumaTotal = numerosReduce.reduce((acc, num) => acc + num, 0);
console.log("const sumaTotal = numerosReduce.reduce((acc, num) => acc + num, 0);");
console.log("Suma total dels números:", sumaTotal); // Output:


/*nivell 2
Exercici 5
Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:

- Filtra els nombres majors o iguals a 10.

- Multiplica cada nombre filtrat per 2.

- Calcula la suma dels nombres filtrats i multiplicats per 2.

- La funció ha de retornar el resultat de la suma..*/

console.log("Nivell 2");
console.log(" ## Exercici 5");
const numerosArray2 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
console.log("const numerosArray2 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];");
const resultatArr = numerosArray2.filter(num => num >= 10).map(num => num * 2).reduce((acc, num) => acc + num, 0);
console.log("const resultatArr = numerosArray2.filter(num => num >= 10).map(num => num * 2).reduce((acc, num) => acc + num, 0);");
console.log("Resultat de la suma:", resultatArr); // Output: 88



/* nivell 3
/* exercici 6
Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament.*/

console.log("Nivell 3");
console.log(" ## Exercici 6");
const numerosArray3 = [11, 12, 13, 14];
console.log("const numerosArray3 = [11, 12, 13, 14];");
const totsMajorsQue10 = numerosArray3.every(num => num > 10);
console.log("const totsMajorsQue10 = numerosArray3.every(num => num > 10);");
console.log("Tots els números són majors que 10:", totsMajorsQue10); // Output: true
const algunsMajorsQue10 = numerosArray3.some(num => num > 10);      
console.log("const algunsMajorsQue10 = numerosArray3.some(num => num > 10);");
console.log("Alguns números són majors que 10:", algunsMajorsQue10); // Output: true    



console.log("/*--------------------------------*/");