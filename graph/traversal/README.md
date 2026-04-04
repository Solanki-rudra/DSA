# Graph — Traversal Problems

This folder contains graph problems focused on **graph traversal** using algorithms like **Depth-First Search (DFS)** and **Breadth-First Search (BFS)**. Traversal is fundamental for exploring nodes, cloning structures, and solving many classic graph problems.

---

## 📂 Files

| File | Problem | Description |
|------|---------|-------------|
| [`133_clone_graph.js`](./133_clone_graph.js) | LeetCode #133 — Clone Graph | Given a reference to a node in a connected undirected graph, return a deep copy (clone) of the graph. |
| [`994_rotting_oranges.js`](./994_rotting_oranges.js) | LeetCode #994 — Rotting Oranges | Given a grid, return the minimum time required to rot all oranges using BFS. |
| [`130_surrounded_regions.js`](./130_surrounded_regions.js) | LeetCode #130 — Surrounded Regions | Given a board of 'X' and 'O', capture all regions surrounded by 'X'. |
| [`417_pacific_atlantic_water_flow.js`](./417_pacific_atlantic_water_flow.js) | LeetCode #417 — Pacific Atlantic Water Flow | Find all cells where water can flow to both oceans. |
| [`277_find_celebrity.js`](./277_find_celebrity.js) | LeetCode #277 — Find the Celebrity | Find the celebrity in a group using relationship matrix. |

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

### 🧱 **130 — Surrounded Regions**

**Goal:**
You are given a 2D board containing `'X'` and `'O'`. Capture all regions surrounded by `'X'`.

A region is captured if it is completely surrounded by `'X'` on all sides.

**Approach:**
- Use **DFS** starting from border `'O'` cells.
- Mark all border-connected `'O'` as temporary (e.g., `'T'`).
- Convert remaining `'O'` to `'X'` (captured regions).
- Convert `'T'` back to `'O'`.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `solve` | DFS | O(m × n) | O(m × n) | Captures surrounded regions using DFS. |

---

### 🌊 **417 — Pacific Atlantic Water Flow**

**Goal:**
You are given a grid of heights. Water can flow from a cell to neighboring cells with **equal or lower height**.

Return all coordinates from which water can flow to **both Pacific and Atlantic oceans**.

**Approach:**
- Start traversal from **ocean borders** (reverse thinking).
- Use **DFS or BFS** to mark reachable cells from:
  - Pacific (top + left edges)
  - Atlantic (bottom + right edges)
- Cells reachable from **both** oceans are the answer.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `pacificAtlanticDFS` | DFS | O(m × n) | O(m × n) | Finds cells reachable to both oceans using DFS. |
| `pacificAtlanticBFS` | BFS | O(m × n) | O(m × n) | Finds cells reachable to both oceans using BFS. |

---

### 🎭 **277 — Find the Celebrity**

**Goal:**
You are given `n` people and a matrix where `knows(a, b)` means person `a` knows person `b`.

A **celebrity** is someone who:
- is known by everyone
- knows no one

Return the celebrity index or `-1` if none exists.

**Approach:**
- Use a **two-pointer / elimination technique** to find a candidate.
- Verify if the candidate is a valid celebrity.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `findCelebrity` | Two-pointer | O(n) | O(1) | Finds the celebrity using elimination. |

---

## ▶️ How to Run

```bash
node 133_clone_graph.js
node 994_rotting_oranges.js
node 130_surrounded_regions.js
node 417_pacific_atlantic_water_flow.js
node 277_find_celebrity.js
```