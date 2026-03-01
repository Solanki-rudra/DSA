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
| [`98_validate_bst.js`](./98_validate_bst.js) | LeetCode #98 — Validate Binary Search Tree | Determine whether a binary tree satisfies the properties of a valid Binary Search Tree (BST). |
| [`235_lowest_ancestor_of_bst.js`](./235_lowest_ancestor_of_bst.js) | LeetCode #235 — Lowest Common Ancestor of a Binary Search Tree | Find the lowest common ancestor (LCA) of two nodes in a Binary Search Tree. |
| [`230_kth_small_ele_bst.js`](./230_kth_small_ele_bst.js) | LeetCode #230 — Kth Smallest Element in a BST | Return the kth smallest value in a Binary Search Tree using inorder traversal. |
| [`105_bst_from_pre_and_inorder.js`](./105_bst_from_pre_and_inorder.js) | LeetCode #105 — Construct Binary Tree from Preorder and Inorder Traversal | Build a binary tree using preorder and inorder traversal arrays. |

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

### 🌲 **98 — Validate Binary Search Tree**

**Goal:**  
Given the root of a binary tree, determine whether it is a valid
Binary Search Tree (BST).

A BST must satisfy:
- Left subtree values < current node value
- Right subtree values > current node value
- Both subtrees must also be valid BSTs

**Approach (Inorder Traversal):**
- Perform inorder DFS traversal.
- In a valid BST, inorder traversal produces strictly increasing values.
- Track the previous visited node value.
- If current value ≤ previous value, return false.
- Visit each node once.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `isValidBST` | Inorder DFS | O(n) | O(h) | Validate BST by checking strictly increasing inorder traversal. |

**Alternative Approach:**
- Use DFS with lower and upper bounds.
- For each node:
  - Value must be within (min, max) range.
  - Left subtree updates max bound.
  - Right subtree updates min bound.

**Key Points:**
- Inorder traversal of BST is strictly increasing.
- Must use strict inequality (no duplicates allowed).
- Similar recursion pattern to tree validation problems.

---

### 🌲 **235 — Lowest Common Ancestor of a Binary Search Tree**

**Goal:**  
Given the root of a Binary Search Tree (BST) and two nodes `p` and `q`,
find their Lowest Common Ancestor (LCA).

The LCA of two nodes is the lowest node in the tree that has both
`p` and `q` as descendants (a node can be a descendant of itself).

**Approach (Using BST Property):**
- In a BST:
  - Left subtree values < current node
  - Right subtree values > current node
- Compare `p` and `q` with current node:
  - If both are smaller → move left.
  - If both are larger → move right.
  - Otherwise → current node is the LCA.
- Traverse until LCA is found.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `lowestCommonAncestorBetter` | Recursive DFS (BST property) | O(h) | O(h) | Traverse tree using BST property to locate split point. |
| `lowestCommonAncestorOptimal` | Iterative | O(h) | O(1) | Iteratively move left or right until LCA is found. |

**Key Points:**
- BST property makes this easier than general binary tree LCA.
- No need to search entire tree.
- Time complexity depends on height `h` (O(log n) in balanced BST, O(n) in worst case).
- The split point where `p` and `q` diverge is the LCA.

---

### 🌲 **230 — Kth Smallest Element in a BST**

**Goal:**  
Given the root of a Binary Search Tree (BST) and an integer `k`,  
return the kth smallest value (1-indexed) among all nodes.

### 🧠 Why This Works

In a **BST**, inorder traversal (Left → Root → Right)  
returns values in **sorted order**.

So the kth smallest element is simply the  
`k-1` indexed value in inorder traversal.

### **Approach 1 — Recursive Inorder (Better)**

- Perform inorder traversal.
- Store values in an array.
- Return `arr[k - 1]`.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `kthSmallestBetter` | Recursive Inorder DFS | O(n) | O(n) | Collect all values in sorted order and return kth smallest. |

### **Approach 2 — Iterative Inorder (Optimal)**

- Use a stack for inorder traversal.
- Traverse left subtree first.
- Decrement `k` each time a node is visited.
- When `k === 0`, return that value.
- No need to store all values.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `kthSmallestOptimal` | Iterative Inorder DFS | O(h + k) | O(h) | Stop traversal early once kth smallest is found. |

### 🔎 Complexity Notes

- `h = height of tree`
- Balanced BST → `O(log n)` height
- Worst case (skewed tree) → `O(n)`

### 🔑 Key Points

- Inorder traversal of BST = sorted order.
- Recursive version is simpler but uses extra array space.
- Iterative version is more space efficient.
- Classic BST + DFS pattern.

## 🧠 Key Learnings

- Tree traversals (preorder, inorder, postorder, level-order) are foundational.
- DFS is powerful for structural comparison and subtree matching.
- Post-order traversal is useful for bottom-up computations (like balance checking).
- Preorder traversal is useful when tracking path-based constraints.
- Combine traversal with helper recursion for complex tree checks.

---
---

### 🌲 **105 — Construct Binary Tree from Preorder and Inorder Traversal**

**Goal:**  
Given two arrays:

- `preorder` → preorder traversal of a binary tree  
- `inorder` → inorder traversal of the same tree  

Construct and return the original binary tree.

### **Approach — Recursive DFS with HashMap**

1. Store inorder values in a map for O(1) index lookup.
2. Pick root from `preorder[preStart]`.
3. Find root index in inorder using the map.
4. Compute number of nodes in left subtree.
5. Recursively build:
   - Left subtree
   - Right subtree
6. Return root.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `buildTree` | Recursive DFS + HashMap | O(n) | O(n) | Construct tree using preorder root logic and inorder partitioning. |

### 🔑 Key Points

- Preorder gives the root.
- Inorder splits left and right subtrees.
- Use a HashMap to avoid O(n²) searching.
- Classic divide-and-conquer tree construction pattern.
- Very common FAANG interview problem.

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
node 98_validate_bst.js
node 235_lowest_ancestor_of_bst.js
node 230_kth_small_ele_bst.js
node 105_bst_from_pre_and_inorder.js 
```