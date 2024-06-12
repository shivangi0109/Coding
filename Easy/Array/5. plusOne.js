// Problem 66 - Plus One
// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

// Example 3:
// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

// Explanation: You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
// The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

// Solution 1 - (Wrong - Not recommended)
// const plusOne = (digits) => {
//   const convertDigitsToString = digits.join("");
//   const convertStringToNumber = parseInt(convertDigitsToString);
//   const AddOneToNumer = convertStringToNumber + 1;
//   const convertNumberToString = AddOneToNumer.toString();
//   const convertStringToArray = convertNumberToString.split("");
//   return convertStringToArray;
// };

// Solution 2 -
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] < 9) {
          digits[i]++;
          return digits;
      }
      digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};

/*
Time Complexity: O(n)
Space Complexity: O(n)
1. Loop digits backwards.
    a. If value is less than 9.
        i. Increment value.
        ii. Return digits.
    b. Change current value to 0.
2. Add 1 to the front of the digits.
3. Return digits.
*/

console.log(plusOne([1, 2, 3]));
// Output: [1,2,4]

console.log(plusOne([4, 3, 2, 1]));
// Output: [4,3,2,2]

console.log(plusOne([9]));
// Output: [1,0]

console.log(plusOne([1, 2, 9]));
// Output: [1,3,0]