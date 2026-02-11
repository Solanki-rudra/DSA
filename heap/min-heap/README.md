# Heap + Min-Heap Problems

This folder contains problems that use min-heaps (priority queues) to solve
algorithmic challenges.

---

## 📂 Files

| File | Problem | Description |
|------|---------|-------------|
| [`215_kth_larg_ele.js`](./215_kth_larg_ele.js) | LeetCode #215 — Kth Largest Element in an Array | Find the kth largest element in an unsorted array. Compare brute force, sorting, and min-heap (capacity k) approaches. |

---

## 🧩 Problem Summary

### 🏆 **215 — Kth Largest Element in an Array**

**Goal:**
Given an integer array `nums` and an integer `k`, return the kth largest element in the array.

**Approaches:**
Three solutions demonstrating increasing efficiency:

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `findKthLargestBrute` | Repeated max search + removal | O(k·n) | O(1) | Find max element k times by repeatedly searching and removing the largest. |
| `findKthLargestBetter` | Sort descending | O(n log n) | O(log n) | Sort array in descending order and return element at index k-1. |
| `findKthLargestOptimal` | Min-heap with capacity k | O(n log k) | O(k) | Maintain a min-heap of k largest elements; the root is the kth largest. |

**Key Points:**
- Min-heap with capacity k is optimal when k << n.
- The heap's root always contains the kth largest element.
- Capacity constraint in MinHeap automatically discards elements smaller than the min.

---

## 🧠 Key Learnings

- Implementing and using min-heaps (priority queues)
- Time/space trade-offs: brute (O(kn)) vs sorting (O(n log n)) vs min-heap (O(n log k))
- Top-K pattern: maintain heap of capacity k to efficiently find k largest/smallest elements

---

## ▶️ How to Run

```bash
node 215_kth_larg_ele.js
```