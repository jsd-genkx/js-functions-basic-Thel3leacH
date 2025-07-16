"use strict";

/*
Task 02: Check Even or Odd

📝 Instructions
- Create a function named checkEvenOrOdd
- It should accept one parameter: a number
- Return "Even" if the number is divisible by 2
- Return "Odd" if it is not

❌ Do not print inside the function.
✅ Only return the result.
*/

// 👨‍💻 TODO-01: Write your code below to complete the task as described above.

// Solution 1 : Function Expression

// const checkEvenOrOdd = function(number) {
//     if (number % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// };

// Solution 2 : Arrow Function

const checkEvenOrOdd = (number) => {
    return number % 2 === 0 ? "Even" : "Odd";  // ternary operation
};

// Example Test Cases
console.log(checkEvenOrOdd(4)); // "Even"
console.log(checkEvenOrOdd(9)); // "Odd"
console.log(checkEvenOrOdd(0)); // "Even"
console.log(checkEvenOrOdd(-3)); // "Odd"
