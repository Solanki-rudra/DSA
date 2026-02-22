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
| [`101_symmetric_tree.js`](./101_symmetric_tree.js) | LeetCode #101 — Symmetric Tree | Check whether a binary tree is a mirror of itself (symmetric around its center). |
| [`226_invert_binary_tree.js`](./226_invert_binary_tree.js) | LeetCode #226 — Invert Binary Tree | Invert the tree by swapping the left and right children at each node. |
| [`110_balanced_binary_tree.js`](./110_balanced_binary_tree.js) | LeetCode #110 — Balanced Binary Tree | Determine whether a binary tree is height-balanced (difference in subtree heights <= 1 for every node). |

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

### 🌲 **101 — Symmetric Tree**

**Goal:**
Given the root of a binary tree, determine whether the tree is symmetric around
its center (a mirror of itself).

**Approach:**
- Recursively compare left and right subtrees in mirrored order: left.left vs
  right.right and left.right vs right.left.
- Iteratively, use a queue or stack of node pairs and compare mirrored nodes
  pairwise.
- Time complexity O(n); space complexity O(h) for recursion or O(n) worst-case
  for iterative queue.

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `isSymmetric` | Recursive mirrored DFS | O(n) | O(h) | Compare mirrored node pairs recursively; return true if all corresponding pairs match structurally and by value. |

**Key Points:**
- Mirror comparison requires swapping child order when comparing paired subtree nodes.
- Early exit occurs on first mismatch; iterative approach avoids recursion depth limits.
- Space complexity is O(h) for recursive approach due to call stack.

---

### 🌲 **226 — Invert Binary Tree**

**Goal:**
Given the root of a binary tree, invert the tree by swapping the left and right
children at each node. Return the inverted tree.

**Approach:**
- Recursively swap left and right children at each node, then recurse on the
  new children.
- Iteratively, use a stack to traverse the tree and swap left/right children at
  each node.
- Both approaches visit each node once; time complexity is O(n).
- Recursive space is O(h) due to call stack; iterative space is O(h) for the
  stack in worst case.

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `invertTreeOptimal` | Recursive DFS | O(n) | O(h) | Swap left and right children at each node recursively; return the inverted tree root. |
| `invertTreeOptimal2` | Iterative DFS (stack) | O(n) | O(h) | Swap left and right children using a stack to avoid recursion; return the inverted tree root. |

**Key Points:**
- Simple recursive solution: swap children at current node, then recurse on both children.
- Iterative approach uses a stack to manage node traversal and avoids recursion depth limits.
- Both approaches modify the tree in-place and return the modified root.

---

### 🌲 **110 — Balanced Binary Tree**

**Goal:**
Given the root of a binary tree, determine whether it is height-balanced.
A binary tree is height-balanced if the left and right subtrees of every node
have heights that differ by no more than 1.

**Approach:**
- Use a post-order recursion that returns the height of a subtree and whether
  it is balanced; compute left and right heights and ensure their difference
  is <= 1.
- Early exit when an unbalanced subtree is detected to keep runtime linear.
- Time complexity O(n); space complexity O(h) due to recursion stack.

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `isBalancedBrute` | Top-down DFS | O(n^2) | O(h) | Naive approach that recomputes heights for each node; simpler but less efficient. |
| `isBalancedOptimal` | Post-order DFS | O(n) | O(h) | Compute subtree heights bottom-up and check balance with early exit on imbalance. |

**Key Points:**
- Post-order traversal computes subtree heights bottom-up enabling early detection of imbalance.
- Avoid recomputing heights for each node to maintain linear runtime.

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
node 101_symmetric_tree.js
node 226_invert_binary_tree.js
node 110_balanced_binary_tree.js
```