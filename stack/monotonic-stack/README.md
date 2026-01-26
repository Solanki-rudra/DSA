# 🔗 Stack Monotonic Stack Problems

This folder contains **Stack problems** that focus on
**monotonic stack techniques**, which maintain a stack in increasing or decreasing order to solve problems efficiently.

These problems help you understand:
- Using monotonic stacks for next greater/smaller element problems
- Maintaining order in stacks for optimal lookups
- Stack-based solutions for array processing
- Time complexity optimization with monotonic properties

---

## 📂 Files

| File | Problem | Description |
|------|--------|-------------|
| [`739_daily_temperatures.js`](./739_daily_temperatures.js) | LeetCode #739 — Daily Temperatures | Given temperatures, find days until warmer temperature for each day using monotonic stack. |
| [`853_car_fleet.js`](./853_car_fleet.js) | LeetCode #853 — Car Fleet | Calculate number of car fleets reaching destination using monotonic stack. |

---

## 🧩 Problem Summaries

---

### 🔍 **LeetCode #739 — Daily Temperatures**

**Goal:**
Given an array of integers `temperatures` represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `i^{th}` day to get a warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0` instead.

**Constraints:**
- 1 <= temperatures.length <= 10^5
- 30 <= temperatures[i] <= 100

---

### 🛠 Approaches Used (739)

| Function | Approach | Time | Space | Description |
|----------|----------|------|--------|-------------|
| `dailyTemperaturesBrute` | Brute Force | O(n^2) | O(1) | For each day, scan forward to find the next warmer day. |
| `dailyTemperaturesOptimal` | Monotonic Stack | O(n) | O(n) | Use a decreasing monotonic stack to track indices and compute next warmer days efficiently. |

---

### 🔍 **LeetCode #853 — Car Fleet**

**Goal:**
There are `n` cars going to the same destination along a one-lane road. The destination is `target` miles away. You are given two integer arrays `position` and `speed`, both of length `n`, where `position[i]` is the position of the `i^{th}` car and `speed[i]` is the speed of the `i^{th}` car. A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The distance between these two cars is ignored - they are considered as one car. Return the number of car fleets that will arrive at the destination.

**Constraints:**
- `n == position.length == speed.length`
- `1 <= n <= 10^5`
- `0 < target <= 10^6`
- `0 < position[i] < target`
- All the values of `position` are unique.
- `0 < speed[i] <= 10^6`

---

### 🛠 Approaches Used (853)

| Function | Approach | Time | Space | Description |
|----------|----------|------|--------|-------------|
| `carFleet` | Monotonic Stack | O(n log n) | O(n) | Sort cars by position descending, use stack to merge fleets when cars catch up. |

---

## 🧠 Key Learnings

- Using monotonic stacks for next greater/smaller element problems
- Maintaining order in stacks for optimal lookups
- Stack-based solutions for array processing
- Time complexity optimization with monotonic properties

---

## ▶️ How to Run

```bash
node 739_daily_temperatures.js
node 853_car_fleet.js
```