# Tree — DFS Problems

This folder contains tree problems focused on depth-first search (DFS)
techniques for binary and n-ary trees. These problems emphasize recursive and
iterative DFS patterns (recursion and stacks). BFS (level-order) is mentioned
when relevant for comparison or alternative approaches. The exercises cover
exploring nodes and computing properties like depth, orderings, path sums, and
value constraints along paths.

---

## 📂 Files

| File | Problem | Description |
|------|---------|-------------|
| [`104_max_depth_of_binary_tree.js`](./104_max_depth_of_binary_tree.js) | LeetCode #104 — Maximum Depth of Binary Tree | Compute the maximum depth (height) of a binary tree using DFS (recursion) or BFS (level-order). |
| [`100_same_tree.js`](./100_same_tree.js) | LeetCode #100 — Same Tree | Determine whether two binary trees are structurally identical and have the same node values. |
| [`101_symmetric_tree.js`](./101_symmetric_tree.js) | LeetCode #101 — Symmetric Tree | Check whether a binary tree is a mirror of itself (symmetric around its center). |
| [`226_invert_binary_tree.js`](./226_invert_binary_tree.js) | LeetCode #226 — Invert Binary Tree | Invert the tree by swapping the left and right children at each node. |
| [`110_balanced_binary_tree.js`](./110_balanced_binary_tree.js) | LeetCode #110 — Balanced Binary Tree | Determine whether a binary tree is height-balanced (difference in subtree heights <= 1 for every node). |
| [`572_sub_of_tree.js`](./572_sub_of_tree.js) | LeetCode #572 — Subtree of Another Tree | Determine whether one binary tree is a subtree of another. |
| [`1448_good_nodes.js`](./1448_good_nodes.js) | LeetCode #1448 — Count Good Nodes in Binary Tree | Count nodes that are greater than or equal to all previous values in their root-to-node path. |
| [`543_diameter_of_binary_tree.js`](./543_diameter_of_binary_tree.js) | LeetCode #543 — Diameter of Binary Tree | Find the length of the longest path between any two nodes in a binary tree. |

---

## 🧩 Problem Summaries

---

### 🌲 **104 — Maximum Depth of Binary Tree**

**Goal:**  
Given the root of a binary tree, return its maximum depth (the number of nodes
along the longest path from the root down to the farthest leaf).

**Approach:**
- Use recursion (DFS) to compute `1 + max(leftDepth, rightDepth)` with base case `null => 0`.
- Alternatively, use BFS (level-order traversal) with a queue and count levels.
- Both approaches visit each node once.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `maxDepth` | DFS recursion / BFS level-order | O(n) | O(h) | Compute tree height by traversing nodes and tracking depth. |

---

### 🌲 **100 — Same Tree**

**Goal:**  
Given the roots of two binary trees, determine if they are the same:
- Structurally identical
- Every corresponding node has the same value

**Approach:**
- Recursively compare corresponding nodes.
- Iteratively, use synchronized DFS/BFS with node pairs.
- Each node is compared once.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `isSameTreeOptimal` | Recursive DFS | O(n) | O(h) | Recursive DFS comparing corresponding nodes. |
| `isSameTreeOptimal2` | Iterative DFS | O(n) | O(h) | Use a stack of node pairs to compare without recursion. |

---

### 🌲 **101 — Symmetric Tree**

**Goal:**  
Determine whether a binary tree is symmetric around its center.

**Approach:**
- Recursively compare left and right subtrees in mirrored order.
- Compare `left.left` vs `right.right` and `left.right` vs `right.left`.
- Iterative approach uses a queue of mirrored node pairs.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `isSymmetric` | Recursive mirrored DFS | O(n) | O(h) | Compare mirrored node pairs recursively. |

---

### 🌲 **226 — Invert Binary Tree**

**Goal:**  
Invert the tree by swapping the left and right children at each node.

