# 🔗 Linked List + Reversal and Relinking Problems

This folder contains **Linked List problems** that focus on  
**reversal techniques** and **pointer relinking** for in-place manipulation.

These problems help you understand:
- In-place manipulation of `.next` references
- Splitting, reversing, merging linked lists
- Group-based in-place reversal patterns
- Three pointer reversal technique
- Reordering lists by alternating nodes

---

## 📂 Files

| File | Problem | Description |
|------|--------|-------------|
| [`143_reorder_list.js`](./143_reorder_list.js) | LeetCode #143 — Reorder List | Reorder a list by alternating nodes from start and end using an in-place approach. |
| [`206_reverse_linked_list.js`](./206_reverse_linked_list.js) | LeetCode #206 — Reverse Linked List | Reverse a singly linked list using brute force and optimal approaches. |
| [`25_reverse_k_nodes.js`](./25_reverse_k_nodes.js) | LeetCode #25 — Reverse Nodes in k-Group | Reverse nodes in groups of k using brute force and optimal pointer manipulation. |

---

## 🧩 Problem Summaries

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

## 🧠 Key Learnings

- Three pointer reversal technique
- Group-based in-place reversal patterns
- Splitting and merging linked lists
- Safe pointer mutation for reversal
- Dummy node pattern for safe operations

---

## ▶️ How to Run

```bash
node 143_reorder_list.js
node 206_reverse_linked_list.js
node 25_reverse_k_nodes.js
```