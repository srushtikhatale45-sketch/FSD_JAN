// template String

let age = 21;
let first_name= "Srushti";

// "my name is Srushti and my age is 21 "

let about_me = "my name is "+first_name+ " and my age is " + age;
console.log(about_me);

// ---------------------------------------------------
// other method
// template strings 

let about =`my name is ${first_name} and my age is ${age}`;
console.log(about);

// let a = "Good";
// let b = "Day";
// let greet = `Have a ${a} ${b}`
// console.log(greet);
/*
In JavaScript, the template string implements the string 
interpolation. A template string is defined by wrapping 
a sequence of characters into a pair of backticks 
`I'm template string` . 
The template string placeholders have the format ${expression} , 
for example `The number is ${number}` .

*/
/*
let name1 = "Srushti";
let name2 = "Khatale";
console.log(`My Name is ${name1} and sirname is ${name2}`);
*/