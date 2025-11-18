### Big(O) 🅾️
1. lookup O(1)
2. push O(1)
3. insert O(n)
4. delete O(n)

### Arrays[ ]

In JavaScript, an array is a data structure that allows you to store multiple values in a single variable. These values, known as elements, are ordered and each has a numeric index starting from 0. Arrays can hold mixed data types, including numbers, strings, booleans, and even other arrays or objects. 

**Creating Arrays**

There are several ways to create arrays in JavaScript:

1. **Array Literals**: This is the most common and straightforward method.

   ```javascript
   const fruits = ['Apple', 'Banana', 'Cherry'];
   ```


2. **Array Constructor**: Using the `Array` constructor function.

   ```javascript
   const numbers = new Array(1, 2, 3, 4, 5);
   ```


**Accessing and Modifying Elements**

You can access array elements using bracket notation with the element's index:


```javascript
console.log(fruits[0]); // Output: 'Apple'
```


To modify an element:


```javascript
fruits[1] = 'Blueberry';
console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry']
```


**Array Properties and Methods**

- **Length Property**: Returns the number of elements in an array.

  
```javascript
  console.log(fruits.length); // Output: 3
  ```


- **`push()`**: Adds one or more elements to the end of an array.

  
```javascript
  fruits.push('Date');
  console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry', 'Date']
  ```


- **`pop()`**: Removes the last element from an array.

  
```javascript
  fruits.pop();
  console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry']
  ```


- **`shift()`**: Removes the first element from an array.

  
```javascript
  fruits.shift();
  console.log(fruits); // Output: ['Blueberry', 'Cherry']
  ```


- **`unshift()`**: Adds one or more elements to the beginning of an array.

  
```javascript
  fruits.unshift('Apricot');
  console.log(fruits); // Output: ['Apricot', 'Blueberry', 'Cherry']
  ```


- **`splice()`**: Adds or removes elements at a specific index.

  
```javascript
  fruits.splice(1, 1, 'Blackberry'); // Removes one element at index 1 and adds 'Blackberry'
  console.log(fruits); // Output: ['Apricot', 'Blackberry', 'Cherry']
  ```


- **`slice()`**: Returns a shallow copy of a portion of an array.

  
```javascript
  const citrus = fruits.slice(1, 2);
  console.log(citrus); // Output: ['Blackberry']
  ```


**Iterating Over Arrays**

You can iterate over array elements using loops:

- **`for` Loop**:

  
```javascript
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
  ```


- **`for...of` Loop**:

  
```javascript
  for (const fruit of fruits) {
    console.log(fruit);
  }
  ```


- **`forEach()` Method**:

  
```javascript
  fruits.forEach(fruit => console.log(fruit));
  ```


**Sparse Arrays**

JavaScript arrays can be sparse, meaning they can have gaps where indices are not assigned any values. For example:


```javascript
const sparseArray = [1, , 3];
console.log(sparseArray[1]); // Output: undefined
```


**Conclusion**

Arrays are versatile and fundamental to JavaScript, providing a way to store and manipulate ordered collections of data. Understanding how to work with arrays is essential for effective JavaScript programming. 

### Dynamic Vs Static Arrays
In JavaScript, arrays are inherently dynamic, meaning they can grow or shrink in size as needed during program execution. This flexibility allows developers to add or remove elements without concern for predefined limits. 

**Static Arrays:**
In some programming languages, arrays are static, requiring the size to be defined at the time of declaration. These arrays have a fixed size, and attempting to add more elements than the allocated space can result in errors or require manual resizing. Static arrays can lead to inefficient memory usage if the allocated size doesn't match the actual data requirements. citeturn0search0

**Dynamic Arrays in JavaScript:**
JavaScript's dynamic arrays abstract away the complexities of memory management. Developers can seamlessly perform operations like adding, removing, or modifying elements without manually handling memory allocation or resizing. This dynamic behavior enhances flexibility and simplifies coding practices. 

**Key Differences:**

- **Memory Management:** Static arrays allocate a fixed amount of memory at compile time, which can lead to wasted space if not fully utilized. Dynamic arrays, like those in JavaScript, allocate memory at runtime, adjusting as needed to accommodate the data.

- **Flexibility:** Static arrays have a fixed size, limiting their capacity to handle varying data volumes. Dynamic arrays can adjust their size during execution, offering greater adaptability to changing data requirements. 

In summary, JavaScript's use of dynamic arrays provides developers with a versatile and efficient tool for managing collections of data, eliminating the constraints associated with static array structures found in other programming languages. 

### Time Complexity ⏳

Understanding the time complexity of array operations in JavaScript is crucial for writing efficient code. Here's a breakdown of common array operations and their associated Big O time complexities:

**1. Accessing Elements**

- **Operation:** `array[index]`
- **Time Complexity:** O(1)
- **Explanation:** Accessing an element by its index is a constant-time operation, as it directly retrieves the element without iteration.

**2. Adding Elements**

- **`push(element)`**: Adds an element to the end of the array.
  - **Time Complexity:** O(1)
  - **Explanation:** Appending an element at the end doesn't require shifting other elements.

- **`unshift(element)`**: Adds an element to the beginning of the array.
  - **Time Complexity:** O(n)
  - **Explanation:** Inserting at the start necessitates shifting all existing elements one position to the right.

**3. Removing Elements**

- **`pop()`**: Removes the last element from the array.
  - **Time Complexity:** O(1)
  - **Explanation:** Removing the last element doesn't involve shifting other elements.

- **`shift()`**: Removes the first element from the array.
  - **Time Complexity:** O(n)
  - **Explanation:** Removing the first element requires shifting all subsequent elements one position to the left.

**4. Splicing Elements**

- **`splice(start, deleteCount, item1, item2, ...)`**: Adds or removes elements at a specific index.
  - **Time Complexity:** O(n)
  - **Explanation:** Depending on the operation, elements may need to be shifted to accommodate additions or removals.

**5. Iteration Methods**

- **`forEach(callback)`**, **`map(callback)`**, **`filter(callback)`**, **`reduce(callback, initialValue)`**: Iterate over each element in the array.
  - **Time Complexity:** O(n)
  - **Explanation:** These methods process each element once, resulting in linear time complexity.

**6. Searching for Elements**

- **`indexOf(element)`**, **`includes(element)`**, **`find(callback)`**: Search for an element in the array.
  - **Time Complexity:** O(n)
  - **Explanation:** In the worst case, these methods may need to inspect each element.

**7. Sorting Elements**

- **`sort(compareFunction)`**: Sorts the elements of the array.
  - **Time Complexity:** O(n log n)
  - **Explanation:** JavaScript's `sort` method typically uses a variation of quicksort or mergesort, both of which have an average-case complexity of O(n log n).

**8. Spread Operator**

- **`[...array]`**: Creates a shallow copy of the array.
  - **Time Complexity:** O(n)
  - **Explanation:** The spread operator iterates over each element to construct the new array.

**9. Length Property**

- **`array.length`**: Retrieves the number of elements in the array.
  - **Time Complexity:** O(1)
  - **Explanation:** Accessing the `length` property is a constant-time operation.

It's important to note that while these complexities are generally applicable, the actual performance can vary based on the JavaScript engine's implementation and the array's size. Understanding these complexities helps in choosing the most efficient operations for our specific use case. 

### Pros 😁
* Fast lookups
* Fast push/pop
* Ordered

### Cons 👹
* Slow inserts
* Slow deletes
* Fixed size (if using static-array[ ])
