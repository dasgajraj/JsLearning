// Completed till 9th video

// Primitive
// Call By Valuess: it means that value just copy to another place 
// 7 types : String Number Boolean null undefined Symbol BigInt


// Non Primitive (Refrence)
// Array Objects Function
const heros = ["a","b","c"];
let Obj={
    name:"dasgajraj",
    age:23
}

const myFunction = function() {
    console.log("Function Executed")
}

console.log(heros)
console.log(Obj)
console.log(typeof myFunction)
myFunction()


// ++++++++++++++++

// Stack for all primitive 
// Heap for all non primitive 
/* stack me hamesha copy milti hai 
heap me sidha reference milta hai mtlb if any changes occurs then it will occur to the same 8*/

let string="ye string hai"
console.log(string);
let string2=string
console.log(string2);
string2="change kr diya mene"
console.log(string2);
console.log(string);

let user={
    name: 'DasGajraj',
    uid: 1
}
let user2=user

user.name="Sharma"
console.log(user)