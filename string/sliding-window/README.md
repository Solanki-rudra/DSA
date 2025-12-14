# 🔁 String + Sliding Window Problems

This folder includes problems where the **Sliding Window technique** is applied on **strings**  
to efficiently detect patterns, substrings, or optimize window-based conditions in linear time.

---

## 📂 Files

| File | Problem | Description |
|------|----------|-------------|
| [`567_permutation_in_string.js`](./567_permutation_in_string.js) | LeetCode #567 — Permutation in String | Check whether a permutation of one string exists as a substring inside another using Sliding Window. |
| [`424_long_repeat_char_replace.js`](./424_long_repeat_char_replace.js) | LeetCode #424 — Longest Repeating Character Replacement | Find the longest substring that can be made of repeating characters after at most `k` replacements. |

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

### 🔁 **424 — Longest Repeating Character Replacement**
**Goal:** Given a string `s` and integer `k`, find the **length of the longest substring** that can be converted into a string with **all identical characters** after at most `k` replacements.

The window expands greedily while tracking the **most frequent character** in the current window.

| Function | Approach | Time | Space | Description |
|-----------|-----------|------|--------|-------------|
| `characterReplacementBrute` | Brute Force | O(n²) | O(1) | Try every substring and check if replacements needed are within `k`. |
| `characterReplacementOptimal` | Sliding Window | O(n) | O(1) | Expand window while `(window size - maxFreq ≤ k)` remains valid. |

---

## ▶️ How to Run
```bash
node 567_permutation_in_string.js
node 424_long_repeat_char_replace.js