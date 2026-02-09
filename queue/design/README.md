# 🔗 Queue Design Problems

This folder contains **Queue problems** that focus on
**designing data structures** using queues, such as implementing queues with different constraints.

These problems help you understand:
- Designing efficient data structures with queues
- Implementing queues using alternative data structures (like stacks)
- FIFO principle applications in custom data structures
- Space-time trade-offs in queue implementations

---

## 📂 Files

| File | Problem | Description |
|------|--------|-------------|
| [`232_impl_que_using_stack.js`](./232_impl_que_using_stack.js) | LeetCode #232 — Implement Queue using Stacks | Design a FIFO queue using only two stacks with O(1) amortized operations. |
| [`225_impl_stack_using_que.js`](./225_impl_stack_using_que.js) | LeetCode #225 — Implement Stack using Queues | Design a LIFO stack using only two queues with O(1) amortized operations. |
| [`622_design_cir_que.js`](./622_design_cir_que.js) | LeetCode #622 — Design Circular Queue | Implement a circular queue using an array with O(1) operations. |

---

## 🧩 Problem Summaries

---

### 🔍 **LeetCode #232 — Implement Queue using Stacks**

**Goal:**
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the `MyQueue` class:
- `MyQueue()` initializes the queue object.
- `void push(int x)` pushes the element `x` to the back of the queue.
- `int pop()` removes the element from the front of the queue and returns it.
- `int peek()` returns the element at the front of the queue.
- `boolean empty()` returns `true` if the queue is empty, `false` otherwise.

**Constraints:**
- 1 <= x <= 9
- At most 100 calls will be made to `push`, `pop`, `peek`, and `empty`.
- All the calls to `pop` and `peek` are valid.

**Notes:**
You must use **only** two stacks to implement this queue. Standard queue implementation or using lists/deques is not allowed.

---

### 🛠 Approaches Used (232)

| Function | Approach | Time | Space | Description |
|----------|----------|------|--------|-------------|
| `MyQueue` | Two Stacks | O(1) amortized | O(n) | Use s1 for input and s2 for output; lazy transfer of elements maintains FIFO order. |

---

### 🔍 **LeetCode #225 — Implement Stack using Queues**

**Goal:**
Implement a last in first out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the `MyStack` class:
- `MyStack()` initializes the stack object.
- `void push(int x)` pushes the element `x` onto the stack.
- `int pop()` removes the element on the top of the stack and returns it.
- `int top()` returns the element on the top of the stack.
- `boolean empty()` returns `true` if the stack is empty, `false` otherwise.

**Constraints:**
- 1 <= x <= 9
node 225_impl_stack_using_que.js
- At most 100 calls will be made to `push`, `pop`, `top`, and `empty`.
- All the calls to `pop` and `top` are valid.

**Notes:**
You must use **only** two queues to implement this stack. Standard stack implementation or using lists/deques is not allowed.

---

### 🛠 Approaches Used (225)

| Function | Approach | Time | Space | Description |
|----------|----------|------|--------|-------------|
| `MyStack` | Two Queues | O(1) amortized | O(n) | Use q1 for storage and q2 for temporary transfer; lazy transfer of elements maintains LIFO order. |

---

### 🔍 **LeetCode #622 — Design Circular Queue**

**Goal:**
Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

Implement the `MyCircularQueue` class:
- `MyCircularQueue(int k)` initializes the object with the size of the queue to be `k`.
- `boolean enQueue(int value)` inserts an element into the circular queue and returns `true` if the operation was successful.
- `boolean deQueue()` deletes an element from the circular queue and returns `true` if the operation was successful.
- `int Front()` gets the front item from the queue and returns it, or returns `-1` if the queue is empty.
- `int Rear()` gets the last item from the queue and returns it, or returns `-1` if the queue is empty.
- `boolean isEmpty()` checks whether the circular queue is empty or not.
- `boolean isFull()` checks whether the circular queue is full or not.

node 225_impl_stack_using_que.js
node 622_design_cir_que.js
**Constraints:**
- 1 <= k <= 1000
- 0 <= value <= 1000
- At most 3000 calls will be made to `enQueue`, `deQueue`, `Front`, `Rear`, `isEmpty`, and `isFull`.

---

### 🛠 Approaches Used (622)

| Function | Approach | Time | Space | Description |
|----------|----------|------|--------|-------------|
| `MyCircularQueue` | Array with Pointers | O(1) | O(k) | Use array with head and tail pointers; modulo arithmetic handles circular wrapping. |

---

## 🧠 Key Learnings

- Designing efficient data structures with alternative data structures
- Understanding FIFO and LIFO principles
- Implementing complex operations using simpler primitives
- Space-time trade-offs in queue implementations
- Amortized time complexity analysis

---

## ▶️ How to Run

```bash
node 232_impl_que_using_stack.js
node 225_impl_stack_using_que.js
node 622_design_cir_que.js
```