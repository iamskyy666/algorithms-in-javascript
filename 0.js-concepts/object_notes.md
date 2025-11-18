## **🔥 JavaScript Object Methods – A Deep Dive 🔥**  
JavaScript **objects** are fundamental to the language and serve as the backbone of complex data structures. Objects store **key-value pairs**, and JavaScript provides **powerful built-in methods** to manipulate, inspect, and iterate over objects.  

---

# 📌 **1. Object Creation Methods**
## **1.1 `Object()` Constructor**  
Creates a new object instance.

### ✅ **Example**:
```javascript
let obj = new Object();
obj.name = "Skyy";
obj.age = 29;
console.log(obj); // { name: "Skyy", age: 29 }
```

---

## **1.2 Object Literal `{}`**
The simplest way to create an object.

### ✅ **Example**:
```javascript
let obj = {
  name: "Skyy",
  age: 29,
};
console.log(obj); // { name: "Skyy", age: 29 }
```

---

## **1.3 `Object.create()`**  
Creates an object using a **prototype**.

### ✅ **Example**:
```javascript
let person = {
  greet() {
    console.log("Hello!");
  },
};

let user = Object.create(person);
user.name = "Skyy";

console.log(user.name); // "Skyy"
user.greet(); // "Hello!" (inherited from `person`)
```

---

## **1.4 `Object.assign()`**  
Copies properties from **one or more objects** to a target object.

### ✅ **Example**:
```javascript
let target = { a: 1 };
let source = { b: 2, c: 3 };

Object.assign(target, source);
console.log(target); // { a: 1, b: 2, c: 3 }
```

---

# 📌 **2. Retrieving Object Properties**
## **2.1 `Object.keys()`**  
Returns an **array** of object **keys**.

### ✅ **Example**:
```javascript
let obj = { name: "Skyy", age: 29, country: "India" };
console.log(Object.keys(obj)); // ["name", "age", "country"]
```

---

## **2.2 `Object.values()`**  
Returns an **array** of object **values**.

### ✅ **Example**:
```javascript
let obj = { name: "Skyy", age: 29, country: "India" };
console.log(Object.values(obj)); // ["Skyy", 29, "India"]
```

---

## **2.3 `Object.entries()`**  
Returns an **array of key-value pairs**.

### ✅ **Example**:
```javascript
let obj = { name: "Skyy", age: 29 };
console.log(Object.entries(obj)); // [["name", "Skyy"], ["age", 29]]
```

🔹 **Use case**: Converting an object into a **Map**.
```javascript
let map = new Map(Object.entries(obj));
console.log(map.get("name")); // "Skyy"
```

---

# 📌 **3. Checking Properties**
## **3.1 `Object.hasOwnProperty()`**  
Checks if an object has a **direct** property (not inherited).

### ✅ **Example**:
```javascript
let obj = { name: "Skyy", age: 29 };
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("gender")); // false
```

---

## **3.2 `Object.prototype.propertyIsEnumerable()`**  
Checks if a property is **enumerable** (can be iterated over).

### ✅ **Example**:
```javascript
let obj = { name: "Skyy", age: 29 };
console.log(obj.propertyIsEnumerable("name")); // true
```

---

# 📌 **4. Cloning & Copying Objects**
## **4.1 `Object.assign()` – Shallow Copy**
Copies all properties **from one or more objects** to a new object.

### ✅ **Example**:
```javascript
let original = { a: 1, b: 2 };
let copy = Object.assign({}, original);
console.log(copy); // { a: 1, b: 2 }
```

🚨 **Note:** This only copies the first level (shallow copy). Nested objects remain linked.

---

## **4.2 Deep Copy (Using `JSON.parse(JSON.stringify())`)**
To create a **deep copy** (independent clone):

### ✅ **Example**:
```javascript
let original = { a: 1, b: { c: 2 } };
let deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.b.c = 100;
console.log(original.b.c); // 2 (original remains unchanged)
console.log(deepCopy.b.c); // 100
```

---

# 📌 **5. Freezing & Sealing Objects**
## **5.1 `Object.freeze()`**
Prevents **any modifications** (no adding, removing, or updating properties).

### ✅ **Example**:
```javascript
let obj = { name: "Skyy", age: 29 };
Object.freeze(obj);

obj.age = 30; // ❌ Won't change
obj.city = "Kolkata"; // ❌ Won't add
delete obj.name; // ❌ Won't delete

console.log(obj); // { name: "Skyy", age: 29 }
```

---

## **5.2 `Object.seal()`**
Prevents **adding/removing** properties but allows modifying **existing** ones.

### ✅ **Example**:
```javascript
let obj = { name: "Skyy", age: 29 };
Object.seal(obj);

obj.age = 30; // ✅ Allowed
obj.city = "Kolkata"; // ❌ Not allowed
delete obj.name; // ❌ Not allowed

console.log(obj); // { name: "Skyy", age: 30 }
```

---

# 📌 **6. Iterating Over Objects**
## **6.1 `for...in` loop**
Iterates over all **enumerable** properties.

### ✅ **Example**:
```javascript
let obj = { name: "Skyy", age: 29 };

for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
// Output:
// name: Skyy
// age: 29
```

---

## **6.2 `Object.entries()` + `forEach()`**
### ✅ **Example**:
```javascript
let obj = { name: "Skyy", age: 29 };

Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```

---

# 📌 **7. Object Prototypes & Manipulation**
## **7.1 `Object.getPrototypeOf()`**
Gets the **prototype** of an object.

### ✅ **Example**:
```javascript
let arr = [];
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true
```

---

## **7.2 `Object.setPrototypeOf()`**
Sets the **prototype** of an object.

### ✅ **Example**:
```javascript
let animal = {
  speak() {
    console.log("I can speak");
  },
};

let dog = {};
Object.setPrototypeOf(dog, animal);
dog.speak(); // "I can speak"
```

---

# 📌 **8. Object Property Descriptors**
## **8.1 `Object.getOwnPropertyDescriptor()`**
Gets the property **metadata**.

### ✅ **Example**:
```javascript
let obj = { name: "Skyy" };
let descriptor = Object.getOwnPropertyDescriptor(obj, "name");
console.log(descriptor);
/*
{
  value: "Skyy",
  writable: true,
  enumerable: true,
  configurable: true
}
*/
```

---

# 🎯 **Conclusion**
- ✅ Use `Object.keys()`, `Object.values()`, and `Object.entries()` to work with objects as arrays.
- ✅ Use `Object.assign()` for **shallow copies** and `JSON.parse(JSON.stringify())` for **deep copies**.
- ✅ Use `Object.freeze()` to make objects immutable.
- ✅ Use `Object.getPrototypeOf()` and `Object.setPrototypeOf()` for prototype manipulation.
