# Graph — Shortest Path Problems

This folder contains graph problems focused on **shortest path algorithms**.

Shortest path problems aim to find the minimum distance/time between nodes.
Common algorithms include **Dijkstra’s Algorithm**, **BFS (for unweighted graphs)**, and **Bellman-Ford**.

---

## 📂 Files

| File | Problem | Description |
|------|--------|-------------|
| [`743_network_delay_time.js`](./743_network_delay_time.js) | LeetCode #743 — Network Delay Time | Given travel times, find how long it takes for all nodes to receive the signal. |
| [`787_cheapest_flights.js`](./787_cheapest_flights.js) | LeetCode #787 — Cheapest Flights Within K Stops | Given a list of flights and their prices, find the cheapest price to travel from a source city to a destination city with at most k stops. |

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

## ▶️ How to Run

```bash
node 743_network_delay_time.js
node 787_cheapest_flights.js