// ✅ Type Conversion Examples (comment/uncomment to test)
// let score = "10abc";       // NaN
// let score = "10";          // number
// let score = null;          // 0
// let score = undefined;     // NaN
// let score = "das";         // NaN
// let score = 1;             // Boolean true

let number = 45;

console.log("🔍 typeof number:", typeof number);
console.log("🔢 number value:", number);

let stringNumber = String(number);  // ✅ Convert number to string
console.log("🔍 typeof stringNumber:", typeof stringNumber);
console.log("📄 stringNumber:", stringNumber);

// ✅ Convert to Boolean or Number (uncomment to test)
// let numberScore = Number(score)
// let numberScore = Boolean(score)
// console.log(typeof numberScore);
// console.log(numberScore);


// ************** 🔢 Operations & Type Coercion **************

let value = 3;
let negg = -value;
console.log("➖ Negative value:", negg);

let str1 = 'Hello ';
let str2 = "world";
let str3 = str1 + str2;
console.log("👋 String concatenation:", str3);

// 🔀 Type coercion examples
console.log('1' + 2);       // '12'
console.log(1 + '2');       // '12'
console.log('1' + 2 + 2);   // '122'
console.log(1 + 2 + '2');   // '32'
console.log(1 + 2 + '2' + 3 + 3); // '3233'

console.log(true);          // true
console.log(+true);         // 1 (unary +)
console.log(+"");           // 0

console.log("📦 Type of []+[]:", typeof ([] + [])); // string (empty string)

console.log("2 > 1:", 2 > 1);           // true
console.log("true + true:", true + true);  // 2
console.log("2 >= 4:", 2 >= 4);         // false
console.log('"2" > 1:', "2" > 1);       // true
console.log('"02" > 1:', "02" > 1);     // true

// 🔍 Comparisons with null
console.log("null > 0:", null > 0);     // false
console.log("null < 0:", null < 0);     // false
console.log("null >= 0:", null >= 0);   // true ⚠️
