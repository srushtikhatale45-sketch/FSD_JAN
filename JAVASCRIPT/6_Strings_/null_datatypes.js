// ############## Null Datatype####

// What is the null in javascript?
/* Null is an object in javascript and represents primitive datatypes.A null value in Javascript is used for reffering absence of any object value and if any object value if any function or variable returns null, then can infer  that the object could not be created
*/
let myvar = null;
console.log(myvar);//null
console.log(typeof myvar,myvar);//object null

myvar = "abcsdfjdh";
console.log(typeof myvar,myvar);//string null

let mynull = null;
console.log(typeof mynull);//object
// bug, error

/* 
Why is null type an object?
The reasoning behind this is that null , 
in contrast with undefined , was (and still is) often
used where objects appear. In other words, null is often
used to signify an empty reference to an object.

 When Brendan Eich created JavaScript, 
he followed the same paradigm, and it made sense (arguably)
to return "object" .
*/

// BigInt
let mynum = 123;
console.log(mynum);
console.log(Number.MAX_SAFE_INTEGER);

// declaring big int
let num = BigInt(315);
let num1 = 123n;
console.log(num);
console.log(num1);
// console.log(num+1);//invlaid
// error cannot mix bigint with other types.
let num3 = 12345;
// console.log(num + num3); //invlaid
// error cannot mix bigint with other types.
console.log(num + num1);
/*
BigInt is a built-in object in Javascript that provides a way to represent whole numbers larger than 2^53-1.
 The largest number that JavaScript can reliably 
 represent with the Number primitive is 2^53-1,
 which is represented by the MAX_SAFE_INTEGER constant.
*/













