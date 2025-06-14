// Creating an object in two ways:

// Singleton object creation using Object constructor (less common)
 // const app = new Object({}) 

// Non-singleton (literal) way — more common and readable
const app = {} 

// Adding properties to the object dynamically
app.id = "123abc"
app.name = "das"
app.isLoggedIn = true

// Logging the object to check its current structure
console.log(app);    


// Nested object structure — shows how deep nesting works
const regularApp = {
    email: "das@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Das Gajraj",
            lastname: "Sharma"
        },
        // You could also add: firstname: "OnlyFirst" here if needed
    }
}

// Using optional chaining (?.) to safely access deeply nested values
console.log(regularApp.fullname?.userfullname?.firstname);    


// Object merging practice:

// Two simple objects to merge
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

console.log(`After merging both Objects Obj1`);
console.log(obj1);
console.log(` and Obj2 `);
console.log(obj2);

// ❌ Incorrect merge — this nests obj1 and obj2 as separate properties in obj3
let obj3 = {obj1, obj2}
console.log(`merged Object is `);
console.log(obj3); // Output: { obj1: {...}, obj2: {...} }

// ✅ Correct merge using spread operator
let obj4 = {...obj1, ...obj2}
console.log(obj4); // Output: {1: "a", 2: "b", 3: "a", 4: "b"}

// ✅ Same as above using Object.assign
const obj5 = Object.assign({}, obj1, obj2)
console.log(obj5); // Output: {1: "a", 2: "b", 3: "a", 4: "b"}


// Simulating user data from an API: array of objects
const users = [
    {
        id: 1,
        email: "1@email.com"
    },
    {
        id: 2,
        email: "2@email.com"
    },
    {
        id: 3,
        email: "3@email.com"
    },
]

// Accessing second user's email
console.log(users[1].email); // Output: 2@email.com

// Re-checking `app` object
console.log(app);

// Object utility methods:

// Get all keys as an array
console.log(Object.keys(app)) // Output: ['id', 'name', 'isLoggedIn']

// Get all values as an array
console.log(Object.values(app)) // Output: ['123abc', 'das', true]

// Get all entries as array of [key, value] pairs
console.log(Object.entries(app)) // Output: [['id', '123abc'], ['name', 'das'], ['isLoggedIn', true]]

// Check if property exists in the object
console.log(app.hasOwnProperty('isLoggedIn')); // true
console.log(app.hasOwnProperty('isLogged'));   // false (property doesn't exist)

// --- Object Destructuring in JavaScript ---

// Define a course object with multiple properties
const course = {
    coursename: "js",
    price: 500,
    courseInstructor: "me"
}

// ✅ Accessing property directly using dot notation
console.log("Accessing courseInstructor using dot notation:");
console.log(course.courseInstructor); // Output: me

// ✅ Destructuring: Extracting courseInstructor property directly
const { courseInstructor } = course
console.log("Accessing courseInstructor using destructuring:");
console.log(courseInstructor); // Output: me

// ✅ Destructuring with renaming: Assign courseInstructor to a new variable 'teacher'
const { courseInstructor: teacher } = course
console.log("Accessing courseInstructor with renamed variable (teacher):");
console.log(teacher); // Output: me


// --- JSON Data Format ---
// JSON (JavaScript Object Notation) is a text-based format often used for APIs
// Example of how JSON looks (NOTE: this is just a comment, not valid code)
/*
{
    "name": "das",
    "coursename": "js",
    "price": "free"
}
*/

// 🔗 A sample GitHub API URL (used for learning)
 let url = "https://api.github.com/users/dasgajraj"

// APIs usually return JSON data in 2 common structures:

// 1. When the response is a single object:
/*
{
    "id": 1,
    "name": "Das",
    "email": "das@example.com"
}
*/

// 2. When the response is an array of objects:
/*
[
    {
        "id": 1,
        "name": "Das"
    },
    {
        "id": 2,
        "name": "Raj"
    }
]
*/

// In real projects, you'll often fetch this data using fetch()/axios and parse it like:
const response = await fetch(url)
const data = await response.json()
console.log(data)

