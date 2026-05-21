# Dynamic Programming — Longest Subsequence Problems

This folder contains dynamic programming problems related to finding the longest subsequence in an array or string.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

---

## 📂 Files

| File                                                         | Problem                                        | Description                                                                 |
| ------------------------------------------------------------ | ---------------------------------------------- | --------------------------------------------------------------------------- |
| [`300_long_inc_sbsqence.js`](./300_long_inc_sbsqence.js)     | LeetCode #300 — Longest Increasing Subsequence | Find the length of the longest strictly increasing subsequence in an array. |

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

## ▶️ How to Run

```bash
node 300_long_inc_sbsqence.js
```
