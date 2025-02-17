const accountId=144553
let accountEmail="satyam01@gmail.com"
var accountPassword="12345"
accountCity="Patna"
let accountState
/*
Prefer not to use var beacuse of issue in block scope and functional scope
*/
accountEmail="satyam10@gmail.com"
accountCity="Banglore"
accountPassword="54321"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
