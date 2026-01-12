# 🔤 Array + Lexicographical Problems

This folder contains problems where the **order of elements matters**, and solutions rely on  
**lexicographical (dictionary-like) ordering** of sequences.

Lexicographical problems are not limited to strings — they also apply to **arrays of numbers**,  
especially when working with **permutations, ordering rules, and custom comparison logic**.

---

## 📂 Files

| File | LeetCode # | Problem Name | Description |
|-----|-----------|-------------|-------------|
| [`953_alien_dict.js`](./953_alien_dict.js) | 953 | Verifying an Alien Dictionary | Verify whether words are sorted based on a custom alphabet order. |
| [`31_next_permutation.js`](./31_next_permutation.js) | 31 | Next Permutation | Rearrange numbers into the next lexicographically greater permutation. |
| [`179_largest_number.js`](./179_largest_number.js) | 179 | Largest Number | Arrange numbers to form the largest possible concatenated value. |

---

## 🧩 Problem Summaries

---

### 👽 953 — Verifying an Alien Dictionary

**Problem Type:**  
Lexicographical comparison with a **custom character priority**

**Goal:**  
Given an array of words and a string defining the order of characters in an alien language,  
determine whether the words are sorted according to that order.

#### Approaches

| Function | Approach | Time Complexity | Space Complexity | Description |
|--------|----------|----------------|------------------|-------------|
| `isAlienSortedBrute` | Brute Force | O(n² · m) | O(1) | Compare every pair of words using the custom order mapping. |
| `isAlienSortedBetter` | Sorting | O(n log n · m) | O(n) | Sort words using a custom comparator and compare with the original list. |
| `isAlienSortedOptimal` | Adjacent Comparison | O(n · m) | O(1) | Compare only neighboring words using the order mapping. |

---

### 🔢 31 — Next Permutation

**Problem Type:**  
Lexicographical permutation ordering

**Goal:**  
Given an array of numbers, rearrange it into the **next lexicographically greater permutation**.  
If no such permutation exists, rearrange the array into the **smallest possible order**.

#### Important Constraints
- Must modify the array **in-place**
- Only **constant extra space** is allowed

#### Approaches

| Function | Approach | Time Complexity | Space Complexity | Description |
|--------|----------|----------------|------------------|-------------|
| `nextPermutationBrute` | Brute Force | O(n · n!) | O(n!) | Generate all permutations and select the next one. |
| `nextPermutationOptimal` | Lexicographical Scan | O(n) | O(1) | Skip decreasing suffix, make minimal increase, reverse the remainder. |

---

### 🔢 179 — Largest Number

**Problem Type:**  
Lexicographical ordering with **custom concatenation comparison**

**Goal:**  
Given an array of non-negative integers, arrange them such that they form the  
**largest possible number** when concatenated, and return it as a string.

#### Key Insight

For any two numbers `a` and `b`, their relative order is decided by comparing:
a + b vs b + a
The order that produces the **larger concatenated string** should come first.

This is a **lexicographical comparison**, not a numeric one.

#### Approaches

| Function | Approach | Time Complexity | Space Complexity | Description |
|--------|----------|----------------|------------------|-------------|
| `largestNumberBrute` | Manual Comparison Sort | O(n² · k) | O(1) | Compare every pair using string concatenation and swap accordingly. |
| `largestNumberOptimal` | Custom Sort Comparator | O(n log n · k) | O(1) | Use built-in sort with a custom lexicographical comparator. |

> `k` = average number of digits in a number

#### Edge Case
- If the largest element after sorting is `"0"`, return `"0"` instead of `"000..."`

---

## 🧠 Core Lexicographical Insight

> Lexicographical order means comparing sequences the same way words are compared in a dictionary:
> from left to right, the **first difference determines the order**.

In array problems, lexicographical logic commonly appears in:
- Custom sorting rules
- Permutations (next / previous)
- Concatenation-based comparisons

---

## ▶️ How to Run

```bash
node 953_alien_dict.js
node 31_next_permutation.js
node 179_largest_number.js