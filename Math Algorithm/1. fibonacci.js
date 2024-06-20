const fibonacci = (n) => {
  const fibResult = [0, 1];

  for( let i = 2; i < n; i++) {
    fibResult[i] = fibResult[i-1] + fibResult[i-2];
    // OR
    // fibResult.push(fibResult[i-1] + fibResult[i-2]);
  }
  return fibResult;
};

console.log(fibonacci(2)); // [0, 1]
console.log(fibonacci(3)); // [0, 1, 1]
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]

// Time complexity: O(n)
// Space Complexity: O(n)