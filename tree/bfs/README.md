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
| [`103_binary_tree_zigzag_trav.js`](./103_binary_tree_zigzag_trav.js) | LeetCode #103 — Binary Tree Zigzag Level Order Traversal | Return the zigzag (alternating left-to-right and right-to-left) level-order traversal of a binary tree. |
| [`199_binary_tree_right_side.js`](./199_binary_tree_right_side.js) | LeetCode #199 — Binary Tree Right Side View | Return the values of the nodes visible from the right side of the tree. |
| [`297_serialize_deserialize_bt.js`](./297_serialize_deserialize_bt.js) | LeetCode #297 — Serialize and Deserialize Binary Tree | Convert a binary tree into a string representation and reconstruct the original tree from that string. |

---

## 🧩 Problem Summaries

---

### 🌲 **102 — Binary Tree Level Order Traversal**

**Goal:**  
Given the root of a binary tree, return the level order traversal of its nodes'
values as a list of levels (each level is a list of values from left to right).

**Approach:**
- Iterative BFS using a queue: process nodes level-by-level and collect values per level.
- Recursive DFS with a `level` parameter can also group nodes by depth.

**Complexity:**
- Time: **O(n)**
- Space:
  - BFS → **O(w)** (maximum width of the tree)
  - DFS → **O(h)** (height of the tree)

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `levelOrderBFS` | Iterative BFS | O(n) | O(w) | Returns nodes level-by-level using a queue. |
| `levelOrderDFS` | Recursive DFS | O(n) | O(h) | Uses recursion with level tracking. |

**Key Points:**
- BFS is the natural approach for level-order traversal.
- DFS with level tracking is a clean alternative.
- Every node is visited exactly once.

---

### 🌲 **103 — Binary Tree Zigzag Level Order Traversal**

**Goal:**  
Return the zigzag level order traversal of a binary tree's nodes
(alternating between left-to-right and right-to-left).

**Approach:**
- Use BFS with a queue.
- Maintain a direction flag (`ltor`).
- If left-to-right → `push` values.
- If right-to-left → `unshift` values.

Children are always pushed into the queue in **normal order** (left → right).

**Complexity:**
- Time: **O(n)**
- Space: **O(w)**

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `zigzagLevelOrder` | Iterative BFS | O(n) | O(w) | Returns level traversal with alternating direction. |

**Key Points:**
- Direction only affects how values are inserted.
- Child insertion order stays the same.
- Each node is visited exactly once.

---

### 🌲 **199 — Binary Tree Right Side View**

**Goal:**  
Return the values of the nodes visible when looking at the tree from the **right side**.

**Approach:**
- Perform BFS level-order traversal.
- For each level, track the **last node processed**.
- That node represents the visible node from the right side.

**Complexity:**
- Time: **O(n)**
- Space: **O(w)**

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `rightSideView` | Iterative BFS | O(n) | O(w) | Returns the rightmost value from each level. |

**Key Points:**
- Each level contributes exactly one value.
- The last node processed at each level is the visible one.

---

### 🌲 **297 — Serialize and Deserialize Binary Tree**

**Goal:**  
Design an algorithm to convert a binary tree into a **string representation**
(serialize) and reconstruct the original tree from that string (deserialize).

**Approach:**

**Serialize**
- Perform BFS traversal.
- Use a queue to process nodes level-by-level.
- Append values to a string separated by commas.
- Represent null nodes using `#`.

Example serialized string:

```
1,2,3,#,#,4,5,#,#,#,#,
```

**Deserialize**
- Convert the string into an array of values.
- Rebuild the tree using BFS reconstruction.
- Use a queue to attach left and right children sequentially.

**Complexity:**
- Time: **O(n)**
- Space: **O(w)**

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `serialize` | BFS | O(n) | O(w) | Converts a binary tree into a string representation. |
| `deserialize` | BFS | O(n) | O(w) | Reconstructs the binary tree from the serialized string. |

**Key Points:**
- Null nodes must be preserved during serialization.
- BFS ensures the tree structure is maintained.
- A common validation trick:

```
serialize(tree) === serialize(deserialize(tree))
```

If both strings match, the implementation is correct.

---

## 🧠 Key Learnings

- Tree traversals (preorder, inorder, postorder, level-order) are foundational
  for solving many tree problems.
- **BFS** is useful when problems involve level-based grouping.
- **DFS** is useful when problems depend on subtree relationships.

Space complexity depends on traversal type:

| Traversal | Space Complexity |
|----------|------------------|
| DFS | O(h) (tree height) |
| BFS | O(w) (tree width) |

---

## ▶️ How to Run

```bash
node 102_binary_tree_level_order_trav.js
node 103_binary_tree_zigzag_trav.js
node 199_binary_tree_right_side.js
node 297_serialize_deserialize_bt.js
```