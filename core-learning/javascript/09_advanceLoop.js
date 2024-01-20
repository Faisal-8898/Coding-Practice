// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// Array.prototype.name = "M";
//
// for (let index in arr) {
//   console.log(index);
// }
//
// for (let [index, element] of arr.entries()) {
//   // print index of array element
//   console.log(index);
//   console.log(element);
// }
const obj = {
  name: "M",
  age: 20,
  address: "HN",
  greeting: function () {
    console.log("Hello");
  },
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arr2 = arr.map(function (value, index) {
  //return values with multiply 2
  return value * 2;
});
console.log(arr2);

const arr3 = arr.filter(function (value, index) {
  return value % 2 === 0;
});
console.log(arr3);

// Creating an array with some elements

const myArray = [1, 2, 3];

console.log(myArray.customProperty);
// Adding a custom property to the array's prototype
Array.prototype.customProperty = "Hello";
const arr5 = [4, 5, 6];
// Using for...in to iterate over the array
for (let key in myArray) {
  console.log(key, myArray[key]);
}
console.log(arr5.customProperty);
