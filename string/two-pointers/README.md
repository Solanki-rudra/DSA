# 🧮 String + Two Pointers Problems

This folder includes problems where **Two Pointers techniques** are applied on **strings**  
to convert, compare, or evaluate them efficiently without using extra space.

---

## 📂 Files

| File | Problem | Description |
|------|----------|-------------|
| [`125_valid_palindrome.js`](./125_valid_palindrome.js) | LeetCode #125 — Valid Palindrome | Check whether a string is a palindrome after ignoring non-alphanumeric characters and case differences. |
| [`647_palindromic_substrs.js`](./647_palindromic_substrs.js) | LeetCode #647 — Palindromic Substrings | Count the total number of palindromic substrings in a string. |
| [`5_longest_palindromic_substr.js`](./5_longest_palindromic_substr.js) | LeetCode #5 — Longest Palindromic Substring | Find the **longest palindromic substring** in a string. |
| [`68_text_justification.js`](./68_text_justification.js) | LeetCode #68 — Text Justification | Format text such that each line has **exactly maxWidth characters** and is **fully justified**. |

---

## 🧩 Problem Summaries

### 🔡 **125 Valid Palindrome**
**Goal:** Determine whether a string is a **palindrome**, considering **only alphanumeric characters** and ignoring **case sensitivity**.

| Function | Approach | Time | Space | Description |
|-----------|-----------|------|--------|-------------|
| `isPalindromeBrute` | Clean + Reverse | O(n) | O(n) | Remove invalid characters, reverse the string, and compare. |
| `isPalindromeOptimal` | Two Pointers | O(n) | O(1) | Use left and right pointers to compare characters in-place. |

---

### 🔡 **647 Palindromic Substrings**
**Goal:** Count the number of **palindromic substrings** in a given string.

| Function | Approach | Time | Space | Description |
|-----------|-----------|------|--------|-------------|
| `countSubstringsBrute` | Brute Force | O(n³) | O(n³) | Generate all substrings, store them, and check each for palindrome. |
| `countSubstringsBetter` | Optimized Brute Force | O(n³) | O(n) | Generate substrings on the fly and check palindrome immediately. |
| `countSubstringsOptimal` | Two Pointers (Expand Around Center) | O(n²) | O(1) | Expand from each possible center and count palindromes directly. |

---

### 🔡 **5 Longest Palindromic Substring**
**Goal:** Find the **longest palindromic substring** in a given string.

| Function | Approach | Time | Space | Description |
|-----------|-----------|------|--------|-------------|
| `longestPalindromeBrute` | Brute Force | O(n³) | O(1) | Generate all substrings and check each for palindrome. Keep the longest. |
| `longestPalindromeOptimal` | Two Pointers (Expand Around Center) | O(n²) | O(1) | Expand from each center (odd & even) and track the longest palindrome. |

---

### 📝 **68 Text Justification**
**Goal:** Format the given words so that each line has **exactly `maxWidth` characters**,  
and text is **fully justified** (spaces distributed evenly between words).

| Function | Approach | Time | Space | Description |
|-----------|-----------|------|--------|-------------|
| `fullJustify` | Greedy + Two Pointers | O(n) | O(n) | Greedily group words into lines and distribute spaces evenly. The last line is left-justified. |

---

## ▶️ How to Run

```bash
node 125_valid_palindrome.js
node 647_palindromic_substrs.js
node 5_longest_palindromic_substr.js
node 68_text_justification.js