# Dynamic Programming — 1D Problems

This folder contains dynamic programming problems with a **single state dimension**.

1D DP problems maintain a `dp` array (or just a few variables) where `dp[i]`
represents the optimal answer for a subproblem of size `i`.
The solution to `dp[n]` is built from previously computed values using a
**recurrence relation**.

---

## 📂 Files

| File | Problem | Description |
|------|---------|-------------|
| [`70_climbing_stairs.js`](./70_climbing_stairs.js) | LeetCode #70 — Climbing Stairs | Given `n` steps, find the number of distinct ways to reach the top climbing 1 or 2 steps at a time. |
| [`198_house_robber.js`](./198_house_robber.js) | LeetCode #198 — House Robber | Given an array of house values, find the maximum money you can rob without robbing two adjacent houses. |

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

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `climbStairs` | Dynamic Programming (Space-Optimized) | O(n) | O(1) | Counts distinct ways using two rolling variables. |

---

### 🏠 **198 — House Robber**

**Goal:**  
You are a robber planning to rob houses along a street. Each house has a certain amount of money. You **cannot rob two adjacent houses** (the alarm will trigger).  
Return the **maximum amount of money** you can rob tonight.

**Approach:**
- **Brute Force (Recursion):** At each house, decide to either rob it (add its value + result from `i+2`) or skip it (result from `i+1`). Return the max of both choices. Leads to O(2^n) time due to overlapping subproblems.
- **Optimal (Space-Optimized DP):** Track only the two most recent running maxima (`prev2`, `prev`). For each house `n`, the new max is `Math.max(prev, n + prev2)`. Roll forward — O(n) time, O(1) space.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `robBrute` | Recursion (Brute Force) | O(2^n) | O(n) | Explores all rob/skip combinations via DFS. |
| `robOptimal` | Dynamic Programming (Space-Optimized) | O(n) | O(1) | Tracks max loot using two rolling variables. |

---

## ▶️ How to Run

```bash
node 70_climbing_stairs.js
node 198_house_robber.js
```