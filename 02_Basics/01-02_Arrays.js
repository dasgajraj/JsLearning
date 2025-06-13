// ======================= ARRAY BASICS =======================

// Creating a simple number array
const arr = [1, 2, 3];
console.log("Initial array:", arr);

// Creating an array of strings
const myHeros = ['a', 'b', 'c'];
console.log("Array of heroes:", myHeros);

// Creating an array using Array constructor
const array = new Array(1, 2); // same as [1, 2]
console.log("Array using constructor:", array);

// =================== ARRAY METHODS (Mutating) ===================

// Pushing elements to the end
arr.push(7);
console.log("After pushing 7:", arr);

arr.push(8);
console.log("After pushing 8:", arr);

arr.push(9);
console.log("After pushing 9:", arr);

// Removing the last element
arr.pop();
console.log("After popping last element:", arr);

// Adding element at the beginning
arr.unshift(9);
console.log("After unshifting 9 at start:", arr);

// Removing first element
arr.shift();
console.log("After shifting (removing first element):", arr);

// =================== ARRAY INSPECTION ===================

// Check if an element exists
console.log("Does array include 3?:", arr.includes(3));

// Find index of a specific element
console.log("Index of 3 in array:", arr.indexOf(3));

// =================== JOINING ARRAYS ===================

// Joining array into string
const newArr = arr.join(); // by default, joins with commas
console.log("Original array after join():", arr); // remains unchanged
console.log("Type after join (should be string):", typeof newArr);
console.log("Joined array string:", newArr);

// =================== SLICE vs SPLICE ===================

// slice() - does NOT modify original array
console.log("Original array before slice():", arr);
const slice = arr.slice(1, 3); // gets items at index 1 and 2
console.log("Sliced array (from index 1 to 2):", slice);
console.log("Original array after slice():", arr);

// splice() - DOES modify the original array
console.log("Original array before splice():", arr);
const splice = arr.splice(1, 3); // removes 3 elements from index 1
console.log("Spliced elements:", splice);
console.log("Original array after splice():", arr);

// =================== CONCAT & SPREAD ===================

const a = ["a", "b", "c", "d"];
const z = ["w", "x", "y", "z"];
console.log("Array a:", a);
console.log("Array z:", z);

// Using concat() to merge arrays
const concatResult = a.concat(z);
console.log("Using concat():", concatResult);

// Using spread operator to merge arrays
const all = [...a, ...z];
console.log("Using spread [...a, ...z]:", all);

// =================== FLATTENING ===================

// Nested array (deeply nested)
const masterArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
console.log("Master nested array:", masterArray);

// Flattening the array completely
const usableArray = masterArray.flat(Infinity);
console.log("Flattened array (flat(Infinity)):", usableArray);

// =================== ARRAY STATIC METHODS ===================

// Array.isArray() - checks if value is an array
console.log("Is 'Das Gajraj' an array?", Array.isArray("Das Gajraj")); // false

// Array.from() - converts iterable or array-like object to array
console.log("Array from string 'Das Gajraj':", Array.from("Das Gajraj"));

// Note: Below creates an empty array since object is not iterable
console.log("Array from object (will be empty):", Array.from({
    name: "Das Gajraj",
    surname: "Sharma"
}));

// Array.of() - creates array from values (even if only one)
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log("Array.of(score1, score2, score3):", Array.of(score1, score2, score3));

// =================== EXTRA ARRAY BASICS & TIPS ===================

// Creating empty array
const empty = [];
console.log("Empty array:", empty);

// Checking length
console.log("Length of array:", arr.length);

// Loop through array using forEach
console.log("Loop using forEach:");
arr.forEach((item, index) => {
    console.log(`Index ${index}:`, item);
});

// Using map to create a new array (square each number)
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log("Original numbers:", numbers);
console.log("Squared numbers using map():", squared);

// Filtering array (get numbers > 2)
const filtered = numbers.filter(num => num > 2);
console.log("Filtered (num > 2):", filtered);

// Reducing array to a sum
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers using reduce():", sum);

// Sorting array
const unsorted = [3, 1, 4, 2];
console.log("Unsorted array:", unsorted);
unsorted.sort((a, b) => a - b);
console.log("Sorted array (ascending):", unsorted);
