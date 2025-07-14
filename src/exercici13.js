"use strict";



const processar = (nombre, callback) => {
    callback(nombre);
};

const callback = (num) => {
    console.log(`El número processat és: ${num}`);
};
processar(5, callback);





const calculadora = (num1, num2, callback) => {
    return callback(num1, num2);
};
const suma = (a, b) => a + b;
const resultatSuma = "El resultat de la suma és: " + calculadora(10, 5, suma);
console.log(resultatSuma); 





const esperarISaludar = (nom, callback) => {
    setTimeout(() => {
        callback(nom);
    }, 2000);
};
const saludar = (nom) => {
    console.log(`Hola, ${nom}!`);
};
esperarISaludar('Carlos', saludar); 






const processarElements = (array, callback) =>  {
    array.forEach(element => {
        callback(element);
    });
}   

const imprimirElement = (element) => {
    console.log(`Element processat: ${element}`);
};
processarElements([1, 2, 3, 4], imprimirElement);   





const processarCadena = (cadena, callback) => {
    const cadenaMajuscules = cadena.toUpperCase();
    callback(cadenaMajuscules);
};
const imprimirCadena = (cadena) => {
    console.log(`Cadena processada: ${cadena}`);
};
processarCadena('hola món', imprimirCadena);

