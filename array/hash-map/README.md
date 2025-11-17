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
| [`49_group_anagrams.js`](./49_group_anagrams.js) | LeetCode #49 — Group Anagrams | Group a list of strings into sets of anagrams. |
| [`347_top_k_frequent_elements.js`](./347_top_k_frequent_elements.js) | LeetCode #347 — Top K Frequent Elements | Return the `k` most frequent elements using Hash Map + Bucket Sort. |
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

### 🔤 **49 Group Anagrams**
**Goal:** Given an array of strings, group all anagrams together.

| Function | Approach | Time | Space | Description |
|-----------|-----------|--------|---------|-------------|
| `groupAnagramsBrute` | Brute Force | O(n² · k log k) | O(nk) | Compare each string with every other by sorting inside nested loops. |
| `groupAnagramsBetter` | Sorting + Grouping | O(nk log k + n log n) | O(nk) | Map strings → sorted keys, sort them, then group neighbors. |
| `groupAnagramsOptimal` | Hash Map | O(nk log k) | O(nk) | Use sorted string as hash key and group all anagrams in a map. |

---
### 🔢 **347 Top K Frequent Elements**
**Goal:** Return the `k` most frequent elements from the array.

| Function | Approach | Time | Space | Description |
|-----------|-----------|------|--------|-------------|
| `topKFrequentBrute` | Brute Force | O(n²) | O(n) | Count frequencies using nested loops + sorting. |
| `topKFrequentBetter` | Hash Map + Sorting | O(n log n) | O(n) | Build frequency map and sort by counts. |
| `topKFrequentOptimal` | Bucket Sort | O(n) | O(n) | Use frequency buckets and collect top `k` elements. |

---

## ▶️ How to Run
```bash
node 1_two_sum.js
node 217_contains_duplicate.js
node 219_contains_duplicate.js
node 242_valid_anagram.js
node 49_group_anagrams.js
node 347_top_k_frequent_elements.js