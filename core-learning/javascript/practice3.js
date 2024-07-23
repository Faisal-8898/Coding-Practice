function sum(n) {
  let totalSum = 0;
  for (let i = 0; i < n; i++) {
    totalSum += i;
  }
  console.log(`Sum: ${totalSum}`);
}

// Measure the time for setTimeout
const setTimeoutStartTime = new Date().getTime();

setTimeout(() => {
  const setTimeoutExecutionTime = new Date().getTime();
  console.log(
    `setTimeout triggered after: ${(setTimeoutExecutionTime - setTimeoutStartTime) / 1000} seconds`,
  );

  // Measure the execution time of the sum function
  const sumStartTime = new Date().getTime();
  sum(20000000000);
  const sumEndTime = new Date().getTime();
  console.log(
    `sum function execution time: ${(sumEndTime - sumStartTime) / 1000} seconds`,
  );
}, 1000 * 30);

// Measure the immediate execution time of the sum function
const immediateStartTime = new Date().getTime();
sum(20000000000);
const immediateEndTime = new Date().getTime();
console.log(
  `Immediate execution time: ${(immediateEndTime - immediateStartTime) / 1000} seconds`,
);
