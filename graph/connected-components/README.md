# Graph — Connected Components Problems

This folder contains graph problems focused on **finding connected components**.

A **connected component** in a graph is a group of nodes where each node is
directly or indirectly connected to the others. These problems are commonly
solved using **Depth-First Search (DFS)** or **Breadth-First Search (BFS)**.

---

## 📂 Files

| File | Problem | Description |
|------|--------|-------------|
| [`547_number_of_provinces.js`](./547_number_of_provinces.js) | LeetCode #547 — Number of Provinces | Given an adjacency matrix representing connections between cities, return the number of provinces (connected components). |

---

## 🧩 Problem Summaries

---

### 🌍 **547 — Number of Provinces**

**Goal:**  
You are given an `n x n` matrix `isConnected` where `isConnected[i][j] = 1`
means city `i` and city `j` are directly connected.

A **province** is a group of cities that are directly or indirectly connected.

Return the **total number of provinces**.

**Approach:**
- Treat each city as a node in a graph.
- If a city is not visited, run **DFS** to visit all connected cities.
- Each DFS traversal represents **one province**.

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `findCircleNum` | DFS | O(n²) | O(n) | Counts connected components in the graph using DFS. |

**Key Points:**
- The problem reduces to **counting connected components**.
- Use a **visited array** to avoid revisiting cities.
- Each DFS call explores all cities in the same province.

---

## ▶️ How to Run

```bash
node 547_number_of_provinces.js