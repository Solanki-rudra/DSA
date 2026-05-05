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
| [`151_reverse_words.js`](./151_reverse_words.js) | 151 | Reverse Words in a String | Reverse the order of words in a string, trimming extra spaces. |

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

### 🔡 **151 — Reverse Words in a String**

**Problem Type:**  
String parsing

**Goal:**  
Given a string `s`, return the words in **reverse order**, separated by a single space, with no leading or trailing spaces.

**Approach:**
- Iterate through each character in the string
- Build words into a buffer; push to an array when a space is hit
- After the loop, push any remaining word
- Reverse the array and join with a single space

| Function | Pattern | Time Complexity | Space Complexity | Description |
|--------|--------|-----------------|------------------|-------------|
| `reverseWords` | String, Parsing | O(n) | O(n) | Parse words into an array, reverse the array, and join with a space. |

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
node 151_reverse_words.js
```