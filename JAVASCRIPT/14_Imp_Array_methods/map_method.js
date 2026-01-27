// ################### Map method #####################


// Mostly used in React js
// Works similar to for Each

// Map Method
// Takes call back function as an input
// and returns output in array

const numbers = [4,3,5,6,5];

/*
const sqr = function (number){
    return number * number;
}

const sqrnumber = numbers.map(sqr);
console.log(sqrnumber);
*/


// we can also write it as
/*
const sqrnumber = numbers.map((number)=>{
     
    return number*number;

})
console.log(sqrnumber);
*/

/*
const sqrnumber = numbers.map((number,index)=>{
     
    return `index : ${index},${number*number}`;

})
console.log(sqrnumber);
*/


//-=-------------------------------------------------------------

// mostly real example


const users = [
    {firstName:"srushti",age : 22},
   {firstName:"Sakshi",age : 20},
   {firstName:"rashmi",age : 23},
   {firstName:"radhika",age : 27},
   {firstName:"riya",age : 24},
]

const user_names = users.map((user)=>{
    return user.firstName;
})
console.log(user_names);