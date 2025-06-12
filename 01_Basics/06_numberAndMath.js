const score =400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber= 123.8890

// console.log(otherNumber.toFixed(3));
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(4));
// console.log(otherNumber.toPrecision(5));


const hundreds = 1000000000000;
// console.log(hundreds)
// console.log(hundreds.toLocaleString('en')) //US 
// console.log(hundreds.toLocaleString('en-IN')) 

// +++++++++++++++MATHS+++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.56));
console.log(Math.ceil(4.56));
console.log(Math.floor(4.56));
console.log(Math.min(1,2,3,4,5));
console.log(Math.max(1,2,3,4,5));


console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;  

// Math.random() * (max - min + 1) \\

console.log(Math.floor(Math.random() * (max - min +1))+min)