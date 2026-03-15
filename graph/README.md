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
| [`connected-components`](./connected-components) | Problems focused on finding **connected components** in graphs using DFS, BFS, or Union-Find |

---

## 🧠 Key Learnings

- Graph fundamentals: vertices, edges, directed vs undirected graphs
- Graph representations: adjacency matrix vs adjacency list
- Traversal algorithms: **Depth-First Search (DFS)** and **Breadth-First Search (BFS)**
- Detecting **connected components**
- Understanding **time and space complexity** in graph traversal
- When to use **DFS vs BFS**

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

- **V** = number of vertices (nodes)
- **E** = number of edges

---

## 🎯 Interview Focus

When solving graph problems, always identify:

1. **Graph representation**
2. **Traversal method** (DFS or BFS)
3. **Problem pattern** (connected components, shortest path, cycle detection)
4. **Visited tracking** to avoid infinite loops

Many graph interview problems reduce to **systematically exploring nodes and edges** using DFS or BFS.