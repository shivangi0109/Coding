// Problem 35 - Search Insert Position
// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Explanation: Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

const searchInsert = (nums, target) => {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (nums[middleIndex] === target) {
      return middleIndex;
    } 
    else if (nums[middleIndex] < target) {
      leftIndex = middleIndex + 1;
    } 
    else {
      rightIndex = middleIndex - 1;
    }
  }
  return leftIndex;
};

// Time Complexity - O(log n)
// Space Complexity - O(1)

console.log(searchInsert([1,3,5,6], 5));
// Output: 2

console.log(searchInsert([1,3,5,6], 2));
// Output: 1

console.log(searchInsert([1,3,5,6], 7));
// Output: 4

console.log(searchInsert([1,3,5,6], 3));
// Output: 1

console.log(searchInsert([1,3,5,6,7,8,9], 8));
// Output: 5