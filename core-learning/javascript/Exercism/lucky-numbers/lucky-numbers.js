// @ts-check

import { parseInt } from "lodash";

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let string = array1.join("");
  let string2 = array2.join("");
  return parseInt(string) + parseInt(string2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let string = String(value);
  const length = string.length;
  for (let i = 0, j = length - 1; i < length && j >= 0; i++, j--) {
    if (string[i] !== string[j]) {
      return false;
    }
  }
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === "" || input === null || input === undefined) {
    return "Required field";
  } else if (input === "0" || isNaN(Number(input))) {
    return "Must be a number besides 0";
  } else {
    return "";
  }
}
