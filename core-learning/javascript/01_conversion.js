// function convertToNumber(value) {
//   if (value === null || value === undefined) {
//     return { status: "Value is null or undefined", number: null };
//   }
//
//   const number = Number(value);
//
//   if (isNaN(number)) {
//     return { status: "Cannot be converted to a number", number: null };
//   }
//
//   return { status: "Successful conversion", number: number };
// }

const { words } = require("lodash");

let age = "33a";
let temp = null;

// const str = new String("hello world i am object"); // thing that its array [0]
// console.log(str.valueOf());

let numa = 34;

const numaString = String(numa);

// console.log(numaString);
// console.log(typeof numaString);
//
const valueInNumber = Number(age);
const tempInNumber = Number(temp);

console.log(typeof valueInNumber);
console.log(valueInNumber);
// console.log(typeof tempInNumber);
// console.log(tempInNumber);

// 3 -> 3
// "33" -> 33
// "33abc" -> NaN
// "abc" -> NaN
// null -> 0
