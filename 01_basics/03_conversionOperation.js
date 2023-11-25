let score = "33"

let valueInNumber = String(score)  // this is how you can convert the value of a variable into number.

console.log(typeof score);

console.log(typeof valueInNumber);

console.log(valueInNumber);

let valueInString = String(valueInNumber)  // this is how you can convert the value of a variable into string.

console.log(valueInString);

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