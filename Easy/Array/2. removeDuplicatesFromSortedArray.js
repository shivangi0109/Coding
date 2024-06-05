// Problem 26 - Remove Duplicates from Sorted Array
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

const removeDuplicates = (nums) => {
  let left = 0;

  for (let right = 1; right < nums.length; right++) {
    if (nums[left] !== nums[right]) {
      nums[left+1] = nums[right];
      left++;
    }
  }

  return left+1;
};

// Time complexity: O(n)
// Space complexity: O(1)

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]