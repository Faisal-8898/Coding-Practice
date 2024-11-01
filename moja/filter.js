import fs from "fs";

function processNumbers(filename) {
  // Read the file and split lines into an array, trimming spaces
  let numbers = fs
    .readFileSync(filename, "utf8")
    .split("\n")
    .map((num) => num.trim())
    .filter((num) => num !== ""); // Remove empty lines

  // Remove duplicates by converting the array to a Set, then back to an array
  numbers = [...new Set(numbers)];

  console.log("Unique numbers:", numbers);
  console.log("Total unique numbers:", numbers.length);

  // Write the unique numbers to 'hello.txt'
  fs.writeFileSync("hello.txt", numbers.join("\n"));

  return numbers;
}

// Usage
processNumbers("robiNumbers.txt"); // Replace with your actual filename
