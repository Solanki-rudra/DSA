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
node 704_binary_search.js
node 34_first_last_position.js
node 74_search_2d_matrix.js
node 153_min_in_rotated_arr.js
node 33_search_in_rotated_arr.js
node 875_koko_eating_banana.js