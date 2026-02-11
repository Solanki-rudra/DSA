# Heap + Max-Heap Problems

This folder contains problems that use max-heaps (priority queues) to solve
algorithmic challenges.

---

## 📂 Files

| File | Problem | Description |
|------|---------|-------------|
| [`1046_last_stone_weight.js`](./1046_last_stone_weight.js) | LeetCode #1046 — Last Stone Weight | Repeatedly smash the two heaviest stones; if unequal, insert the difference. Return the weight of the last remaining stone (or 0). |

---

## 🧩 Problem Summary

### 🪨 **1046 — Last Stone Weight**

**Goal:**
Given an array of stone weights, repeatedly take the two heaviest stones and smash them:
- If their weights are equal, both are destroyed.
- If they differ, the remaining stone has weight equal to their difference and is reinserted.
Return the weight of the last remaining stone (or 0 if none remain).

**Approach:**
Use a max-heap (priority queue) to always extract the two largest stones efficiently.

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `lastStoneWeightBrute` | Sorting + simulation | O(n^2 log n) | O(1) | Repeatedly sort the array, take two largest elements, and insert the difference (if any). |
| `lastStoneWeightOptimal` | Max-heap (priority queue) | O(n log n) | O(n) | Build a max-heap from the stones and repeatedly poll the top two and reinsert the difference when necessary. |

**Key Points:**
- Max-heap allows efficient retrieval of the largest two stones.
- Each insertion/removal is O(log n); in the worst case multiple operations occur per stone.

---

## 🧠 Key Learnings

- Implementing and using max-heaps (priority queues)
- Time/space trade-offs for heap-based solutions
- Common heap application patterns (top-K, merging, greedy reductions)

---

## ▶️ How to Run

```bash
node 1046_last_stone_weight.js
```