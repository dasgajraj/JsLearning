// ✅ IIFE - Immediately Invoked Function Expression
// 📌 A function that runs as soon as it is defined

// 🧪 Regular function definition & call (Not IIFE)
function a() {
    console.log("Function Executed (Normal Function)");
}
a();  // ✅ Manually invoked

// ❌ This is invalid syntax: trying to invoke a regular function like an IIFE
// function a(){
//     console.log("Function Executed");
// }()
// ⛔ Will throw SyntaxError: Function statements require a name

// ✅ Named IIFE - function is defined and immediately invoked
(function b() {
    console.log("Function Executed (Named IIFE)");
})(); // ✅ Ends with () to invoke

// 📌 Syntax: (function definition)(execution)
// ⚠️ Don't forget semicolon after IIFE if chaining multiple IIFEs

// ✅ IIFE using arrow function
(() => {
    console.log("DB connected (Arrow IIFE)");
})();

// ✅ IIFE with parameters
((name) => {
    console.log(`${name} DB connected (Arrow IIFE with param)`);
})('Firebase');
