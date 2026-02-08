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
| [`84_large_rect_in_histogram.js`](./84_large_rect_in_histogram.js) | LeetCode #84 — Largest Rectangle in Histogram | Find the area of the largest rectangle that can be formed in a histogram using monotonic stack. |
| [`496_next_greater_ele.js`](./496_next_greater_ele.js) | LeetCode #496 — Next Greater Element I | Find the next greater element for each element in nums1 from nums2 using monotonic stack. |
| [`503_next_greater_ele2.js`](./503_next_greater_ele2.js) | LeetCode #503 — Next Greater Element II | Find the next greater element for each element in a circular array using monotonic stack. |

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

### 🔍 **LeetCode #84 — Largest Rectangle in Histogram**

**Goal:**
Given an array of integers `heights` representing the heights of bars in a histogram, find the area of the largest rectangle that can be formed.

**Constraints:**
- 1 <= heights.length <= 10^5
- 0 <= heights[i] <= 10^4

---

### 🛠 Approaches Used (84)

| Function | Approach | Time | Space | Description |
|----------|----------|------|--------|-------------|
| `largestRectangleAreaBrute` | Brute Force | O(n^2) | O(1) | For each bar, expand left and right to find minimum height span. |
| `largestRectangleAreaBetter` | Two Pass Stack | O(n) | O(n) | Use two passes to find previous and next smaller elements, then calculate areas. |
| `largestRectangleAreaOptimal` | Monotonic Stack | O(n) | O(n) | Use single pass monotonic stack to find rectangle areas as bars are popped. |

---

### 🔍 **LeetCode #496 — Next Greater Element I**

**Goal:**
You are given two arrays `nums1` and `nums2` where `nums1`'s elements are a subset of `nums2` (without duplicates). Find all the next greater numbers for `nums1`'s elements in the corresponding places of `nums2`. The next greater number of a number `x` in `nums2` is the first greater number to its right in `nums2`. If it does not exist, return `-1` for this number.

**Constraints:**
- 1 <= nums1.length <= nums2.length <= 1000
- 1 <= nums1[i], nums2[i] <= 10^4
- All integers in `nums1` and `nums2` are unique.
- All integers of `nums1` also appear in `nums2`.

---

### 🛠 Approaches Used (496)

| Function | Approach | Time | Space | Description |
|----------|----------|------|--------|-------------|
| `nextGreaterElementBrute` | Brute Force | O(n*m) | O(1) | For each element in nums2, scan forward to find the next greater element. |
| `nextGreaterElementOptimal` | Monotonic Stack | O(n + m) | O(n) | Use a decreasing monotonic stack to track elements and compute next greater elements efficiently. |

---

### 🔍 **LeetCode #503 — Next Greater Element II**

**Goal:**
Given a circular array (the next element of the last element is the first element), print the Next Greater Number for every element. The Next Greater Number of a number `x` is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, output `-1` for this number.

**Constraints:**
- 1 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9

---

### 🛠 Approaches Used (503)

| Function | Approach | Time | Space | Description |
|----------|----------|------|--------|-------------|
| `nextGreaterElementsBrute` | Brute Force | O(n^2) | O(n) | For each element in the array, scan forward in a circular manner to find the next greater element. |
node 503_next_greater_ele2.js
| `nextGreaterElementsOptimal` | Monotonic Stack | O(n) | O(n) | Use a monotonic decreasing stack to track elements and compute next greater elements efficiently in a circular manner. |

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
node 84_large_rect_in_histogram.js
node 496_next_greater_ele.js
node 503_next_greater_ele2.js
```