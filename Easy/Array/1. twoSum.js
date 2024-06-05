// Problem 1 - Two Sum
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Explanation: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


// Solution 1 -
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//           if (nums[j] === target - nums[i]) {
//               return [i, j];
//           }
//       }
//   }
//   // In case there is no solution, return null
//   return null;
// };

// Time complexity: O(n^2)
// Space complexity: O(1)


// Solution 2 -
// const twoSum = (nums, target) => {
//   const map = {};

//   for (let i = 0; i < nums.length; i++) {
//     map[nums[i]] = i;
//   }
//   console.log(map);

//   const result = [];

//   for (let i = 0; i < nums.length; i++) {
//     const numberNeeded = target - nums[i];

//     if (map[numberNeeded] !== undefined && map[numberNeeded] !== i) {
//       return [i, map[numberNeeded]];
//     }
//   }

//   return result;
// };

// Time complexity: O(n)
// Space complexity: O(n)

// Solution 2 - Best 
const twoSum = function(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let numberNeeded = target - nums[i];

    if (map[numberNeeded] !== undefined) {
      return [map[numberNeeded], i];
    }

    map[nums[i]] = i;
  }
};

// Time complexity: O(n)
// Space complexity: O(n)

console.log(twoSum([2,7,11,15], 9));
// Output: [0,1]

// console.log(twoSum([], 9));

console.log(twoSum([3,2,4], 6));
//Output: [1,2]

console.log(twoSum([3,3], 6));
// Output: [0,1]