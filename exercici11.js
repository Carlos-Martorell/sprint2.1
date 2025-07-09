"use strict";

// This is a simple JavaScript file to test the HTML document
console.log("Hello, Sprint 2.1!");

/*Exercici 1.1: Arrow functions

Nivell 1
*/
console.log("Exercici 1.1: Arrow functions");
console.log("Nivell 1");
console.log(" ## Exercici 1");
/*
Exercici 1
Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.
*/

const add = (a, b) => a + b;
console.log("const add = (a, b) => a + b;")
console.log(add(5, 3)); // Output: 8

console.log(" ## Exercici 2");
/*
Exercici 2
Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.
*/

const randomNumber = () => Math.floor(Math.random() * 101);
console.log("const randomNumber = () => Math.floor(Math.random() * 101);");
console.log(randomNumber()); // Output: Un número aleatori entre 0 i 100

console.log(" ## Exercici 3");
/*
Exercici 3
Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});.
*/

class Person {
    constructor(name) {
        this.name = name;
    }

    greet = () => {
        console.log(`Hola, ${this.name}`);
    }
}
const person = new Person("Carlos");
console.log("class Person { constructor(name) { this.name = name; } greet = () => { console.log(`Hola, ${this.name}`); } }");
person.greet(); // Output: Hola, Carlos     
/*
Nivell 2
Exercici 4
*/
console.log("Nivell 2");
console.log(" ## Exercici 4");
/*Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.
*/

const printNumbers = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        const print = () => console.log(`Número: ${numbers[i]}`);
        print();
    }
}
console.log("const printNumbers = (numbers) => { for (let i = 0; i < numbers.length; i++) { console.log(`Número: ${numbers[i]}`); } }");
printNumbers([1, 2, 3, 4, 5, 6]); 

/*
Nivell 3
Exercici 5
Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons.
*/
console.log("Nivell 3");
console.log(" ## Exercici 5");

const delayedMessage = () => {
    setTimeout(() => {
      console.log("Hola! Han passat 3 segons 🕒");
    }, 3000);
  };
  
  delayedMessage();
console.log("const delayedMessage = () => { setTimeout(() => { console.log('Hola! Han passat 3 segons 🕒'); }, 3000); };");

console.log("/*--------------------------------*/");
