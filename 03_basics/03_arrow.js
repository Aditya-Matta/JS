const user = {
    username: "Aditya",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "Aditya"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Aditya"
//     console.log(this.username);
// }
const chai = () => {
    let username = "Aditya"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Aditya"})

console.log(addTwo(3, 4));


// const myArr = [2, 5, 3, 7, 8]

// myArr.forEach(() => {})