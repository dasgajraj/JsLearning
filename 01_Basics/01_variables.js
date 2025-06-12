// 1 to 4 video
const accountId = 1234567890;
let accuontEmail = "das.study.das@gmail.com";
var accountPassword = "132003";
accuontCity = "Delhi";
let accountState;

// accountId=41127656533; //not allowed

accuontEmail = "dasgajraj1@gmail.com";
accountPassword = "1234";
accuontCity="Faridabad";

console.log(accountId);
console.log(accuontEmail);
console.log(accountPassword);
console.log(accuontCity);
console.log(accountState);

/*
prefer not to use var 
var is function scoped
let and const are block scoped
const is used to declare a variable that cannot be reassigned

what aree diference between let and var
let is block scoped
var is function scoped
*/

console.table([accountId,accuontEmail,accountPassword,accuontCity,accountState]);
