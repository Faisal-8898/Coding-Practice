(() => {
  let count = 0;
  count++;
  console.log(count);
})();
console.log(count);
((a, b) => {
  console.log(a + b);
})(1, 2);
