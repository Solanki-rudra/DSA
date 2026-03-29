# Graph — Traversal Problems

This folder contains graph problems focused on **graph traversal** using algorithms like **Depth-First Search (DFS)** and **Breadth-First Search (BFS)**. Traversal is fundamental for exploring nodes, cloning structures, and solving many classic graph problems.

---

## 📂 Files

| File | Problem | Description |
|------|---------|-------------|
| [`133_clone_graph.js`](./133_clone_graph.js) | LeetCode #133 — Clone Graph | Given a reference to a node in a connected undirected graph, return a deep copy (clone) of the graph. |
| [`994_rotting_oranges.js`](./994_rotting_oranges.js) | LeetCode #994 — Rotting Oranges | Given a grid, return the minimum time required to rot all oranges using BFS. |

---

## 🧩 Problem Summaries

---

### 🔗 **133 — Clone Graph**

**Goal:**
Given a reference to a node in a connected undirected graph, return a deep copy (clone) of the entire graph.

**Approach:**
- Use **Depth-First Search (DFS)** to traverse the graph.
- For each node, create a copy and recursively clone all its neighbors.
- Use a map to keep track of already-cloned nodes to avoid cycles and repeated work.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `cloneGraph` | DFS | O(n) | O(n) | Returns a deep copy of the input graph. |

---

### 🍊 **994 — Rotting Oranges**

**Goal:**
You are given a grid where:
- `0` = empty cell
- `1` = fresh orange
- `2` = rotten orange  

Return the **minimum time required to rot all fresh oranges**. If impossible, return `-1`.

**Approach:**
- Use **Breadth-First Search (BFS)**.
- Add all rotten oranges to a queue initially.
- Spread the rot to adjacent fresh oranges level by level.
- Each level represents **one minute**.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `orangesRotting` | BFS | O(m × n) | O(m × n) | Returns the minimum time to rot all oranges. |

---

## ▶️ How to Run

```bash
node 133_clone_graph.js
node 994_rotting_oranges.js
```