// singleton
// Object.create
// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Aditya",
    "full name": "Aditya Matta",
    [mySym]: "mykey1",
    age: 19,
    city: "New Delhi",
    email: "prince@google.com",
    isLoggedOn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "aditya@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "aditya@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

