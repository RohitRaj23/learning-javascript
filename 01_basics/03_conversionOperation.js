let score = "33"

let valueInNumber = String(score)  // this is how you can convert the value of a variable into number.

// console.log(typeof score);

// console.log(typeof valueInNumber);

// console.log(valueInNumber);

let valueInString = String(valueInNumber)  // this is how you can convert the value of a variable into string.

// console.log(valueInString);

// so the conversions are below  -->
/*
"33" => 33 (String to Number) 
55 => "55" (Number to string) 
"45hello" => NaN (not a number)
null => 0 in return
undefined => NaN in return
true => 1 in return (boolean to number)
false => 0 in return (boolean to number)
true => "true" (boolean to String)
false => "false" (boolean to String)
1 => true (number to boolean)
0 => false (number to boolean)
"" => false (empty string to boolean)
"rohit" => true (string to boolean)
*/



// ******************************************* Operations *************************************
let value = 3;
let negvalue = -value;
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "Rohit "
let str2 = "Raj"
let str3 = str1 + str2
// console.log(str3)

// console.log("2" + 2)  // if string comes first the all the expression will be typecasted into string
// console.log(2 + 2 + "2" + 5)   //if a number comes first then it will perform the operations until 
//                                 //a string triggered then the remaining will typecasted into string.
// console.log("2" + 2 + 2)      

// console.log(+true) // here the "+" sign will used for type casting
// console.log(+"hello")  //result will be same when we typecast into string
// console.log(+"")  // it will convert an empty string into number


let rank = 100
// console.log(++rank)
// rank++
// console.log(rank)
// ++rank
rank++
// console.log(y);
console.log(rank);


let a = 10
let b = ++a
console.log(a);
console.log(b);

// link to study
// https://tc39.es/ecma262/#sec-testing-and-comparison-operations