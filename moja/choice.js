import fs from "fs";

function processNumbers(filename) {
  // Read the file
  const data = fs.readFileSync(filename, "utf8");

  // Split the data into an array of numbers
  let numbers = data
    .split("\n")
    .map((num) => num.trim())
    .filter((num) => num !== "");

  // Function to check if the last 7 digits have 3 different digits in a row
  function hasThreeDifferentDigitsInRow(num) {
    // Extract the last 7 digits
    const lastSeven = num.slice(-7);
    for (let i = 0; i <= 4; i++) {
      if (
        lastSeven[i] !== lastSeven[i + 1] &&
        lastSeven[i] !== lastSeven[i + 2] &&
        lastSeven[i + 1] !== lastSeven[i + 2]
      ) {
        return true; // Found 3 different digits in a row
      }
    }
    return false;
  }

  // Filter out numbers based on the last 7 digits
  numbers = numbers.filter((num) => {
    if (num.length !== 13) {
      console.warn(`Warning: Number ${num} is not 15 digits long. Skipping.`);
      return false;
    }
    return !hasThreeDifferentDigitsInRow(num);
  });

  console.log("Processed numbers:", numbers);
  console.log("Total numbers remaining:", numbers.length);

  // Optionally, write the processed numbers back to a file
  fs.writeFileSync("processed.txt", numbers.join("\n"));

  return numbers;
}

// Usage
const filename = "robiNumbers.txt"; // Replace with your actual filename
processNumbers(filename);
