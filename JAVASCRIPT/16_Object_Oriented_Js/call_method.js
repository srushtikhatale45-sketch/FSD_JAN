// Call , Apply and Bind

/*

Call() Method: The call() method calls the function directly and sets this to the 
first argument passed to the call method and if any other sequences of arguments 
preceding the first argument are passed to the call method then they are passed as 
an argument to the function.

// // Syntax:
// call(objectInstance);
// call(objectInstance,arg1,argN);

// Example:
*/
// let nameObj = {
//     name:"Tony",
// }

// let printName ={
//     name :"steve",
//     sayHi:function(age){
//         console.log(this.name + " age is " + age);
//     }
// }
// printName.sayHi.call(nameObj,42);
// // Output: Tony age is 42


function Hello(){
    console.log("Hello World");
}
Hello.call();
const user1={
    first_name:"Srushti",
    age:21,
    about:function(hobby,favMusician){
        console.log(this.first_name,this.age,hobby,favMusician);
    }
}
const user2={
    first_name:"Sakshi",
    age:20,
}
user1.about();
user1.about.call(user2);
// call we add what will this represent 
// Which object reference will the this keyword of about function take
// Here user2 is passed

user1.about.call();//will be undefined undefined
// we need to pass what should be object reference


// passing argument from call method
user1.about.call(user1,"guitar","mozart");

///-------------------------------------------------------------------------------------

// So instead of Above pattern we can do is
function about (hobby,favMusician){
    console.log(this.first_name,this.age,hobby,favMusician);
}

const user3={
    first_name:"Sakhi",
    age:20,
}
const user4={
    first_name:"riya",
    age:22,
}
about.call(user4,"guitar","bach");
// call(objectInstance,ar1,arg2)
// so with respect to user4 object here 
// the this keyword of about function will be handled 
// hobby and favMusician is guitar and bach respectively here as
// two args were passed

 function info(address,pincode){
    console.log(this.name,this.age,address,pincode);
 }

 const u1={
    name:"Srushti",
    age:21,
 }

 const u2={
    name:"Sakshi",
    age:20,
 }
 const u3 = info.bind(u1,"Nashik",422212);
//  console.log(u3);
 u3();
