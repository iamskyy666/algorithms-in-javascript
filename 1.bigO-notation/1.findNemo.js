//What is good code?
// 1.Readable 💎
// 2.Scalable 📈

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

function findNemo(arr) {
  let t0 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      console.log("Found Nemo! 🐠");
    }
  }
  let t1 = performance.now();
  console.log(`Call to findNemo took ${t1 - t0} ms ⏱️`);
}

findNemo(nemo);
findNemo(everyone);
findNemo(largeArr);

//Instead of performance.now() [time], we use Big-O [no. of ops.]

//Big-O Complexity Chart
/*
In Big O notation, from "good" (fastest) to "bad" (slowest) the order is: 
O(1) (constant) < O(log n) (logarithmic) < O(n) (linear) < O(n log n) (log-linear) < O(n^2) (quadratic) < O(2^n) (exponential) < O(n!) (factorial). 
*/
