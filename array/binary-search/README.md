# 🔍 Array + Binary Search Problems

This folder includes problems where the **Binary Seach technique** is applied  
to efficiently solve problems on **arrays** by travelsing in **O(log n)**.

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
| `searchRangeBrute` | Linear Scan | O(n) | O(1) | Traverse the array and track first and last occurrence of the target. |
| `searchRangeBetter` | Binary Search + Expansion | O(log n) avg, O(n) worst | O(1) | Find one occurrence using binary search, then expand left and right. |
| `searchRangeOptimal` | Two Binary Searches | O(log n) | O(1) | Perform two biased binary searches to find first and last positions. |

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

---

| Function | Approach | Time | Space | Description |
|--------|----------|------|-------|-------------|
| `searchBrute` | Linear Search | O(n) | O(1) | Traverse the array and compare each element with the target. |
| `searchOptimal` | Binary Search (Rotated Array) | O(log n) | O(1) | Identify the sorted half at each step and discard the half where the target cannot exist. |

---

### 🔢 **875 — Koko Eating Bananas**

**Goal:**  
Given `n` piles of bananas and `h` hours, find the **minimum eating speed** so that  
Koko can eat all bananas in time.

---

| Function | Approach | Time | Space | Description |
|--------|----------|------|-------|-------------|
| `minEatingSpeedBrute` | Brute Force | O(n × maxPile) | O(1) | Try all eating speeds and check feasibility. |
| `minEatingSpeedOptimal` | Binary Search | O(n log maxPile) | O(1) | Binary search the minimum speed that satisfies the condition. |

---

### 🔢 **981 — Time Based Key-Value Store**

**Goal:**  
Design a time-based key-value data structure that can store multiple values for the  
same key at different timestamps and retrieve the value at a given timestamp.

Overall space complexity would be O(n) for storing data in hashmap.

---

| Function | Approach | Time | Space | Description |
|--------|----------|------|-------|-------------|
| `set` | Direct Insert | O(1) | O(1) | Store values with timestamps in increasing order. |
| `get` | Binary Search | O(log n) | O(1) | Binary search to find the latest timestamp ≤ target. |

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