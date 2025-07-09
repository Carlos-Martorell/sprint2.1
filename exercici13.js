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

const callback = (num) => {
    console.log(`El número processat és: ${num}`);
};

console.log("const processar = (nombre, callback) => { callback(nombre); }");
console.log("const callback = (num) => { console.log(`El número processat és: ${num}`); }");
processar(5, callback);




/*
Exercici 2
Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.

*/
console.log(" ## Exercici 2");
const calculadora = (num1, num2, callback) => {
    return callback(num1, num2);
};
const suma = (a, b) => a + b;
console.log("const calculadora = (num1, num2, callback) => { return callback(num1, num2); }");
console.log("const suma = (a, b) => a + b;");
console.log("Cridant a la funció calculadora valors a= 10, b = 5, i funció suma");
console.log("calculadora(10, 5, suma);");
const resultatSuma = "El resultat de la suma és: " + calculadora(10, 5, suma);
console.log(resultatSuma); 


/*nivell 2
Exercici 3
Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.*/

console.log("Nivell 2");
console.log(" ## Exercici 3");  

const esperarISaludar = (nom, callback) => {
    setTimeout(() => {
        callback(nom);
    }, 2000);
};
const saludar = (nom) => {
    console.log(`Hola, ${nom}!`);
};
console.log("const esperarISaludar = (nom, callback) => { setTimeout(() => { callback(nom); }, 2000); }");
console.log("const saludar = (nom) => { console.log(`Hola, ${nom}!`); }");
console.log("Cridant a la funció esperarISaludar amb nom = 'Carlos'");
console.log("esperarISaludar('Carlos', saludar);");
esperarISaludar('Carlos', saludar); 

/* exercici 4
Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array.*/

console.log(" ## Exercici 4");

const processarElements = (array, callback) =>  {
    array.forEach(element => {
        callback(element);
    });
}   

const imprimirElement = (element) => {
    console.log(`Element processat: ${element}`);
};
console.log("const processarElements = (array, callback) => { array.forEach(element => { callback(element); }); }");
console.log("const imprimirElement = (element) => { console.log(`Element processat: ${element}`); }");
console.log("Cridant a la funció processarElements amb un array [1, 2, 3, 4] i la funció imprimirElement");
console.log("processarElements([1, 2, 3, 4], imprimirElement);");
processarElements([1, 2, 3, 4], imprimirElement);   


/* nivell 3
Exercici 5  
Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.*/

console.log("Nivell 3");
console.log(" ## Exercici 5");  
const processarCadena = (cadena, callback) => {
    const cadenaMajuscules = cadena.toUpperCase();
    callback(cadenaMajuscules);
};
const imprimirCadena = (cadena) => {
    console.log(`Cadena processada: ${cadena}`);
};
console.log("const processarCadena = (cadena, callback) => { const cadenaMajuscules = cadena.toUpperCase(); callback(cadenaMajuscules); }");    
console.log("const imprimirCadena = (cadena) => { console.log(`Cadena processada: ${cadena}`); }");
console.log("Cridant a la funció processarCadena amb la cadena 'hola món' i la funció imprimirCadena");
console.log("processarCadena('hola món', imprimirCadena);");
processarCadena('hola món', imprimirCadena);





console.log("/*--------------------------------*/");