// ✅ 06_numberAndMath.js - Numbers, Type Conversion & Math Object in JavaScript

// =======================
// 🧮 Working with Numbers
// =======================

const score = 400;
console.log("📦 Score:", score);

const balance = new Number(100);  // Number object
console.log("💰 Balance (Number object):", balance);
console.log("📄 balance.toString():", balance.toString());  // Converts to string
console.log("📄 typeof balance.toString():", typeof balance.toString());  // "string"

const anotherNumber = 123.4567;
console.log("🎯 toFixed(2):", anotherNumber.toFixed(2));  // "123.46" (string)
console.log("🎯 toFixed(0):", anotherNumber.toFixed(0));  // "123"

// 🔍 toPrecision => controls total significant digits (returns string)
console.log("🔬 toPrecision(4):", anotherNumber.toPrecision(4));  // "123.5"
console.log("🔬 toPrecision(2):", anotherNumber.toPrecision(2));  // "1.2e+2" (sci. notation)

// 🌍 toLocaleString => formats number with commas
const bigNumber = 10000000;
console.log("🇺🇸 US Style:", bigNumber.toLocaleString());       // "10,000,000"
console.log("🇮🇳 Indian Style:", bigNumber.toLocaleString("en-IN")); // "1,00,00,000"

// =======================
// 🔢 MATH Object Methods
// =======================
console.log("📚 Math Object:", Math);  // All math methods

console.log("➖ Math.abs(-8):", Math.abs(-8));  // 8 (absolute value)

console.log("📐 Math.round(4.6):", Math.round(4.6));  // 5
console.log("📐 Math.round(4.3):", Math.round(4.3));  // 4

console.log("🔼 Math.ceil(4.2):", Math.ceil(4.2));  // 5 (always rounds UP)
console.log("🔽 Math.floor(4.9):", Math.floor(4.9));  // 4 (always rounds DOWN)

console.log("📉 Math.min(2, 4, 0, -1):", Math.min(2, 4, 0, -1));  // -1
console.log("📈 Math.max(2, 4, 0, -1):", Math.max(2, 4, 0, -1));  // 4

// 🎲 Random Number Generation
console.log("🎰 Math.random():", Math.random());  // value b/w 0 and 1

// ✅ Random number between 0 and 10
console.log("🎯 Random (0-10):", Math.floor(Math.random() * 10));

// ✅ Random number between 1 and 10
console.log("🎯 Random (1-10):", Math.floor(Math.random() * 10) + 1);

// ✅ Random number between min and max (inclusive)
const min = 5;
const max = 15;
const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`🎯 Random (${min}-${max}):`, randomInRange);

/*
===============================
🧠 Summary / Key Takeaways:
===============================
✔ `Number.toFixed(n)`      => Fixed decimal places (as string)
✔ `Number.toPrecision(n)`  => Controls total significant digits
✔ `Number.toLocaleString()` => Adds commas based on locale
✔ Math object offers:
   ➤ abs, round, ceil, floor
   ➤ min, max
   ➤ random (very useful in games or simulations)
✔ Use `(Math.random() * (max - min + 1)) + min` for custom ranges
*/
