const accountId = 144553
let accountEmail = "prince@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 2 not allowed

accountEmail = "hcs@gmail.com"
accountPassword = "54321"
accountCity = "Jaipur"

/*
Prefer not to use var, coz of issue in block scope and functional scope
*/

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])