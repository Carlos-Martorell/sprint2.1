"use strict";


/*
Exercici 1.4: Rest & Spread operators

Nivell 1

Exercici 1
Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.

*/
console.log("Exercici 1.4: Rest & Spread operators");
console.log("Nivell 1");
console.log(" ## Exercici 1");

const array1 = [1, 2, 3];
console.log("const array1 = [1, 2, 3];");
const array2 = [4, 5, 6];
console.log("const array2 = [4, 5, 6];");
const array3 = [...array1, ...array2];
console.log("const array3 = [...array1, ...array2];");
console.log("Array combinat:", array3); // Output: [1, 2, 3, 4, 5, 6]   

/*
exercici 2  
Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.*/
console.log(" ## Exercici 2");

const sumaNum = (...numeros) => {
    return numeros.reduce((acc, num) => acc + num, 0);
};

console.log("const sumaNum = (...numeros) => { return numeros.reduce((acc, num) => acc + num, 0); }");
console.log("Suma de 1, 2, 3, 4, 5:", sumaNum(1, 2, 3, 4, 5)); // Output: 15   


/*nivell 2
Exercici 3
Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.*/
console.log("Nivell 2");
console.log(" ## Exercici 3");

const objecte1 = { nom: "Carlos", edat: 30 };
console.log("const objecte1 = { nom: 'Carlos', edat: 30 };");
const objecte2 = { ...objecte1};
objecte2.edat = 36;
console.log("const objecte2 = { ...objecte1};");
console.log("objecte2.edat = 36;");
console.log("Objecte 1:", objecte1); // Output: { nom: 'Carlos', edat: 30 }
console.log("Objecte 2:", objecte2); // Output: { nom: 'Carlos', edat: 36 }
console.log("Comprova que objecte1 no ha canviat:");
console.log("Objecte 1 després de canviar objecte2:", objecte1);    


/* exercici 4
Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.*/
console.log(" ## Exercici 4");  

const arrayElements = [1, 2, 3, 4, 5, 6];
console.log("const arrayElements = [1, 2, 3, 4, 5, 6];");
const [primerElement, segonElement, ...restaElements] = arrayElements;
console.log("const [primerElement, segonElement, ...restaElements] = arrayElements;");
console.log("Primer element:", primerElement); // Output: 1
console.log("Segon element:", segonElement); // Output: 2
console.log("Resta dels elements:", restaElements); // Output: [3, 4, 5, 6]



/* nivell 3
Exercici 5
Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.*/
console.log("Nivell 3");
console.log(" ## Exercici 5");

const funcioAmbTresArgs = (a, b, c) => {
    console.log(`Arguments: ${a}, ${b}, ${c}`);
};
console.log("const funcioAmbTresArgs = (a, b, c) => { console.log(`Arguments: ${a}, ${b}, ${c}`); };");
const arrayArgs = [10, 20, 30];
console.log("const arrayArgs = [10, 20, 30];");
console.log("Cridant a la funció amb l'array utilitzant l'operador spread:");
console.log("funcioAmbTresArgs(...arrayArgs);"); // Output: Arguments: 10, 20, 30       
funcioAmbTresArgs(...arrayArgs);





/* exercici 6
Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.*/

console.log(" ## Exercici 6");
const objecteA = { a: 1, b: 2 };
console.log("const objecteA = { a: 1, b: 2 };");
const objecteB = { c: 3, d: 4 };
console.log("const objecteB = { c: 3, d: 4 };");
const objecteFusionat = { ...objecteA, ...objecteB };
console.log("const objecteFusionat = { ...objecteA, ...objecteB };");
console.log("Objecte fusionat:", objecteFusionat); 






console.log("/*--------------------------------*/");