// if n is power of 2 or not
// 1=2^0 ☑️
// 2=2^1 ☑️
// 5 = ❌

function isPowerOfTwo(num) {
  if (num < 1) {
    return false;
  }
  while (num > 1) {
    if (num % 2 !== 0) {
      return false;
    } else {
      num = num / 2;
    }
  }
  return true;
}

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(5));

// ✅ Time Complexity = O(logn)

function isPowerOfTwoOptimized(num) {
  // bitwise ops.
  if (num < 1) {
    return false;
  }
  return (num & (num - 1)) === 0;
}

console.log(isPowerOfTwoOptimized(2));
console.log(isPowerOfTwoOptimized(1));
console.log(isPowerOfTwoOptimized(4));
console.log(isPowerOfTwoOptimized(5));

// ✅ Time Complexity = O(1)
