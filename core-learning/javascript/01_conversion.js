function convertToNumber(value) {
  if (value === null || value === undefined) {
    return { status: "Value is null or undefined", number: null };
  }

  const number = Number(value);

  if (isNaN(number)) {
    return { status: "Cannot be converted to a number", number: null };
  }

  return { status: "Successful conversion", number: number };
}

let age = "33a";
let temp = null;

const valueInNumber = Number(age);
const tempInNumber = Number(temp);

console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log(typeof tempInNumber);
console.log(tempInNumber);

// 3 -> 3
// "33" -> 33
// "33abc" -> NaN
// "abc" -> NaN
// null -> 0
