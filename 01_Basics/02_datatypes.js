"use strict"  // Enforces modern JS practices

console.log(3);

let name = "das";           // string
let age = 21;               // number
let isLoggedIn = false;     // boolean

console.log(name);
console.log(age);
console.log(isLoggedIn);

// 🧠 typeof checks
console.table([
    typeof name, name,
    typeof age, age,
    typeof isLoggedIn, isLoggedIn,
    typeof null, null,               // 👀 null is "object" (quirk in JS)
    typeof undefined, undefined      // ✅ "undefined"
]);

/*
📌 JavaScript Data Types:
- number      => 2^53 range
- bigint      => for very large integers
- string      => text
- boolean     => true / false
- null        => intentional absence of value (standalone value)
- undefined   => variable declared but not assigned
- symbol      => unique identifier
- object      => collections
*/
