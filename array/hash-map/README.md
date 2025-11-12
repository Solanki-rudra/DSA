# 🧮 Array + Hash Map Problems

This folder includes problems where **Hash Maps** (or JavaScript objects) are used with **arrays**  
to store values, indices, or frequencies — making solutions faster than brute force approaches.

---

## 📂 Files

| File | Problem | Description |
|------|----------|-------------|
| [`1_two_sum.js`](./1_two_sum.js) | LeetCode #1 — Two Sum | Find two numbers that add up to a given target using different approaches. |
| [`217_contains_duplicate.js`](./217_contains_duplicate.js) | LeetCode #217 — Contains Duplicate | Check whether an array contains any duplicate elements. |
| [`219_contains_duplicate_2.js`](./219_contains_duplicate_2.js) | LeetCode #219 — Contains Duplicate II | Check for duplicates where the indices difference is within `k`. |
| [`242_valid_anagram.js`](./242_valid_anagram.js) | LeetCode #242 — Valid Anagram | Check whether two strings are anagrams of each other. |

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

### 🔁 **219 Contains Duplicate II**
**Goal:** Given an integer array `nums` and an integer `k`, return `true` if there are two distinct indices `i` and `j` such that `nums[i] == nums[j]` and `|i - j| <= k`.

| Function | Approach | Time | Space | Description |
|-----------|-----------|------|--------|-------------|
| `containsDuplicate2Brute` | Brute Force | O(n × k) | O(1) | Check each element’s next `k` elements for duplicates. |
| `containsDuplicate2Better` | Sorting | O(n log n) | O(n) | Sort values with indices and check distance. |
| `containsDuplicate2Optimal` | Hash Set | O(n) | O(k) | Use a sliding window + Set to track recent elements. |

---

### 🔡 **242 Valid Anagram**
**Goal:** Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, otherwise `false`.

| Function | Approach | Time | Space | Description |
|-----------|-----------|------|--------|-------------|
| `validAnagramBrute` | Brute Force | O(n²) | O(n) | Check each character in one string within the other. |
| `validAnagramBetter` | Sorting | O(n log n) | O(n) | Sort both strings and compare. |
| `validAnagramOptimal` | Hash Map | O(n) | O(n) | Count character frequencies using a hash map and compare. |

---

## ▶️ How to Run
```bash
node 1_two_sum.js
node 217_contains_duplicate.js
node 219_contains_duplicate.js
node 242_valid_anagram.js