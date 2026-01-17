# 🔍 Array + Binary Search Problems

This folder includes problems where the **Binary Search technique** is applied  
to efficiently solve problems on **arrays** by reducing time complexity to **O(log n)**.

---

## 📂 Files

| File | Problem | Description |
|------|--------|-------------|
| [`704_binary_search.js`](./704_binary_search.js) | LeetCode #704 — Binary Search | Search for a target value in a sorted array using Binary Search. |
| [`34_first_last_position.js`](./34_first_last_position.js) | LeetCode #34 — First and Last Position of Element in Sorted Array | Find the starting and ending position of a target value in a sorted array. |
| [`74_search_2d_matrix.js`](./74_search_2d_matrix.js) | LeetCode #74 — Search a 2D Matrix | Determine if a target value exists in a sorted 2D matrix using binary search. |
| [`153_min_in_rotated_arr.js`](./153_min_in_rotated_arr.js) | LeetCode #153 — Find Minimum in Rotated Sorted Array | Find the minimum element in a rotated sorted array using binary search. |
| [`33_search_in_rotated_arr.js`](./33_search_in_rotated_arr.js) | LeetCode #33 — Search in Rotated Sorted Array | Find the index of target element in a rotated sorted array using binary search. |
| [`875_koko_eating_banana.js`](./875_koko_eating_banana.js) | LeetCode #875 — Koko Eating Bananas | Find the minimum eating speed using Binary Search on Answer. |
| [`981_time_based_key_value_store.js`](./981_time_based_key_value_store.js) | LeetCode #981 — Time Based Key-Value Store | Store and retrieve values based on timestamps using Binary Search. |
| [`4_median_of_two_sorted_arr.js`](./4_median_of_two_sorted_arr.js) | LeetCode #4 — Median of Two Sorted Arrays | Find the median of two sorted arrays using Binary Search on partitions. |

---

## 🧩 Problem Summaries

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
| `searchRangeBrute` | Linear Scan | O(n) | O(1) | Traverse the array and track first and last occurrence. |
| `searchRangeBetter` | Binary Search + Expansion | O(log n) avg | O(1) | Find one occurrence then expand. |
| `searchRangeOptimal` | Two Binary Searches | O(log n) | O(1) | Find first and last positions using binary search. |

---

### 🔢 **74 — Search a 2D Matrix**

**Goal:**  
Determine if a target value exists in a sorted 2D matrix.

---

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `searchMatrixBrute` | Brute Force | O(m × n) | O(1) | Check each element. |
| `searchMatrixOptimal` | Binary Search | O(log(m × n)) | O(1) | Treat matrix as 1D sorted array. |

---

### 🔢 **153 — Find Minimum in Rotated Sorted Array**

**Goal:**  
Find the minimum element in a rotated sorted array in **O(log n)** time.

---

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `findMinBrute` | Linear Scan | O(n) | O(1) | Traverse and track minimum. |
| `findMinOptimal` | Binary Search | O(log n) | O(1) | Discard sorted half. |

---

### 🔢 **33 — Search in Rotated Sorted Array**

**Goal:**  
Search for a target value in a rotated sorted array.

---

| Function | Approach | Time | Space | Description |
|--------|----------|------|-------|-------------|
| `searchBrute` | Linear Search | O(n) | O(1) | Traverse array. |
| `searchOptimal` | Binary Search | O(log n) | O(1) | Identify sorted half. |

---

### 🔢 **875 — Koko Eating Bananas**

**Goal:**  
Given banana piles and hours `h`, find the **minimum eating speed**.

---

| Function | Approach | Time | Space | Description |
|--------|----------|------|-------|-------------|
| `minEatingSpeedBrute` | Brute Force | O(n × maxPile) | O(1) | Try all speeds. |
| `minEatingSpeedOptimal` | Binary Search | O(n log maxPile) | O(1) | Binary search answer. |

---

### 🔢 **981 — Time Based Key-Value Store**

**Goal:**  
Store and retrieve values for keys based on timestamps.

Overall space complexity: **O(n)** for stored values.

---

| Function | Approach | Time | Space | Description |
|--------|----------|------|-------|-------------|
| `set` | Insert | O(1) | O(1) | Append timestamp-value pair. |
| `get` | Binary Search | O(log n) | O(1) | Find latest timestamp ≤ target. |

---

### 🔢 **4 — Median of Two Sorted Arrays**

**Goal:**  
Given two sorted arrays `nums1` and `nums2`, return the **median**  
in **O(log(min(m, n)))** time.

---

| Function | Approach | Time | Space | Description |
|--------|----------|------|-------|-------------|
| `findMedianSortedArrays` | Merge (Brute Force) | O(m + n) | O(m + n) | Merge arrays and compute median. |
| `findMedianSortedOptimal` | Binary Search | O(log(min(m, n))) | O(1) | Partition arrays using binary search. |

---

## ▶️ How to Run

```bash
node 704_binary_search.js
node 34_first_last_position.js
node 74_search_2d_matrix.js
node 153_min_in_rotated_arr.js
node 33_search_in_rotated_arr.js
node 875_koko_eating_banana.js
node 981_time_based_key_value_store.js
node 4_median_of_two_sorted_arr.js