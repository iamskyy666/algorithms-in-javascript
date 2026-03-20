// isPrime(5)= true (1*5) or (5*1) // Only divided by 1 or the num itself
// isPrime(4) = false (4,2,1) etc.

function isPrime(num) {
  if (typeof num === "number" && !isNaN(num)) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
      return true;
    }
  } else {
    return `Please enter a valid number!`;
  }
}

console.log(isPrime(4));
console.log(isPrime(7));

// ✅ Time Complexity = O(sqrt(n))
