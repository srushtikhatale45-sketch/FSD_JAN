// and or operator

let firstname = "Srushti";
let age = 21;

// conditions checked but seperately
if(firstname[0]==="S"){
    console.log("Name start with S");
}
if(age > 18){
    console.log("You are above 18");
}

// Conditions checked but both at once

// Both a or b condition should be true
// to get if condition
// or else will run
if(firstname[0] === "S" && age > 18){
    console.log("Name start with S and above 18");
}else{
    console.log("Not Qualified");
}

// Atleast a or b condition should be true
// atleast 1 should true to get if condition or else will run
if(firstname[0] === "S" || age > 18){
    console.log("Name start with S and above 18");
}
else{
    console.log("Not qualified")
}