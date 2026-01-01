# 🔁 String + Simulation Problems

This folder contains problems where **strings are processed by directly following given rules**,  
step by step, without making optimization choices.

These problems are best solved using **simulation**, where the logic mirrors the problem statement  
exactly as described.

---

## 📂 Files

| File | LeetCode # | Problem Name | Description |
|------|-----------|--------------|-------------|
| [`13_roman_to_int.js`](./13_roman_to_int.js) | 13 | Roman to Integer | Convert a Roman numeral string into its integer value by simulating Roman numeral rules. |
| [`412_fizz_buzz.js`](./412_fizz_buzz.js) | 412 | Fizz Buzz | Generate strings based on divisibility rules for numbers from 1 to n. |

---

## 🧩 Problem Summaries

---

### 🔡 **13 — Roman to Integer**

**Problem Type:**  
String simulation / rule-based parsing

**Goal:**  
Convert a Roman numeral string into its integer value.

Roman numerals follow fixed rules:
- Symbols are usually added
- A smaller value before a larger value means subtraction

#### Approach

| Function | Pattern | Time Complexity | Space Complexity | Description |
|--------|--------|-----------------|------------------|-------------|
| `romanToInt` | Simulation | O(n) | O(1) | Traverse the string left to right, applying addition or subtraction rules based on neighboring symbols. |

---

### 🔢 **412 — Fizz Buzz**

**Problem Type:**  
String construction via simulation

**Goal:**  
For numbers from 1 to `n`:
- Output `"Fizz"` if divisible by 3
- Output `"Buzz"` if divisible by 5
- Output `"FizzBuzz"` if divisible by both
- Otherwise, output the number as a string

#### Approach

| Function | Pattern | Time Complexity | Space Complexity | Description |
|--------|--------|-----------------|------------------|-------------|
| `fizzBuzz` | Simulation | O(n) | O(n) | Iterate from 1 to n and apply the given rules to construct the output array. |

---

## 🧠 Key Pattern Insight

> **Simulation problems require no optimization or choice.  
You simply follow the rules exactly as written.**

If the solution feels like:
- “Read → check → act → repeat”  
then it belongs to **Simulation**.

---

## ▶️ How to Run

```bash
node 13_roman_to_int.js
node 412_fizz_buzz.js