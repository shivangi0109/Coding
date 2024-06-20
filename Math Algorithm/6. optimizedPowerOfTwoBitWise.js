const isPowerOfTwoBitWise = (n) => {
  if (n < 1) {
    return false;
  }
  return (n & (n-1)) === 0;
};

console.log(isPowerOfTwoBitWise(1)); // 2^0 = true
console.log(isPowerOfTwoBitWise(2)); // 2^1 = true
console.log(isPowerOfTwoBitWise(5)); // false

// Time complexity: O(1)
// Space Complexity: O(1)