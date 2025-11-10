# 🧮 Array + Hash Map Problems

This folder includes problems where **Hash Maps** (or JavaScript objects) are used with **arrays**  
to store values, indices, or frequencies — making solutions faster than brute force approaches.

---

## 📂 File: `1_two_sum.js`

### 📘 Problem: LeetCode #1 — Two Sum  
**Goal:** Given an array of integers `nums` and an integer `target`,  
return indices of the two numbers such that they add up to `target`.

---

## 🧩 Implementations

| Function | Approach | Time Complexity | Space Complexity | Description |
|-----------|-----------|----------------|------------------|-------------|
| `twoSumBrute` | Brute Force | O(n²) | O(1) | Check all pairs to find two numbers adding to the target. |
| `twoSumBetter` | Two Pointers (after sorting) | O(n log n) | O(n) | Sort and use two-pointer technique to find the pair. |
| `twoSumOptimal` | Hash Map | O(n) | O(n) | Store values in a hash map and check for complements efficiently. |

---

## ▶️ How to Run
```bash
node 1_two_sum.js
