// Don't do this Mistake:
const user1={
    first_name:"Srushti",
    age:21,
    about(){
        console.log(this);
        console.log(this.first_name,this.age);
    }
}
user1.about();

// user1.about();//Srushti 21
// Here this of about is pointing to object instance of user1
const myfunc = user1.about;
myfunc();
// we assigned about function to myfunc
/*
     what is actually happening is :
     const myfunc = function(){

            console.log(this);

            console.log(this.first_name,this.age);
    }
   
    So its in global scope and here this pointing to global window object
    hence when we call myfunc();
    it gives undefined undefined
    Because there os no other object instance for reference to this keyword

*/

// to Solve this problem we need to bind the function with object
// so lets use bind


const myfunc1 = user1.about.bind(user1);
myfunc1();

// Problem solved :