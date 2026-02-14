# Heap + Min-Heap Problems

This folder contains problems that use min-heaps (priority queues) to solve
algorithmic challenges.

---

## 📂 Files

| File | Problem | Description |
|------|---------|-------------|
| [`215_kth_larg_ele.js`](./215_kth_larg_ele.js) | LeetCode #215 — Kth Largest Element in an Array | Find the kth largest element in an unsorted array. Compare brute force, sorting, and min-heap (capacity k) approaches. |
| [`1086_high_five.js`](./1086_high_five.js) | LeetCode #1086 — High Five | Calculate each student's top five average using a min-heap with capacity 5 to track the highest scores. |

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

### 🏆 **1086 — High Five**

**Goal:**
Given a list of scores `[IDi, scorei]` for each student, calculate each student's top five average and return sorted by ID.

**Approaches:**
Two solutions comparing efficiency:

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `highFiveBrute` | Group by ID, sort, calculate average | O(n log n) | O(n) | Group scores by ID, sort each group, take top 5 and compute average. |
| `highFiveOptimal` | Min-heap with capacity 5 per student | O(n log 5) | O(n) | Maintain a min-heap of capacity 5 for each student; automatically keeps the top 5 scores. |

**Key Points:**
- Min-heap with fixed capacity 5 efficiently maintains top 5 elements without sorting entire score list.
- When heap is full, only replace if new score is larger than the minimum.
- Polling k=5 elements at the end gives flexible retrieval without sorting.

---

## 🧠 Key Learnings

- Implementing and using min-heaps (priority queues)
- Time/space trade-offs: brute (O(kn)) vs sorting (O(n log n)) vs min-heap (O(n log k))
- Top-K pattern: maintain heap of capacity k to efficiently find k largest/smallest elements

---

## ▶️ How to Run

```bash
node 215_kth_larg_ele.js
node 1086_high_five.js
```