# 🧮 String + Two Pointers Problems

This folder includes problems where **Two Pointers techniques** are applied on **strings**  
to convert, compare, or evaluate them efficiently without using extra space.

---

## 📂 Files

| File | Problem | Description |
|------|----------|-------------|
| [`125_valid_palindrome.js`](./125_valid_palindrome.js) | LeetCode #125 — Valid Palindrome | Check whether a string is a palindrome after ignoring non-alphanumeric characters and case differences. |
| [`647_palindromic_substrs.js`](./647_palindromic_substrs.js) | LeetCode #647 — Palindromic Substrings | Count the total number of palindromic substrings in a string. |

---

## 🧩 Problem Summaries

### 🔡 **125 Valid Palindrome**
**Goal:** Determine whether a string is a **palindrome**, considering **only alphanumeric characters** and ignoring **case sensitivity**.

A string is a palindrome if it reads the same **forward and backward** after cleaning.

| Function | Approach | Time | Space | Description |
|-----------|-----------|------|--------|-------------|
| `isPalindromeBrute` | Clean + Reverse | O(n) | O(n) | Remove invalid characters, reverse the string, and compare. |
| `isPalindromeOptimal` | Two Pointers | O(n) | O(1) | Use left and right pointers to compare characters in-place. |

---

### 🔡 **647 Palindromic Substrings**
**Goal:** Count the number of **palindromic substrings** in a given string.

A substring is palindromic if it reads the same **forward and backward**.  
Each occurrence is counted separately, even if the substring values are the same.

| Function | Approach | Time | Space | Description |
|-----------|-----------|------|--------|-------------|
| `countSubstringsBrute` | Brute Force | O(n³) | O(n³) | Generate all substrings, store them, and check each for palindrome. |
| `countSubstringsBetter` | Optimized Brute Force | O(n³) | O(n) | Generate substrings on the fly and check palindrome immediately. |
| `countSubstringsOptimal` | Two Pointers (Expand Around Center) | O(n²) | O(1) | Expand from each possible center and count palindromes directly. |

---

## ▶️ How to Run

```bash
node 125_valid_palindrome.js
node 647_palindromic_substrs.js