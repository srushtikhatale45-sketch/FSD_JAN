// Constructor Functiom -->constructing Object 
// Convention Capital start letter which function are called using new keyword
function CreateUser(first_name,last_name,email,age,address){
    this.first_name=this.first_name,
    this.last_name=this.last_name,
    this.email=this.email,
    this.age=this.age,
    this.address=address
    return this;

}

// -->we already ahve prototype so lets add function here instead of 
// creating new__proto__
// console.log(createUser.prototype);

CreateUser.prototype.about=function(){
    return`${this.first_name} ${this.last_name} is ${this.age} years old.`;
}

CreateUser.prototype.is18=function(){
    return this.age >=18;
}

CreateUser.prototype.sing=function(){
    return'abc shgcuy idfhyf  kghviuy jhguy';
}
console.log(CreateUser.prototype);

const user1 = new CreateUser("Srushti","Khatale","srushtikhatale45@gmailcom",21,"Nashik422212");
console.log(user1);
const is18=user1.is18();
console.log(is18);
const about=user1.about;
console.log(about);

// [[prototype]] is reference 
// prototype is empty object where methods and properties can be added

/*
//  for(lrt key in user1){
//      console.log(key);
//  }

// All keys are returned
// In case you just dont want prototype
/*
What is  hasOwnProperty like in javascript?
the hasOwnProperty() method in javascript is used to check whether the object has the  specified property as its own  property.This is useful for checking if the object has inherited the property rather than being its own .Parameter:This method accepts a single parameter.
*/
for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}

/*
The hasOwnProperty() method in javascript is used to check whether the object has the specified property as its own property.This is useful for checking if  the object has inherited the property rather than being its own.
Return value:It returns a boolean value indicating whether the object has the given property as its own property.
*/