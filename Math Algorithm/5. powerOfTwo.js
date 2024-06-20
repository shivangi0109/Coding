const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2
  }
  return true;
};

console.log(isPowerOfTwo(1)); // 2^0 = true
console.log(isPowerOfTwo(2)); // 2^1 = true
console.log(isPowerOfTwo(5)); // false

// Time complexity: O(logn)
// Space Complexity: O(1)