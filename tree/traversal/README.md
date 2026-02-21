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
| [`100_same_tree.js`](./100_same_tree.js) | LeetCode #100 — Same Tree | Determine whether two binary trees are structurally identical and have the same node values. |

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

### 🌲 **100 — Same Tree**

**Goal:**
Given the roots of two binary trees, determine if they are the same: both
trees are structurally identical and every corresponding node has the same
value.

**Approach:**
- Recursively compare corresponding nodes: both null => true; one null => false;
  values differ => false; otherwise recurse on left and right subtrees.
- Iteratively, use synchronized BFS/DFS (two queues or a stack of node pairs)
  to compare nodes level-by-level or depth-by-depth.
- Time and space complexities are O(n) where n is the number of nodes (worst
  case), since each node is compared once.

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `isSameTreeOptimal` | Recursive DFS | O(n) | O(n) | Recursive DFS comparing corresponding nodes; return true only if all pairs match structurally and by value. |
| `isSameTreeOptimal2` | Iterative DFS (stack of node pairs) | O(n) | O(n) | Iterative DFS using a stack of node pairs to compare nodes without recursion. |

**Key Points:**
- Simple recursive solution is concise and easy to reason about.
- Iterative pairwise traversal avoids recursion limits by pushing node pairs onto a stack or queue.
- Early exit is possible when a mismatch is found, improving average-case speed.

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
node 100_same_tree.js
```