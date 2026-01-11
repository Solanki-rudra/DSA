# 🔗 Linked List + Two Pointers Problems

This folder contains **Linked List problems** that focus on the  
**Two Pointers pattern**.

These problems help you understand pointer movement, list traversal,
node comparison, and how to efficiently manipulate `.next` references
using **single-pass techniques**.

---

## 📂 Files

| File | Problem | Description |
|------|--------|-------------|
| [`876_mid_of_linked_list.js`](./876_mid_of_linked_list.js) | LeetCode #876 — Middle of the Linked List | Find the middle node of a singly linked list using brute force and optimal approaches. |
| [`21_merge_list.js`](./21_merge_list.js) | LeetCode #21 — Merge Two Sorted Lists | Merge two sorted singly linked lists into one sorted list using brute force and optimal approaches. |

---

## 🧩 Problem Summaries

### 🔍 **LeetCode #876 — Middle of the Linked List**

**Goal:**  
Given the `head` of a singly linked list, return the **middle node** of the linked list.

- If there are **two middle nodes**, return the **second middle**.
- The list length is guaranteed to be ≥ 1.

---

## 🛠 Approaches Used (876)

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `middleNodeBrute` | Brute Force | O(n) | O(1) | Traverse the list to calculate its length, then traverse again to reach the middle node. |
| `middleNodeOptimal` | Optimal (Two Pointers) | O(n) | O(1) | Use slow and fast pointers to find the middle node in a single traversal. |

---

### 🔍 **LeetCode #21 — Merge Two Sorted Lists**

**Goal:**  
Given the heads of two **sorted** linked lists `list1` and `list2`, merge them into a  
**single sorted linked list** and return the head.

- The merged list should be made by **splicing together existing nodes**
- Both lists are sorted in **non-decreasing order**

---

## 🛠 Approaches Used (21)

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `mergeTwoListsBrute` | Brute Force | O(n log n) | O(n) | Convert both linked lists to arrays, merge and sort them, then convert the array back to a linked list. |
| `mergeTwoListsOptimal` | Optimal (Two Pointers) | O(n) | O(1) | Use two pointers to traverse both lists and merge them in sorted order without creating new nodes. |

---

## 🧠 Key Learnings

- Dummy node pattern for easier list construction
- Slow & fast pointer technique
- In-place merging of linked lists
- Difference between brute force and optimal solutions
- Foundation for merge sort on linked lists (LeetCode #148)

---

## ▶️ How to Run

```bash
node 876_mid_of_linked_list.js
node 21_merge_list.js