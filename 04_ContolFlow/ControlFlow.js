// ==========================
// ✅ IF STATEMENTS & LOGIC
// ==========================

// if (condition) { ... }
// Runs only when condition is true

const isUserLoggedin = true;

if (isUserLoggedin) {
    console.log("✅ User is logged in.");
}

// ✅ Comparison Operators:
// <, >, <=, >=, ==, !=, === (strict equality), !== (strict inequality)

const temperature = 41;
if (temperature === 41) {
    console.log(`🌡️ Temperature is exactly ${temperature}`);
} else {
    console.log("🌡️ Temperature is NOT 41");
}

// ✅ Short-hand syntax (no curly braces for one-line block)
const balance = 1000;
if (balance > 500) console.log(`💸 Balance above minimum: ₹${balance}`);

// ✅ Nested if-else ladder
if (balance < 500) {
    console.log("🟥 Less than ₹500");
} else if (balance < 750) {
    console.log("🟨 Less than ₹750");
} else {
    console.log("🟩 ₹1000 or more");
}

// ✅ Real-world condition: Buying a course
let userLoggedIn = true;
let debitCard = true;
let loggedInFromGoogle = false;
let loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
    console.log("✅ You can buy the course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("📧 User can log in via Email or Google");
}

// ==========================
// ✅ SWITCH CASE
// ==========================

const month = 3;

switch (month) {
    case 1:
        console.log("🗓️ January");
        break;
    case 2:
        console.log("🗓️ February");
        break;
    case 3:
        console.log("🗓️ March");
        break;
    case 4:
        console.log("🗓️ April");
        break;
    default:
        console.log("🗓️ Month not recognized");
        break;
}

// ==========================
// ✅ TRUTHY & FALSY VALUES
// ==========================

// ✅ Truthy examples
const userEmail = "das@email.com";
if (userEmail) {
    console.log("📩 Got User Email");
}

// ❌ Falsy: empty string
const userEmail2 = "";
if (userEmail2) {
    console.log("📩 Got Email 2");
} else {
    console.log("❌ No Email 2");
}

// ✅ Empty array is truthy
const userEmail3 = [];
if (userEmail3) {
    console.log("📬 userEmail3 is truthy (empty array)");
}

// ✅ Non-empty array is truthy
const userEmail4 = [1];
if (userEmail4) {
    console.log("📬 userEmail4 is truthy (non-empty array)");
}

// ❌ Falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// ✅ Truthy values:
// "0", "false", " ", [], {}, function(){}

// ==========================
// ✅ Checking for emptiness
// ==========================

const emptyArr = [];
if (emptyArr.length === 0) {
    console.log("🧺 Array is empty");
}

const obj = {};
if (Object.keys(obj).length === 0) {
    console.log("📭 Object is empty");
}

// ==========================
// ✅ Nullish Coalescing Operator (??)
// ==========================

let val1;
val1 = 5 ?? 10;           // 5
val1 = null ?? 10;        // 10
val1 = undefined ?? 15;   // 15
val1 = undefined ?? null; // null
val1 = null ?? undefined; // undefined
val1 = null ?? 10 ?? 20;  // 10

console.log("🧪 Nullish Result:", val1);

// ==========================
// ✅ TERNARY OPERATOR
// ==========================

const price = 100;
price > 70
    ? console.log("✅ Price is greater than 70")
    : console.log("❌ Price is less than 70");

/*
🧠 Summary:
-----------
✔ Use `if`, `else if`, and `else` for multiple condition checks.
✔ Use `switch` for multiple fixed value comparisons.
✔ Know truthy vs falsy values for logic building.
✔ Use `??` to provide fallback values when dealing with null/undefined.
✔ Use ternary for short if-else-like expressions.
*/
