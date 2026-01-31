// ################# Lexical Scope ##################################
/*

Lexical scoping in JavaScript
JavaScript uses lexical scoping to resolve the variable 
names when a function is created inside another function.
It determines the function's parent scope by looking at
where the function was created instead of where it was
invoked.

*/
/*

const myvar = "value1";

function myApp(){
     
    function myfunc(){
        // const myvar= "value59";
        console.log("inside myFunc",myvar);
    }
    
    console.log(myvar);
    myfunc();
}

 myApp();
*/

/*

Lexical scope is the ability for a function scope to access 
variables from the parent scope. We call the child function 
to be lexically bound by that of the parent function. 
The diagram below outlines the supposed hierarchy that 
the lexical scope maintains in JavaScript.

// https://www.educative.io/answers/lexical-scope-in-javascript

*/


/*
function myApp(){
     
    const myvar = "value1";
    function myfunc(){
        const myvar= "value59";
        console.log("inside myFunc",myvar);
    
    const myfunc2 = function(){
        const myvar="value2";
        console.log("inside myFunc",myvar);
    }
    const myfunc3 = () =>{
        console.log("inside myFunc",myvar);
    }
    myfunc2();
    myfunc3();
    }
    console.log(myvar);
    myfunc();
   
}
myApp();
*/


var a = 10; // variable a assigned to 10

var func = function (){ // outermost function
    var b = 20;
    console.log("a and b is accessible (outer):", a, b);
    var innerFunc= function (){ // innermost function
        var c = 30;
        console.log("a and b and c is accessible (innner):", a, b, c);
    }
    innerFunc();
    return;
}
func(); // invoke function func 
console.log("only a is accessible (global):", a);
