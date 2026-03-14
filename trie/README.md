# 🔤 Trie Problems

This folder contains **Trie (Prefix Tree)** problems — a tree data structure used for efficient **string storage and prefix searching**.

A Trie stores characters in nodes, where each path from the root represents a word or prefix.

---

## 📂 Folder Structure

| File | Problem | Description |
|------|--------|-------------|
| [`208_implement_trie.js`](./208_implement_trie.js) | LeetCode #208 — Implement Trie (Prefix Tree) | Design a Trie with insert, search, and prefix search operations. |

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

## 🧠 Key Learnings

- Trie (Prefix Tree) structure
- Efficient prefix searching
- Character-by-character traversal
- Using a map to store child nodes

---

## ▶️ How to Run

```bash
node 208_implement_trie.js
```