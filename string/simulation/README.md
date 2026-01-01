# 🔁 String + Simulation Problems

This folder contains problems where **strings are processed by directly following given rules**,  
step by step, without making optimization decisions.

These problems are best solved using **simulation**, where the solution logic closely mirrors  
the problem statement itself.

---

## 📂 Files

| File | LeetCode # | Problem Name | Description |
|------|-----------|--------------|-------------|
| [`13_roman_to_int.js`](./13_roman_to_int.js) | 13 | Roman to Integer | Convert a Roman numeral string into its integer value by simulating Roman numeral rules. |
| [`412_fizz_buzz.js`](./412_fizz_buzz.js) | 412 | Fizz Buzz | Generate strings based on divisibility rules for numbers from 1 to n. |
| [`14_longest_cmn_prfx.js`](./14_longest_cmn_prfx.js) | 14 | Longest Common Prefix | Find the longest prefix shared by all strings by progressively shrinking the prefix. |

---

## 🧩 Problem Summaries

---

### 🔡 **13 — Roman to Integer**

**Problem Type:**  
String simulation / rule-based parsing

**Goal:**  
Convert a Roman numeral string into its integer value.

**Rules:**
- Symbols are normally added
- A smaller value before a larger value means subtraction

| Function | Pattern | Time Complexity | Space Complexity | Description |
|--------|--------|-----------------|------------------|-------------|
| `romanToInt` | Simulation | O(n) | O(1) | Traverse the string left to right, applying addition or subtraction rules based on neighboring symbols. |

---

### 🔢 **412 — Fizz Buzz**

**Problem Type:**  
String construction via simulation

**Goal:**  
For numbers from `1` to `n`:
- Output `"Fizz"` if divisible by `3`
- Output `"Buzz"` if divisible by `5`
- Output `"FizzBuzz"` if divisible by both
- Otherwise output the number as a string

| Function | Pattern | Time Complexity | Space Complexity | Description |
|--------|--------|-----------------|------------------|-------------|
| `fizzBuzz` | Simulation | O(n) | O(n) | Iterate from 1 to n and apply divisibility rules to build the output array. |

---

### 🔤 **14 — Longest Common Prefix**

**Problem Type:**  
String comparison via simulation

**Goal:**  
Given an array of strings, find the longest prefix that is common to all strings.

**Key Idea:**
- Start with the first string as a candidate prefix
- Compare it with each subsequent string
- Shrink the prefix until it matches all strings

| Function | Pattern | Time Complexity | Space Complexity | Description |
|--------|--------|-----------------|------------------|-------------|
| `longestCommonPrefix` | Simulation | O(n · m) | O(m) | Compare characters one by one and reduce the prefix when mismatches occur. |

---

## 🧠 Core Pattern Insight

> **Simulation problems require no optimization or decision-making.  
You simply follow the rules exactly as written.**

If the solution feels like:
- “Read → check → act → repeat”  
then the problem belongs to **Simulation**.

---

## ▶️ How to Run

```bash
node 13_roman_to_int.js
node 412_fizz_buzz.js
node 14_longest_cmn_prfx.js