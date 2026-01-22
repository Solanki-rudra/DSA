# 🔗 Linked List + Traversal and Pointers Problems

This folder contains **Linked List problems** that focus on  
**traversal techniques** and **pointer manipulation** using two pointers.

These problems help you understand:
- Pointer movement and traversal
- Cycle detection and pointer chasing
- Fixed-gap two pointer strategy
- Finding middle nodes efficiently
- Safe pointer mutation vs traversal

---

## 📂 Files

| File | Problem | Description |
|------|--------|-------------|
| [`876_mid_of_linked_list.js`](./876_mid_of_linked_list.js) | LeetCode #876 — Middle of the Linked List | Find the middle node using brute force and two pointers. |
| [`141_linked_list_cycle.js`](./141_linked_list_cycle.js) | LeetCode #141 — Linked List Cycle | Detect whether a linked list contains a cycle using brute force and optimal approaches. |
| [`19_remove_nth_node_from_last.js`](./19_remove_nth_node_from_last.js) | LeetCode #19 — Remove Nth Node From End of List | Remove the nth node from the end using brute force and two pointers. |

---

## 🧩 Problem Summaries

---

### 🔍 **LeetCode #876 — Middle of the Linked List**

**Goal:**  
Given the `head` of a singly linked list, return the **middle node**.

- If there are **two middle nodes**, return the **second middle**
- List length ≥ 1

---

### 🛠 Approaches Used (876)

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `middleNodeBrute` | Brute Force | O(n) | O(1) | Traverse twice: once to count nodes, once to reach the middle. |
| `middleNodeOptimal` | Two Pointers | O(n) | O(1) | Use slow and fast pointers to find the middle in one pass. |

---

### 🔍 **LeetCode #141 — Linked List Cycle**

**Goal:**  
Detect whether a linked list contains a **cycle**.

---

### 🛠 Approaches Used (141)

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `hasCycleBrute` | Hash Set | O(n) | O(n) | Track visited node references. |
| `hasCycleOptimal` | Floyd’s Algorithm | O(n) | O(1) | Slow & fast pointers meet if a cycle exists. |

---

### 🔍 **LeetCode #19 — Remove Nth Node From End of List**

**Goal:**  
Remove the **nth node from the end** and return the head.

---

### 🛠 Approaches Used (19)

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `removeNthFromEndBrute` | Length Calculation | O(n) | O(1) | Count nodes, then remove target. |
| `removeNthFromEndOptimal` | Two Pointers + Dummy | O(n) | O(1) | Maintain a fixed gap to delete in one pass. |

---

## 🧠 Key Learnings

- Fixed-gap two pointer strategy
- Cycle detection using Floyd’s algorithm
- Finding middle nodes with slow and fast pointers
- Safe pointer mutation vs traversal

---

## ▶️ How to Run

```bash
node 876_mid_of_linked_list.js
node 141_linked_list_cycle.js
node 19_remove_nth_node_from_last.js
```