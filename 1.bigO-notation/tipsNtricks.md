## **Tips & Tricks for Calculating Big O Notation** 🚀  

When analyzing the time complexity of an algorithm, we aim to determine how the execution time grows relative to the input size \( n \). Here are some essential tips and tricks to simplify **Big O** calculations.  

---

### **1️⃣ Keep the Dominant Term (Drop Lower Order Terms)**
When multiple terms exist, keep only the term that grows the fastest and **drop the rest**.  

✅ **Example:**
```js
function example(n) {
    let sum = 0;     // O(1)
    for (let i = 0; i < n; i++) {  // O(n)
        for (let j = 0; j < n; j++) {  // O(n)
            sum += i * j;  // O(1)
        }
    }
    return sum;
}
```
🔹 **Time Complexity:**  
\[
O(1) + O(n) + O(n^2) = O(n^2)
\]
🚀 **Keep only \( O(n^2) \) since it grows the fastest.**  

---

### **2️⃣ Ignore Constants (Drop Coefficients)**
Big O focuses on growth **rate**, so constants don’t matter.  

✅ **Example:**
```js
function example(n) {
    for (let i = 0; i < 5 * n; i++) { // O(5n)
        console.log(i);
    }
}
```
🔹 **Time Complexity:**  
\[
O(5n) \Rightarrow O(n) \quad (\text{Drop constant 5})
\]

---

### **3️⃣ Nested Loops → Multiply Complexities**  
When loops are **nested**, multiply their time complexities.  

✅ **Example:**
```js
function nestedLoop(n) {
    for (let i = 0; i < n; i++) {        // O(n)
        for (let j = 0; j < n; j++) {    // O(n)
            console.log(i, j);           // O(1)
        }
    }
}
```
🔹 **Time Complexity:**  
\[
O(n) \times O(n) = O(n^2)
\]

📌 **Nested loops → Multiplication of complexities**  
📌 **Consecutive loops → Addition of complexities**  

✅ **Example of Consecutive Loops:**  
```js
function twoLoops(n) {
    for (let i = 0; i < n; i++) {  // O(n)
        console.log(i);
    }
    for (let j = 0; j < n; j++) {  // O(n)
        console.log(j);
    }
}
```
🔹 **Time Complexity:**  
\[
O(n) + O(n) = O(n)
\]

---

### **4️⃣ Avoid Recursive Miscalculations (Recursion Tree)**
For recursive functions, analyze how many calls are made and how much work is done per call.

✅ **Example (Binary Search - O(log n))**
```js
function binarySearch(arr, target, left, right) {
    if (left > right) return -1; // Base case O(1)

    let mid = Math.floor((left + right) / 2); // O(1)
    if (arr[mid] === target) return mid; // O(1)

    if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, right); // Half the array O(log n)
    } else {
        return binarySearch(arr, target, left, mid - 1); // Half the array O(log n)
    }
}
```
🔹 **Time Complexity:**  
\[
O(\log n)
\]
**Tip:** If recursion reduces problem size by **half**, it’s usually \( O(\log n) \).  

---

### **5️⃣ Know Common Complexity Patterns**
| Complexity | Example Algorithm | Growth Rate |
|------------|----------------|-------------|
| **O(1)** | Array index lookup | **Constant** (fastest) |
| **O(log n)** | Binary search | **Logarithmic** |
| **O(n)** | Looping through an array | **Linear** |
| **O(n log n)** | Merge Sort, Quick Sort | **Linearithmic** |
| **O(n²)** | Nested loops | **Quadratic** (slow for large n) |
| **O(2ⁿ)** | Recursive Fibonacci | **Exponential** (very slow) |
| **O(n!)** | Traveling Salesman Problem | **Factorial (worst case)** |

---

### **6️⃣ Recognizing Logarithmic \( O(\log n) \) Complexity**
- **Dividing the problem size by a factor each step** → **\( O(\log n) \)**
- Binary search, balanced trees, and divide-and-conquer algorithms often have **logarithmic complexity**.

✅ **Example (Logarithmic Complexity - O(log n))**
```js
function logExample(n) {
    while (n > 1) {
        n = Math.floor(n / 2);  // Reducing input size by half
    }
}
```
🔹 **Time Complexity:**  
\[
O(\log n)
\]

---

### **7️⃣ Watch for Multiple Variables**
If multiple inputs exist, express complexity in terms of multiple variables.

✅ **Example (Two Inputs - Different Growth Rates)**
```js
function multipleInputs(arrA, arrB) {
    for (let i = 0; i < arrA.length; i++) { // O(a)
        console.log(arrA[i]);
    }
    for (let j = 0; j < arrB.length; j++) { // O(b)
        console.log(arrB[j]);
    }
}
```
🔹 **Time Complexity:**  
\[
O(a) + O(b)
\]
Instead of writing \( O(n) \), **use correct variable names**.

---

### **8️⃣ Be Careful with Sorting Algorithms**
Sorting often adds \( O(n \log n) \) complexity.

✅ **Example:**
```js
let arr = [5, 1, 8, 2, 4];
arr.sort();  // JavaScript uses Timsort (O(n log n))
```
🔹 **Time Complexity:**  
\[
O(n \log n)
\]

---

### **9️⃣ Factorials and Exponentials Grow Very Fast!**
- **\( O(2^n) \)** → Fibonacci recursion
- **\( O(n!) \)** → Worst-case brute force algorithms

🚀 **Tip:** Avoid these complexities when possible!

