// To declare a constant in js -->
const accountId = 12345

// In JS, there two ways to declare a variable -->
let accountEmail = "rohitraj@gmail.com"
var accountPassword = "12345"   // prefer not to use var, because of issue of block scope and function scope. 

accountCity = "kanpur"   // we can also declare a variable like this, but it is not a good practice.

let accountState; //it is allowed to only declare a variable, in case it stores "undefined" inside

// accountId = 2   //we cannot modify a constant (not allowed)

accountEmail = "aditya@gmail.com"
accountPassword = "23456"
accountCity = "lucknow"

console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);

// A another way to take the output of multiple variables at a time in the form of tables
console.table([accountEmail, accountPassword, accountCity, accountState])
