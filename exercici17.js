"use strict";


/*
Exercici 1.7: Promises & Async/Await

Nivell 1
Exercici 1
Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.
*/
console.log("Exercici 1.7: Promises & Async/Await");
console.log("Nivell 1");
console.log(" ## Exercici 1");

const promesaHolaMundo = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hola, món');
    }, 2000);
}); 
console.log("const promesaHolaMundo = new Promise((resolve) => { setTimeout(() => { resolve('Hola, món'); }, 2000); });");



/*
exercici 2  
Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.
*/
console.log(" ## Exercici 2");

promesaHolaMundo.then(resultat => {
        console.log(resultat);
    })
    
console.log("promesaHolaMundo.then(resultat => { console.log(resultat); }).catch(error => { console.error('Error:', error); });");  
      


/*
Exercici 3
Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.
.*/
console.log(" ## Exercici 3"); 

const promesaInput = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input === 'Hola') {
                resolve('Entrada correcta: Hola');
            } else {
                reject('Entrada incorrecta');
            }
        }, 2000);
    });
};
console.log("const promesaInput = (input) => { return new Promise((resolve, reject) => { setTimeout(() => { if (input === 'Hola') { resolve('Entrada correcta: Hola'); } else { reject('Entrada incorrecta'); } }, 2000); });");    



/* exercici 4
Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.
*/
console.log(" ## Exercici 4");      

async function mostraSalutacio() {
    const resultat = await promesaHolaMundo;
    console.log(resultat);
  }
console.log("async function mostraSalutacio() { const resultat = await promesaHolaMundo; console.log(resultat); }");
mostraSalutacio(); // Crida a la funció per mostrar el resultat de la promesa.


/*nivell 2
Exercici 5
Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.
*/

console.log("Nivell 2");
console.log(" ## Exercici 5");

async function mostraSalutacioAmbError() {
    try {
        const resultat = await promesaHolaMundo;
        console.log(resultat);
    } catch (error) {
        console.error('Error:', error);
    }
}       



/* nivell 3
/* exercici 6
Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.
*/
console.log("Nivell 3");
console.log(" ## Exercici 6");  

const promesaDosSegons = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promesa de 2 segons resolta');
    }, 2000);
});
const promesaTresSegons = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promesa de 3 segons resolta');
    }, 3000);
});     
console.log("const promesaDosSegons = new Promise((resolve) => { setTimeout(() => { resolve('Promesa de 2 segons resolta'); }, 2000); });");
console.log("const promesaTresSegons = new Promise((resolve) => { setTimeout(() => { resolve('Promesa de 3 segons resolta'); }, 3000); });");
Promise.all([promesaDosSegons, promesaTresSegons])
    .then(resultats => {
        console.log("Totes les promeses s'han resolt:"),
        console.log(resultats)
    })
    .catch(error => {
        console.error('Error en alguna de les promeses:', error);
    }); 


console.log("/*--------------------------------*/");