# 🔍 String + Parsing Problems

This folder contains problems where **strings are parsed character by character**,  
building up tokens (words, numbers, etc.) according to simple rules.

These problems are best solved by **iterating through the string**, maintaining a buffer  
or counter, and flushing it when a delimiter (like a space) is encountered.

---

## 📂 Files

| File | LeetCode # | Problem Name | Description |
|------|-----------|--------------|-------------|
| [`58_len_of_last_wrd.js`](./58_len_of_last_wrd.js) | 58 | Length of Last Word | Find the length of the last word in a string. |

---

## 🧩 Problem Summaries

---

### 🔡 **58 — Length of Last Word**

**Problem Type:**  
String parsing

**Goal:**  
Given a string `s` consisting of words and spaces, return the length of the **last word** in the string.

**Approach:**
- Iterate through each character in the string
- Build words into a buffer; push to an array when a space is hit
- After the loop, push any remaining word
- Return the length of the last element in the array

| Function | Pattern | Time Complexity | Space Complexity | Description |
|--------|--------|-----------------|------------------|-------------|
| `lengthOfLastWord` | String, Parsing | O(n) | O(n) | Store words in an array and return the length of the last word. |

---

## 🧠 Core Pattern Insight

> **Parsing problems require reading the string token by token.  
> You build up a result by collecting characters and flushing them at delimiters.**

If the solution feels like:
- "Read a character → is it a delimiter? flush the buffer : accumulate"  
then the problem belongs to **Parsing**.

---

## ▶️ How to Run

```bash
node 58_len_of_last_wrd.js
```