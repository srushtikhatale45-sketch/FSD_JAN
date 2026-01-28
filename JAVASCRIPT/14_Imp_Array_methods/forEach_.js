
// Important Array Methods :

// forEach
// map
// filter
// reduce




        //  ################# For Each ##############
const numbers = [4,2,5,8];

function multiplyby2(number,index){

    console.log("index is ",index);
    console.log(`${number}*2 = ${number*2} `);

    console.log(`index is ${index} and number is ${number}`);
}

// multiplyby2(numbers[0],0);
// multiplyby2(numbers[1],1);
// multiplyby2(numbers[2],2);


// for(let i =0;i<numbers.length;i++){

//     multiplyby2(numbers[i],i);
// }



numbers.forEach(multiplyby2);
// // foreach takes function as a parameter like in a function it takes(value,index,parameter).

// numbers.forEach((a,b,c)=>{
//     console.log(a);
//     console.log(b);
//     console.log(c);

// })

// ___________________________________________________________


// const numbers = [4,2,5,8];

// numbers.forEach(function(number,index){
//     console.log(`index is ${index} and number is ${number}`);

// })



// --------------------------------------------------------------


// const numbers = [4,2,5,8];

// numbers.forEach(function(number,index){
//     console.log(`${number} x 2 = ${number*2} and at index ${index}`);
// })




// const users = [
//    {firstName:"srushti",age : 22},
//    {firstName:"Sakshi",age : 20},
//    {firstName:"rashmi",age : 23},
//    {firstName:"radhika",age : 27},
//    {firstName:"riya",age : 24},
// ]

// // More often seen
// users.forEach(function(user){
//     console.log(user.firstName);
// });

// // recent in ES6
// for(let user of users){
//     console.log(user.firstName);
// }

// users.forEach((user,index)=>{
//     console.log(user.firstName,index);
// })