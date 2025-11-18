const arr = [1, 2, 3, 4, 5];
const targetNo = 4;

function twoSum(arr, target) {
  let sum = 0;
  for (let idx = 0; idx < arr.length; idx++) {
    sum += arr[idx];
    if (sum === target) {
      return `${idx}, ${idx+1}`;
    }
  }
  return sum;
}

console.log(twoSum(arr, targetNo))
