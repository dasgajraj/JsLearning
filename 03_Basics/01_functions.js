// --- Function declaration: Prints name line by line ---

function helloName () {
    // Each console.log prints one character
    console.log("D");
    console.log("A");
    console.log("S");
    console.log(" "); // space
    console.log("G");
    console.log("A");
    console.log("J");
    console.log("R");
    console.log("A");
    console.log("J");
}

// ✅ Function reference (not invoked)
// helloName   ← this does nothing on its own

// ✅ Function call (invokes the function)
helloName()  // Output: Each character of "DAS GAJRAJ" line by line



// --- Function to add two numbers ---

function addTwoNumber(number1, number2) {
    // Logs the sum of the two inputs
    console.log(number1 + number2);  

    // Returns the sum
    return number1 + number2;

    // ❌ This line is never reached (dead code)
    console.log("unreachable code ");
}

// ✅ Calling the function with 4 and 4
const result = addTwoNumber(4, 4) // Logs: 8

// 🟡 String + Number = string concatenation
addTwoNumber("1", 2)    // Logs: "12" (string)

// 🟡 String + String = string concatenation
addTwoNumber("1", "2")  // Logs: "12"

// ✅ Number + Number = addition
addTwoNumber(1, 2)      // Logs: 3

// Logging the result of first call (result is from 4 + 4)
console.log(result);    // Output: 8



// --- Function to return login message ---

function loginUserMessage(username = "1") {
    // If username is falsy (undefined, null, empty string), return warning
    // Note: This covers empty string as well
    if (!username) return `Please Enter a Username`

    // If username is provided and truthy, return message
    return `${username} just Loggined`
}

// ❌ This line runs but doesn't log because no console.log
loginUserMessage("Dasgajraj") // No output

// ✅ Proper usage with console.log to see output
console.log(loginUserMessage("Dasgajraj")); // Output: "Dasgajraj just Loggined"

// ❗️Empty string is falsy → triggers warning message
console.log(loginUserMessage("")); // Output: "Please Enter a Username"

// ❗️No argument passed → default value "1" is used
console.log(loginUserMessage());   // Output: "1 just Loggined"
// --- Function with rest parameters (collects all arguments into an array) ---

function calculateCartPrice(...num1) {
    // The rest operator (...) collects all arguments into an array
    return num1
}

// ✅ Single argument becomes a one-element array
console.log(calculateCartPrice(1))              // Output: [1]

// ✅ Two arguments → array of two items
console.log(calculateCartPrice(200, 400))       // Output: [200, 400]

// ✅ Multiple arguments → array of all items
console.log(calculateCartPrice(200, 400, 500))  // Output: [200, 400, 500]



// --- Rest parameter used after fixed arguments ---

function calculateCartPrice2(val1, val2, ...num1) {
    // val1 = 200
    // val2 = 400
    // num1 = [500, 600, 700]
    return num1
}

// First two values are assigned to val1 and val2
// Remaining go into rest parameter (num1)
console.log(calculateCartPrice2(200, 400, 500, 600, 700))  // Output: [500, 600, 700]



// --- Passing an object into a function ---

const user = { 
    username: "das",
    price: 400
}

// Function that takes any object with username and price and prints it
function handleObject(anyObj) {
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}

// ✅ Passing predefined object
handleObject(user)  // Output: Username is das and price is 400

// ✅ Passing inline object directly
handleObject({ username: "sam", price: 900 }) // Output: Username is sam and price is 900



// --- Working with Arrays in Functions ---

const myArray = [200, 400, 100, 600]

// Function returns the second value of any array passed in
function returnSecondValue(getArray) {
    return getArray[1]  // Indexing starts at 0, so [1] is second element
}

// ✅ Using predefined array
console.log(`${returnSecondValue(myArray)}`) // Output: 400

// ✅ Passing array directly
console.log(`${returnSecondValue([100, 200, 300, 400, 500])}`) // Output: 200
