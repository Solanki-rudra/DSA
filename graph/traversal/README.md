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
| [`127_word_ladder.js`](./127_word_ladder.js) | LeetCode #127 — Word Ladder | Find the shortest transformation sequence from beginWord to endWord. |

---

## 🧩 Problem Summaries

---

### 🔗 **133 — Clone Graph**

**Goal:**
Given a reference to a node in a connected undirected graph, return a deep copy (clone) of the entire graph.

**Approach:**
- Use **Depth-First Search (DFS)** to traverse the graph.
- For each node, create a copy and recursively clone all its neighbors.
- Use a map to keep track of already-cloned nodes to avoid cycles.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `cloneGraph` | DFS | O(n) | O(n) | Returns a deep copy of the input graph. |

---

### 🍊 **994 — Rotting Oranges**

**Goal:**
Return the minimum time required to rot all fresh oranges.

**Approach:**
- Use **BFS**
- Spread rot level-by-level (each level = 1 minute)

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `orangesRotting` | BFS | O(m × n) | O(m × n) | Returns time to rot all oranges. |

---

### 🧱 **130 — Surrounded Regions**

**Goal:**
Capture all regions surrounded by `'X'`.

**Approach:**
- DFS from border `'O'`
- Mark safe cells, then flip remaining

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `solve` | DFS | O(m × n) | O(m × n) | Captures surrounded regions. |

---

### 🌊 **417 — Pacific Atlantic Water Flow**

**Goal:**
Find cells where water can flow to both oceans.

**Approach:**
- Start from ocean borders
- Use **DFS/BFS**
- Take intersection

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `pacificAtlanticDFS` | DFS | O(m × n) | O(m × n) | DFS solution |
| `pacificAtlanticBFS` | BFS | O(m × n) | O(m × n) | BFS solution |

---

### 🎭 **277 — Find the Celebrity**

**Goal:**
Find a person who knows no one but is known by everyone.

**Approach:**
- Eliminate candidates
- Verify final candidate

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `findCelebrity` | Two-pointer | O(n) | O(1) | Finds celebrity |

---

### 🔤 **127 — Word Ladder**

**Goal:**
Find the **shortest transformation sequence** from `beginWord` to `endWord`.

**Approach:**
- Use **BFS** for shortest path
- Try all 1-letter transformations
- Use set for fast lookup

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `ladderLengthI` | BFS | O(m × n × 26) | O(n) | Standard BFS solution |
| `ladderLengthII` | Bi-BFS | O(m × n × 26) | O(n) | Optimized bidirectional BFS |

---

## ▶️ How to Run

```bash
node 133_clone_graph.js
node 994_rotting_oranges.js
node 130_surrounded_regions.js
node 417_pacific_atlantic_water_flow.js
node 277_find_celebrity.js
node 127_word_ladder.js
```