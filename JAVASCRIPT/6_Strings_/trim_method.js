// ############# Useful String Methods ################


// #1. Trim Method.

/* 
The trim() method in Java String is a built-in 
function that eliminates leading and trailing spaces.
*/
// --------------------------------------------------------------
let firstName ="              Srushti"
// Spaces are even counted in String.length
console.log(firstName.length);//21
firstName.trim();
console.log(firstName.length);//21
// No Change
// As strings are immutable the output will be new string
// in string constant  pool;
// we need to make new variable to assign that value or it will
// Garbage collected later.
 
// --------------------------------------------------------------
// Storing in completely new Variable
let newString = firstName.trim();
console.log(newString);

console.log(newString.length);//7
console.log(firstName.length);//21
//--------------------------------------------------------------
// Storing in old Variable itself and modifying it
firstName = firstName.trim();
console.log(newString);

console.log(newString.length);//7
console.log(firstName.length);//7

let name= "              ancdkhyg";
name = name.trim();
console.log(name.length);