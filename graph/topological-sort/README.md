# Graph — Topological Sort Problems

This folder contains graph problems focused on **topological sorting**.

Topological sort is used in **directed graphs** to determine an ordering of nodes
such that for every directed edge `u → v`, node `u` comes before `v`.

These problems are commonly used to **detect cycles** and **resolve dependencies**.

---

## 📂 Files

| File | Problem | Description |
|------|--------|-------------|
| [`207_course_schedule.js`](./207_course_schedule.js) | LeetCode #207 — Course Schedule | Given courses and prerequisites, determine if it is possible to finish all courses (cycle detection). |

---

## 🧩 Problem Summaries

---

### 📘 **207 — Course Schedule**

**Goal:**  
You are given `numCourses` and a list of prerequisites where  
`[a, b]` means you must take course `b` before course `a`.

Return **true** if you can finish all courses, otherwise return **false**.

**Approach:**
- Represent courses as a **directed graph**.
- Use **DFS** to detect cycles.
- Maintain:
  - `visited` → nodes in current path
  - `safe` → nodes already processed
- If a node is revisited in the same path → cycle exists → return false.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `canFinish` | DFS | O(V + E) | O(V + E) | Returns true if all courses can be completed. |

---

## ▶️ How to Run

```bash
node 207_course_schedule.js
```