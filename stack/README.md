# 🔗 Stack Problems

This folder contains **Stack** problems — one of the most important and
frequently asked data structures in **DSA and coding interviews**.

The stack is a **Last In, First Out (LIFO)** data structure that supports
push, pop, peek, and isEmpty operations.

---

## 📂 Folder Structure

| Folder/File | Description |
|-------------|-------------|
| [`Stack.js`](./Stack.js) | Basic Stack implementation using an array with push, pop, peek, and isEmpty methods |
| [`validation/`](./validation) | Problems involving validation using stacks, such as parentheses matching |
| [`design/`](./design) | Problems involving designing advanced stack data structures, such as Min Stack and Max Stack |
| [`monotonic-stack/`](./monotonic-stack) | Problems using monotonic stack techniques for next greater/smaller elements |
| [`expression-evaluation/`](./expression-evaluation) | Problems involving expression evaluation using stacks, such as RPN |

---

## 🛠️ Stack Implementation

The `Stack` class provides a simple array-based stack implementation:

- **push(element)**: Adds an element to the top of the stack
- **pop()**: Removes and returns the top element from the stack
- **peek()**: Returns the top element without removing it
- **isEmpty()**: Checks if the stack is empty

## 📚 Common Stack Problems

Stack is fundamental for solving problems involving:
- Expression evaluation (infix to postfix)
- Function call management
- Undo/redo functionality
- Parentheses matching
- Backtracking algorithms
- Depth-First Search (DFS)
- Designing advanced data structures (Min Stack, Max Stack)
- Finding next greater/smaller elements using monotonic stacks

## 🔍 Key Concepts

- **LIFO Principle**: Last element added is the first to be removed
- **Time Complexity**: All operations are O(1)
- **Space Complexity**: O(n) where n is the number of elements
- **Implementation**: Can be array-based or linked list-based