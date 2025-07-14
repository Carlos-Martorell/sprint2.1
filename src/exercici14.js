"use strict";




const array1 = [1, 2, 3];
console.log("const array1 = [1, 2, 3];");
const array2 = [4, 5, 6];
console.log("const array2 = [4, 5, 6];");
const array3 = [...array1, ...array2];
console.log("const array3 = [...array1, ...array2];");
console.log("Array combinat:", array3);  




const sumaNum = (...numeros) => {
    return numeros.reduce((acc, num) => acc + num, 0);
};

console.log("const sumaNum = (...numeros) => { return numeros.reduce((acc, num) => acc + num, 0); }");
console.log("Suma de 1, 2, 3, 4, 5:", sumaNum(1, 2, 3, 4, 5));  






const objecte1 = { nom: "Carlos", edat: 30 };
const objecte2 = { ...objecte1};
objecte2.edat = 36;
console.log("Objecte 1:", objecte1); 
console.log("Objecte 2:", objecte2); 
console.log("Objecte 1 després de canviar objecte2:", objecte1);    





const arrayElements = [1, 2, 3, 4, 5, 6];
const [primerElement, segonElement, ...restaElements] = arrayElements;
console.log("Primer element:", primerElement); 
console.log("Segon element:", segonElement); 
console.log("Resta dels elements:", restaElements);





const funcioAmbTresArgs = (a, b, c) => {
    console.log(`Arguments: ${a}, ${b}, ${c}`);
};
const arrayArgs = [10, 20, 30];
funcioAmbTresArgs(...arrayArgs);






const objecteA = { a: 1, b: 2 };
const objecteB = { c: 3, d: 4 };
const objecteFusionat = { ...objecteA, ...objecteB };
console.log("Objecte fusionat:", objecteFusionat); 


