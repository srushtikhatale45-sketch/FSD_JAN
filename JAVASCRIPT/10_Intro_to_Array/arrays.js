//######### Intro to Arrays #########
// Arrays is Reference Type
// Array is ordered collection of data or items.
// ---------------------------------------------------------------
// How to create Arrays
// ---------------------------------------------------------------
// Numbers Array
let arr = [1,2,3,4,5];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
// ---------------------------------------------------------------
// String array
let names = ["Srushti","sfhgasd","bnuyrgy","xhcvuts","bshgcfdg"]
console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
// ---------------------------------------------------------------
// In array you can store mutliple datatype at once
let mixed=[1,2,3,3.23,"hgsdfbc",null,undefined];
console.log(mixed);

// ---------------------------------------------------------------
// arrays are mutable we can change certain data with the help of array indexing

let fruits = ["apple","mango","grapes"];
console.log(fruits);
fruits[1]="banana";
console.log(fruits)