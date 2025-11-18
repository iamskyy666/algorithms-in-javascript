# 🚀 **JavaScript Class Syntax & OOP Concepts – In Depth**  

JavaScript introduced **classes** in **ES6 (ECMAScript 2015)** to support **object-oriented programming (OOP)**. While JavaScript remains a **prototype-based** language under the hood, classes provide a **syntactic sugar** to make working with objects more intuitive.  

This guide covers **everything about classes in JavaScript**, including **constructors, methods, inheritance, getters & setters, static methods, and more**. Let's dive deep! 🔥  

---

## **📌 1. What is a Class in JavaScript?**  
A **class** in JavaScript is a blueprint for creating objects. It defines properties (**data**) and methods (**behavior**) that the created objects will have.

### ✅ **Basic Class Syntax**  
```javascript
class Person {
  constructor(name, age) {
    this.name = name; // Property
    this.age = age;   // Property
  }

  introduce() { // Method
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating an object (Instance)
const person1 = new Person("Skyy", 29);
person1.introduce(); // Hi, my name is Skyy and I am 29 years old.
```

---

## **📌 2. Constructor Method (`constructor()`)**
- The **`constructor()`** is a **special method** that gets called when an **instance** of the class is created.  
- It is used to initialize object properties.

### ✅ **Example: Using a Constructor**  
```javascript
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  details() {
    console.log(`Car: ${this.brand} ${this.model} (${this.year})`);
  }
}

const car1 = new Car("Tesla", "Model S", 2024);
car1.details(); // Car: Tesla Model S (2024)
```

---

## **📌 3. Methods in Classes**
Methods define **behaviors** inside a class.

### ✅ **Instance Methods**  
These are regular methods that operate on object instances.
```javascript
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying.`);
  }
}

const student1 = new Student("Alice", "A");
student1.study(); // Alice is studying.
```

---

## **📌 4. Getters & Setters (`get` & `set`)**
- `get`: Allows us to retrieve a **computed** property.  
- `set`: Allows us to modify a property while applying validation.

### ✅ **Example: Getters & Setters**
```javascript
class User {
  constructor(name, age) {
    this.name = name;
    this._age = age; // Using `_` to prevent direct access
  }

  // Getter
  get age() {
    return this._age;
  }

  // Setter with validation
  set age(value) {
    if (value < 0) {
      console.log("Age cannot be negative.");
    } else {
      this._age = value;
    }
  }
}

const user1 = new User("Skyy", 29);
console.log(user1.age); // 29

user1.age = -5; // Age cannot be negative.
console.log(user1.age); // 29
```

---

## **📌 5. Static Methods (`static`)**
- Static methods belong to the **class itself**, not instances.
- They are called on the **class**, not on objects.

### ✅ **Example: Static Methods**
```javascript
class MathHelper {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

// Calling static methods
console.log(MathHelper.add(5, 10)); // 15
console.log(MathHelper.multiply(4, 3)); // 12
```

🔹 **Instance methods require an object** (`new MathHelper()`), but **static methods do not**.

---

## **📌 6. Class Inheritance (`extends`)**
- Inheritance allows a class (**child class**) to **inherit** properties and methods from another class (**parent class**).
- The `super()` keyword is used to call the **parent class's constructor**.

### ✅ **Example: Inheritance**
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks!`);
  }
}

const dog1 = new Dog("Buddy", "Labrador");
dog1.speak(); // Buddy barks!
```

---

## **📌 7. Method Overriding**
- A child class **redefines** a method from the parent class.

### ✅ **Example: Overriding**
```javascript
class Vehicle {
  move() {
    console.log("The vehicle is moving.");
  }
}

class Car extends Vehicle {
  move() {
    console.log("The car is driving.");
  }
}

const myCar = new Car();
myCar.move(); // The car is driving.
```

---

## **📌 8. Private Properties (`#property`)**
- Introduced in **ES2020**, private properties **cannot be accessed directly** from outside the class.
- They start with `#`.

### ✅ **Example: Private Fields**
```javascript
class BankAccount {
  #balance; // Private property

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: $${amount}, New Balance: $${this.#balance}`);
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500); // Deposited: $500, New Balance: $1500
console.log(account.getBalance()); // 1500
// console.log(account.#balance); // ❌ Error: Private field '#balance' must be declared in an enclosing class
```

---

## **📌 9. `instanceof` Operator**
Checks if an object is an instance of a class.

### ✅ **Example: `instanceof`**
```javascript
console.log(dog1 instanceof Dog); // true
console.log(dog1 instanceof Animal); // true
console.log(dog1 instanceof Vehicle); // false
```

---

## **📌 10. Abstract Classes & Polymorphism**
JavaScript **does not** have built-in **abstract classes**, but we can simulate them.

### ✅ **Example: Simulated Abstract Class**
```javascript
class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate abstract class Shape.");
    }
  }

  area() {
    throw new Error("Method 'area()' must be implemented.");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
console.log(circle.area()); // 78.54

// const shape = new Shape(); // ❌ Error: Cannot instantiate abstract class
```

---

# **🎯 Summary of JavaScript OOP Concepts**
| Feature              | Description |
|----------------------|-------------|
| `class`             | Defines a blueprint for objects |
| `constructor()`     | Initializes object properties |
| `methods`          | Define behaviors |
| `extends`          | Implements inheritance |
| `super()`          | Calls parent constructor |
| `static`           | Defines class-level methods |
| `get/set`          | Getters & setters |
| `#private` fields  | Private class properties |
| `instanceof`       | Checks if an object is an instance of a class |
