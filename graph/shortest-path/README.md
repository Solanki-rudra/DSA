# Graph — Shortest Path Problems

This folder contains graph problems focused on **shortest path algorithms**.

Shortest path problems aim to find the minimum distance/time between nodes.
Common algorithms include **Dijkstra’s Algorithm**, **BFS (for unweighted graphs)**, **Bellman-Ford**, and **Prim’s Algorithm**, **Kruskal’s Algorithm**.

---

## 📂 Files

| File | Problem | Description |
|------|--------|-------------|
| [`743_network_delay_time.js`](./743_network_delay_time.js) | LeetCode #743 — Network Delay Time | Given travel times, find how long it takes for all nodes to receive the signal. |
| [`787_cheapest_flights.js`](./787_cheapest_flights.js) | LeetCode #787 — Cheapest Flights Within K Stops | Given a list of flights and their prices, find the cheapest price to travel from a source city to a destination city with at most k stops. |
| [`1584_min_cost_to_connect.js`](./1584_min_cost_to_connect.js) | LeetCode #1584 — Min Cost to Connect Points | Given a list of points, find the minimum cost to connect all the points. |
| [`778_swim_in_rising_water.js`](./778_swim_in_rising_water.js) | LeetCode #778 — Swim in Rising Water | Given an n × n elevation grid, find the least time `t` such that you can swim from top-left to bottom-right. |

---

## 🧩 Problem Summaries

---

### ⏱ **743 — Network Delay Time**

**Goal:**  
You are given a list of travel times `times[i] = [u, v, w]` where  
it takes `w` time to travel from node `u` to node `v`.

Given `n` nodes and a starting node `k`, return the **time it takes for all nodes to receive the signal**.  
If not all nodes can be reached, return `-1`.

**Approach:**
- Represent graph using an **adjacency list**
- Use **Dijkstra’s Algorithm** with a **min-heap**
- Track shortest distance to each node
- Final answer = **maximum distance among all nodes**

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `networkDelayTime` | Dijkstra | O((V + E) log V) | O(V + E) | Finds minimum time to reach all nodes |

---

### ✈️ **787 — Cheapest Flights Within K Stops**

**Goal:**  
You are given a list of flights `flights[i] = [from, to, price]`.

Given `n` cities, a starting city `src`, a destination city `dst`, array `flights`, and an integer `k`, return the **cheapest price to travel from source to destination with at most `k` stops**.  
If no such route exists, return `-1`.

**Approach:**
- Represent flights as a **directed graph** via an adjacency list.
- Use **Breadth-First Search (BFS)** with a queue to process level by level.
- Use **Breadth-First Search (BFS) with Min Heap** (Dijkstra-based) to prioritize lower prices.
- Use **Bellman-Ford Algorithm** running for exactly `k + 1` iterations.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `findCheapestPriceI` | Breadth-First Search (BFS) | O((V + E) * log V) | O(V + E) | Finds the shortest path using a queue. |
| `findCheapestPriceII` | Breadth-First Search (BFS) | O((V + E) * log V) | O(V + E) | Finds the shortest path using a Min Heap. |
| `findCheapestPriceIII` | Bellman-Ford Algorithm | O(k * E) | O(V) | Finds the cheapest price by relaxing edges `k + 1` times. |

---

### 💰 **1584 — Min Cost to Connect Points**

**Goal:**  
Given a list of points in a 2D plane, find the minimum cost to connect all the points such that they form a connected graph. The cost of connecting two points is the Manhattan distance between them.

**Approach:**
- Represent points as nodes in a graph where edge weights are Manhattan distances.
- Use **Prim’s Algorithm** with a min-heap to build the Minimum Spanning Tree (MST).

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `minCostConnectPointsI` | Prim’s Algorithm (Min-Heap) | O((V + E) log V) | O(V + E) | Builds MST using a priority queue. |
| `minCostConnectPointsII` | Prim’s Algorithm (Array) | O(V²) | O(V) | Builds MST without a priority queue. |

---

### 🏊 **778 — Swim in Rising Water**

**Goal:**  
You are given an `n x n` integer grid where `grid[i][j]` is the elevation at cell `(i, j)`.  
At time `t`, you can swim through any cell whose elevation is **≤ t**.
Starting at `(0, 0)`, return the **least time `t`** at which you can reach `(n - 1, n - 1)`.

**Approach:**
- Treat each cell as a graph node; adjacent cells with cardinal neighbours are edges.
- **Dijkstra's Algorithm (Min-Heap):** Use a min-heap keyed on the maximum elevation seen so far along the path. Pop the cheapest cell, update `t = max(t, elevation)`, push unvisited neighbours. Return `t` as soon as the bottom-right cell is popped.
- **Binary Search + BFS:** Binary search on the answer `t` (range: `grid[0][0]` → `n²−1`). For each candidate `t`, run a BFS/DFS to check if a path exists where all cell elevations ≤ `t`. Converge on the minimum valid `t`.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `swimInWaterDij` | Dijkstra's Algorithm (Min-Heap) | O(N² log N) | O(N²) | Greedily expands via min-heap; returns the minimum bottleneck elevation. |
| `swimInWaterBST` | Binary Search + BFS | O(N² log N) | O(N²) | Binary searches on time `t` and validates each candidate with a BFS. |

---

## ▶️ How to Run

```bash
node 743_network_delay_time.js
node 787_cheapest_flights.js
node 1584_min_cost_to_connect.js
node 778_swim_in_rising_water.js
```