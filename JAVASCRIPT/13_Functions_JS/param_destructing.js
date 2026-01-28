// ############## Parameters Destructuring : ###########

// So where we use Parameters Destructing More often :

// 1. with Object
// 2. In react


// How to Destructure Parameter passed to function
/*
const person = {
    firstname :"Srushti",
    gender : "female",
}

function printpersonDetails(obj){

    console.log(obj.firstname); // Srushti
    console.log(obj.gender);  // female
    console.log(obj.age);  // undefined
}

printpersonDetails(person);

*/


/*
const person = {
    firstname :"Srushti",
    gender : "female",
    age : 21,
}
function printpersonDetails({firstname,gender,age}){

    console.log(firstname); // Srushti
    console.log(gender);  // female
    console.log(age);  // undefined
}
printpersonDetails(person);


*/

/// Nothing was trying some thing
const person = {
    firstname :"Srushti",
    gender : "female",
    age : 500,
}
function printpersonDetails(person){
  
    for(let data of person){

        console.log(data); // Srushti
    }
}
printpersonDetails(person);

/*

What is parameter destructuring in JavaScript?
Destructuring in JavaScript is used to unpack or segregate 
values from arrays or properties from object literals into 
distinct variables, thus it allows us to access only the 
values required

*/