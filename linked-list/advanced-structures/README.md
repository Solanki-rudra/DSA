# 🔗 Linked List + Advanced Structures Problems

This folder contains **Linked List problems** that involve  
**advanced data structures** and **complex pointer manipulation**.

These problems help you understand:
- Carry handling in digit-based linked list problems
- Deep copying complex linked structures
- Converting binary trees to linked lists
- Handling random pointers in linked lists
- In-place transformations of data structures

---

## 📂 Files

| File | Problem | Description |
|------|--------|-------------|
| [`2_add_two_numbers.js`](./2_add_two_numbers.js) | LeetCode #2 — Add Two Numbers | Add two numbers represented by linked lists using brute force (conceptual) and optimal approaches. |
| [`138_copy_list_with_random_pointer.js`](./138_copy_list_with_random_pointer.js) | LeetCode #138 — Copy List with Random Pointer | Create a deep copy of a linked list with random pointers using brute force and optimal approaches. |
| [`114_flaten_binary_tree_to_ll.js`](./114_flaten_binary_tree_to_ll.js) | LeetCode #114 — Flatten Binary Tree to Linked List | Flatten a binary tree to a linked list in-place using brute force and optimal approaches. |

---

## 🧩 Problem Summaries

---

### 🔍 **LeetCode #2 — Add Two Numbers**

**Goal:**  
Add two numbers represented by linked lists where digits are stored in **reverse order**.

---

### 🛠 Approaches Used (2)

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `addTwoNumbersBrute` | Conceptual Brute Force | O(n) | O(n) | Convert lists to numbers and add (⚠️ unsafe for JS). |
| `addTwoNumbersOptimal` | Digit-by-Digit + Carry | O(n) | O(n) | Traverse lists, manage carry, build result list. |

---

### 🔍 **LeetCode #138 — Copy List with Random Pointer**

**Goal:**  
Create a **deep copy** of a linked list with:
- `next` pointer
- `random` pointer

---

### 🛠 Approaches Used (138)

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `copyRandomListBrute` | Hash Map | O(n) | O(n) | Map original nodes to copied nodes. |
| `copyRandomListOptimal` | Interweaving Nodes | O(n) | O(1) | Inline copied nodes and separate lists. |

---

### 🔍 **LeetCode #114 — Flatten Binary Tree to Linked List**

**Goal:**  
Flatten a binary tree to a linked list in-place.

---

### 🛠 Approaches Used (114)

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `flattenBrute` | DFS Traversal | O(n) | O(n) | Perform reverse pre-order traversal and re-link nodes. |
| `flattenOptimal` | Iterative Re-linking | O(n) | O(1) | Iteratively re-link using the rightmost node of left subtree. |

---

## 🧠 Key Learnings

- Carry propagation in digit-based linked lists
- Deep copy techniques for complex linked structures
- In-place transformation of binary trees
- Handling random pointers safely
- Interweaving nodes for efficient copying

---

## ▶️ How to Run

```bash
node 2_add_two_numbers.js
node 138_copy_list_with_random_pointer.js
node 114_flaten_binary_tree_to_ll.js
```