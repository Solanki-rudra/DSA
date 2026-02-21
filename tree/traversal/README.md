# Tree — Traversal Problems

This folder contains tree traversal problems covering depth-first and
breadth-first techniques for binary and n-ary trees. These problems focus on
recursive and iterative traversal patterns, using stacks and queues where
appropriate to explore nodes and compute properties like depth, orderings,
and path sums.

---

## 📂 Files

| File | Problem | Description |
|------|---------|-------------|
| [`104_max_depth_of_binary_tree.js`](./104_max_depth_of_binary_tree.js) | LeetCode #104 — Maximum Depth of Binary Tree | Compute the maximum depth (height) of a binary tree using DFS (recursion) or BFS (level-order). |

---

## 🧩 Problem Summaries

---

### 🌲 **104 — Maximum Depth of Binary Tree**

**Goal:**
Given the root of a binary tree, return its maximum depth (the number of nodes
along the longest path from the root down to the farthest leaf).

**Approach:**
- Use recursion (DFS) to compute 1 + max(leftDepth, rightDepth) with a base case
  of null => 0.
- Alternatively, use BFS (level-order traversal) with a queue and count levels.
- Both approaches visit each node once; choose recursion for clarity or BFS to
  avoid deep recursion on unbalanced trees.

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `maxDepth` | DFS recursion / BFS level-order | O(n) | O(n) | Compute tree height by traversing nodes and tracking depth; recursion uses O(h) stack, BFS uses O(n) queue in worst case. |

**Key Points:**
- Recursive DFS is concise: handle the null base case and combine child depths.
- Iterative BFS uses a queue to measure levels and avoids recursion depth limits.
- Time complexity is linear; space is proportional to tree height or width.

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
node 104_max_depth_of_binary_tree.js
```