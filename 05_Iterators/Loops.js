// ================================
// 🔁 FOR LOOP + BREAK + CONTINUE
// ================================
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numArray.length; i++) {
    const element = numArray[i];
    (i === 5)
        ? console.log(`${i} is the best number`)
        : console.log(`${element}`);
}

// ✅ Nested for loop (Multiplication table)
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// ✅ Loop through strings/arrays with break & continue
let myArray = ["a", "b", "c", "d"];
for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
}

for (let i = 1; i <= 20; i++) {
    if (i === 3) continue;  // skip 3
    if (i === 5) break;     // stop at 5
    console.log(`Value of i is ${i}`);
}

console.log("\n");

// ================================
// 🔁 WHILE LOOP
// ================================
let index = 0;
while (index <= 10) {
    console.log("While Loop:", index);
    index += 2;
}

let myArray2 = ["q", "w", "e", "r", "t", "y"];
let arrIndex = 0;
while (arrIndex < myArray2.length) {
    console.log("From myArray2:", myArray2[arrIndex++]);
}

console.log("\n");

// ================================
// 🔁 DO-WHILE LOOP
// ================================
let score = 0;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);

console.log("\n");

// ================================
// 🔁 FOR...OF LOOP
// ================================

const loopArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of loopArray) {
    console.log("For...of number:", num);
}

const loopString = "Hello World !!";
for (const char of loopString) {
    console.log(`Each char: ${char}`);
}

// ✅ for...of with Map
const countryMap = new Map();
countryMap.set('IN', 'India');
countryMap.set('USA', 'America');
countryMap.set('UK', 'United Kingdom');

for (const [key, value] of countryMap) {
    console.log(`${key} => ${value}`);
}

// ✅ for...of on Object using Object.entries()
const gameObj = {
    game1: "NFS",
    game2: "GTA"
};

for (const [key, value] of Object.entries(gameObj)) {
    console.log(`${key} => ${value}`);
}

console.log("\n");

// ================================
// 🔁 FOR...IN LOOP
// ================================
const myObj2 = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby"
};

for (const key in myObj2) {
    console.log(`Key: ${key}, Value: ${myObj2[key]}`);
}

const arr3 = ['a', 's', 'd', 'f'];
for (const index in arr3) {
    console.log(`Index: ${index}, Value: ${arr3[index]}`);
}

// ❌ for...in does not work on Map (no output expected)
const map2 = new Map();
map2.set('IN', 'INDIA');
map2.set('USA', 'AMERICA');
map2.set('UK', 'UNITED KINGDOM');

for (const key in map2) {
    console.log("Map for...in (no output expected):", key);
}

console.log("\n");

// ================================
// 🔁 FOREACH LOOP
// ================================

const coding = ["js", "cpp", "rb", "c", "sci"];

// Normal function
coding.forEach(function (val) {
    console.log("forEach value:", val);
});

// Arrow function
coding.forEach(element => {
    console.log("Arrow forEach:", element);
});

// Function passed directly
function print(item) {
    console.log("Printed via function:", item);
}
coding.forEach(print);

// Access item, index, and array
coding.forEach((item, index, fullArr) => {
    console.log(`Item: ${item}, Index: ${index}, Full array: ${fullArr}`);
});

// Array of objects
const myCoding = [
    { language: "JavaScript", extention: "js" },
    { language: "C++", extention: "cpp" },
    { language: "Java", extention: "java" },
];

myCoding.forEach((item) => {
    console.log(`Language: ${item.language}, Ext: ${item.extention}`);
});

/*
📌 Loop Types Summary:

1️⃣ for        ➤ Manual loop (index control)
2️⃣ while      ➤ Loop until condition breaks
3️⃣ do-while   ➤ Runs at least once
4️⃣ for...of   ➤ Iterates over iterable (arrays, strings, maps)
5️⃣ for...in   ➤ Iterates over keys (objects, arrays)
6️⃣ forEach    ➤ Functional array method (only for arrays)
*/







