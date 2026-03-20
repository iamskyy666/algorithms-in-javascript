<img width="783" height="454" alt="image" src="https://github.com/user-attachments/assets/2d32b220-6298-40eb-b207-e780f701a1bd" />
<img width="1194" height="656" alt="image" src="https://github.com/user-attachments/assets/43b38aef-2c81-4183-b2da-5892f85d114a" />

---

# ⭐ What Is Big-O Notation?

Big-O notation is a mathematical way of describing **how fast an algorithm grows** as the input size increases.

It doesn’t measure:

* CPU time
* Memory
* Performance on your laptop

Instead, it measures:

* **Scalability**
* **Growth rate**
* **Worst-case behavior**

Think of Big-O as a **performance label** for algorithms.

---

# ⭐ Why Do We Use Big-O?

Because actual execution time changes based on:

* System performance
* Browser/Node version
* CPU/GPU speed
* Compiler optimization
* Input data
* Available memory

But growth rate never lies.

Big-O shows us which algorithm will still be fast even for 1M or 10M inputs.

---

# ⭐ The Purpose of Big-O

Big-O answers the question:

👉 **“How does the running time grow when input size (n) grows?”**

---

# ⭐ Important Rules of Big-O

### 1️⃣ We always focus on **worst-case**

E.g., searching an element in an array:
Best-case = first element
Worst-case = last element or not found
We use worst-case: **O(n)**.

### 2️⃣ Constants Don’t Matter

O(2n) → O(n)
O(5n + 100) → O(n)

We only care about **growth trend**, not exact numbers.

### 3️⃣ Drop Lower Order Terms

O(n² + n) → **O(n²)**
O(n + log n) → **O(n)** (if n dominates)

---

# ⭐ Most Common Big-O Complexities (Ranked Best → Worst)

| Big-O          | Name         | Example                                       |
| -------------- | ------------ | --------------------------------------------- |
| **O(1)**       | Constant     | Accessing array by index, Hash map lookup     |
| **O(log n)**   | Logarithmic  | Binary search                                 |
| **O(n)**       | Linear       | Loop through array                            |
| **O(n log n)** | Linearithmic | Sorting (Merge sort, QuickSort avg case)      |
| **O(n²)**      | Quadratic    | Nested loops                                  |
| **O(2ⁿ)**      | Exponential  | Recursion that branches (Fibonacci naive)     |
| **O(n!)**      | Factorial    | Permutations (traveling salesman brute force) |

---

# ⭐ Now Let’s Explain Each of Them in Depth

---

# 🔥 **1. O(1) — Constant Time**

The speed does **not** depend on the size of input.

### Example:

```js
let x = arr[2];       // Always constant time
```

Even if arr has:

* 10 items
* 10,000 items
* 10,000,000 items

…access by index is always **one step**.

---

# 🔥 **2. O(n) — Linear Time**

Work increases in proportion to input size.

### Example:

