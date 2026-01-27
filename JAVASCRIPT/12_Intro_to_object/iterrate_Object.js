// How to iterate in Objects
const person={
    name:"Srushti",
    age:21,
    hobbie:["cooking" ,"Trekking","games"]
}
console.log(typeof person)
//-------------------------------------------------------------
// Two Ways To Iterate Through Objects ::

// ###  1. for in loop
// ###  2. Objects.keys

// // Not able to fetch with Dot Notation but with the help of  brackets we can access it
// for(let key in person){
//     console.log(person.key);
// }

//-------------------------------------------------------------
// // With help of Bracket Notation
// for(let key in person){
//     console.log(person[key]);
// }
// With help of Bracket Notation key : value pairs
for(let key in person){
    console.log(key,":",person[key]);
}
for(let key in person){
    console.log(`${key} : ${person[key]}`);
}
//-------------------------------------------------------------

// Objects.keys(person);
console.log(Object.keys(person));
// Gives Array of keys.
console.log(Object.values(person));
// Gives Array of values
//-------------------------------------------------------------
console.log(typeof Object.values(person));

// Checking that the Object.Keys and Object.values 
// do they return arrays as values
const val = Array.isArray(Object.keys(person));
console.log(val);
//-------------------------------------------------------------
for(let key of Object.keys(person)){
    console.log(key);
}

for(let value of Object.values(person)){
    console.log(value);
}