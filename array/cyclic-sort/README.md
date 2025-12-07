# 🧮 Array + Cyclic Sort Problems

This folder contains problems based on the **Cyclic Sort pattern** — where we leverage array indices to place numbers in their correct positions or track their presence.  
These problems typically run in **O(n) time and O(1) space**, making them more optimal than sorting or hashing when applicable.

---

## 📂 Files

| File | Problem | Description |
|------|--------|-------------|
| [`41_first_miss_positive.js`](./41_first_miss_positive.js) | LeetCode #41 — First Missing Positive | Find the smallest positive integer missing from an unsorted array using different approaches. |

---

## 🧩 Problem Summaries

### 🔢 **LeetCode #41 — First Missing Positive**
**Goal:** Given an unsorted array `nums`, return the smallest positive integer that is not present in the array.

| Function | Approach | Time | Space | Description |
|----------|----------|------|--------|-------------|
| `firstMissingPositiveBrute` | Brute Force | O(n²) | O(1) | For each number starting from 1, search the array for its presence. |
| `firstMissingPositiveBetter` | Sorting | O(n log n) | O(1) | Sort the array first, then scan sequentially to find the missing number. |
| `firstMissingPositiveBest` | Hash Map | O(n) | O(n) | Use a hash map to record which numbers exist and scan from 1 to n. |
| `firstMissingPositiveOptimal` | Cyclic Sort / Index Marking | O(n) | O(1) | Mark indices using negative signs to track presence and detect the missing number. |

---

## ▶️ How to Run

```bash
node 41_first_miss_positive.js
