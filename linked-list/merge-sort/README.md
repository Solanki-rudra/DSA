# 🔗 Linked List + Merge Sort Problems

This folder contains **Linked List problems** that are solved using the
**Merge Sort technique**.

Unlike arrays, linked lists cannot be sorted efficiently using index-based
sorting algorithms. Merge Sort is the **most optimal and commonly used**
sorting algorithm for linked lists because it works by **splitting and merging
nodes using pointers**, not indices.

---

## 📂 Files

| File | Problem | Description |
|------|--------|-------------|
| [`148_sort_list.js`](./148_sort_list.js) | LeetCode #148 — Sort List | Sort a singly linked list in ascending order using Merge Sort. |

---

## 🧩 Problem Summary

### 🔗 **LeetCode #148 — Sort List**

**Goal:**  
Given the `head` of a singly linked list, sort the list in ascending order and
return the sorted list.

---

## 🛠 Approaches Used

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `sortListBrute` | Brute Force | O(n log n) | O(n) | Convert linked list to array, sort it, then rebuild the linked list. |

---

## ▶️ How to Run

```bash
node 148_sort_list.js