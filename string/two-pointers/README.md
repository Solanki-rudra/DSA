# 🧮 String + Two Pointers Problems

This folder includes problems where **Two Pointers techniques** are applied on **strings**  
to convert, compare, or evaluate them efficiently without using extra space.

---

## 📂 Files

| File | Problem | Description |
|------|----------|-------------|
| [`125_valid_palindrome.js`](./125_valid_palindrome.js) | LeetCode #125 — Valid Palindrome | Check whether a string is a palindrome after ignoring non-alphanumeric characters and case differences. |

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

## ▶️ How to Run
```bash
node 13_roman_to_int.js