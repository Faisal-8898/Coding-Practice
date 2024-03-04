const str = "alsjkfalskfdjasol";
const hello = str.slice(1, 4);

console.log(str, hello);

const fruits = ["mango", "banana", "coconut", "pineapple", "strawberry"];
const hel = fruits.slice(2);
console.log(fruits);
const moja = fruits.splice(3, 1, "rose");
console.log(hel, moja);
console.log(fruits);
