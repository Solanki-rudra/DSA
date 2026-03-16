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
| [`200_number_of_islands.js`](./200_number_of_islands.js) | LeetCode #200 — Number of Islands | Given a grid of land (`'1'`) and water (`'0'`), return the number of islands. |
| [`695_max_area_of_island.js`](./695_max_area_of_island.js) | LeetCode #200 — Number of Islands | Given a grid of land (`'1'`) and water (`'0'`), return the number of islands. |

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

### 🏝 **200 — Number of Islands**

**Goal:**  
You are given a 2D grid where:

- `'1'` represents **land**
- `'0'` represents **water**

An **island** is formed by connecting adjacent land cells **horizontally or vertically**.

Return the **total number of islands**.

**Approach:**
- Iterate through every cell in the grid.
- When a `'1'` is found, run **DFS** to explore all connected land cells.
- Mark visited cells as `'0'` to avoid revisiting.
- Each DFS traversal represents **one island**.

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `numIslands` | DFS | O(m × n) | O(m × n) | Counts islands in the grid using DFS flood-fill. |

**Key Points:**
- The grid acts as a **graph where each cell is a node**.
- DFS explores all connected land cells.
- Each DFS call represents **one island**.

---

### 🏝 **695 — Number of Islands**

**Goal:**  
You are given a 2D grid where:

- `'1'` represents **land**
- `'0'` represents **water**

An **island** is formed by connecting adjacent land cells **horizontally or vertically**.

Return the **total number of islands**.

**Approach:**
- Iterate through every cell in the grid.
- When a `'1'` is found, run **DFS** to explore all connected land cells.
- Mark visited cells as `'0'` to avoid revisiting.
- Each DFS traversal represents **one island**.

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `numIslands` | DFS | O(m × n) | O(m × n) | Counts islands in the grid using DFS flood-fill. |

**Key Points:**
- The grid acts as a **graph where each cell is a node**.
- DFS explores all connected land cells.
- Each DFS call represents **one island**.

---

## ▶️ How to Run

```bash
node 547_number_of_provinces.js
node 200_number_of_islands.js
node 695_max_area_of_island.js