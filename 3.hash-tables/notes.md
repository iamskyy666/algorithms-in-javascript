# ✅ **What Is a Hash Table?**

A **hash table** is a data structure that stores **key–value pairs** and provides **O(1)** average-time complexity for:

* **Insert**
* **Delete**
* **Search / Lookup**

Hash tables use a **hash function** to convert a key → index.

In JavaScript, the *built-in* implementations are:

* **Objects `{}`**
* **Maps** (`new Map()`)

But for DSA, we must also learn how to **build our own** hash table.

---

# 🌟 Why Use a Hash Table?

### Because it is extremely fast.

When we say **O(1)** time, it means:

* No loops needed to find items.
* No scanning of arrays.
* Direct access based on hash index.

---

# 🧠 Core Idea

Imagine we want to store:

```js
age["John"] = 29
```

A hash table:

1. Takes `"John"`
2. Applies a **hash function** → some number like `83621`
3. Compresses it to a valid array index (e.g. `83621 % 50 = 21`)
4. Stores:

   ```
   bucket[21] = ["John", 29]
   ```

---

# 🧮 Hash Function (Simplified)

A **hash function** must:

* Always return the same output for same input ✔️
* Be fast ✔️
* Spread keys uniformly ✔️

Example hash function logic:

```js
function hash(key, arraySize) {
  let hashValue = 0;
  for (let char of key) {
    hashValue = (hashValue + char.charCodeAt(0)) % arraySize;
  }
  return hashValue;
}
```

---

# 🗂 Bucket

Because different keys might hash to the **same index**, we store a list (array) inside each spot.
This is called **chaining**.

Example:

```
Index 21:
   → ["John", 29]
   → ["Tony", 33]   // collision
```

---

# 🎯 Collision Handling

Two main approaches:

### 1️⃣ **Separate Chaining (most common)**

Buckets hold an array/list of key-value pairs.

### 2️⃣ **Open Addressing**

If full, search for the next empty slot.

JavaScript internally uses advanced hashing + open addressing.

---

# 🚀 Build Our Own Hash Table (Step-By-Step)

### Step 1: Create the class

```js
class HashTable {
  constructor(size = 50) {
    this.table = new Array(size);
    this.size = size;
  }
```

### Step 2: Hash function

```js
  hash(key) {
    let hashValue = 0;
    for (let char of key) {
      hashValue = (hashValue + char.charCodeAt(0)) % this.size;
    }
    return hashValue;
  }
```

### Step 3: Set / Insert

```js
  set(key, value) {
    let index = this.hash(key);

    if (!this.table[index]) {
      this.table[index] = [];
    }

    // check if key already exists → update
    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    // else push new key-value pair
    this.table[index].push([key, value]);
  }
```

### Step 4: Get / Lookup

```js
  get(key) {
    let index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      for (let [k, v] of bucket) {
        if (k === key) return v;
      }
    }
    return undefined;
  }
```

### Step 5: Delete

```js
  remove(key) {
    let index = this.hash(key);
    const bucket = this.table[index];

    if (!bucket) return;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}
```

---

# ✔️ Full Working Hash Table Code

```js
class HashTable {
  constructor(size = 50) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let hashValue = 0;
    for (let char of key) {
      hashValue = (hashValue + char.charCodeAt(0)) % this.size;
    }
    return hashValue;
  }

  set(key, value) {
    const index = this.hash(key);

    if (!this.table[index]) {
      this.table[index] = [];
    }

    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      for (let [k, v] of bucket) {
        if (k === key) return v;
      }
    }

    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (!bucket) return;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }

    return false;
  }
}
```

---

# 📊 Complexity Analysis

| Operation | Best | Average | Worst |
| --------- | ---- | ------- | ----- |
| Insert    | O(1) | O(1)    | O(n)  |
| Search    | O(1) | O(1)    | O(n)  |
| Delete    | O(1) | O(1)    | O(n)  |

Worst-case is when all keys collide (bad hash function).

---

# 🟦 JavaScript’s Built-in Alternatives

### **Object**

```js
const obj = {};
obj["name"] = "Skyy";
```

Pros: Fast, simple
Cons: Keys must be strings or symbols

---

### **Map**

```js
const map = new Map();
map.set("name", "Skyy");
map.get("name");
```

Pros:

* Any data type can be a key
* Maintains insertion order
* More optimized internally

---

# 🧪 Interview Question Examples

### ✔️ 1. First non-repeating character

Use hash table to count frequencies.

### ✔️ 2. Two Sum problem

Store visited values in hash table.

### ✔️ 3. Checking if two strings are anagrams

Use hash table to count characters.

