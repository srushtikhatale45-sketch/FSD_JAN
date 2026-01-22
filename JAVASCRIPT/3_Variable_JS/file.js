"use strict";
// console.log("Hello World");
// ##########Introduction to variables#########

// Declare a variable
var firstname;

// 1.Variables can stores some information
firstname="Srushti";

// 2.We can use that information later
console.log(firstname)

// 3.We can Change that information as well.
firstname="Sakshi";
console.log(firstname)

// Javascript is Case sensitive
// use strict mode to avoid the errors and case sensitive error issues.

// ####Rules for naming variables#####

// #1.You cannot start with number
// example:
// var 1value = 10; (ivalid)
var value1 = 10;
// console.log(value1);
// console.log(value1/2);  //division
// console.log(value1*2);  //Multiply
// console.log(value1+2);  //addition
// console.log(value1-2);  //Substract
// console.log(value1**2); //10^2--->10 power 2->100
// console.log(value1**0.5);//10 root 2 ,,-->0.5=1/2

// 2.you can use only underscore_ or  ($) dollar symbol from special symbol only this are valid.

// firstname_="abc";//error not allowed at end
// _firstname="abc";//error not allowed at start

// firstname$="abcd"; //error not allowed at end
// $firstname="abcd";//error not allowed at start

// #3.You can use the _underscore inbetween space for varisable declaration.
// first Name="Srushtis";//error not allowed 

// Instead we can do is:
// var first_name = "Srushtis";//snake case writing
// var firstName="Srushtik"; //Camel case writing

// #####Js Naming Convention for Variables#####

// Naming Convention:
// -start with small letter and use  Camelcaase
// console.log(firstName)