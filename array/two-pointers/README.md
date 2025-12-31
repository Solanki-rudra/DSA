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
| [`42_traping_rain_water.js`](./42_traping_rain_water.js) | LeetCode #42 — Trapping Rain Water | Find maximum unit of water that traps into the bars. |
| [`26_remove_duplicate.js`](./26_remove_duplicate.js) | LeetCode #26 — Remove Duplicates | Remove duplicates from a sorted array in-place and return the new length. |

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

The solution must not contain duplicate triplets.

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
| `maxAreaOptimal` | Two Pointers | O(n) | O(1) | Use two pointers from both ends and move the smaller height inward to maximize area. |

---

### 🔢 **42 — Trapping Rain Water**

**Goal:**  
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

---

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `trapBrute` | Brute Force | O(n²) | O(1) | For each index, calculate max left and max right and compute trapped water. |
| `trapBetter` | Prefix–Suffix | O(n) | O(n) | Precompute max left and max right arrays to avoid repeated calculations. |
| `trapOptimal` | Two Pointers | O(n) | O(1) | Use two pointers from both ends and track max boundaries to calculate trapped water optimally. |

---

### 🔢 **26 — Remove Duplicates**

**Goal:**  
Given a **sorted array** `nums`, remove the duplicates **in-place** such that each element appears only once and return the new length.

---

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `removeDuplicatesBrute` | Brute Force | O(n²) | O(1) | Compare each element with previously seen elements and shift unique values forward. |
| `removeDuplicatesOptimal` | Two Pointers | O(n) | O(1) | Use slow and fast pointers to overwrite duplicates in-place efficiently. |

---

## ▶️ How to Run

```bash
node 167_two_sum_2.js
node 15_three_sum.js
node 11_most_water_container.js
node 42_traping_rain_water.js
node 26_remove_duplicate.js