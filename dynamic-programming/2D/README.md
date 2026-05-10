# Dynamic Programming — 2D Problems

This folder contains dynamic programming problems with **two state dimensions**.

2D DP problems maintain a `dp` grid (or rolling arrays) where `dp[i][j]`
represents the optimal answer for a subproblem ending at row `i` and column `j`.
The solution is built from previously computed values (typically `dp[i-1][j]` and `dp[i][j-1]`) using a
**recurrence relation**.

---

## 📂 Files

| File | Problem | Description |
|------|---------|-------------|
| [`62_unique_path.js`](./62_unique_path.js) | LeetCode #62 — Unique Paths | Find the number of unique paths from top-left to bottom-right of an `m x n` grid. |

---

## 🧩 Problem Summaries

---

### 🗺️ **62 — Unique Paths**

**Goal:**  
A robot is located at the top-left corner of an `m x n` grid. The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid.  
Return the **number of possible unique paths**.

**Approach:**
- **Brute Force (Recursion):** Start from `(0,0)` and recursively explore going right `(i, j+1)` and down `(i+1, j)`. Return 1 if bottom-right is reached. Leads to O(2^(m+n)) time due to exponential branching.
- **Optimal (2D Dynamic Programming):** Create an `m x n` DP grid. Since the robot can only move right or down, the number of paths to reach `(i, j)` is the sum of paths from its left `(i, j-1)` and above `(i-1, j)`. Initialize the first row and column with 1. Time O(m*n), Space O(m*n).

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `uniquePathsBrute` | Recursion (Brute Force) | O(2^(m+n)) | O(m+n) | Explores all paths recursively without memoization. |
| `uniquePathsOptimal` | 2D Dynamic Programming | O(m * n) | O(m * n) | Tabulates number of paths using a 2D DP grid. |

---

## ▶️ How to Run

```bash
node 62_unique_path.js
```
