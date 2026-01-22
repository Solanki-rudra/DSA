# 🔗 Linked List + Merge and Sort Problems

This folder contains **Linked List problems** that focus on  
**merging techniques** and **sorting algorithms** for linked lists.

These problems help you understand:
- Merging multiple sorted linked lists
- Sorting linked lists efficiently
- Difference between brute force and optimal approaches
- Why merge sort is optimal for linked lists
- In-place merging using dummy nodes

---

## 📂 Files

| File | Problem | Description |
|------|--------|-------------|
| [`21_merge_list.js`](./21_merge_list.js) | LeetCode #21 — Merge Two Sorted Lists | Merge two sorted linked lists using brute force and optimal approaches. |
| [`148_sort_list.js`](./148_sort_list.js) | LeetCode #148 — Sort List | Sort a linked list using merge sort (brute force and optimal). |
| [`23_merge_k_sorted_list.js`](./23_merge_k_sorted_list.js) | LeetCode #23 — Merge k Sorted Lists | Merge multiple sorted linked lists using brute force and optimal approaches. |

---

## 🧩 Problem Summaries

---

### 🔍 **LeetCode #21 — Merge Two Sorted Lists**

**Goal:**  
Merge two **sorted** linked lists into a single sorted list.

---

### 🛠 Approaches Used (21)

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `mergeTwoListsBrute` | Brute Force | O(n log n) | O(n) | Convert lists to arrays, merge + sort, then rebuild the list. |
| `mergeTwoListsOptimal` | Two Pointers | O(n) | O(1) | Merge lists in-place using a dummy node. |

---

### 🔍 **LeetCode #148 — Sort List**

**Goal:**  
Sort a linked list in ascending order.

---

### 🛠 Approaches Used (148)

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `sortListBrute` | Brute Force | O(n log n) | O(n) | Convert to array, sort, rebuild list. |
| `sortListOptimal` | Merge Sort | O(n log n) | O(log n) | Recursively split and merge lists. |

---

### 🔍 **LeetCode #23 — Merge k Sorted Lists**

**Goal:**  
Merge **k sorted linked lists** into one sorted linked list.

---

### 🛠 Approaches Used (23)

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `mergeKListsBrute` | Merge + Sort | O(n log n) | O(n) | Merge all lists, then sort the combined list. |
| `mergeKListsOptimal` | Divide & Conquer | O(n log k) | O(log k) | Merge lists pairwise until one list remains. |

---

## 🧠 Key Learnings

- Dummy node pattern for merging
- Why merge sort is optimal for linked lists
- Divide and conquer for multiple list merging
- In-place merging techniques
- Difference between brute force and optimal sorting

---

## ▶️ How to Run

```bash
node 21_merge_list.js
node 148_sort_list.js
node 23_merge_k_sorted_list.js
```