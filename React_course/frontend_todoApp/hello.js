const arr = [
  { name: "harkirat", age: 20 },
  { name: "faisal", age: 13 },
];

const arr2 = arr.map((value) => {
  return {
    name: value.name,
    age: value.age,
    shishu: value.age < 18,
  };
});

console.log(arr2);
