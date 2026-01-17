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
| [`75_sort_colors.js`](./75_sort_colors.js) | LeetCode #75 — Sort Colors | Sort an array containing 0s, 1s, and 2s in-place using counting or Dutch National Flag algorithm. |
| [`74_search_2d_matrix.js`](./74_search_2d_matrix.js) | LeetCode #74 — Search a 2D Matrix | Determine if a target value exists in a sorted 2D matrix using binary search. |
| [`153_min_in_rotated_arr.js`](./153_min_in_rotated_arr.js) | LeetCode #153 — Find Minimum in Rotated Sorted Array | Find the minimum element in a rotated sorted array using binary search. |
| [`33_search_in_rotated_arr.js`](./33_search_in_rotated_arr.js) | LeetCode #33 — Search in Rotated Sorted Array | Find the index of target element in a rotated sorted array using binary search. |
| [`875_koko_eating_banana.js`](./875_koko_eating_banana.js) | LeetCode #875 — Koko Eating Bananas | Find the minimum eating speed using Binary Search on Answer. |

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

---

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `mergeBrute` | Copy + Sort | O((m + n) log (m + n)) | O(1) | Copy nums2 into nums1 and sort the entire array. |
| `mergeOptimal` | Two Pointers (from end) | O(m + n) | O(1) | Merge efficiently using pointers from the back to avoid overwriting. |

---

### 🔢 **75 — Sort Colors**

**Goal:**  
Given an array `nums` containing `0`s, `1`s, and `2`s, sort it **in-place**  
so that all `0`s come first, followed by `1`s, then `2`s.

---

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `sortColorsBrute` | Array Sort | O(n log n) | O(1) | Sort the array directly using built-in sort. |
| `sortColorsBetter` | Counting | O(n) | O(1) | Count number of 0s, 1s, and 2s and overwrite the array. |
| `sortColorsOptimal` | Dutch National Flag (Two Pointers) | O(n) | O(1) | Use three pointers to partition the array in one pass. |

---

### 🔢 **74 — Search a 2D Matrix**

**Goal:**  
You are given an `m x n` matrix where:

- Each row is sorted in ascending order
- The first integer of each row is greater than the last integer of the previous row

Determine if a given `target` exists in the matrix.

---

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `searchMatrixBrute` | Brute Force | O(m × n) | O(1) | Check each element in the matrix. |
| `searchMatrixBetter` | Binary Search per Row | O(m log n) | O(1) | Binary search on the potential row. |
| `searchMatrixOptimal` | Flattened Binary Search | O(log (m × n)) | O(1) | Treat the matrix as a sorted 1D array and apply binary search. |

---

### 🔢 **153 — Find Minimum in Rotated Sorted Array**

**Goal:**  
Given a rotated sorted array `nums` **without duplicates**, find the minimum element  
in **O(log n)** time.

---

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `findMinBrute` | Linear Scan | O(n) | O(1) | Traverse the array and track the minimum value. |
| `findMinOptimal` | Binary Search | O(log n) | O(1) | Use binary search to discard the sorted half and find the minimum efficiently. |

---

### 🔢 **33 — Search in Rotated Sorted Array**

**Goal:**  
Given a rotated sorted array `nums` **without duplicates** and an integer `target`,  
return the **index** of `target` if it exists, otherwise return `-1`.

The array was originally sorted in ascending order and then rotated at an unknown pivot.

**Example:**  
`[0,1,2,4,5,6,7] → [4,5,6,7,0,1,2]`

---

| Function | Approach | Time | Space | Description |
|--------|----------|------|-------|-------------|
| `searchBrute` | Linear Search | O(n) | O(1) | Traverse the array and compare each element with the target. |
| `searchOptimal` | Binary Search (Rotated Array) | O(log n) | O(1) | Identify the sorted half at each step and discard the half where the target cannot exist. |

---

### 🔢 **875 — Koko Eating Bananas**

**Goal:** 
Koko loves bananas and has n piles of bananas, where piles[i] represents
the number of bananas in the ith pile.

She can eat at most k bananas per hour.
Each hour, she chooses one pile and eats up to k bananas from it.

Given h hours, return the minimum integer k such that Koko can eat
all the bananas within h hours.

---

| Function | Approach | Time | Space | Description |
|--------|----------|------|-------|-------------|
| `minEatingSpeedBrute` | Brute Force | O(n x maxPile) | O(1) | Try all eating speeds from 1 to max(piles) and check feasibility. |
| `minEatingSpeedOptimal` | Binary Search | O(n log maxPile) | O(1) | Binary search the minimum eating speed that allows finishing within h hours. |

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
node 75_sort_colors.js
node 74_search_2d_matrix.js
node 153_min_in_rotated_arr.js
node 33_serach_in_rotated_arr.js
node 875_koko_eating_banana.js