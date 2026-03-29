
# Graph — Traversal Problems

This folder contains graph problems focused on **graph traversal** using algorithms like **Depth-First Search (DFS)** and **Breadth-First Search (BFS)**. Traversal is fundamental for exploring nodes, cloning structures, and solving many classic graph problems.

---

## 📂 Files

| File | Problem | Description |
|------|---------|-------------|
| [`133_clone_graph.js`](./133_clone_graph.js) | LeetCode #133 — Clone Graph | Given a reference to a node in a connected undirected graph, return a deep copy (clone) of the graph. |

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

## ▶️ How to Run

```bash
node 133_clone_graph.js