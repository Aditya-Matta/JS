// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aditya",
            lastname: "Matta",
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = Object.assign({}, obj1, obj2) //{}=> target(not compulsory to give but prefer), obj1,obj2=> source
const obj3 = {...obj1, ...obj2} //most cases will use this

// console.log(obj3);

const users = [
    {
    id: 1,
    email: "a@gmail.com",
    },
    {
    id: 1,
    email: "a@gmail.com",
    },
    {
    id: 1,
    email: "a@gmail.com",
    },
    {
    id: 1,
    email: "a@gmail.com",
    },
    {
    id: 1,
    email: "a@gmail.com",
    },
    {
    id: 1,
    email: "a@gmail.com",
    },
    {
    id: 1,
    email: "a@gmail.com",
    },
    {
    id: 1,
    email: "a@gmail.com",
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
