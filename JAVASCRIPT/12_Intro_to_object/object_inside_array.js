// Objects inside Array

// Very Useful in Real world Applications

const users = [
    {
    userid : 1,
    user_name: "Srushti",
    gender : "female"},
    {
    userid : 2,
    user_name: "Sakshi",
    gender : "female"},
    {
    userid : 3,
    user_name: "krish",
    gender : "male"},

]

console.log(users);

// Iterating it :

for(let user of users){
    console.log(user);
    console.log(user.user_name);
    console.log(user.userid);
}