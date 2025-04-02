// String Manipulation Functions

// Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Count characters in a string
function countCharacters(str) {
  return str.length;
}

// Capitalize the first letter of each word
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Array Functions

// Find the minimum and maximum value in an array

function findMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

// Sum all elements in an array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Filter array based on a condition (keep only even numbers)
function filterArray(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// Mathematical Functions

// Calculate factorial of a number
function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}

// Check if a number is prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Generate Fibonacci sequence up to n terms
function fibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}

// Example usage
console.log("Reverse the string : " + reverseString("Ryad")); // "olleh"
console.log("Counting characters : " + countCharacters("hello")); // 5
console.log("Cap the words : " + capitalizeWords("hello world")); // "Hello World"
console.log("Min and max : " + findMinMax([1, 5, 3, 9, 2])); // [1, 9]
console.log("sum of an array: " + sumArray([1, 2, 3, 4])); // 10
console.log("Filer array (only even): " + filterArray([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log("Factorial : " + factorial(5)); // 120
console.log("Prime check : " + isPrime(7)); // true
console.log("Fibonacci : " + fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