**Approach:**
- Recursively swap left and right children at each node.
- Iteratively, use a stack to traverse and swap children.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `invertTreeOptimal` | Recursive DFS | O(n) | O(h) | Swap children recursively and return root. |
| `invertTreeOptimal2` | Iterative DFS | O(n) | O(h) | Use stack to swap children without recursion. |

---

### 🌲 **110 — Balanced Binary Tree**

**Goal:**  
Determine whether a binary tree is height-balanced.  
A tree is balanced if for every node the difference between left and right
subtree heights is ≤ 1.

**Approach:**
- Brute force: compute height at each node (O(n²)).
- Optimal: post-order DFS that returns height or `-1` if unbalanced.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `isBalancedBrute` | Top-down DFS | O(n²) | O(h) | Recompute heights for every node. |
| `isBalancedOptimal` | Post-order DFS | O(n) | O(h) | Compute heights bottom-up with early exit. |

---

### 🌲 **572 — Subtree of Another Tree**

**Goal:**  
Given two binary trees `root` and `subRoot`, determine whether `subRoot`
is a subtree of `root`.

A subtree must:
- Match structurally
- Have identical node values

**Approach:**
- Traverse the main tree using DFS.
- At each node, check if the subtree rooted there matches `subRoot`.
- Use a helper function to compare trees structurally and by value.
- If a match is found, return true; otherwise search left and right subtrees.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `isSubtree` | DFS + Same Tree check | O(n * m) | O(h) | Traverse main tree and compare subtrees at each node. |

**Key Points:**
- Combines tree traversal with structural comparison.
- Worst case occurs when many nodes share the same values.
- Uses recursive DFS pattern similar to Same Tree.

---

### 🌲 **1448 — Count Good Nodes in Binary Tree**

**Goal:**  
Given the root of a binary tree, return the number of *good nodes*.

A node X is considered *good* if on the path from the root to X,
there are no nodes with a value greater than X.

**Approach:**
- Use DFS (preorder traversal).
- Track the maximum value seen so far along the path.
- If the current node’s value is greater than or equal to the maximum,
  it is a good node.
- Update the max value when moving down the tree.
- Visit every node once.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `goodNodes` | DFS (preorder) | O(n) | O(h) | Traverse tree while tracking max value along path and count valid nodes. |

**Key Points:**
- Path-based constraint problem.
- Classic DFS with state propagation.
- Similar pattern to path sum style problems.

---

### 🌲 **543 — Diameter of Binary Tree**

**Goal:**  
Given the root of a binary tree, return the diameter of the tree.

The diameter is the length of the longest path between any two nodes in the tree.  
This path may or may not pass through the root.

**Approach:**
- Use post-order DFS.
- At each node:
  - Compute left subtree depth.
  - Compute right subtree depth.
  - Update diameter as `leftDepth + rightDepth`.
- Return height as `1 + max(leftDepth, rightDepth)`.
- Visit each node once.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `diameterOfBinaryTree` | Post-order DFS | O(n) | O(h) | Compute subtree heights while updating maximum path length. |

**Key Points:**
- Similar pattern to Balanced Binary Tree.
- Use post-order traversal (bottom-up).
- Diameter is calculated using heights of left and right subtrees.
- Does NOT necessarily pass through root.

---

## 🧠 Key Learnings

- Tree traversals (preorder, inorder, postorder, level-order) are foundational.
- DFS is powerful for structural comparison and subtree matching.
- Post-order traversal is useful for bottom-up computations (like balance checking).
- Preorder traversal is useful when tracking path-based constraints.
- Combine traversal with helper recursion for complex tree checks.

---

## ▶️ How to Run

```bash
node 104_max_depth_of_binary_tree.js
node 100_same_tree.js
node 101_symmetric_tree.js
node 226_invert_binary_tree.js
node 110_balanced_binary_tree.js
node 572_sub_of_tree.js
node 1448_good_nodes.js
node 543_diameter_of_binary_tree.js
```