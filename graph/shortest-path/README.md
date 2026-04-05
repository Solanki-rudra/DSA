# Graph — Shortest Path Problems

This folder contains graph problems focused on **shortest path algorithms**.

Shortest path problems aim to find the minimum distance/time between nodes.
Common algorithms include **Dijkstra’s Algorithm**, **BFS (for unweighted graphs)**, and **Bellman-Ford**.

---

## 📂 Files

| File | Problem | Description |
|------|--------|-------------|
| [`743_network_delay_time.js`](./743_network_delay_time.js) | LeetCode #743 — Network Delay Time | Given travel times, find how long it takes for all nodes to receive the signal. |

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

## ▶️ How to Run

```bash
node 743_network_delay_time.js