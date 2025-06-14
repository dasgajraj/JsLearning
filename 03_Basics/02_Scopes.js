// --- SCOPES.js ---

// ✅ Global scope declarations
let a = 300;   // Block-scoped (only accessible within block or global where it's defined)
// const b = 20; // Uncommenting this would declare a block-scoped constant
var c = 300;   // Function-scoped or globally-scoped (not block-scoped)

// ✅ Block scope using if-statement
if (true) {
    let a = 10;         // This `a` is a new block-scoped variable (does NOT affect global `a`)
    const b = 20;       // Block-scoped, only accessible inside this block
    c = 30;             // Updates the global `var c` (because `var` is not block-scoped)

    console.log(`Inner a: ${a}`); // Output: Inner a: 10
    // console.log(b); // OK here, but outside this block will cause error
}

// ✅ Trying to access variables outside the block
console.log(c); // Output: 30 → because var is not block-scoped, and we reassigned c = 30 inside if-block

console.log(a); // Output: 300 → global `a` was never modified (because inner `a` was block-scoped)

// console.log(b); // ❌ ReferenceError: b is not defined (b is block-scoped, can't access outside)


// --- Function within a function: Lexical Scope Example ---

function one() {
    const username = "das";

    function two() {
        const website = "youtube";
        
        // ✅ `username` is accessible here due to lexical scope (parent scope)
        console.log(username);  // Output: das
    }

    // ❌ Not accessible: website is defined inside `two()`, not `one()`
    // console.log(website); // ReferenceError

    two(); // Calling inner function
}

one(); // Output: das



// --- Block Scope Example with if-statements ---

if (true) {
    const username = "dasGajraj";

    if (username === "dasGajraj") {
        const website = "youtube";

        // ✅ Both variables are accessible in this block
        console.log(username + website);  // Output: dasGajrajyoutube
    }

    // ❌ website is block-scoped, not accessible here
    // console.log(website); // ReferenceError

    console.log(username);  // Output: dasGajraj
}

// ❌ username is block-scoped, not accessible outside the if block
// console.log(username); // ReferenceError



// ++++++++++++ Interesting: Function Hoisting +++++++++++++


// ✅ Function Declaration (Hoisted completely)
console.log(addOne(5)); // Output: 6

function addOne(num) {
    return num + 1;
}

// ✅ Works again, since it's a function declaration
console.log(addOne(5)); // Output: 6



// ❌ Function Expression (NOT hoisted like declaration)
// console.log(addTwo(5)); // ReferenceError: Cannot access 'addTwo' before initialization

// This is a function expression assigned to a variable
const addTwo = function(num) {
    return num + 2;
};

// ✅ Works only after declaration
console.log(addTwo(5)); // Output: 7
