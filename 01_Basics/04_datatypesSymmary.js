// ✅ Completed till 9th video

// ✅ Primitive (Call by Value)
// 📌 Copies are made (original value doesn't change)
let string = "ye string hai";
console.log("🔤 Original string:", string);

let string2 = string;  // Copy is made
string2 = "change kr diya mene";  // Changes only string2

console.log("📄 Modified string2:", string2);
console.log("🔁 Original string remains:", string);

// ✅ Non-Primitive (Reference Types)
// 📌 Reference is passed (changes affect original)
let user = {
    name: 'DasGajraj',
    uid: 1
};

let user2 = user;  // Reference is copied
user2.name = "Sharma";  // Changes original object too

console.log("👥 user object after change:", user);

// ✅ Data Types in JS
/*
Primitive Types (7): 
✔ String 
✔ Number 
✔ Boolean 
✔ null 
✔ undefined 
✔ Symbol 
✔ BigInt

Non-Primitive (Reference Types):
✔ Arrays 
✔ Objects 
✔ Functions
*/

const heros = ["a", "b", "c"];
let Obj = {
    name: "dasgajraj",
    age: 23
};

const myFunction = function () {
    console.log("⚙ Function Executed");
};

console.log("🦸 Heros array:", heros);
console.log("🧾 Object:", Obj);
console.log("📌 typeof myFunction:", typeof myFunction);
myFunction();

/*
📚 Memory Behavior:
- Stack (for primitives): Copies are made
- Heap (for references): Direct reference is passed
*/
