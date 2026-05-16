# Dynamic Programming — 1D Problems

This folder contains dynamic programming problems with a **single state dimension**.

1D DP problems maintain a `dp` array (or just a few variables) where `dp[i]`
represents the optimal answer for a subproblem of size `i`.
The solution to `dp[n]` is built from previously computed values using a
**recurrence relation**.

---

## 📂 Files

| File                                               | Problem                         | Description                                                                                                                  |
| -------------------------------------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [`70_climbing_stairs.js`](./70_climbing_stairs.js) | LeetCode #70 — Climbing Stairs  | Given `n` steps, find the number of distinct ways to reach the top climbing 1 or 2 steps at a time.                          |
| [`198_house_robber.js`](./198_house_robber.js)     | LeetCode #198 — House Robber    | Given an array of house values, find the maximum money you can rob without robbing two adjacent houses.                      |
| [`213_house_robber_2.js`](./213_house_robber_2.js) | LeetCode #213 — House Robber II | Given an array of house values arranged in a circle, find the maximum money you can rob without robbing two adjacent houses. |
| [`91_decode_ways.js`](./91_decode_ways.js)         | LeetCode #91 — Decode Ways      | Given a string s containing only digits, return the number of ways to decode it.                                             |

---

## 🧩 Problem Summaries

---

### 🪜 **70 — Climbing Stairs**

**Goal:**  
You are climbing a staircase. It takes `n` steps to reach the top.  
Each time you can either climb **1** or **2** steps.  
Return the **number of distinct ways** to reach the top.

**Approach:**

- This is equivalent to a **Fibonacci sequence** — the number of ways to reach step `i` equals the sum of ways to reach step `i - 1` and step `i - 2`.
- Use **bottom-up DP** with two rolling variables (`prev2`, `prev1`) instead of a full array to achieve O(1) space.

| Function      | Approach                              | Time | Space | Description                                       |
| ------------- | ------------------------------------- | ---- | ----- | ------------------------------------------------- |
| `climbStairs` | Dynamic Programming (Space-Optimized) | O(n) | O(1)  | Counts distinct ways using two rolling variables. |

---

### 🏠 **198 — House Robber**

**Goal:**  
You are a robber planning to rob houses along a street. Each house has a certain amount of money. You **cannot rob two adjacent houses** (the alarm will trigger).  
Return the **maximum amount of money** you can rob tonight.

**Approach:**

- **Brute Force (Recursion):** At each house, decide to either rob it (add its value + result from `i+2`) or skip it (result from `i+1`). Return the max of both choices. Leads to O(2^n) time due to overlapping subproblems.
- **Optimal (Space-Optimized DP):** Track only the two most recent running maxima (`prev2`, `prev`). For each house `n`, the new max is `Math.max(prev, n + prev2)`. Roll forward — O(n) time, O(1) space.

| Function     | Approach                              | Time   | Space | Description                                  |
| ------------ | ------------------------------------- | ------ | ----- | -------------------------------------------- |
| `robBrute`   | Recursion (Brute Force)               | O(2^n) | O(n)  | Explores all rob/skip combinations via DFS.  |
| `robOptimal` | Dynamic Programming (Space-Optimized) | O(n)   | O(1)  | Tracks max loot using two rolling variables. |

---

### 🏘️ **213 — House Robber II**

**Goal:**  
You are a robber planning to rob houses along a street. The houses are arranged in a **circle**, meaning the first house is adjacent to the last. Each house has a certain amount of money. You **cannot rob two adjacent houses**.  
Return the **maximum amount of money** you can rob tonight.

**Approach:**

- This problem can be broken down into two simpler "House Robber I" problems:
  1. Rob houses from index `0` to `n-2` (excluding the last house).
  2. Rob houses from index `1` to `n-1` (excluding the first house).
- The maximum of these two scenarios is the final answer.
- Handle edge cases where `n=1` explicitly since it doesn't fit the two ranges.

| Function     | Approach                              | Time   | Space | Description                                                                 |
| ------------ | ------------------------------------- | ------ | ----- | --------------------------------------------------------------------------- |
| `robBrute`   | Recursion (Brute Force)               | O(2^n) | O(n)  | Explores all rob/skip combinations for both ranges via DFS.                 |
| `robOptimal` | Dynamic Programming (Space-Optimized) | O(n)   | O(1)  | Computes the optimal rob value for both ranges using two rolling variables. |

---

### 🔢 **91 — Decode Ways**

**Goal:**  
A message can be decoded using:

- `'A' -> 1`
- `'B' -> 2`
- ...
- `'Z' -> 26`

Given a string `s` containing digits, return the **number of possible decodings**.

**Approach:**

- At each position, we can:
  1. Take **one digit** if it is valid (`1-9`)
  2. Take **two digits** if they form a valid number (`10-26`)
- Recursively explore choices.
- Optimize using **memoization**, **tabulation**, and **space optimization**.

| Function        | Approach           | Time   | Space | Description                                    |
| --------------- | ------------------ | ------ | ----- | ---------------------------------------------- |
| `numDecodings1` | Recursion          | O(2^n) | O(n)  | Explores all possible decoding combinations.   |
| `numDecodings2` | Memoization        | O(n)   | O(n)  | Stores computed states to avoid recomputation. |
| `numDecodings3` | Tabulation         | O(n)   | O(n)  | Builds DP solution bottom-up.                  |
| `numDecodings4` | Space Optimized DP | O(n)   | O(1)  | Uses two variables instead of DP array.        |

---

## ▶️ How to Run

```bash
node 70_climbing_stairs.js
node 198_house_robber.js
node 213_house_robber_2.js
node 91_decode_ways.js
```
