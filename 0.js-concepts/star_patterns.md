# ⭐ **Star Patterns in JavaScript (With Explanations)**  

Printing **star patterns** is a great way to understand **loops, nested loops, and logic-building** in JavaScript. Let's explore different types of star patterns with step-by-step explanations.

---

## **📌 1. Simple Triangle Pattern**
### **Pattern**
```
*
**
***
****
*****
```
### **Code**
```javascript
function trianglePattern(rows) {
  for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
  }
}

trianglePattern(5);
```
### **Explanation**
- We loop from `i = 1` to `rows` (5 in this case).
- `.repeat(i)` prints `i` stars (`*`).
- This results in an increasing sequence of stars.

---

## **📌 2. Inverted Triangle**
### **Pattern**
```
*****
****
***
**
*
```
### **Code**
```javascript
function invertedTriangle(rows) {
  for (let i = rows; i >= 1; i--) {
    console.log("*".repeat(i));
  }
}

invertedTriangle(5);
```
### **Explanation**
- We start with `rows` stars and decrement `i` in each iteration.
- `.repeat(i)` prints `i` stars.

---

## **📌 3. Right-Aligned Triangle**
### **Pattern**
```
    *
   **
  ***
 ****
*****
```
### **Code**
```javascript
function rightTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    console.log(" ".repeat(rows - i) + "*".repeat(i));
  }
}

rightTriangle(5);
```
### **Explanation**
- `" ".repeat(rows - i)` adds spaces to shift the stars to the right.
- `"*".repeat(i)` prints `i` stars.

---

## **📌 4. Inverted Right-Aligned Triangle**
### **Pattern**
```
*****
 ****
  ***
   **
    *
```
### **Code**
```javascript
function invertedRightTriangle(rows) {
  for (let i = rows; i >= 1; i--) {
    console.log(" ".repeat(rows - i) + "*".repeat(i));
  }
}

invertedRightTriangle(5);
```
### **Explanation**
- `" ".repeat(rows - i)` adds leading spaces.
- `"*".repeat(i)` prints `i` stars.

---

## **📌 5. Pyramid Pattern**
### **Pattern**
```
    *    
   ***   
  *****  
 ******* 
*********
```
### **Code**
```javascript
function pyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    console.log(" ".repeat(rows - i) + "*".repeat(2 * i - 1));
  }
}

pyramid(5);
```
### **Explanation**
- `" ".repeat(rows - i)` adds spaces.
- `"*".repeat(2 * i - 1)` creates an odd-numbered star pattern.

---

## **📌 6. Inverted Pyramid**
### **Pattern**
```
*********
 ******* 
  *****  
   ***   
    *    
```
### **Code**
```javascript
function invertedPyramid(rows) {
  for (let i = rows; i >= 1; i--) {
    console.log(" ".repeat(rows - i) + "*".repeat(2 * i - 1));
  }
}

invertedPyramid(5);
```
### **Explanation**
- `" ".repeat(rows - i)` adds spaces.
- `"*".repeat(2 * i - 1)` prints decreasing stars.

---

## **📌 7. Diamond Pattern**
### **Pattern**
```
    *    
   ***   
  *****  
 ******* 
*********
 ******* 
  *****  
   ***   
    *    
```
### **Code**
```javascript
function diamond(rows) {
  // Upper Pyramid
  for (let i = 1; i <= rows; i++) {
    console.log(" ".repeat(rows - i) + "*".repeat(2 * i - 1));
  }

  // Lower Inverted Pyramid
  for (let i = rows - 1; i >= 1; i--) {
    console.log(" ".repeat(rows - i) + "*".repeat(2 * i - 1));
  }
}

diamond(5);
```
### **Explanation**
- The **first loop** prints a normal pyramid.
- The **second loop** prints an inverted pyramid without the base.

---

## **📌 8. Hollow Diamond**
### **Pattern**
```
    *    
   * *   
  *   *  
 *     * 
*********
 *     * 
  *   *  
   * *   
    *    
```
### **Code**
```javascript
function hollowDiamond(rows) {
  // Upper half
  for (let i = 1; i <= rows; i++) {
    let line = " ".repeat(rows - i) + "*";
    if (i > 1) line += " ".repeat(2 * i - 3) + "*";
    console.log(line);
  }

  // Lower half
  for (let i = rows - 1; i >= 1; i--) {
    let line = " ".repeat(rows - i) + "*";
    if (i > 1) line += " ".repeat(2 * i - 3) + "*";
    console.log(line);
  }
}

hollowDiamond(5);
```
### **Explanation**
- The **outer stars** (`*`) remain fixed.
- The **inner spaces** (`" ".repeat(2 * i - 3)`) increase in the first half and decrease in the second half.

---

## **📌 9. Pascal's Triangle (Number Pattern)**
### **Pattern**
```
    1    
   1 1   
  1 2 1  
 1 3 3 1 
1 4 6 4 1
```
### **Code**
```javascript
function pascalTriangle(rows) {
  let arr = [[1]];
  for (let i = 1; i < rows; i++) {
    let prevRow = arr[i - 1];
    let newRow = [1];

    for (let j = 1; j < prevRow.length; j++) {
      newRow.push(prevRow[j - 1] + prevRow[j]);
    }

    newRow.push(1);
    arr.push(newRow);
  }

  arr.forEach((row, index) => {
    console.log(" ".repeat(rows - index) + row.join(" "));
  });
}

pascalTriangle(5);
```
### **Explanation**
- Each row is formed by adding adjacent numbers from the previous row.
- The **first and last elements** are always `1`.

---

# **🎯 Summary of Concepts Used**
| Pattern Type              | Concepts Used |
|---------------------------|--------------|
| Simple Triangle           | `for` loop, `.repeat()` |
| Right-Aligned Triangle    | Spaces, `.repeat()` |
| Pyramid                   | `2*i - 1`, spaces |
| Inverted Pyramid          | Decreasing stars |
| Diamond                   | Combination of pyramids |
| Hollow Diamond            | Conditional spaces |
| Pascal's Triangle         | Array manipulation |
