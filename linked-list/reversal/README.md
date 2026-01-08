# 🔗 Linked List + Reversal Problems

This folder contains **Linked List problems** that focus on the
**Reversal pattern**.

Reversal problems train you to manipulate `.next` pointers correctly and
build the foundation for advanced Linked List problems such as palindrome
checks, reordering lists, and merge sort.

---

## 📂 Files

| File | Problem | Description |
|------|--------|-------------|
| [`206_reverse_linked_list.js`](./206_reverse_linked_list.js) | LeetCode #206 — Reverse Linked List | Reverse a singly linked list using brute force and optimal approaches. |

---

## 🧩 Problem Summary

### 🔁 **LeetCode #206 — Reverse Linked List**

**Goal:**  
Given the `head` of a singly linked list, reverse the list and return the
reversed list.

---

## 🛠 Approaches Used

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `reverseListBrute` | Brute Force | O(n) | O(n) | Store nodes in a stack and reconnect them in reverse order. |
| `reverseListOptimal` | Optimal (In-place) | O(n) | O(1) | Reverse pointers using three variables (`prev`, `curr`, `next`). |

---

## ▶️ How to Run

```bash
node 206_reverse_linked_list.js