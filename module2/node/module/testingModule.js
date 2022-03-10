
// this is to show we can use object which is there in calculator.js , in this file

let calculator=require("./calculator"); // to import the object from calculator.js
console.log(calculator);  // gives object which is in calculator.js


console.log(calculator.addition(5,10));
console.log(calculator.subtraction(15,10));
console.log(calculator.multiplication(5,10));
console.log(calculator.division(500,10));