### ✔️ 4. Detect cycle in linked list (using visited nodes)

Use hash table / set.

---

# 🔥 **Hashing Function — Explained in Full Depth**

A **hashing function** (or hash function) is the *brain* of a hash table.
Its job is simple to say, but hard to design:

> **Convert any input (key) into a fixed-size integer index.**

This index tells us *where to store* or *where to find* the key–value pair inside the hash table.

---

# 🌟 Why Do We Need a Hash Function?

If we want to store something like:

```js
age["John"] = 29;
```

We **cannot** use `"John"` as the index of an array because arrays use numbers as indexes.

So we need a hash function to convert:

```
"John" → some number → valid array index
```

---

# 🔥 Core Requirements of a Good Hash Function

A good hash function should:

### ✅ 1. Be **deterministic**

Same key → always same hash
("John" must always produce the same index)

### ✅ 2. Be **fast**

Must run in constant time **O(1)**.

### ✅ 3. Produce **uniform distribution**

Keys should spread evenly across the array to reduce collisions.

### ✅ 4. Minimize **collisions**

Two different keys should rarely hash to the same index.

### ❌ What we don’t want:

* Too many collisions
* Clustering
* Very large numbers (must fit table size)

---

# 🧮 How a Hash Function Works (Step-by-step)

Let’s take the key:

```
"John"
```

### Step 1 — Convert characters → numbers

We use ASCII/UTF-16 values:

```js
J = 74
o = 111
h = 104
n = 110
```

### Step 2 — Mix them

We combine the numbers in a clever way to create a hash.

### Step 3 — Compress to a table index

We take:

```
hash % tableSize
```

If tableSize = 50:

```
hash % 50 → index between 0–49
```

---

# 🧠 A Simple Hash Function (used in many tutorials)

```js
function hash(key, size) {
  let hashValue = 0;

  for (let char of key) {
    hashValue += char.charCodeAt(0);
  }

  return hashValue % size;
}
```

### Problems with this simple hash:

* Collisions happen easily
* "abc" and "cba" produce same sum
* Order of characters doesn’t matter

So we need something better.

---

# ⚡ Better Hashing — Polynomial Rolling Hash

This is closer to what real-world hash functions do.

Formula:

```
hash = (hash * prime + charCode) % tableSize
```

Typical prime: **31**, **37**, or **53**

Example:

```js
function betterHash(key, size) {
  let hashValue = 0;
  const prime = 31;

  for (let i = 0; i < key.length; i++) {
    hashValue = (hashValue * prime + key.charCodeAt(i)) % size;
  }

  return hashValue;
}
```

### Why multiply by a prime number?

To spread values more uniformly.

Example of good distribution:

* “abc”
* “acb”
* “bac”
* “bca”

All produce different values.

---

# 🧬 Why `% size` Is Used? (Compression Function)

The raw hash number can be very large.
We need it to fit inside the array.

Example:

```
raw hash = 89234892347
table size = 50

index = rawHash % 50 → 47
```

This is called a **compression function**.

---

# 🧱 Hash Function Pipeline (Full Picture)

```
Key → Hashing → Big Number → Compression → Valid Index
```

Example for `"Skyy"`:

1. Convert chars → numbers
2. Mix with polynomial hash
3. Modulo with table size

Result: index like `23`

---

# 🎯 Load Factor & Rehashing

Even with a great hash function, collisions will increase if the table is too full.

```
loadFactor = numberOfItems / tableSize
```

When load factor > 0.7:

* Expand the table (usually double)
* Rehash all keys

---

# 🔐 Real Hash Functions Used in Industry

JavaScript's built-in `Map` uses:

* **Wang/Jenkins hash**
* **FNV-1A**
* **SipHash** (modern crypto-safe)

These functions:

* Mix bits very well
* Protect against collision-attacks
* Are optimized in C++ under the hood

---

# 🧪 Let's Trace a Hash Function Manually

Key: `"Bob"`

ASCII:

```
B = 66
o = 111
b = 98
```

Using the polynomial hash with prime = 31:

### Step 1

```
hash = 0
hash = (0*31 + 66) = 66
```

### Step 2

```
hash = (66*31 + 111) = 216*31 + 111 = 2247
```

### Step 3

```
hash = (2247*31 + 98) = 696+?… ≈ 697*31 = ~69900
```

### Step 4 (Compression)

If table size = 50:

```
69900 % 50 = 0
```

Index = **0**

---

# 🔥 Summary (What we must remember)

### ✔️ Hash function converts key → index

### ✔️ Must be deterministic

### ✔️ Must mix characters effectively

### ✔️ Must minimize collisions

### ✔️ Uses `% size` to fit inside the table

---
