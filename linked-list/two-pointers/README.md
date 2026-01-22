# 🔗 Linked List + Two Pointers Problems

This folder contains **Linked List problems** that focus on the  
**Two Pointers pattern** and **pointer manipulation techniques**.

These problems help you understand:
- Pointer movement and traversal
- In-place manipulation of `.next` references
- Splitting, reversing, merging linked lists
- Cycle detection and pointer chasing
- Deleting nodes safely using pointer rewiring
- Carry handling in digit-based linked list problems
- Difference between brute force and optimal approaches
- Deep copying complex linked structures

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
| [`2_add_two_numbers.js`](./2_add_two_numbers.js) | LeetCode #2 — Add Two Numbers | Add two numbers represented by linked lists using brute force (conceptual) and optimal approaches. |
| [`138_copy_list_with_random_pointer.js`](./138_copy_list_with_random_pointer.js) | LeetCode #138 — Copy List with Random Pointer | Create a deep copy of a linked list with random pointers using brute force and optimal approaches. |
| [`23_merge_k_sorted_list.js`](./23_merge_k_sorted_list.js) | LeetCode #23 — Merge k Sorted Lists | Merge multiple sorted linked lists using brute force and optimal approaches. |
| [`25_reverse_k_nodes.js`](./25_reverse_k_nodes.js) | LeetCode #25 — Reverse Nodes in k-Group | Reverse nodes in groups of k using brute force and optimal pointer manipulation. |
| [`114_flaten_binary_tree_to_ll.js`](./114_flaten_binary_tree_to_ll.js) | LeetCode #114 — Flatten Binary Tree to Linked List | Flatten a binary tree to a linked list in-place using brute force and optimal approaches. |

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
Merge two **sorted** linked lists into a single sorted list.

---

### 🛠 Approaches Used (21)

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `mergeTwoListsBrute` | Brute Force | O(n log n) | O(n) | Convert lists to arrays, merge + sort, then rebuild the list. |
| `mergeTwoListsOptimal` | Two Pointers | O(n) | O(1) | Merge lists in-place using a dummy node. |

---

### 🔍 **LeetCode #143 — Reorder List**

**Goal:**  
Reorder the list as:  
`L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → ...`

---

### 🛠 Approaches Used (143)

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `reorderList` | Split + Reverse + Merge | O(n) | O(1) | Find middle, reverse second half, merge alternately. |

---

### 🔍 **LeetCode #206 — Reverse Linked List**

**Goal:**  
Reverse a singly linked list.

---

### 🛠 Approaches Used (206)

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `reverseListBrute` | Stack | O(n) | O(n) | Push nodes to a stack and rebuild in reverse. |
| `reverseListOptimal` | Three Pointers | O(n) | O(1) | Reverse links in-place. |

---

### 🔍 **LeetCode #148 — Sort List**

**Goal:**  
Sort a linked list in ascending order.

---

### 🛠 Approaches Used (148)

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `sortListBrute` | Brute Force | O(n log n) | O(n) | Convert to array, sort, rebuild list. |
| `sortListOptimal` | Merge Sort | O(n log n) | O(log n) | Recursively split and merge lists. |

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

### 🔍 **LeetCode #23 — Merge k Sorted Lists**

**Goal:**  
Merge **k sorted linked lists** into one sorted linked list.

---

### 🛠 Approaches Used (23)

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `mergeKListsBrute` | Merge + Sort | O(n log n) | O(n) | Merge all lists, then sort the combined list. |
| `mergeKListsOptimal` | Divide & Conquer | O(n log k) | O(log k) | Merge lists pairwise until one list remains. |

---

### 🔍 **LeetCode #25 — Reverse Nodes in k-Group**

**Goal:**  
Reverse the nodes of a linked list **k at a time**.

- If remaining nodes < k, leave them unchanged
- Node values must not be modified

---

### 🛠 Approaches Used (25)

| Function | Approach | Time | Space | Description |
|--------|----------|------|--------|-------------|
| `reverseKGroupBrute` | Array Conversion | O(n) | O(n) | Convert list to array, reverse in chunks of k, rebuild list. |
| `reverseKGroupOptimal` | In-Place Reversal | O(n) | O(1) | Reverse k nodes using pointer manipulation and a dummy node. |

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

- Dummy node pattern for safe list operations
- Fixed-gap two pointer strategy
- Carry propagation in digit-based linked lists
- Safe pointer mutation vs traversal
- Cycle detection using Floyd’s algorithm
- Why merge sort is optimal for linked lists
- Deep copy techniques for complex linked structures
- Group-based in-place reversal patterns
- Difference between traversal pointers and mutation pointers

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
node 2_add_two_numbers.js
node 138_copy_list_with_random_pointer.js
node 23_merge_k_sorted_list.js
node 25_reverse_k_nodes.js
node 114_flaten_binary_tree_to_ll.js