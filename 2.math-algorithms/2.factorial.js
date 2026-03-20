// factorial of a number
// Ex. factorial(4) =4*3*2*1 = 24
// Ex. factorial(5) =5*4*3*2*1 = 120

function factorial(num) {
  if (typeof num === "number" && !isNaN(num) && num > 0) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  } else {
    return `Please enter a valid number!`;
  }
}

console.log(factorial(4));
console.log(factorial(-5));
console.log(factorial(5));

// ✅ Time Complexity = O(n)
