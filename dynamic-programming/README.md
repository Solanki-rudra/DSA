# 🧠 Dynamic Programming Problems

This folder contains **dynamic programming** problems — one of the most important
and commonly tested topics in coding interviews.

Dynamic Programming (DP) is an optimization technique that solves problems by
breaking them down into **overlapping subproblems** and storing the results to
avoid redundant computation (**memoization** or **tabulation**).

DP problems commonly exhibit:

- **Optimal Substructure** — the optimal solution is built from optimal sub-solutions
- **Overlapping Subproblems** — the same subproblem is solved multiple times

---

## 📂 Folder Structure & Examples

| Folder                                          | Description                                      | Example Problems                                           |
| ----------------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------- |
| [`1D`](./1D)                                    | **1D DP** problems with a single state dimension | Climbing Stairs, House Robber, Coin Change                 |
| [`2D`](./2D)                                    | **2D DP** problems with a two state dimension    | Unique Paths, Minimum Path Sum, Dungeon Game               |
| [`knapsack`](./knapsack/)                       | **Knapsack** problems with a two state dimension | Coin Change, Best Time to Buy and Sell Stock               |
| [`longest-subsequence`](./longest-subsequence/) | **Longest Subsequence** problems                 | Longest Increasing Subsequence, Longest Common Subsequence |

---

## 🧠 Key Learnings

- DP fundamentals: memoization (top-down) vs. tabulation (bottom-up)
- Identifying **optimal substructure** and **overlapping subproblems**
- Common DP patterns: linear, interval, knapsack, subsequence
- Space optimization — reducing O(n) DP arrays to O(1) using rolling variables
- When to use **recursion + memo** vs. **iterative DP**

---

## 📚 Common DP Problem Categories

### 1D Dynamic Programming

- Climbing Stairs
- House Robber
- Coin Change
- Jump Game

### Knapsack Problems

- 0/1 Knapsack
- Unbounded Knapsack
- Partition Equal Subset Sum

### Subsequence Problems

- Longest Common Subsequence (LCS)
- Longest Increasing Subsequence (LIS)
- Edit Distance

### Grid / 2D DP

- Unique Paths
- Minimum Path Sum
- Dungeon Game

### Interval DP

- Burst Balloons
- Matrix Chain Multiplication

---

## ⏱ Complexity Overview

| Pattern             | Time Complexity | Space Complexity          |
| ------------------- | --------------- | ------------------------- |
| 1D DP (tabulation)  | O(n)            | O(n) → O(1) optimized     |
| 2D DP (grid)        | O(m × n)        | O(m × n) → O(n) optimized |
| Knapsack            | O(n × W)        | O(n × W) → O(W) optimized |
| LCS / Edit Distance | O(m × n)        | O(m × n) → O(n) optimized |

---

## 🎯 Interview Focus

When solving DP problems, always identify:

1. **The state** — what does `dp[i]` (or `dp[i][j]`) represent?
2. **The recurrence relation** — how does `dp[i]` relate to previous states?
3. **The base case(s)** — what are the smallest known values?
4. **The traversal order** — left-to-right, right-to-left, or 2D?
5. **Space optimization** — can the DP array be compressed?

Most DP problems reduce to **defining the state clearly and writing the recurrence**.

---

## 📝 Summary

Dynamic Programming is a powerful technique for solving optimization and counting problems efficiently. Mastering DP patterns — 1D, knapsack, subsequence, and grid — is essential for technical interviews and competitive programming.

Explore the subfolders for categorized problems and solutions!
