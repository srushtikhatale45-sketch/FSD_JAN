"use strict"
// var came first
// then let was introduced as var had some limitaions.

// ##### Var keyword ######
// #1.declare variable with var keyword.

var firstName = "Srushti";
// can store  information and declare variable

firstName = "Sakshi";
// can change existing value.

var firstName="Aarohi";
// can be declared with same variable and overwrite value.
console.log(firstName)

// #####let keyword####

// #.1declare variable with let keyword.

let first_name="Sakshi";
// can store information and declare variable

first_name="Ram";
// Can change existing value

// let first_name="Srushtik";
// Already has been declare error is shown
// cannot redeclare same variable
console.log(first_name)

// #######const keyword#######

// #.3declare constants
// whose values cannot be changed

const pi=3.14;
console.log(pi)
// can store information and declare constant

const pi1=3.14;
// pi1=3.15;
// cannot change the value of  constant variable.
console.log(pi)


// block scope vs Function Scope