# Heap + Max-Heap Problems

This folder contains problems that use max-heaps (priority queues) to solve
algorithmic challenges.

---

## 📂 Files

| File | Problem | Description |
|------|---------|-------------|
| [`1046_last_stone_weight.js`](./1046_last_stone_weight.js) | LeetCode #1046 — Last Stone Weight | Repeatedly smash the two heaviest stones; if unequal, insert the difference. Return the weight of the last remaining stone (or 0). |
| [`973_k_close_points.js`](./973_k_close_points.js) | LeetCode #973 — K Closest Points to Origin | Find the k points closest to the origin (0, 0) from a given list of points. |
| [`621_task_scheduler.js`](./621_task_scheduler.js) | LeetCode #621 — Task Scheduler | Schedule tasks with a cooldown period between identical tasks; find the minimum time needed. |
| [`355_design_twitter.js`](./355_design_twitter.js) | LeetCode #355 — Design Twitter | Design a simplified Twitter with post, follow/unfollow, and news feed retrieval features. |

---

## 🧩 Problem Summary

### 🪨 **1046 — Last Stone Weight**

**Goal:**
Given an array of stone weights, repeatedly take the two heaviest stones and smash them:
- If their weights are equal, both are destroyed.
- If they differ, the remaining stone has weight equal to their difference and is reinserted.
Return the weight of the last remaining stone (or 0 if none remain).

**Approach:**
Use a max-heap (priority queue) to always extract the two largest stones efficiently.

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `lastStoneWeightBrute` | Sorting + simulation | O(n^2 log n) | O(1) | Repeatedly sort the array, take two largest elements, and insert the difference (if any). |
| `lastStoneWeightOptimal` | Max-heap (priority queue) | O(n log n) | O(n) | Build a max-heap from the stones and repeatedly poll the top two and reinsert the difference when necessary. |

**Key Points:**
- Max-heap allows efficient retrieval of the largest two stones.
- Each insertion/removal is O(log n); in the worst case multiple operations occur per stone.

---

### 🎯 **973 — K Closest Points to Origin**

**Goal:**
Given an array of points where each point is represented as [x, y], find the k points that are closest to the origin (0, 0). Return these k points in any order.

**Approach:**
Use a max-heap (priority queue) of size k to maintain the k closest points. For each point, calculate its distance from the origin. If the heap has fewer than k points, add the point. If the heap is full and the current point's distance is smaller than the maximum distance in the heap, remove the farthest point and add the current point.

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `kClosestBrute` | Sorting by distance | O(n log n) | O(n) | Calculate distances for all points, sort by distance, and return the first k points. |
| `kClosestOptimal` | Max-heap (priority queue) | O(n log k) | O(k) | Maintain a max-heap of size k based on distance; iterate through points and keep only the k closest ones. |

**Key Points:**
- Max-heap based on distance keeps track of the k closest points dynamically.
- By maintaining a fixed-size heap of k, we avoid sorting all n points.
- The comparator uses squared distance to avoid computing square roots (optimization).

---

### 📅 **621 — Task Scheduler**

**Goal:**
Given an array of tasks (represented by characters) and a cooldown period n, schedule all tasks such that there is a gap of at least n units of time between any two identical tasks. Find the minimum number of time units needed to complete all tasks.

**Approach:**
Use a max-heap to always process the most frequent tasks first. In each cycle, process up to n+1 tasks (to maintain the cooldown). Decrease frequencies and reinsert tasks that still have remaining occurrences.

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `leastInterval` | Max-heap (frequency-based) | O(n log k) | O(k) | Count task frequencies, maintain a max-heap, and simulate scheduling by processing up to n+1 tasks per cycle. |

**Key Points:**
- Max-heap prioritizes high-frequency tasks to minimize idle time.
- Each cycle processes up to n+1 tasks; if fewer are available, idle time is accounted for.
- The formula: `(maxFreq - 1) * (n + 1) + tasksWithMaxFreq` provides an alternative calculation.

---

### 🐦 **355 — Design Twitter**

**Goal:**
Design a simplified Twitter system that supports:
- `postTweet(userId, tweetId)`: Post a tweet by a user
- `getNewsFeed(userId)`: Get the 10 most recent tweets from users the current user follows (including themselves)
- `follow(followerId, followeeId)`: A user follows another user
- `unfollow(followerId, followeeId)`: A user unfollows another user

**Approach:**
Use a data structure to store tweets (linked list for insertion order) and users (with follow sets). For retrieving the news feed, use a max-heap to merge the tweet streams from all followed users efficiently and extract the 10 most recent tweets.

| Function | Approach | Time | Space | Description |
|---------|----------|------|-------|-------------|
| `getNewsFeed` | Max-heap merging | O(k log f) | O(f) | Use a max-heap to merge tweet streams from all followed users, where k = 10 and f = number of followed users. |

**Key Points:**
- Linked lists maintain insertion order for efficient tweet retrieval.
- Max-heap allows efficient merging and retrieval of most recent tweets across multiple users.
- Follow/unfollow operations are O(1) using a set.
- News feed generation is O(k log f) where k = 10 and f = number of followed users.

---

## 🧠 Key Learnings

- Implementing and using max-heaps (priority queues)
- Time/space trade-offs for heap-based solutions
- Common heap application patterns (top-K, merging, greedy reductions)

---

## ▶️ How to Run

```bash
node 1046_last_stone_weight.js
node 973_k_close_points.js
node 621_task_scheduler.js
node 355_design_twitter.js
```