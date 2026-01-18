# 🔗 Linked List + Two Pointers Problems

This folder contains **Linked List problems** that focus on the  
**Two Pointers pattern** and **pointer manipulation techniques**.

These problems help you understand:
- Pointer movement and traversal
- In-place manipulation of `.next` references
- Splitting, reversing, merging linked lists
- Cycle detection and pointer chasing
- Deleting nodes safely using pointer rewiring
- Difference between brute force and optimal approaches

---

## 📂 Files

| File | Problem | Description |
|------|--------|-------------|
| [`876_mid_of_linked_list.js`](./876_mid_of_linked_list.js) | LeetCode #876 — Middle of the Linked List | Find the middle node using brute force and two pointers. |
| [`21_merge_list.js`](./21_merge_list.js) | LeetCode #21 — Merge Two Sorted Lists | Merge two sorted linked lists using brute force and optimal approaches. |
| [`143_reorder_list.js`](./143_reorder_list.js) | LeetCode #143 — Reorder List | Reorder a list by alternating nodes from start and end using an in-place approach. |
| [`206_reverse_linked_list.js`](./206_reverse_linked_list.js) | LeetCode #206 — Reverse Linked List | Reverse a singly linked list using brute force and optimal approaches. |
| [`148_sort_list.js`](./148_sort_list.js) | LeetCode #148 — Sort List | Sort a linked list using merge sort (brute force and optimal). |
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

### 🔍 **LeetCode #21 — Merge Two Sorted Lists**

**Goal:**  
Given two **sorted** linked lists, merge them into a **single sorted list**.

- Nodes must be reused (no new nodes)
- Lists are sorted in non-decreasing order

---

### 🛠 Approaches Used (21)

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `mergeTwoListsBrute` | Brute Force | O(n log n) | O(n) | Convert lists to arrays, merge + sort, then rebuild the list. |
| `mergeTwoListsOptimal` | Two Pointers | O(n) | O(1) | Merge both lists in-place using two pointers and a dummy node. |

---

### 🔍 **LeetCode #143 — Reorder List**

**Goal:**  
Reorder the list in the following pattern:  
L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → ...

- Node **values are NOT compared**
- Reordering must be done **in-place**
- No extra data structures allowed

---

### 🛠 Approaches Used (143)

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `reorderList` | Split + Reverse + Merge | O(n) | O(1) | Find middle, reverse second half, and merge alternately. |

---

### 🔍 **LeetCode #206 — Reverse Linked List**

**Goal:**  
Reverse a singly linked list and return the new head.

---

### 🛠 Approaches Used (206)

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `reverseListBrute` | Stack (Brute Force) | O(n) | O(n) | Push nodes to a stack and rebuild the list in reverse order. |
| `reverseListOptimal` | Three Pointers | O(n) | O(1) | Reverse links in-place using `prev`, `curr`, and `next`. |

---

### 🔍 **LeetCode #148 — Sort List**

**Goal:**  
Sort a singly linked list in **ascending order**.

- Must run in `O(n log n)` time
- Must use **constant extra space**

---

### 🛠 Approaches Used (148)

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `sortListBrute` | Brute Force | O(n log n) | O(n) | Convert list to array, sort, then convert back. |
| `sortListOptimal` | Merge Sort | O(n log n) | O(log n) | Recursively split the list and merge sorted halves. |

---

### 🔍 **LeetCode #141 — Linked List Cycle**

**Goal:**  
Determine if a linked list contains a **cycle**.

- A cycle exists if a node’s `next` pointer points to a previous node
- Node values may repeat — comparison must be done by **node reference**

---

### 🛠 Approaches Used (141)

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `hasCycleBrute` | Hash Set (Brute Force) | O(n) | O(n) | Store visited node references and detect revisits. |
| `hasCycleOptimal` | Two Pointers (Floyd’s Algorithm) | O(n) | O(1) | Use slow and fast pointers; guaranteed to meet if a cycle exists. |

---

### 🔍 **LeetCode #19 — Remove Nth Node From End of List**

**Goal:**  
Remove the **nth node from the end** of a singly linked list and return its head.

- Must modify the list **in-place**
- Node values are irrelevant; pointer manipulation is required

---

### 🛠 Approaches Used (19)

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `removeNthFromEndBrute` | Length Calculation (Brute Force) | O(n) | O(1) | First calculate list length, then remove the target node. |
| `removeNthFromEndOptimal` | Two Pointers + Dummy Node | O(n) | O(1) | Maintain a fixed gap using two pointers to remove the node in one pass. |

---

## 🧠 Key Learnings

- Dummy node pattern for safe deletions (especially head removal)
- Slow & fast pointer technique
- Fixed-gap two pointer strategy
- Safe pointer mutation vs traversal
- In-place reversing and merging
- Cycle detection using Floyd’s algorithm
- Why merge sort is optimal for linked lists
- Strong foundation for advanced linked list problems

---

## ▶️ How to Run

```bash
node 876_mid_of_linked_list.js
node 21_merge_list.js
node 143_reorder_list.js
node 206_reverse_linked_list.js
node 148_sort_list.js
node 141_linked_list_cycle.js
node 19_remove_nth_node_from_last.js