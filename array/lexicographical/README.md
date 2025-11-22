# 🔤 Array + Lexicographical Problems

This folder includes problems where **strings must be compared using a custom character order**  
instead of the standard English alphabet. These problems test understanding of **manual string comparison**,  
**custom sorting**, and **hash mapping of character priorities** — commonly asked in coding interviews.

---

## 📂 Files

| File | Problem | Description |
|------|---------|-------------|
| [`953_alien_dict.js`](./953_alien_dict.js) | LeetCode #953 — Verifying an Alien Dictionary | Check if words are sorted according to a custom alien alphabet order. |

---

## 🧩 Problem Summaries

### 👽 **953 — Verifying an Alien Dictionary**
**Goal:** Given an array of `words` and a string `order` representing the priority of characters  
in an alien language, return `true` if the words are sorted based on this custom alphabet.

| Function | Approach | Time | Space | Description |
|----------|----------|------|--------|-------------|
| `isAlienSortedBrute` | Brute Force | O(n² * m) | O(1) | Compare each word with every later word using custom mapping. |
| `isAlienSortedBetter` | Sorting + Comparator | O(n log n * m) | O(n) | Sort based on custom order and compare with original list. |
| `isAlienSortedOptimal` | Adjacent Comparison | O(n * m) | O(1) | Compare only neighboring words, no sorting needed. |

---

## ▶️ How to Run
```bash
node 953_alien_dict.js
