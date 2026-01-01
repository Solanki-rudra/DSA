# 🔤 Array + Lexicographical Problems

This folder contains problems where the **order of elements matters**, and solutions rely on  
**lexicographical (dictionary-like) ordering** of sequences.

Lexicographical problems are not limited to strings — they also apply to **arrays of numbers**,  
especially when working with **permutations, ordering rules, and “next/previous” patterns**.

---

## 📂 Files

| File | LeetCode # | Problem Name | Description |
|-----|-----------|-------------|-------------|
| [`953_alien_dict.js`](./953_alien_dict.js) | 953 | Verifying an Alien Dictionary | Verify whether words are sorted based on a custom alphabet order. |
| [`31_next_permutation.js`](./31_next_permutation.js) | 31 | Next Permutation | Rearrange numbers into the next lexicographically greater permutation. |

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

## 🧠 Core Lexicographical Insight

> Lexicographical order means comparing sequences the same way words are compared in a dictionary:
> from left to right, the **first difference determines the order**.

For permutations:
1. Ignore the suffix that is already in its largest order
2. Increase the sequence by the smallest possible amount
3. Rearrange the remaining elements to be as small as possible

---

## ▶️ How to Run

```bash
node 953_alien_dict.js
node 31_next_permutation.js