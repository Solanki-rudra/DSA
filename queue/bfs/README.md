# � Queue + BFS Problems

This folder includes problems where **Breadth-First Search (BFS)** is applied using a **Queue** data structure  
to explore graphs level-by-level and find the shortest path or minimum moves to reach a target state.

---

## 📂 Files

| File | Problem | Description |
|------|---------|-------------|
| [`752_open_the_lock.js`](./752_open_the_lock.js) | LeetCode #752 — Open the Lock | Find the minimum number of moves to reach a target lock state from '0000' using BFS, avoiding deadends. |

---

## 🧩 Problem Summaries

---

### 🔐 **752 — Open the Lock**

**Goal:**  
Given a lock with 4 circular wheels (0-9), a list of deadend states, and a target state,  
return the **minimum number of moves** to reach the target from '0000', or **-1** if impossible.  
Each move turns one wheel up or down (with wrapping).

---

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `openLock` | Breadth-First Search (BFS) | O(N) | O(N) | Use a queue to explore all reachable states level by level. N represents the maximum search space (up to 10,000 states). |

**Key Points:**
- Model the lock as a graph where each state is a node and valid moves are edges.
- Use a queue to maintain states to explore and a set to track visited states.
- BFS guarantees finding the shortest path since all moves have equal weight.
- Return the number of steps when the target is reached, or -1 if the queue empties without reaching the target.

---

## 🧠 Key Learnings

- Understanding BFS and its applications in finding shortest paths
- Using queues as the core data structure for level-by-level exploration
- Modeling problems as graph traversal challenges
- Avoiding infinite loops with visited state tracking
- Early termination when the target state is found

---

## ▶️ How to Run

```bash
node 752_open_the_lock.js
```