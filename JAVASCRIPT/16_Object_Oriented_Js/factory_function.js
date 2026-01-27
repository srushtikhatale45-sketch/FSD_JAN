/*

- Factory functions & discuss some memory related problems
- First solution to that problem
- Why that solution isn’t that great

/*
// First solution to the problem

function  createUser(first_name,last_name,email,age,address){
    const user ={};
    user.first_name=first_name,
    user.last_name=last_name,
    user.email=email,
    user.age = age,
    user.address= address,

    user.about =function(){
        return `${this.first_name}  ${this.last_name} is ${this.age} years old`;
    }

    user.is18 = function(){
        return this.age>=18;
    }
    return user;
}
const user1 = createUser("Srushti","Khatale","srushtikhatale45@gmail.com",21,"home,Building,pincode,state");
console.log(user1);
const is18 = user1.is18();
const about = user1.about();
console.log(about);
*/
/*
// -----------------------------------------------------------------------------------------------------
// - Why that solution isn’t that great We Will Disuss Here
function crateUser(first_name,last_name,email,age,address){
    const user ={};
    user.first_name=first_name,
    user.last_name=last_name,
    user.email=email,
    user.age = age,
    user.address= address,

    user.about =function(){
        return `${this.first_name}  ${this.last_name} is ${this.age} years old`;
}
user.is18 = function(){
    return this.age>=18;
}
return user;
}
const user1 = createUser("Srushti","Khatale","srushtikhatale45@gmail.com",21,"home,Building,pincode,state");
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);
const user2 = createUser("Sakhi","Khaire","sakhikhaire45@gmail.com",21,"home,Building,pincode,state");
const user3 = createUser("Riya","anthal","riyaanthal@gmail.com",21,"home,Building,pincode,state");
*/
/*
// So Problem with Above Solution Lets See
// Now We make user1 , user 2,user 3 All this User are using create User Function
// That Function has two method 
// So As Many times we Call that Create User Function
// Lets Say :

// For User1 : CreateUser Function Creates : two method  about and is18
// For User2 : CreateUser Function Creates : two method  about and is18
// For User3 : CreateUser Function Creates : two method  about and is18

// So for Each Users There are Two methods created which takes Space in Memory 
// As many Users Created more Memory Wasted 
// SO here what we can Do is As method works same for All
// We Remove Those Methods and Make User Methods Object .
*/
const userMethods={
    // User Methods Objects
    // Method about
    //key:value
    // about:method
    about: function(){
    return `${this.first_name}  ${this.last_name} is ${this.age} years old`;
    },
    // Method is 18
    // key:value
    // is18:method
    // is18 :method
    is18: function(){
        return this.age>=18;
    },
    sing:function(){
        return 'have a nice day !';
    }

}
function crateUser(first_name,last_name,email,age,address){
    const user ={};
    user.first_name=first_name,
    user.last_name=last_name,
    user.email=email,
    user.age = age,
    user.address= address,
    // Reference given
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    user.sing = userMethods.sing;

    return user;
}

const user1 = createUser("Srushti","Khatale","srushtikhatale45@gmail.com",21,"home,Building,pincode,state");
// console.log(user1);
// const is18 = user1.is18();
// console.log(is18);
// const about = user1.about();
// console.log(about);
const user2 = createUser("Sakhi","Khaire","sakhikhaire45@gmail.com",21,"home,Building,pincode,state");
const user3 = createUser("Riya","anthal","riyaanthal@gmail.com",21,"home,Building,pincode,state");
// I want User to Have One More Sing Method

// Every time We Make New Method In User Methods we Have to Make changes in Create
// Create User Function as Well and keep it Updated

//
/*_------------------------------------------------------------------
const obj1 ={
    key1:"value1",
    key2:"value2",
}
const obj2 ={
    key3:"value3",
    key4:"value4",
}
console.log(obj1.key1);//value1
console.log(obj2.key3);//value3
console.log(obj2.key1);//undefined
// I dont want Undefined here
// if Obj2 dont have key1 it should go to obj1 and check if it has key1
// if yes should return from there

// Agar Object 2 ko Key 1 na mile toh 
// Object2 khud jaye object 1 ke pass jaye aur key 1 waha hai toh 
// waha se de
*/
// -------------------------------------------------
const obj1 ={
    key1:"value1",
    key2:"value2",
}
// object literals
// const obj2 ={};
// // there is one more way to create empty objects.
// obj2.key3 = "value3";  

// // there is one more way to create empty objects.