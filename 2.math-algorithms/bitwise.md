# 🧠 What this function does

```js
function isPowerOfTwoOptimized(num) {
  if (num < 1) {
    return false;
  }
  return (num & (num - 1)) === 0;
}
```

👉 It checks whether a number is a **power of 2**.

Examples of powers of 2:

```
1, 2, 4, 8, 16, 32...
```

---

# ⚡ Core Idea (MOST IMPORTANT)

👉 **A power of 2 has only ONE `1` in its binary representation**

| Number | Binary |
| ------ | ------ |
| 1      | 0001   |
| 2      | 0010   |
| 4      | 0100   |
| 8      | 1000   |

Compare with non-powers:

| Number | Binary |
| ------ | ------ |
| 5      | 0101   |
| 6      | 0110   |

---

# 🔥 The Trick: `(num & (num - 1)) === 0`

This is the magic.

## Step-by-step intuition:

### Example: `num = 4`

```
4     = 100
4 - 1 = 011
```

Now AND (`&`):

```
100
011
---
000  → 0
```

✅ Result = 0 → means power of 2

---

### Example: `num = 5`

```
5     = 101
5 - 1 = 100
```

```
101
100
---
100 → not 0
```

❌ Not a power of 2

---

# 💡 Why does this work?

👉 Subtracting 1 from a number:

* flips all bits after the **rightmost 1**

👉 AND operation:

* removes that rightmost 1

So:

* If there was **only one 1 → becomes 0**
* If there were multiple 1s → something remains

---

# 🧰 Bitwise Operators in JavaScript

JavaScript supports several bitwise operators. Let’s understand the main ones.

---

## 1. AND (`&`)

```js
5 & 3
```

Binary:

```
5 = 101
3 = 011
    ---
    001 = 1
```

👉 Only keeps bits that are `1` in BOTH

---

## 2. OR (`|`)

```js
5 | 3
```

```
101
011
---
111 = 7
```

👉 Keeps bits that are `1` in ANY

---

## 3. XOR (`^`)

```js
5 ^ 3
```

```
101
011
---
110 = 6
```

👉 1 if bits are DIFFERENT

---

## 4. NOT (`~`)

```js
~5
```

Flips bits (with 2’s complement, result is negative)

---

## 5. Left Shift (`<<`)

```js
5 << 1  // 10
```

```
101 → 1010
```

👉 multiply by 2

---

## 6. Right Shift (`>>`)

```js
5 >> 1  // 2
```

```
101 → 10
```

👉 divide by 2 (floor)

---

# ⚠️ Important Edge Case (we handled it 👍)

```js
if (num < 1) return false;
```

Why?

* `0 & (0 - 1)` → `0 & -1 = 0` ❗ (would incorrectly return true)
* Negative numbers also break the logic

So this guard is necessary.

---

# 📊 Complexity

* **Time Complexity:** `O(1)` ✅
* **Space Complexity:** `O(1)` ✅

No loops, no recursion, just one operation.

---

# 🧠 Final Mental Model

If we remember just ONE thing:

👉
**Power of 2 → only one bit is set → `n & (n - 1) === 0`**

---
