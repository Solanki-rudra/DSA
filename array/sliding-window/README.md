# 💹 Array + Sliding Window Problems

This folder includes problems where we dynamically **expand and shrink a window** across an array  
to compute values efficiently — without recalculating everything from scratch.  
Sliding Window helps reduce time complexity from **O(n²) → O(n)** by keeping track of useful information while scanning.

---

## 📂 Files

| File | Problem | Description |
|------|---------|-------------|
| [`121_best_time_to_buy_and_sell_stock.js`](./121_best_time_to_buy_sell_stock.js) | LeetCode #121 — Best Time to Buy and Sell Stock | Find the maximum profit by choosing one buy day and one sell day. |

---

## 🧩 Problem Summary

### 💹 121 — Best Time to Buy and Sell Stock
**Goal:** Given `prices[i]` representing the price of stock on day `i`,  
choose **one day to buy** and **a later day to sell** to maximize profit.

| Function | Approach | Time | Space | Description |
|----------|----------|------|--------|-------------|
| `maxProfitBrute` | Brute Force | O(n²) | O(1) | Try all buy–sell pairs using nested loops and track max profit. |
| `maxProfitOptimal` | Sliding Window (Running Min) | O(n) | O(1) | Track the minimum price so far while scanning and compute best profit on the fly. |

---

## ▶️ How to Run
```bash
node 121_best_time_to_buy_and_sell_stock.js
