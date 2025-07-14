"use strict";


console.log("Hello, Sprint 2.1!");


const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8



const randomNumber = () => Math.floor(Math.random() * 101);
console.log(randomNumber()); 




class Person {
    constructor(name) {
        this.name = name;
    }

    greet = () => {
        console.log(`Hola, ${this.name}`);
    }
}
const person = new Person("Carlos");
person.greet();





const printNumbers = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        const print = () => console.log(`Número: ${numbers[i]}`);
        print();
    }
}
printNumbers([1, 2, 3, 4, 5, 6]); 




const delayedMessage = () => {
    setTimeout(() => {
      console.log("Hola! Han passat 3 segons 🕒");
    }, 3000);
  };
  
  delayedMessage();

console.log("/*--------------------------------*/");