✅ **Example (Exponential Complexity - O(2ⁿ))**
```js
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```
🔹 **Time Complexity:**  
\[
O(2^n)
\]
📌 **Exponential growth is extremely slow for large \( n \).**  

---

### **🔟 Bonus: Use Big O Cheatsheets & Tools**
- [Big O Complexity Cheat Sheet](https://www.bigocheatsheet.com/)  
- [VisuAlgo](https://visualgo.net/) (Interactive animations for algorithms)  
- Try **Time Complexity Calculators** to verify estimates.

---

## **Final Summary**
✅ **Drop constants and lower-order terms.**  
✅ **Nested loops → Multiply complexities.**  
✅ **Consecutive loops → Add complexities.**  
✅ **Recursive calls reducing by half → \( O(\log n) \).**  
✅ **Sorting usually adds \( O(n \log n) \).**  
✅ **Avoid \( O(2^n) \) and \( O(n!) \) if possible!**  

# **🛠 Tips & Tricks for Calculating Space Complexity 🚀**  

## **📌 What is Space Complexity?**  
Space complexity measures the **total amount of memory an algorithm needs to run**, including:  
1. **Fixed part** (constant space): Memory required for constants, variables, and program overhead.  
2. **Variable part** (dynamic space): Memory used for function calls, input size, and data structures.  

---

## **🎯 Key Tips & Tricks to Calculate Space Complexity**  

### **1️⃣ Consider Extra Space Used**  
- If an algorithm only modifies existing data, its space complexity is **O(1)** (constant space).  
- If it creates additional data structures, its space complexity increases accordingly.  

✅ **Example (O(1) - No Extra Space Used)**  
```js
function sumArray(arr) {
    let sum = 0; // O(1) space (single variable)
    for (let i = 0; i < arr.length; i++) {  
        sum += arr[i];
    }
    return sum;
}
```
🔹 **Space Complexity:** **O(1)** (Only a few variables are used, no extra arrays or objects)  

✅ **Example (O(n) - Extra Space Used)**  
```js
function duplicateArray(arr) {
    let newArr = []; // O(n) space (new array)
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]); 
    }
    return newArr;
}
```
🔹 **Space Complexity:** **O(n)** (New array takes up extra space)  

---

### **2️⃣ Recursive Calls → Use Stack Space**
Each recursive function call **adds a new stack frame** → more memory used.  

✅ **Example (Recursive Factorial - O(n) Space)**
```js
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}
```
🔹 **Space Complexity:** **O(n)** (Each function call remains in memory until it returns)  

✅ **Example (Tail Recursion - O(1) Space)**
```js
function tailFactorial(n, acc = 1) {
    if (n === 1) return acc;
    return tailFactorial(n - 1, acc * n);
}
```
🔹 **Space Complexity:** **O(1)** (Tail recursion does not grow the stack)  

---

### **3️⃣ Arrays & Objects Increase Space Complexity**  
- **Arrays:** Storing \( n \) elements → **O(n)**  
- **2D Arrays:** Storing \( n \times m \) elements → **O(n × m)**  
- **Hash Maps & Sets:** Also take **O(n)** space  

✅ **Example (2D Matrix - O(n²) Space)**
```js
function createMatrix(n) {
    let matrix = new Array(n).fill(null).map(() => new Array(n).fill(0));
    return matrix;
}
```
🔹 **Space Complexity:** **O(n²)** (Storing \( n \times n \) matrix)  

---

### **4️⃣ Drop Constants in Space Complexity**  
Same as time complexity, **we ignore constant factors** in space complexity.  

✅ **Example (Multiple Arrays)**
```js
function processArrays(arr) {
    let temp1 = [...arr]; // O(n)
    let temp2 = [...arr]; // O(n)
}
```
🔹 **Space Complexity:**  
\[
O(n) + O(n) = O(2n) \Rightarrow O(n)
\]

📌 **Keep only the dominant term!**  

---

### **5️⃣ Beware of Hidden Space Usage**
Sometimes memory is used without explicitly defining new variables:  
✅ **Example (String Concatenation - O(n²))**
```js
function buildString(n) {
    let str = "";
    for (let i = 0; i < n; i++) {
        str += "a"; // Creates a new string each time
    }
    return str;
}
```
🔹 **Space Complexity:** **O(n²)** (Since strings are immutable, new copies are created)  

✅ **Example (Using `.join()` instead of `+=`)**
```js
function buildStringEfficient(n) {
    return new Array(n).fill("a").join("");
}
```
🔹 **Space Complexity:** **O(n)** (Efficient approach)  

---

## **📌 Common Space Complexities**
| **Space Complexity** | **Example Algorithms** |
|----------------|------------------|
| **O(1)** | Simple loops, swapping variables |
| **O(log n)** | Recursive binary search |
| **O(n)** | Storing an array of size \( n \) |
| **O(n log n)** | Merge Sort (auxiliary space) |
| **O(n²)** | 2D matrix, storing pairs of data |
| **O(2ⁿ)** | Recursive Fibonacci |

---

## **🔥 Quick Tricks for Space Complexity Analysis**
✅ **Does the algorithm store extra variables?** → **O(1)**  
✅ **Does it store an array, object, or set?** → **O(n)**  
✅ **Does it use recursion?** → **Check the recursion depth!**  
✅ **Does it modify data in-place?** → **Likely O(1)**  
✅ **Does it create a new copy of data?** → **Likely O(n) or more**  

---
