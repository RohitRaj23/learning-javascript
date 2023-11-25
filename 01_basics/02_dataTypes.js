"use stricts"; // treat all JS code as newer version 

// alert("hello");   // this will not execute because we are running it on node not browser.

// Data Types in JS -->

let name  = "Rohit"
let age  = 22
let isLoggedIn = false

// Some of the data types are -->
/* (primitive data types)
number => 2 to the power 53
bigint => use to store large numbers 
string => ""
boolean => true/false
null => standalone value(it uses when something is not present or empty)
undefined => (it shows when something is not defined)
symbol => used it for uniqueness

(non-primitive data types)
object = it stores the data in the form of key-value pairs

*/

console.log(name);
console.log(age);
console.log(isLoggedIn);

// "typeof()" is a function which returns the type of a variable .
console.log(typeof name);  // it returns "string".
console.log(typeof(age));  //also a way to use that "typeof" function and this time it returns "number". 
console.log(typeof isLoggedIn);  // it returns "boolean"
console.log(typeof null);  // it returns "object" 
console.log(typeof undefined);  // it returns "undefined"


// At the end, two documentations to follow for JS -->
// 1) mdn docs (https://developer.mozilla.org/en-US/docs/Web/JavaScript)
// 2) ECMA javascript standards (https://tc39.es/ecma262/)