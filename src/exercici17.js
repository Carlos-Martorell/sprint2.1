"use strict";



const promesaHolaMundo = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hola, món');
    }, 2000);
}); 



promesaHolaMundo.then(resultat => {
        console.log(resultat);
    })
    



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




async function mostraSalutacio() {
    const resultat = await promesaHolaMundo;
    console.log(resultat);
  }
mostraSalutacio(); 




async function mostraSalutacioAmbError() {
    try {
        const resultat = await promesaHolaMundo;
        console.log(resultat);
    } catch (error) {
        console.error('Error:', error);
    }
}       





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
Promise.all([promesaDosSegons, promesaTresSegons])
    .then(resultats => {
        console.log("Totes les promeses s'han resolt:"),
        console.log(resultats)
    })
    .catch(error => {
        console.error('Error en alguna de les promeses:', error);
    }); 

