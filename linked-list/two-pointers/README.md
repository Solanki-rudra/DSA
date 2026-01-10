# 🔗 Linked List + Two Pointers Problems

This folder contains **Linked List problems** that focus on the  
**Two Pointers pattern**.

These problems help you understand pointer movement, list traversal,
and how to solve Linked List questions efficiently using
**single-pass techniques**.

---

## 📂 Files

| File | Problem | Description |
|------|--------|-------------|
| [`876_mid_of_linked_list.js`](./876_mid_of_linked_list.js) | LeetCode #876 — Middle of the Linked List | Find the middle node of a singly linked list using brute force and optimal approaches. |

---

## 🧩 Problem Summary

### 🔍 **LeetCode #876 — Middle of the Linked List**

**Goal:**  
Given the `head` of a singly linked list, return the **middle node** of the linked list.

- If there are **two middle nodes**, return the **second middle**.
- The list length is guaranteed to be ≥ 1.

---

## 🛠 Approaches Used

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `middleNodeBrute` | Brute Force | O(n) | O(1) | Traverse the list to calculate its length, then traverse again to reach the middle node. |
| `middleNodeOptimal` | Optimal (Two Pointers) | O(n) | O(1) | Use slow and fast pointers to find the middle node in a single traversal. |

---

## ▶️ How to Run

```bash
node 876_mid_of_linked_list.js