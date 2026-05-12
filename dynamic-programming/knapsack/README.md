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

**Approach:**

- **Brute Force (Recursion):** For each coin, we can either include it in our sum (if it's less than or equal to the remaining amount) or exclude it. Since we can reuse coins, if we include a coin, we stay on the same coin index. Return the minimum coins needed.
- **Optimal (2D Dynamic Programming / Memoization):** Use a 2D memoization table to store the results of subproblems (`ind`, `target`). `dp[ind][target]` stores the minimum coins needed to make `target` using coins up to index `ind`. Time O(n * amount), Space O(n * amount).

| Function      | Approach                            | Time           | Space          | Description                                                    |
| ------------- | ----------------------------------- | -------------- | -------------- | -------------------------------------------------------------- |
| `coinChange1` | Recursion (Brute Force)             | O(S^n)         | O(S/min(coin)) | Explores all coin combinations recursively without memoization.|
| `coinChange2` | Memoization (Dynamic Programming)   | O(n * amount)  | O(n * amount)  | Caches overlapping subproblems in a 2D array.                  |

---

## ▶️ How to Run

```bash
node 322_coin_change.js
```
