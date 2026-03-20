// fibonacci-series
// fibonacci(2) = [0,1]
// fibonacci(7) = [0,1,1,2,3,5,8]

function fibonacci(num) {
  if (typeof num == "number" || num !== NaN) {
    let op = [0, 1];
    for (let i = 2; i < num; i++) {
      op[i] = op[i - 1] + op[i - 2];
    }
    console.log(op);
  } else {
    console.log(`Invalid Input: Please enter a number!`);
  }
}

fibonacci(7);
fibonacci(3);
fibonacci(2);

// Time Complexity - O(n) / linear
