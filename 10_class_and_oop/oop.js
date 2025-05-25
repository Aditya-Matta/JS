const user = {
    username : "Aditya",
    loginCount : 8,
    signedIn : true,
    getUserDetails : function(){
        // console.log("Got user details from database")
        // console.log(`username: ${this.username}`)
    }
}

// console.log(user.username);
// // console.log(user.getUserDetails());
// // console.log(this)

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Hello ${this.username}`)
    }

    return this
}

const userOne = new User("Aditya",14,true)
const userTwo = new User("JS",19,true)
console.log(userOne.constructor);
// console.log(userTwo);


