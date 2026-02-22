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
- Recursive approach: DFS with a `level` parameter (push value into `ans[level]`), as implemented in `102_binary_tree_level_order_trav.js`.
- Time complexity O(n); space complexity O(w) where `w` is the maximum width (nodes at a level).

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `levelOrder` | Iterative BFS / Recursive DFS-with-level | O(n) | O(w) | Return a list of levels representing the tree's nodes visited left-to-right, top-to-bottom. |

**Key Points:**
- BFS (queue) is the natural fit for level-order traversal and is simple to implement.
- A recursive DFS with a `level` argument is an elegant alternative that groups node values by depth.
- Both approaches visit each node once and collect values per level.

---

## 🧠 Key Learnings

- Tree traversals (preorder, inorder, postorder, level-order) are foundational
  for many tree problems.
- Choose recursion for simple, easy-to-read solutions and iterative stacks/queues
  for explicit control or to avoid recursion limits.
- Level-order (BFS) naturally computes level-based metrics like depth.

---

## ▶️ How to Run

```bash
node 102_binary_tree_level_order_trav.js
```