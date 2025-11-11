# 🧮 Array + Hash Map Problems

This folder includes problems where **Hash Maps** (or JavaScript objects) are used with **arrays**  
to store values, indices, or frequencies — making solutions faster than brute force approaches.

---

## 📂 Files

| File | Problem | Description |
|------|----------|-------------|
| [`1_two_sum.js`](./1_two_sum.js) | LeetCode #1 — Two Sum | Find two numbers that add up to a given target using different approaches. |
| [`217_contains_duplicate.js`](./217_contains_duplicate.js) | LeetCode #217 — Contains Duplicate | Check whether an array contains any duplicate elements. |

---

## 🧩 Problem Summaries

### 🧠 **1 Two Sum**
**Goal:** Given an array of integers `nums` and an integer `target`, return indices of the two numbers that add up to the target.

| Function | Approach | Time | Space | Description |
|-----------|-----------|------|--------|-------------|
| `twoSumBrute` | Brute Force | O(n²) | O(1) | Check all pairs of elements. |
| `twoSumBetter` | Two Pointers | O(n log n) | O(n) | Sort + two pointers to find pair. |
| `twoSumOptimal` | Hash Map | O(n) | O(n) | Store complements in a hash map for quick lookup. |

---

### 🔁 **217 Contains Duplicate**
**Goal:** Given an array of integers, return `true` if any value appears at least twice, otherwise `false`.

| Function | Approach | Time | Space | Description |
|-----------|-----------|------|--------|-------------|
| `containsDuplicateBrute` | Brute Force | O(n²) | O(1) | Compare all pairs to find duplicates. |
| `containsDuplicateBetter` | Sorting | O(n log n) | O(n) | Sort and check adjacent elements. |
| `containsDuplicateOptimal` | Hash Map | O(n) | O(n) | Use a hash map to detect duplicates efficiently. |

---

## ▶️ How to Run
```bash
node 1_two_sum.js
node 217_contains_duplicate.js
