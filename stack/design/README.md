# 🔗 Stack Design Problems

This folder contains **Stack problems** that focus on
**designing data structures** using stacks, such as implementing stacks with additional constraints.

These problems help you understand:
- Designing efficient data structures with stacks
- Maintaining auxiliary information for constant-time operations
- Space-time trade-offs in stack implementations
- Advanced stack usage patterns

---

## 📂 Files

| File | Problem | Description |
|------|--------|-------------|
| [`155_min_stack.js`](./155_min_stack.js) | LeetCode #155 — Min Stack | Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. |

---

## 🧩 Problem Summaries

---

### 🔍 **LeetCode #155 — Min Stack**

**Goal:**
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the `MinStack` class:
- `MinStack()` initializes the stack object.
- `void push(int val)` pushes the element `val` onto the stack.
- `void pop()` removes the element on the top of the stack.
- `int top()` gets the top element of the stack.
- `int getMin()` retrieves the minimum element in the stack.

You must implement a solution with `O(1)` time complexity for each function.

**Constraints:**
- -2^31 <= val <= 2^31 - 1
- Methods `pop`, `top` and `getMin` operations will always be called on non-empty stacks.
- At most 3 * 10^4 calls will be made to `push`, `pop`, `top`, and `getMin`.

---

### 🛠 Approaches Used (155)

| Function | Approach | Time | Space | Description |
|----------|----------|------|--------|-------------|
| `MinStack` | Stack with Pairs | O(1) | O(n) | Store each element with the current minimum to allow O(1) min retrieval. |

---

## 🧠 Key Learnings

- Designing efficient data structures with stacks
- Maintaining auxiliary information for constant-time operations
- Space-time trade-offs in stack implementations
- Advanced stack usage patterns

---

## ▶️ How to Run

```bash
node 155_min_stack.js
```