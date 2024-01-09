console.log("hello" === String("hello")); //true
console.log("hello" === "hello"); //true

const str1 = "hello";
const str2 = "hello";

console.log(str1 === str2); //true

// now lets thing about symbol

const sym1 = Symbol("hello");
const sym2 = Symbol("hello");

console.log(sym1 === sym2);
console.log(sym1);

const sym3 = Symbol.for("hello");

console.log(sym3);

// creating a seat reservation system for passengers
const WIN = "WINDOW";
const AISLE = "AISLE";
const MID = "MIDDLE";

// we can make this unique so that no one can access this how ?
// Symbol
const crew = "WINDOW";

function reserveSeat(seatType) {
  // lets hav  a switch case
  switch (seatType) {
    case WIN:
      return console.log("you got a window seat");
    case AISLE:
      console.log("you got a aisle seat");
      break;
    case MID:
      console.log("you got a middle seat");
      break;
    default:
      console.log("invalid seat type");
  }
}

console.log(reserveSeat(WIN));
console.log(reserveSeat(crew));

const info = Symbol("secret Information");

const user = {
  name: "rohit",
  age: 23,
  homeTown: "Matuail",
  secretkey: "slaskdfjasf",
  [info]: "345809jgdl",
};

console.log(user[info]);

// Using symbols for special methods
const calculator = {
  [Symbol.for("add")]: function (a, b) {
    return a + b;
  },
  [Symbol.for("subtract")]: function (a, b) {
    return a - b;
  },
};

// External code can't accidentally override the special methods
calculator.add = "This is not a function";

// Using the special methods defined with symbols
console.log(calculator[Symbol.for("add")](5, 3)); // Outputs: 8
console.log(calculator[Symbol.for("subtract")](10, 4)); // Outputs: 6
