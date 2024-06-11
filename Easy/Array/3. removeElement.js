// Problem 27 - Remove Element
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

const removeElement = (nums, val) => {
  let left = 0;
  
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }
  }
  return left;
};

// Time Complexity - O(n)
// Space Complexity - O(1)

console.log(removeElement([0,1,2,2,3,0,4,2], 2));
// Output: 5, nums = [0,1,4,0,3,_,_,_]