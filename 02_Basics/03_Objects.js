// =================== SINGLETON FROM CONSTRUCTORS ===================
// (This is how singleton objects can be created using Object.create)
const singletonObject = Object.create({});
console.log("Singleton object created via constructor:", singletonObject);

// =================== OBJECT LITERALS ===================

const symbol = Symbol("Key1"); // Symbol as a property key (unique and hidden)

const jsUser = {
    name: "Das Gajraj",
    "Full Name": "Das Gajraj Sharma", // Key with space requires bracket notation
    [symbol]: "Mera Symbol",         // Symbol key – accessed only via symbol
    surname: "Sharma",
    location: "Delhi",
    isLoggedIn: true,
    email: "dasgajraj@google.com",
    loginDays: ["Monday", "Tuesday", "Thursday"]
};

// =================== ACCESSING PROPERTIES ===================

console.log("User object:", jsUser);
console.log("Accessing email (dot):", jsUser.email);
console.log("Accessing email (bracket):", jsUser["email"]);
console.log("Accessing full name (bracket - required):", jsUser["Full Name"]);
console.log("Accessing Symbol property:", jsUser[symbol]);

// =================== UPDATING PROPERTIES ===================

jsUser.email = "dasgajraj@maang.com"; // Update value
console.log("Updated email:", jsUser.email);

// Object.freeze(jsUser); // Uncomment to make object immutable

jsUser.email = "dasgajraj@faang.com"; // Won't update if frozen
console.log("Email after trying to update again:", jsUser.email);

// =================== ADDING METHODS TO OBJECT ===================

// Regular method (no parameter)
jsUser.greeting = function () {
    console.log("Hello JS User");
};
console.log("Calling greeting method:");
jsUser.greeting(); // Calls the function

// Method using 'this' keyword
jsUser.greeting2 = function () {
    console.log(`Hello JS User, ${this["Full Name"]}`);
};
console.log("Calling greeting2 method:");
jsUser.greeting2(); // Uses 'this' to access object property

// =================== OBJECT UTILITIES ===================

console.log("Keys of jsUser:", Object.keys(jsUser));        // Returns array of keys
console.log("Values of jsUser:", Object.values(jsUser));    // Returns array of values
console.log("Entries of jsUser:", Object.entries(jsUser));  // Array of [key, value] pairs

console.log("Does jsUser have 'email'?", jsUser.hasOwnProperty("email"));  // true
console.log("Does jsUser have 'password'?", jsUser.hasOwnProperty("password")); // false

// =================== OBJECT CLONING / MERGING ===================

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Merge using Object.assign
const merged1 = Object.assign({}, obj1, obj2); // Target is first argument
console.log("Merged object (assign):", merged1);

// Merge using spread operator
const merged2 = { ...obj1, ...obj2 };
console.log("Merged object (spread):", merged2);

// =================== DESTRUCTURING OBJECT ===================

const { surname, location, isLoggedIn } = jsUser;
console.log("Destructured surname:", surname);
console.log("Destructured location:", location);
console.log("Destructured isLoggedIn:", isLoggedIn);

// You can also rename during destructuring
const { email: userEmail } = jsUser;
console.log("Destructured and renamed email:", userEmail);

// =================== LOOPING THROUGH OBJECT ===================

console.log("Looping through keys:");
for (let key in jsUser) {
    if (typeof jsUser[key] !== "function") { // Skip methods
        console.log(`${key} : ${jsUser[key]}`);
    }
}

// =================== SYMBOL PROPERTY NOTE ===================

console.log("Symbol keys:", Object.getOwnPropertySymbols(jsUser)); // To access symbols
console.log("Symbol value using getOwnPropertySymbols:", jsUser[Object.getOwnPropertySymbols(jsUser)[0]]);
