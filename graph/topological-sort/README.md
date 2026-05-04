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
| [`210_course_schedule_2.js`](./210_course_schedule_2.js) | LeetCode #210 — Course Schedule II | Return the order in which courses can be completed using topological sort. |
| [`269_alien_dictionary.js`](./269_alien_dictionary.js) | LeetCode #269 — Alien Dictionary | Given a sorted list of alien-language words, derive the character order of the alien alphabet using topological sort. |

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

### 📘 **210 — Course Schedule II**

**Goal:**  
You are given `numCourses` and a list of prerequisites where  
`[a, b]` means you must take course `b` before course `a`.

Return the **order of courses** you can take to finish all courses.  
If it is not possible, return an empty array `[]`.

**Approach:**
- Represent courses as a **directed graph**.
- Use **Topological Sort**:
  - **DFS** (post-order) to build ordering
  - OR **BFS (Kahn’s Algorithm)** using indegree
- If a cycle exists → return empty array.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `findOrderDfs` | DFS | O(V + E) | O(V + E) | Returns course order using DFS. |
| `findOrderKahn` | BFS | O(V + E) | O(V + E) | Returns course order using Kahn’s Algorithm. |

---

### 📘 **269 — Alien Dictionary**

**Goal:**  
You are given a list of words sorted lexicographically according to the rules of an **unknown alien language**.  
Derive the **order of characters** in the alien alphabet.  
If no valid ordering exists (cycle detected), return an empty string `""`.

**Approach:**
- Build a **directed graph** by comparing adjacent word pairs character by character.
- The **first differing character** between two consecutive words gives a directed edge `u → v` (u comes before v).
- Handle invalid input: if a longer word is a prefix of the shorter next word, return `""`.
- Apply **Kahn's Algorithm (BFS)** using indegrees to produce topological order.
- If the result length ≠ number of unique characters → cycle exists → return `""`.

| Function | Approach | Time | Space | Description |
|----------|----------|------|-------|-------------|
| `alienOrder` | BFS (Kahn's) | O(C) | O(V + E) | Returns the alien alphabet order string; `""` if invalid. |

> `C` = total characters across all words, `V` = unique characters, `E` = derived ordering edges.

---

## ▶️ How to Run

```bash
node 207_course_schedule.js
node 210_course_schedule_2.js
node 269_alien_dictionary.js
```