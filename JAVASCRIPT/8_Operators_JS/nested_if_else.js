let winningNumber = 19;
let userGuess = +prompt("Guess A Number?");
// 12
console.log(typeof userGuess,userGuess );
if(userGuess===winningNumber){
    console.log("Winner");
}
else{
    console.log("Loser");
    if(userGuess > winningNumber){
        console.log("Too high!!");
    }
    else{
        console.log("Too low!!");
    }
}
// Prompt takes input as a string we converted it to number with  +prompt assigned it to user Guess  nested if else  used to checkif it is winning number or not if yes winner is printed if no loser  is printed then it checks guess was lower  or higher and prints higher and lower accordingly.

/*What is prompt()  method?
Window:prompt() method - web APIs |MDN
prompt() instructs the browser to display  a dialog with an optional message prompting the user either submits the text or cancels dialog
*/
let tempInDegree = +prompt("Guess the temperature");
console.log(typeof tempInDegree,tempInDegree)
if(tempInDegree < 0){
    console.log("Extremely cold outside");
}
else if(tempInDegree < 16){
    console.log("It is cold Outside");
}
else if(tempInDegree < 25){
    console.log("Weather is ok!");
}
else if(tempInDegree < 35){
    console.log("Lets go for swim");
}
else if(tempInDegree < 45){
    console.log("turn on AC");
}
else{
    console.log("It is too hot");
}
