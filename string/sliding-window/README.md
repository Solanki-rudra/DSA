# 🔁 String + Sliding Window Problems

This folder includes problems where the **Sliding Window technique** is applied on **strings**  
to efficiently detect patterns, substrings, or permutations in linear time.

---

## 📂 Files

| File | Problem | Description |
|------|----------|-------------|
| [`567_permutation_in_string.js`](./567_permutation_in_string.js) | LeetCode #567 — Permutation in String | Check whether a permutation of one string exists as a substring inside another using Sliding Window. |

---

## 🧩 Problem Summaries

### 🔡 **567 — Permutation in String**
**Goal:** Determine whether **any permutation** of string `s1` exists as a **substring** of string `s2`.

A permutation of length `k` must appear **contiguously** in `s2`, so we maintain a **fixed-length sliding window** and compare **character frequency maps**.

| Function | Approach | Time | Space | Description |
|-----------|-----------|------|--------|-------------|
| `checkInclusionBrute` | Brute Force + Sorting | O(n × k log k) | O(k) | Sort every substring of length `s1` and compare with sorted `s1`. |
| `checkInclusionOptimal` | Sliding Window + Hash Map | O(n) | O(1) | Maintain two fixed-size (26) frequency maps and slide over `s2` efficiently. |

---

## ▶️ How to Run
```bash
node 567_permutation_in_string.js