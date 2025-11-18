//O(n) -> linear //most common // Compression Algo. -> boxes => compression(boxes) => O/P (no. of ops increase with the no. of input items)

//O(1) -> constant time // boxes -> compression(boxes[0]) => O/P
// (no. of ops remains the same irrespective of the no. of input items)

// O(log n) -> logarithmic time // boxes -> sort(boxes) => search(boxes[mid]) => O/P (log n)

const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

const largeArr = new Array(1000).fill("nemo");

//O(n)
function findNemo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      console.log("Found Nemo! 🐠");
    }
  }
}

//O(1) - Better than O(n).. Flat line 📊/Constant Time, Scalable ✅, Excellent 💖
function logFirstTwo(arr) {
  //O(1) + O(1) = O(2).. But, for simplicity => O(1)
  console.log(`The first two items are 1️⃣${arr[0]} and 2️⃣${arr[1]}.`);
}

// findNemo(nemo);
// findNemo(everyone);
// findNemo(largeArr);

//logFirstTwo(everyone);

//! Ex: Log all pairs of array[]
//! nested loops: O(n * n) = (O^n)

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function logPairs(arr) {
  console.log("All pairs of array:");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(`(${arr[i]}, ${arr[j]})`);
    }
  }
}

//logPairs(numArr);
