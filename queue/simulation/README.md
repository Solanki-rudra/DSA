# Queue — Simulation Problems

This folder contains queue-based simulation problems where a queue models
time-ordered processes (voting, banning, scheduling, rounds). These problems
use queue semantics to simulate ordered actions and circular behavior.

---

## 📂 Files

| File | Problem | Description |
|------|---------|-------------|
| [`649_dota2_senate.js`](./649_dota2_senate.js) | LeetCode #649 — Dota2 Senate | Simulate the senate banning process and determine the winning party using index queues. |

---

## 🧩 Problem Summaries

---

### 🗳️ **649 — Dota2 Senate**

**Goal:**
Given a string of senators from two parties (`R` for Radiant and `D` for Dire) sitting in a circle,
simulate the banning process and determine which party will win (Radiant or Dire).

**Approach:**
- Use two queues to store indices of `R` and `D` senators.
- At each step compare the front indices: the smaller index bans the other party's senator and is
  re-enqueued with index + n to act again in the next round.
- Continue until one queue is empty; the non-empty queue's party wins.

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `predictPartyVictory` | Queue simulation (two index queues) | O(n) | O(n) | Simulate rounds by comparing front indices and re-enqueueing with offset to model circular order. |

**Key Points:**
- Index queues efficiently model circular order without rotating arrays.
- Each senator is enqueued at most a small number of times; overall complexity is linear.

---

## 🧠 Key Learnings

- Queue-driven simulation models ordered processes and rounds.
- Using index offsets (`index + n`) simulates circular repeats cleanly.
- Two-queue patterns apply to other competitive-turn simulations.

---

## ▶️ How to Run

```bash
node 649_dota2_senate.js
```