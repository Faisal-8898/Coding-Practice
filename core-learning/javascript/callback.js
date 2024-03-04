// function display(some) {
//   console.log(some);
// }
//
// function sum(a, b, cb) {
//   const result = a + b;
//   if (cb) cb(result);
//   return result + 29;
// }
//
// console.log(sum(2, 3, display));

// console.log("line 1 code");
//
// setTimeout(() => {
//   console.log("bhai ami majher public");
// }, 3000);
//
// console.log("line 3 code");

console.log("line 1 code");

function complexFunction() {
  console.log("Complex function started");

  const startTime = Date.now();

  // Simulate a long-running task
  while (Date.now() - startTime < 6000) {
    // This loop runs for at least 6 seconds
  }

  console.log("Complex function completed");
}

setTimeout(() => {
  complexFunction();
}, 0);
complexFunction();
console.log("line 3 code");
