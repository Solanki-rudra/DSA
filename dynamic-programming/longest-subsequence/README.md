# Dynamic Programming — Longest Subsequence Problems

This folder contains dynamic programming problems related to finding the longest subsequence in an array or string.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

---

## 📂 Files

| File                                                         | Problem                                        | Description                                                                 |
| ------------------------------------------------------------ | ---------------------------------------------- | --------------------------------------------------------------------------- |
| [`300_long_inc_sbsqence.js`](./300_long_inc_sbsqence.js)     | LeetCode #300 — Longest Increasing Subsequence | Find the length of the longest strictly increasing subsequence in an array. |
| [`1143_long_cmn_sbsqence.js`](./1143_long_cmn_sbsqence.js)   | LeetCode #1143 — Longest Common Subsequence    | Find the length of the longest common subsequence of two strings.           |

---

## 🧩 Problem Summaries

---

### 📈 **300 — Longest Increasing Subsequence**

**Goal:**  
Given an integer array `nums`, return the length of the longest strictly increasing subsequence.

**Approach:**

- **Dynamic Programming:** Create a `dp` array where `dp[i]` represents the length of the longest increasing subsequence ending at index `i`. For each element, iterate through all previous elements. If a previous element is smaller, update `dp[i]` to `Math.max(dp[i], dp[j] + 1)`. Return the maximum value in `dp`. Time O(n^2), Space O(n).
- **Binary Search (Patience Sorting):** Maintain an array `sub` representing the active subsequence. For each number, if it's greater than the last element of `sub`, append it. Otherwise, use binary search to find the smallest element in `sub` that is `>=` the number, and replace it. The length of `sub` is the answer. Time O(n log n), Space O(n).

| Function       | Approach                         | Time       | Space | Description                                                         |
| -------------- | -------------------------------- | ---------- | ----- | ------------------------------------------------------------------- |
| `lengthOfLIS1` | Dynamic Programming              | O(n^2)     | O(n)  | Uses a 1D DP array to store the max length ending at each index.    |
| `lengthOfLIS2` | Binary Search (Patience Sorting) | O(n log n) | O(n)  | Greedily builds a subsequence and updates using binary search.      |

---

### 🔗 **1143 — Longest Common Subsequence**

**Goal:**  
Given two strings `text1` and `text2`, return the length of their longest common subsequence.

**Approach:**

- **Recursive (Brute Force):** Recursively compare characters from the end of both strings. If they match, add 1 and move both pointers. If not, take the max of moving one pointer or the other. Time O(2^(m+n)), Space O(m+n).
- **Recursion with Memoization (Top-Down DP):** Optimize the brute force approach by caching previously computed states in a 2D array. Time O(m*n), Space O(m*n).
- **2D Dynamic Programming (Bottom-Up):** Create an `(m+1) x (n+1)` DP grid. Iterate through the strings, filling the grid based on matches. Time O(m*n), Space O(m*n).
- **1D Dynamic Programming (Space Optimized):** Optimize the 2D DP by only keeping track of the previous row (or column) since the current state only depends on the previous row and current row's previous elements. Time O(m*n), Space O(n).

| Function                    | Approach                             | Time       | Space    | Description                                                         |
| --------------------------- | ------------------------------------ | ---------- | -------- | ------------------------------------------------------------------- |
| `longestCommonSubsequence1` | Recursive (Brute Force)              | O(2^(m+n)) | O(m+n)   | Explores all subsequences without memoization.                      |
| `longestCommonSubsequence2` | Recursion with Memoization           | O(m*n)     | O(m*n)   | Caches intermediate states to avoid redundant calculations.         |
| `longestCommonSubsequence3` | 2D Dynamic Programming (Bottom-Up)   | O(m*n)     | O(m*n)   | Tabulates lengths in a 2D grid.                                     |
| `longestCommonSubsequence4` | 1D Dynamic Programming (Optimized)   | O(m*n)     | O(n)     | Uses a single 1D array to save space during tabulation.             |

---

## ▶️ How to Run

```bash
node 300_long_inc_sbsqence.js
node 1143_long_cmn_sbsqence.js
```
