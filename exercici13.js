"use strict";


/*
Exercici 1.3: Callbacks

Nivell 1

Exercici 1
Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.


*/

console.log("Exercici 1.3: Callbacks");
console.log("Nivell 1");
console.log(" ## Exercici 1");      

const processar = (nombre, callback) => {
    callback(nombre);
};
console.log("const processar = (nombre, callback) => { callback(nombre); }");
processar(5, (num) => {
    console.log(`El número processat és: ${num}`);
}); // Output: El número processat és: 5

/*
Exercici 2
Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.

*/
console.log(" ## Exercici 2");





console.log("/*--------------------------------*/");