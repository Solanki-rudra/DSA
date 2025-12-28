# 🧮 Array + Two-Pointers Problems

This folder includes problems where the **Two Pointers technique** is applied  
to efficiently solve problems on **sorted arrays** by moving pointers inward  
based on conditions — reducing time complexity from **O(n²) → O(n)**.

Two Pointers avoids extra space and is commonly used when the array is **sorted**.

---

## 📂 Files

| File | Problem | Description |
|------|----------|-------------|
| [`167_two_sum_2.js`](./167_two_sum_2.js) | LeetCode #167 — Two Sum II (Input Array Is Sorted) | Find two numbers in a sorted array that add up to a given target using Two Pointers. |
| [`15_three_sum.js`](./15_three_sum.js) | LeetCode #15 — 3 Sum | Find all unique triplets in the array that sum to zero using sorting and Two Pointers. |

---

## 🧩 Problem Summaries

### 🔢 **167 — Two Sum II (Input Array Is Sorted)**

**Goal:**  
Given a **1-indexed sorted array** `numbers`, find two numbers such that they add up to a specific `target`.

Return the indices of the two numbers (`index1 < index2`).

---

| Function | Approach | Time | Space | Description |
|-----------|-----------|------|--------|-------------|
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
|-----------|-----------|------|--------|-------------|
| `threeSumBrute` | Brute Force + Set | O(n³) | O(n) | Try all triplets and use a set to avoid duplicates. |
| `threeSumBetter` | Hash Set | O(n²) | O(n) | Fix one element and use a hash set to find complements. |
| `threeSumOptimal` | Sorting + Two Pointers | O(n²) | O(1) | Sort array and use two pointers to find valid triplets efficiently. |

---

## ▶️ How to Run
```bash
node 167_two_sum_2.js
node 15_three_sum.js