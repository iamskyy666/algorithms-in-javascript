//Ex. Merge sorted arrays[]

function mergeSortedArr(arr1, arr2) {
  //Check inputs
  if (!Array.isArray(arr1) || !Array.isArray(arr2) || !arr1 || !arr2) {
    return `ERROR! Enter 2 valid-arrays[] 🔴`;
  }
  const merged = [...arr1, ...arr2];
  return merged.sort((a, b) => a - b);
}

console.log(mergeSortedArr([10, 2, 3, "b"], [5, 6, 7, 7]));
