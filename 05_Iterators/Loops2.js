

// ++++++++++++++   LOOPS2.js      ++++++++++++++++++++=
// ✅ forEach vs filter
const myCoding = [
    { language: "JavaScript", extention: "js" },
    { language: "C++", extention: "cpp" },
    { language: "Java", extention: "java" },
];

// ❌ forEach does not return values
const values = myCoding.forEach((item) => {
    console.log("forEach item:", item);
});
console.log("forEach returned:", values); // undefined

// ✅ filter returns a new array
let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filtered = myNums.filter((num) => num > 5);
console.log("Filtered > 5:", filtered);

// ✅ Using full function block with return
const filtered2 = myNums.filter((num) => {
    return num > 5;
});
console.log("Filtered (block):", filtered2);

// ⚠️ No return statement inside filter block
const filtered3 = myNums.filter((num) => {
    // no return means always undefined = false
});
console.log("Filtered (no return):", filtered3); // []

// ✅ Simulate filter using forEach
const newNums = [];
myNums.forEach((num) => {
    if (num > 5) newNums.push(num);
});
console.log("newNums using forEach:", newNums);

console.log("\n");

// ✅ Real-world filter example: Books
const books = [
    { title: "The Lost Horizon", genre: "Adventure", publish: 1933, edition: "First" },
    { title: "Echoes of Tomorrow", genre: "Science Fiction", publish: 2019, edition: "Second" },
    { title: "Whispers in the Wind", genre: "Romance", publish: 2005, edition: "Third" },
    { title: "The Silent Witness", genre: "Mystery", publish: 2012, edition: "First" },
    { title: "Beyond the Shadows", genre: "Fantasy", publish: 2008, edition: "Fourth" },
    { title: "A History of Time", genre: "Non-Fiction", publish: 1995, edition: "Revised" },
    { title: "Fragments of Light", genre: "Drama", publish: 2021, edition: "First" },
];

const firstEditionBooks = books.filter((book) => book.edition === "First");
console.log("📚 First Edition Books:", firstEditionBooks);

const dramaFirstEdition = books.filter(
    (book) => book.edition === "First" && book.genre === "Drama"
);
console.log("🎭 Drama + First Edition:", dramaFirstEdition);

console.log("\n");

// ✅ .map examples
myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Add 10
const addTen = myNums.map((val) => val + 10);
console.log("Add 10:", addTen);

// Add 20 using return block
const addTwenty = myNums.map((val) => {
    return val + 20;
});
console.log("Add 20:", addTwenty);

// ✅ Chaining map + filter
console.log("Chaining: multiply by 10, add 1, filter >= 40");

const chainingArray = myNums
    .map((val) => val * 10)
    .map((val) => val + 1)
    .filter((item) => item >= 40);

console.log("Chaining result:", chainingArray);

console.log("\n");

// ✅ reduce() — sum of array
const array = [1, 2, 3, 4, 5];
const total = array.reduce((acc, current) => acc + current, 0);
console.log("Sum of array using reduce:", total);

// ✅ Shopping Cart Example
const shoppingCart = [
    { title: "Wireless Mouse", price: 19.99 },
    { title: "Bluetooth Headphones", price: 49.99 },
    { title: "USB-C Charger", price: 15.99 },
    { title: "Laptop Stand", price: 29.99 },
    { title: "Webcam", price: 39.99 },
    { title: "Mechanical Keyboard", price: 89.99 },
    { title: "External Hard Drive", price: 59.99 },
    { title: "Smartphone Case", price: 12.99 },
    { title: "Fitness Tracker", price: 69.99 },
    { title: "LED Desk Lamp", price: 24.99 },
];

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(`🛒 Total price of ${shoppingCart.length} items: ₹${totalPrice.toFixed(2)}`);
