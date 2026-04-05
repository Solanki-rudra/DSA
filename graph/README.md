# 🔗 Graph Problems

This folder contains **graph** problems — a fundamental data structure in DSA
and commonly asked in coding interviews.

A graph is a collection of **vertices (nodes)** connected by **edges**.
Graphs can be **directed or undirected**, **weighted or unweighted**, and are
often used to model relationships such as networks, dependencies, and routes.

Graphs can be represented using:
- **Adjacency Matrix** — a 2D matrix representing connections between nodes
- **Adjacency List** — a list of neighbors for each node (more efficient for sparse graphs)

---

## 📂 Folder Structure

| Folder | Description |
|--------|-------------|

## 📂 Folder Structure & Examples

| Folder | Description | Example Problems |
|--------|-------------|------------------|
| [`connected-components`](./connected-components) | Find **connected components** using DFS/BFS | Number of Islands, Number of Provinces |
| [`union-find`](./union-find) | Use **Union-Find (Disjoint Set Union)** for connectivity/cycles | Redundant Connection |
| [`traversal`](./traversal) | General **DFS/BFS traversal** problems | Word Ladder |
| [`topological-sort`](./topological-sort) | **Topological sorting** in DAGs | Course Schedule, Course Schedule II |
| [`shortest-path`](./shortest-path) | **Shortest path** algorithms | Network Delay Time |
| [`dsu.js`](./dsu.js) | Utility: **Disjoint Set Union (Union-Find)** class | — |

---

## 🧠 Key Learnings


## 🧠 Key Learnings

- Graph fundamentals: vertices, edges, directed vs. undirected, weighted vs. unweighted
- Graph representations: adjacency matrix vs. adjacency list
- Traversal algorithms: **DFS** and **BFS**
- Detecting **connected components**
- Shortest path and topological sort techniques
- Time and space complexity in graph traversal
- When to use **DFS** vs. **BFS**

---

## 📚 Common Graph Problems

Graph problems commonly include:

### Traversal
- Depth-First Search (DFS)
- Breadth-First Search (BFS)
- Graph traversal from a starting node

### Connected Components
- Number of Provinces
- Number of Islands
- Max Area of Island

### Shortest Path
- Dijkstra's Algorithm
- Bellman-Ford Algorithm
- BFS for unweighted shortest paths

### Topological Sorting
- Course Schedule
- Course Schedule II

### Union-Find (Disjoint Set)
- Connected components using Union-Find
- Cycle detection in undirected graphs

### Advanced Topics
- Minimum Spanning Tree (Kruskal / Prim)
- Strongly Connected Components (Kosaraju / Tarjan)
- Bipartite Graph Checking

---

## ⏱ Complexity Overview

| Algorithm | Time Complexity | Space Complexity |
|-----------|----------------|-----------------|
| DFS | O(V + E) | O(V) |
| BFS | O(V + E) | O(V) |
| Adjacency Matrix Traversal | O(V²) | O(V²) |
| Adjacency List Traversal | O(V + E) | O(V + E) |

Where:


## ⏱ Complexity Overview

| Algorithm                   | Time Complexity | Space Complexity |
|-----------------------------|----------------|-----------------|
| DFS                         | O(V + E)       | O(V)            |
| BFS                         | O(V + E)       | O(V)            |
| Adjacency Matrix Traversal  | O(V²)          | O(V²)           |
| Adjacency List Traversal    | O(V + E)       | O(V + E)        |

Where:
- **V** = number of vertices (nodes)
- **E** = number of edges

---

## 🎯 Interview Focus

When solving graph problems, always identify:
1. **Graph representation** (adjacency list/matrix)
2. **Traversal method** (DFS or BFS)
3. **Problem pattern** (connected components, shortest path, cycle detection, etc.)
4. **Visited tracking** to avoid infinite loops

Most graph interview problems reduce to **systematically exploring nodes and edges** using DFS or BFS.


---

## 📝 Summary

Graphs are a versatile data structure for modeling relationships and networks. Mastering graph representations, traversals (DFS/BFS), and common patterns (connected components, shortest path, cycle detection) is essential for technical interviews and real-world problem solving.

Explore the subfolders for categorized problems and solutions!