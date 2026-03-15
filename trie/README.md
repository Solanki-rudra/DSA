# 🔤 Trie Problems

This folder contains **Trie (Prefix Tree)** problems — a tree data structure used for efficient **string storage and prefix searching**.

A Trie stores characters in nodes, where each path from the root represents a word or prefix.

---

## 📂 Folder Structure

| File | Problem | Description |
|------|--------|-------------|
| [`208_implement_trie.js`](./208_implement_trie.js) | LeetCode #208 — Implement Trie (Prefix Tree) | Design a Trie with insert, search, and prefix search operations. |
| [`212_word_search_2.js`](./212_word_search_2.js) | LeetCode #212 — Word Search II | Find all words from a list that exist in a 2D board using DFS and Trie. |

---

## 🧩 Problem Summary

---

### 🔤 **208 — Implement Trie (Prefix Tree)**

**Goal:**  
Design a Trie that supports the following operations:

- `insert(word)` — insert a word into the Trie  
- `search(word)` — return `true` if the word exists  
- `startsWith(prefix)` — return `true` if any word starts with the prefix  

Let **m = length of the word or prefix**

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `insert` | Trie traversal | O(m) | O(m) | Insert characters one by one and mark the end of the word. |
| `search` | Trie traversal | O(m) | O(1) | Traverse the Trie and check if the final node marks a word. |
| `startsWith` | Trie traversal | O(m) | O(1) | Traverse the Trie to check if the prefix exists. |

---

### 🔤 **212 — Word Search II**

**Goal:**  
Given a 2D board of characters and a list of words, return all words that can be formed in the board.

Rules:
- Letters must be connected **horizontally or vertically**
- The **same cell cannot be used twice** in a word

Let:

- **m × n = board size**
- **k = number of words**
- **L = maximum word length**

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `findWords` | Trie + DFS Backtracking | O(m × n × 4^L) | O(k × L) | Build a Trie from words and run DFS from each cell to search valid prefixes. |

---

## 🧠 Key Learnings

- Trie (Prefix Tree) structure
- Efficient prefix searching
- DFS + Backtracking
- Combining Trie with grid search problems
- Avoiding duplicate words using Trie end flags

---

## ▶️ How to Run

```bash
node 208_implement_trie.js
node 212_word_search_2.js
```