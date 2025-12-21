# 💹 Array + Sliding Window Problems

This folder includes problems where we dynamically **expand and shrink a window** across an array  
to compute values efficiently — without recalculating everything from scratch.  
Sliding Window helps reduce time complexity from **O(n²) → O(n)** by keeping track of useful information while scanning.

---

## 📂 Files

| File | Problem | Description |
|------|---------|-------------|
| [`121_best_time_to_buy_and_sell_stock.js`](./121_best_time_to_buy_sell_stock.js) | LeetCode #121 — Best Time to Buy and Sell Stock | Find the maximum profit by choosing one buy day and one sell day. |
| [`239_sliding_window_max.js`](./239_sliding_window_max.js) | LeetCode #239 — Sliding Window Maximum | Find the maximum value in each sliding window of size `k`. |

---

## 🧩 Problem Summary

### 💹 **121 — Best Time to Buy and Sell Stock**
**Goal:**  
Given `prices[i]` representing the stock price on day `i`, choose **one day to buy** and **a later day to sell** to maximize profit.

| Function | Approach | Time | Space | Description |
|----------|----------|------|--------|-------------|
| `maxProfitBrute` | Brute Force | O(n²) | O(1) | Try all buy–sell pairs using nested loops and track max profit. |
| `maxProfitOptimal` | Sliding Window (Running Min) | O(n) | O(1) | Track the minimum price so far while scanning and compute best profit on the fly. |

---

### 📊 **239 — Sliding Window Maximum**
**Goal:**  
Given an array `nums` and a window size `k`, slide the window from left to right and return the **maximum element** in each window.

A **monotonic decreasing deque** is used so the front always holds the index of the maximum element in the current window.

| Function | Approach | Time | Space | Description |
|----------|----------|------|--------|-------------|
| `maxSlidingWindowBrute` | Brute Force | O(n·k) | O(1) | For every window of size `k`, scan all elements to find the maximum. |
| `maxSlidingWindowOptimal` | Sliding Window + Monotonic Deque | O(n) | O(k) | Maintain a decreasing deque of indices to get the window maximum in O(1). |

---

## ▶️ How to Run
```bash
node 121_best_time_to_buy_and_sell_stock.js
node 239_sliding_window_max.js