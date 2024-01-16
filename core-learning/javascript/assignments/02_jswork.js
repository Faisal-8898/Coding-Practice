const bodyInformation = Symbol("bodyInformation");
const eyePower = Symbol("bodyInformation");
const person = {
  name: {
    firstName: "Sakib",
    lastName: "Al Hasan",
  },
  birth: {
    age: 36,
    birthPlace: {
      zill: "Magura",
      division: "Khulna",
      country: "Bangladesh",
    },
    birthYear: "1987",
  },
  education: {
    depertment: "BBA",
    University: {
      name: "AIUB",
      location: {
        road: "408/1",
        place: "Khuril",
      },
    },
  },
  profession: ["Politician", "cricketer"],
  isAllrounder: true,
  [bodyInformation]: { height: "5.9", weight: "65kg" },
  [eyePower]: 6.6,
};
const arr = [];
arr.push(person);
const arr2 = Object.entries(person);
// console.log(arr2);
function checkNumber(value) {
  if (value === null || value === "" || value === undefined) {
    return { isValid: false, number: null };
  }
  const number = Number(value);
  if (isNaN(number)) {
    return { isValid: false, number: null };
  } else {
    return { isValid: true, number: number };
  }
}
console.log(checkNumber(person.birth.birthYear).number);