```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

If arr has:

* 10 items → 10 steps
* 100 items → 100 steps
* 1,000 items → 1,000 steps

Growth is straight line.

---

# 🔥 **3. O(n²) — Quadratic Time**

Nested loops are the most common cause.

```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i, j);
  }
}
```

If n doubles:

* Work becomes **4x**

If input increases to 1,000:

* Steps = 1,000,000

This is slow for large inputs.

---

# 🔥 **4. O(log n) — Logarithmic Time**

Each step **halves** the input size.

Perfect example: **Binary Search**

```js
function binarySearch(arr, target) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
```

If n = 1,024
Log₂(1024) = **10 steps**

This is extremely fast.

---

# 🔥 **5. O(n log n)** — Linearithmic

Used in efficient sorting algorithms:

* MergeSort
* HeapSort
* QuickSort (average)

These algorithms divide the array (log n) and then process each element (n).

So:
**divide × process** → **n log n**

---

# 🔥 **6. O(2ⁿ)** — Exponential Time

Brute-force recursion where each call creates 2 calls.

Example: Fibonacci (naive version)

```js
function fib(n) {
  if (n <= 1) return n;
  return fib(n-1) + fib(n-2);
}
```

If n = 10 → 1024 calls
If n = 50 → 1 trillion+ calls 😨

Always avoid unless input size is tiny.

---

# 🔥 **7. O(n!)** — Factorial Time

Worst possible case.
Used in solving permutations, like:

* Traveling Salesman
* Generating all possible seat arrangements
* Generating permutations

Example:

```js
function permute(arr) {
  if (arr.length === 0) return [[]];

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let rest = [...arr.slice(0, i), ...arr.slice(i+1)];
    for (let p of permute(rest)) {
      result.push([arr[i], ...p]);
    }
  }
  return result;
}
```

Too slow for anything above n = 10.

---

# ⭐ Big-O Space Complexity

Space complexity measures **extra memory used**.

Examples:

```js
let a = 10;  // O(1) space
```

```js
let arr = []; // O(n) space if arr grows
```

Recursion also consumes stack space:

```js
function recursion(n) {
  if (n === 0) return;
  recursion(n-1);
}
```

Space = O(n) (stack frames)

---

# ⭐ Big-O in Real JavaScript Interview Problems

### Example 1: Checking duplicates (Brute force)

```js
for (let i = 0; i < n; i++) {
  for (let j = i+1; j < n; j++) {
    if (arr[i] === arr[j]) return true;
  }
}
```

Time: **O(n²)**
Space: O(1)

---

### Example 2: Using a Set (Optimized)

```js
let set = new Set();
for (let x of arr) {
  if (set.has(x)) return true;
  set.add(x);
}
```

Time: **O(n)**
Space: **O(n)**
Faster and cleaner.

---

# ⭐ Big-O Graphically (Intuition)

Growth speed (slow → fast):

O(1)
O(log n)
O(n)
O(n log n)
O(n²)
O(2ⁿ)
O(n!)

The gap between O(n²) and O(2ⁿ)/O(n!) is huge.

---

# ⭐ Summary (Easy To Remember)

| Big-O      | Meaning     | Example             |
| ---------- | ----------- | ------------------- |
| O(1)       | Constant    | Hash lookup         |
| O(log n)   | Super fast  | Binary search       |
| O(n)       | Linear      | Loop                |
| O(n log n) | Sorting     | MergeSort           |
| O(n²)      | Quadratic   | Nested loops        |
| O(2ⁿ)      | Exponential | Recursive Fibonacci |
| O(n!)      | Factorial   | Permutations        |

---

# ⭐ What Is Space Complexity?

**Space Complexity** measures **how much extra memory an algorithm uses** as the input size grows.

This includes:

1. **Input space** (memory taken by input itself)
2. **Auxiliary space** (extra memory used by algorithm)

   * variables
   * data structures (arrays, objects, maps, sets)
   * recursion stack
   * temporary buffers

When interviewers say **Space Complexity**, they mean **Auxiliary Space**.

---

# ⭐ Why Space Complexity Matters?

Two algorithms might have the same time complexity but use different amounts of memory.

Example:

* Using an additional array → O(n) space
* Using two pointers (no extra array) → O(1) space

When input size becomes large, memory can also crash the program.

Space complexity helps us answer:

👉 **“How much extra memory does the algorithm consume?”**

---

# ⭐ How Do We Calculate Space Complexity?

We count **extra space**, not input size.

Examples:

```js
let x = 10;  // O(1)
let y = 20;  // O(1)
```

Even if we have 100 variables:

```js
let a, b, c, d ... ;
```

Still **O(1)** because constant space doesn’t scale with input.

But:

```js
let arr = [];  
for (let i = 0; i < n; i++) {
  arr.push(i);
}
```

Here:

* array grows with input
  So memory = **O(n)**

---

# ⭐ Common Space Complexities

| Complexity     | Meaning                                | Example                                     |
| -------------- | -------------------------------------- | ------------------------------------------- |
| **O(1)**       | Constant                               | Two pointers, in-place sorting, variables   |
| **O(log n)**   | Logarithmic                            | Recursion depth in binary search            |
| **O(n)**       | Linear                                 | New array, Set, Map, queue, recursion stack |
| **O(n log n)** | Merge Sort recursion tree + temp array |                                             |
| **O(n²)**      | 2D matrix algorithms                   |                                             |
| **O(n!)**      | Storing all permutations               |                                             |

---

# ⭐ Let's Explain Each With Deep Understanding

## 🔥 1. **O(1) Space — Constant**

The algorithm uses the same amount of memory regardless of input size.

### Example:

```js
function sum(arr) {
  let total = 0;   // O(1)
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;    // Output stored in 1 variable
}
```

Even though we loop through `arr`, we don’t create new memory that grows with input → **O(1)**.

### Real-world O(1) examples:

* Two pointer techniques
* Swapping in place
* Updating constant number of variables
* In-place array reversal
* In-place sorting (like selection sort)

---

## 🔥 2. **O(n) Space — Linear**

Space grows *directly* with the size of the input.

### Example:

```js
function getCopy(arr) {
  let copy = [...arr]; // creates a new array of size n
  return copy;         // O(n)
}
```

Because:

* If arr has 10 items → new array has 10
* If arr has 1,000 items → new array has 1,000

More examples of O(n) space:

* Creating a copy of data
* Storing values in Set or Map
* Using recursion that goes n-levels deep
* BFS/DFS storing visited nodes

---

## 🔥 3. **O(log n) Space — Logarithmic**

Mostly comes from **recursion depth**.

Example: Binary Search

```js
function binarySearch(arr, target, left = 0, right = arr.length-1) {
  if (left > right) return -1;

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;

  if (arr[mid] < target)
    return binarySearch(arr, target, mid + 1, right);   // call stack level +1

  return binarySearch(arr, target, left, mid - 1);
}
```

Recursion depth = log₂(n)
So auxiliary space = **O(log n)**

---

## 🔥 4. **O(n log n) Space**

Example: **Merge Sort**

Merge Sort needs:

* recursion depth = log n
* temp arrays = n

So total = **n log n**, but usually simplified to **O(n)** for auxiliary space.

---

## 🔥 5. **O(n²) Space**

Happens when we need 2D data structures.

Example: Creating adjacency matrix:

```js
let matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
```

This matrix stores n × n entries → **O(n²)**

Another example:

* DP table in dynamic programming
* Storing all pairs combinations

---

## 🔥 6. **O(n!) Space**

This occurs when storing all permutations:

```js
function permute(nums) {
  if (nums.length === 0) return [[]];

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let rest = [...nums.slice(0, i), ...nums.slice(i+1)];
    for (let p of permute(rest)) {
      result.push([nums[i], ...p]);   // storing ALL permutations
    }
  }
  return result; // O(n!)
}
```

Because permutations of n elements = **n!**

---

# ⭐ Space Complexity in Recursion

### Every recursive call adds a new frame to call stack.

Example:

```js
function countdown(n) {
  if (n === 0) return;
  countdown(n-1);
}
```

Total calls = n
Space = **O(n)**

Example: Fibonacci (recursive)

```js
function fib(n) {
  if (n <= 1) return n;
  return fib(n-1) + fib(n-2);
}
```

Depth = n
Space = **O(n)**
Time = **O(2ⁿ)**

---

# ⭐ Why Time and Space Complexity Are Different

Example:

### `reverse()` in place:

```js
function reverse(arr) {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}
```

Time = **O(n)**
Space = **O(1)** (in-place)

---

### Creating a copy to reverse:

```js
function reverseCopy(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
```

Time = **O(n)**
Space = **O(n)** (new array)

---

# ⭐ Summary Table (Easy to Understand)

| Space Complexity | Meaning          | Example                              |
| ---------------- | ---------------- | ------------------------------------ |
| **O(1)**         | constant memory  | variables, two pointers, swapping    |
| **O(log n)**     | recursion stack  | binary search                        |
| **O(n)**         | linear growth    | new array, Set, Map, recursion depth |
| **O(n log n)**   | divide+store     | merge sort                           |
| **O(n²)**        | matrix storage   | DP table, adjacency matrix           |
| **O(n!)**        | all permutations | backtracking                         |

---

