// const fibo = (n) => {
//   let a = 0,
//     b = 1;
//   for (let i = 1; i < n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return a;
// };
//
// console.log(fibo(8));
// const str = "mystring";
// const n = str.length;
// console.log(str.charCodeAt(0));
// for (let char of str) {
//   console.log(char.charCodeAt(0) - "a".charCodeAt(0));
// }
// let person = {
//   name: "John",
//   age: 30,
// };
// let arr = [];
// arr.push(person);
// console.log(arr);

// Create a complex object
const complexObject = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "Exampleland",
  },
  hobbies: ["reading", "coding", "traveling"],
  isStudent: false,
  details: {
    weight: 75,
    height: 180,
  },
};

// Convert the complex object into an array
const objectToArray = Object.entries(complexObject);

// Display the result
console.log("Complex Object:");
console.log(complexObject);

console.log("\nArray Representation:");
console.log(objectToArray);
