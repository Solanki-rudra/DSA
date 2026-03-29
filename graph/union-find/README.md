# Graph — Union find Problems

This folder contains graph problems focused on **union find (DSU)**.

A **dsu** in a graph is a group of nodes where each node is
directly or indirectly connected to the others. These problems are commonly
solved using **Depth-First Search (DFS)** or **Breadth-First Search (BFS)**.

---

## 📂 Files

| File | Problem | Description |
|------|--------|-------------|
| [`684_redundant_connection.js`](./684_redundant_connection.js) | LeetCode #684 — Redundant Connection | Given a list of undirected edges, return the edge that creates a cycle in the graph (using Union-Find). |

---

## 🧩 Problem Summaries

---

### 🔗 **684 — Redundant Connection**

**Goal:**  
Given a list of undirected edges, return the edge that, if removed, would make the graph a tree (i.e., the edge that creates a cycle).

**Approach:**
- Use the **Union-Find (Disjoint Set Union)** data structure to track connected components.
- For each edge, check if the two nodes are already connected (i.e., have the same root). If so, that edge is redundant.
- Otherwise, union the two nodes.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `findRedundantConnection` | Union-Find | O(n·α(n)) | O(n) | Returns the redundant edge that creates a cycle. |


---

## ▶️ How to Run

```bash
node 684_redundant_connection.js