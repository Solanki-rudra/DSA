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
| [`128_longest_cons_seq.js`](./128_longest_cons_seq.js) | LeetCode #128 — Longest Consecutive Sequence | Return the length of the longest consecutive elements sequence. |
| [`169_majority_element.js`](./169_majority_element.js) | LeetCode #169 — Majority Element | Find the element that appears more than ⌊n / 2⌋ times. |

---

## 🧩 Problem Summaries

---

### 🧠 **1 — Two Sum**
**Goal:**  
Given an array of integers `nums` and an integer `target`, return indices of the two numbers that add up to the target.

| Function | Approach | Time | Space | Description |
|---------|---------|------|-------|-------------|
| `twoSumBrute` | Brute Force | O(n²) | O(1) | Check all pairs of elements. |
| `twoSumBetter` | Two Pointers | O(n log n) | O(n) | Sort + two pointers to find pair. |
| `twoSumOptimal` | Hash Map | O(n) | O(n) | Store complements in a hash map for quick lookup. |

---

### 🔁 **217 — Contains Duplicate**
**Goal:**  
Given an array of integers, return `true` if any value appears at least twice, otherwise `false`.

| Function | Approach | Time | Space | Description |
|---------|---------|------|-------|-------------|
| `containsDuplicateBrute` | Brute Force | O(n²) | O(1) | Compare all pairs to find duplicates. |
| `containsDuplicateBetter` | Sorting | O(n log n) | O(n) | Sort and check adjacent elements. |
| `containsDuplicateOptimal` | Hash Map | O(n) | O(n) | Use a hash map to detect duplicates efficiently. |

---

### 🔁 **219 — Contains Duplicate II**
**Goal:**  
Given an integer array `nums` and an integer `k`, return `true` if there are two distinct indices `i` and `j` such that  
`nums[i] == nums[j]` and `|i - j| <= k`.

| Function | Approach | Time | Space | Description |
|---------|---------|------|-------|-------------|
| `containsDuplicate2Brute` | Brute Force | O(n × k) | O(1) | Check each element’s next `k` elements. |
| `containsDuplicate2Better` | Sorting | O(n log n) | O(n) | Sort values with indices and check distance. |
| `containsDuplicate2Optimal` | Hash Set | O(n) | O(k) | Sliding window with a set. |

---

### 🔡 **242 — Valid Anagram**
**Goal:**  
Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`.

| Function | Approach | Time | Space | Description |
|---------|---------|------|-------|-------------|
| `validAnagramBrute` | Brute Force | O(n²) | O(n) | Check characters manually. |
| `validAnagramBetter` | Sorting | O(n log n) | O(n) | Sort and compare. |
| `validAnagramOptimal` | Hash Map | O(n) | O(n) | Count character frequencies. |

---

### 🔤 **49 — Group Anagrams**
**Goal:**  
Group all anagrams together.

| Function | Approach | Time | Space | Description |
|---------|---------|------|-------|-------------|
| `groupAnagramsBrute` | Brute Force | O(n² · k log k) | O(nk) | Compare every pair. |
| `groupAnagramsBetter` | Sorting | O(nk log k) | O(nk) | Sorted string as key. |
| `groupAnagramsOptimal` | Hash Map | O(nk log k) | O(nk) | Group using hash map. |

---

### 🔢 **347 — Top K Frequent Elements**
**Goal:**  
Return the `k` most frequent elements.

| Function | Approach | Time | Space | Description |
|---------|---------|------|-------|-------------|
| `topKFrequentBrute` | Brute Force | O(n²) | O(n) | Count + sort manually. |
| `topKFrequentBetter` | Hash Map + Sort | O(n log n) | O(n) | Sort by frequency. |
| `topKFrequentOptimal` | Bucket Sort | O(n) | O(n) | Frequency buckets. |

---

### 🔢 **128 — Longest Consecutive Sequence**
**Goal:**  
Return the length of the longest consecutive elements sequence.

| Function | Approach | Time | Space | Description |
|---------|---------|------|-------|-------------|
| `longestConsecutiveBrute` | Brute Force | O(n³) | O(1) | Check every possible sequence. |
| `longestConsecutiveBetter` | Sorting | O(n log n) | O(1) | Count consecutive numbers. |
| `longestConsecutiveOptimal` | Hash Set | O(n) | O(n) | Start only from sequence heads. |

---

### 🔢 **169 — Majority Element**
**Goal:**  
Given an array `nums`, return the **majority element** —  
the element that appears **more than ⌊n / 2⌋ times**.  
You may assume the majority element **always exists**.

| Function | Approach | Time | Space | Description |
|---------|---------|------|-------|-------------|
| `majorityElementBrute` | Brute Force | O(n²) | O(1) | Count occurrences for each element. |
| `majorityElementBetter` | Hash Map | O(n) | O(n) | Store frequency of each element. |
| `majorityElementOptimal` | Boyer–Moore Voting | O(n) | O(1) | Cancel out different elements to find majority. |

---

## ▶️ How to Run

```bash
node 1_two_sum.js
node 217_contains_duplicate.js
node 219_contains_duplicate_2.js
node 242_valid_anagram.js
node 49_group_anagrams.js
node 347_top_k_frequent_elements.js
node 128_longest_cons_seq.js
node 169_majority_element.js