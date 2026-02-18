# Two Heaps Problems

This folder contains problems that use two heaps together to solve
algorithmic challenges efficiently.

---

## 📂 Files

| File | Problem | Description |
|------|---------|-------------|
| [`295_find_median.js`](./295_find_median.js) | LeetCode #295 — Find Median from Data Stream | Find the median of numbers from a continuous data stream. Compare brute force sorting and optimal two-heap approaches. |

---

## 🧩 Problem Summary

### 🏆 **295 — Find Median from Data Stream**

**Goal:**
Implement a data structure that supports adding numbers from a stream and finding the median at any point.

**Approaches:**
Two solutions demonstrating increasing efficiency:

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `MedianFinderBrute` | Store and sort array | O(n log n) per query | O(n) | Store all numbers in array; sort and find median when requested. |
| `MedianFinderOptimal` | Two heaps (max + min) | O(log n) per operation | O(n) | Maintain max-heap for smaller half and min-heap for larger half; balance heaps to keep them equal or differ by 1. |

**Key Points:**
- Use MaxHeap for the smaller half of numbers and MinHeap for the larger half.
- Balance heaps so their sizes differ by at most one.
- If heaps are equal size, median is average of both roots; if unbalanced, median is root of larger heap.
- Two-heap approach ensures O(log n) add time complexity.


## 🧠 Key Learnings

- Using two heaps together to solve median-finding problems
- Time/space trade-offs: brute sorting (O(n log n)) vs two heaps (O(log n))
- Heap balancing technique: maintain size constraint to efficiently access median
- Data stream pattern: optimal for problems requiring multiple queries on dynamic data

---

## ▶️ How to Run

```bash
node 295_find_median.js
```