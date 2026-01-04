# 🧮 Array + Two-Pointers Problems

This folder includes problems where the **Two Pointers technique** is applied  
to efficiently solve problems on **arrays** by moving pointers inward or outward  
based on conditions — reducing time complexity from **O(n²) → O(n)**.

Two Pointers avoids extra space and is commonly used when the array is  
**sorted** or when comparing elements from both ends.

---

## 📂 Files

| File | Problem | Description |
|------|--------|-------------|
| [`167_two_sum_2.js`](./167_two_sum_2.js) | LeetCode #167 — Two Sum II (Input Array Is Sorted) | Find two numbers in a sorted array that add up to a given target using Two Pointers. |
| [`15_three_sum.js`](./15_three_sum.js) | LeetCode #15 — 3 Sum | Find all unique triplets in the array that sum to zero using sorting and Two Pointers. |
| [`11_most_water_container.js`](./11_most_water_container.js) | LeetCode #11 — Container With Most Water | Find two lines that together with the x-axis form a container holding the maximum water. |
| [`42_traping_rain_water.js`](./42_traping_rain_water.js) | LeetCode #42 — Trapping Rain Water | Find total units of water that can be trapped between elevation bars. |
| [`26_remove_duplicate.js`](./26_remove_duplicate.js) | LeetCode #26 — Remove Duplicates from Sorted Array | Remove duplicates from a sorted array in-place and return the new length. |
| [`704_binary_search.js`](./704_binary_search.js) | LeetCode #704 — Binary Search | Search for a target value in a sorted array using Binary Search. |
| [`34_first_last_position.js`](./34_first_last_position.js) | LeetCode #34 — First and Last Position of Element in Sorted Array | Find the starting and ending position of a target value in a sorted array. |
| [`88_merge_sorted_arr.js`](./88_merge_sorted_arr.js) | LeetCode #88 — Merge Sorted Array | Merge two sorted arrays into one sorted array in-place. |

---

## 🧩 Problem Summaries

---

### 🔢 **167 — Two Sum II (Input Array Is Sorted)**

**Goal:**  
Given a **1-indexed sorted array** `numbers`, find two numbers such that they add up to a specific `target`.

Return the indices of the two numbers (`index1 < index2`).

---

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `twoSumBrute` | Brute Force | O(n²) | O(1) | Try all pairs and check if their sum equals the target. |
| `twoSumBetter` | Binary Search | O(n log n) | O(1) | For each element, binary search the complement in the remaining array. |
| `twoSumOptimal` | Two Pointers | O(n) | O(1) | Use left and right pointers to find the target sum efficiently. |

---

### 🔢 **15 — Three Sum**

**Goal:**  
Given an integer array `nums`, return **all unique triplets**  
`[nums[i], nums[j], nums[k]]` such that:

- `i ≠ j ≠ k`
- `nums[i] + nums[j] + nums[k] == 0`

---

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `threeSumBrute` | Brute Force + Set | O(n³) | O(n) | Try all triplets and use a set to avoid duplicates. |
| `threeSumBetter` | Hash Set | O(n²) | O(n) | Fix one element and use a hash set to find complements. |
| `threeSumOptimal` | Sorting + Two Pointers | O(n²) | O(1) | Sort array and use two pointers to find valid triplets efficiently. |

---

### 🔢 **11 — Container With Most Water**

**Goal:**  
Given `n` non-negative integers where each represents the height of a vertical line,  
find **two lines** that together with the x-axis form a container such that the container  
holds the **maximum amount of water**.

---

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `maxAreaBrute` | Brute Force | O(n²) | O(1) | Try all possible pairs of lines and calculate the area. |
| `maxAreaOptimal` | Two Pointers | O(n) | O(1) | Move the pointer with smaller height inward to maximize area. |

---

### 🔢 **42 — Trapping Rain Water**

**Goal:**  
Given `n` non-negative integers representing an elevation map where the width of each bar is `1`,  
compute how much water it can trap after raining.

---

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `trapBrute` | Brute Force | O(n²) | O(1) | For each index, calculate max left and max right heights. |
| `trapBetter` | Prefix–Suffix | O(n) | O(n) | Precompute max left and right arrays. |
| `trapOptimal` | Two Pointers | O(n) | O(1) | Use two pointers and track boundaries to calculate trapped water. |

---

### 🔢 **26 — Remove Duplicates from Sorted Array**

**Goal:**  
Given a **sorted array** `nums`, remove the duplicates **in-place**  
such that each element appears only once and return the new length.

---

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `removeDuplicatesBrute` | Brute Force | O(n²) | O(1) | Compare each element with previous ones and shift unique values. |
| `removeDuplicatesOptimal` | Two Pointers | O(n) | O(1) | Use slow and fast pointers to overwrite duplicates in-place. |

---

### 🔢 **704 — Binary Search**

**Goal:**  
Given a **sorted array** `nums` and a `target`, return the **index** of `target`  
if it exists in the array, otherwise return `-1`.

---

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `searchBrute` | Linear Search | O(n) | O(1) | Traverse the array and compare each element with the target. |
| `searchOptimal` | Binary Search | O(log n) | O(1) | Repeatedly divide the search space in half to find the target. |

---

### 🔢 **34 — First and Last Position of Element in Sorted Array**

**Goal:**  
Given a **sorted array** `nums` and a `target`, return the **starting and ending indices**  
of the target value. If the target is not found, return `[-1, -1]`.

---

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `searchRangeBrute` | Linear Scan | O(n) | O(1) | Traverse the array and track first and last occurrence of the target. |
| `searchRangeBetter` | Binary Search + Expansion | O(log n) avg, O(n) worst | O(1) | Find one occurrence using binary search, then expand left and right. |
| `searchRangeOptimal` | Two Binary Searches | O(log n) | O(1) | Perform two biased binary searches to find first and last positions. |

---

### 🔢 **88 — Merge Sorted Array**

**Goal:**  
Given two **sorted arrays** `nums1` and `nums2`, merge `nums2` into `nums1`  
so that `nums1` becomes **one sorted array**.

- `nums1` has length `m + n`
- First `m` elements are valid
- Last `n` elements are empty (`0`)
- Merge must be done **in-place**

---

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `mergeBrute` | Copy + Sort | O((m + n) log (m + n)) | O(1) | Copy nums2 into nums1 and sort the entire array. |
| `mergeOptimal` | Two Pointers (from end) | O(m + n) | O(1) | Merge efficiently using pointers from the back to avoid overwriting. |

---

## ▶️ How to Run

```bash
node 167_two_sum_2.js
node 15_three_sum.js
node 11_most_water_container.js
node 42_traping_rain_water.js
node 26_remove_duplicate.js
node 704_binary_search.js
node 34_first_last_position.js
node 88_merge_sorted_arr.js