# Tree — BFS Problems

This folder contains tree problems focused on breadth-first search (BFS)
techniques, particularly level-order traversal for binary and n-ary trees.
These problems emphasize iterative BFS patterns using queues; DFS is shown
when relevant for comparison or alternative approaches. Exercises cover
visiting nodes level-by-level and computing properties like level orderings,
width, and level-based aggregates.

---

## 📂 Files

| File | Problem | Description |
|------|---------|-------------|
| [`102_binary_tree_level_order_trav.js`](./102_binary_tree_level_order_trav.js) | LeetCode #102 — Binary Tree Level Order Traversal | Return the level-order traversal of a binary tree as a list of levels (left-to-right, top-to-bottom). |

---

## 🧩 Problem Summaries

---

### 🌲 **102 — Binary Tree Level Order Traversal**

**Goal:**
Given the root of a binary tree, return the level order traversal of its nodes'
values as a list of levels (each level is a list of values from left to right).

**Approach:**
- Iterative BFS using a queue: process nodes level-by-level, collecting values per level.
- Recursive DFS with a `level` parameter (push value into `ans[level]`) as implemented in `102_binary_tree_level_order_trav.js`.
- Time complexity O(n); space complexity:
  - BFS → O(w), where `w` is the maximum width of the tree.
  - DFS → O(h), where `h` is the height of the tree.

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `levelOrderBFS` | Iterative BFS | O(n) | O(w) | Returns a list of levels representing the tree's nodes visited left-to-right, top-to-bottom. |
| `levelOrderDFS` | Recursive DFS-with-level | O(n) | O(h) | Alternative approach using recursion and depth tracking to group nodes by level. |

**Key Points:**
- BFS (queue) is the natural fit for level-order traversal.
- A recursive DFS with a `level` argument is an elegant alternative.
- Both approaches visit each node exactly once.

---

## 🧠 Key Learnings

- Tree traversals (preorder, inorder, postorder, level-order) are foundational
  for many tree problems.
- Use BFS when problems involve level-based grouping or shortest paths.
- Use DFS when recursion simplifies subtree-based logic.
- In trees, space complexity depends on:
  - DFS → height (h)
  - BFS → width (w)

---

## ▶️ How to Run

```bash
node 102_binary_tree_level_order_trav.js
```