# Dynamic Programming — Knapsack Problems

This folder contains dynamic programming problems following the **Knapsack** pattern.

The knapsack problem is a problem in combinatorial optimization: Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible.

---

## 📂 Files

| File                                         | Problem                     | Description                                                                                          |
| -------------------------------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------- |
| [`322_coin_change.js`](./322_coin_change.js) | LeetCode #322 — Coin Change | Return the fewest number of coins that you need to make up that amount.                              |

---

## 🧩 Problem Summaries

---

### 🪙 **322 — Coin Change**

**Goal:**  
You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.  
Return the **fewest number of coins** that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`. You may assume that you have an infinite number of each kind of coin.

**Learning Path & Approaches:**

1. **Brute Force (Recursion):** Start by exploring all possible combinations. At each step, either include the current coin (and stay on the same coin since supply is infinite) or skip to the next coin. Time complexity is exponential.
2. **Top-Down DP (Memoization):** Optimize the recursion by caching results of subproblems (`ind`, `target`) in a 2D array `dp`. This prevents recalculating the same states.
3. **Bottom-Up DP (Tabulation):** Convert the memoized recursion into an iterative approach. Build a 2D `dp` table from base cases up to the target amount.
4. **Space-Optimized DP (1D Tabulation):** Notice that the current state in tabulation only depends on the previous row or the current row. We can flatten the 2D table into a 1D array of size `amount + 1` to optimize space.

| Function      | Approach                               | Time           | Space          | Description                                                    |
| ------------- | -------------------------------------- | -------------- | -------------- | -------------------------------------------------------------- |
| `coinChange1` | Recursion (Brute Force)                | O(S^n)         | O(S/min(coin)) | Explores all coin combinations recursively without memoization.|
| `coinChange2` | Top-Down DP (Memoization)              | O(n * amount)  | O(n * amount)  | Caches overlapping subproblems in a 2D array.                  |
| `coinChange3` | Bottom-Up DP (Tabulation)              | O(n * amount)  | O(n * amount)  | Iteratively builds a 2D table from base cases.                 |
| `coinChange4` | Space-Optimized DP (1D Tabulation)     | O(n * amount)  | O(amount)      | Uses a 1D array to reduce space complexity.                    |

---

## ▶️ How to Run

```bash
node 322_coin_change.js
```
