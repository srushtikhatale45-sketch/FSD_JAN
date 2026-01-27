/*Apply() Method: The apply() method calls the function directly and sets this to 
the first argument passed to the apply method and if any other arguments provided 
as an array are passed to the call method then they are passed as an argument to 
the function.
Syntax:
apply(objectInstance)
apply(objectInstance,argArray)

In the apply method, we pass arguments in the form of an array this is only the 
primary difference between call and apply.

let nameObj={
    name:"Srushti"
}

let printName ={
    name: "Tony",
    sayHi :function(...age){
        console.log(this.name + " age is "+age);
    }
}
printName.sayHi.apply(nameObj,[42]);
*/
/*
Apply-->similar to call
// Internally apply uses call

// Difference is just that we pass arguments as an array
*/

function about(hobby,favMusician){
    console.log(this.first_name,this.age,hobby,favMusician);
}
const user3 = {
    first_name:"Srushti",
    age:21,
}
const user4 = {
    first_name:"Sakshi",
    age:22,
}
about.apply(user4,["guitar","bach"]);