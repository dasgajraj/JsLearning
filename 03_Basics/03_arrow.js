// ✅ Object with method using `this`
const user = {
    username: "Das Gajraj",
    price: 100,

    welcomeMessage: function () {
        // 💬 `this` refers to the object calling the method
        console.log(`✅ Welcome To My Website, Hi ${this.username}`);
        console.log("👉 Value of `this` inside method:", this);  // will print `user` object
    }
}

const { username } = user;  // 💡 Destructuring the object

user.welcomeMessage();  // ✅ Method call => "Das Gajraj"
console.log("📌 Destructured username (before update):", username);  // Still "Das Gajraj"

user.username = "DGS";  // ⚠️ This changes the username in the object, NOT the destructured one
user.welcomeMessage();  // Now shows "DGS"
console.log("📌 Destructured username (after update):", username);  // Still "Das Gajraj" (unchanged)


// ✅ Function in global scope
function chai() {
    console.log("🌐 `this` in regular function (non-strict mode):", this); 
    // 💡 In browsers: refers to `window`
    // 💡 In Node.js: refers to global object
}
chai()


function chai2() {
    let username = "abcd"
    console.log("❌ Accessing `this.username` inside regular function:", this.username);
    // 💡 `this` doesn't refer to this function's scope
    // 💡 `this.username` is undefined, `this` is global object (where `username` is not defined)
}
chai2()


// ++++++++++++++++++  ARROW FUNCTIONS ====>>>>>>>>>>>>>>       +++++++++++++++++

const chai3 = () => {
    let username = "1234"
    console.log("❌ `this.username` in arrow function:", this.username);  // undefined
    console.log("📭 `this` in arrow function:", this);  // empty object in Node.js
    // ⚠️ Arrow functions DO NOT have their own `this`. They inherit from the parent scope.
}
chai3()


// Arrow function with return statement
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log("✅ addTwo(3, 4):", addTwo(3, 4));

// Implicit return without `return` keyword (valid for one-liners)
const addTwo1 = (num1, num2) => num1 + num2;
console.log("✅ addTwo1(3, 4):", addTwo1(3, 4));

// Same with parentheses
const addTwo2 = (num1, num2) => (num1 + num2);
console.log("✅ addTwo2(3, 4):", addTwo2(3, 4));

// Returning object using parentheses
const addTwo3 = (num1, num2) => ({ username: "Das Gajraj" });
console.log("✅ addTwo3(3, 4):", addTwo3(3, 4));


// Looping through an array using forEach
const myArray = [1, 2, 3, 4, 5];

// ❌ Empty arrow function (no output)
myArray.forEach(() => (1))

// ✅ Meaningful forEach with logs
myArray.forEach((val, index) => {
    console.log(`🔁 Index ${index}: Value = ${val}`);
})
