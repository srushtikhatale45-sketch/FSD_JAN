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
// Here this of about function to myfunc
/*
What is actually happening is:
const