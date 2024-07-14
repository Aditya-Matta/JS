//  Primitive 
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedin = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id == anotherId);

const bigNumber = 322391320097638162530010283618625182n



// Reference(Non-primitive)
// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "aditya",
    age: 19,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive) , Heap (non-primitive)

let myYoutubename = "Aditya Matta"

let anothername = myYoutubename
anothername = "Prince"

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "aditya@google.com"

console.log(userOne.email);
console.log(userTwo.email);