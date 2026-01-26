# 🔗 Stack Expression Evaluation Problems

This folder contains **Stack problems** that focus on
**expression evaluation techniques**, using stacks to parse and evaluate mathematical expressions.

These problems help you understand:
- Using stacks for postfix (RPN) evaluation
- Handling operator precedence and associativity
- Stack-based parsing for expressions
- Time and space complexity trade-offs in expression evaluation

---

## 📂 Files

| File | Problem | Description |
|------|--------|-------------|
| [`150_evaluate_rpn.js`](./150_evaluate_rpn.js) | LeetCode #150 — Evaluate Reverse Polish Notation | Evaluate arithmetic expressions in RPN using stack. |

---

## 🧩 Problem Summaries

---

### 🔍 **LeetCode #150 — Evaluate Reverse Polish Notation**

**Goal:**
Evaluate the value of an arithmetic expression in Reverse Polish Notation (RPN). Valid operators are `+`, `-`, `*`, and `/`. Each operand may be an integer or another expression. Note that division between two integers should truncate toward zero.

**Constraints:**
- `1 <= tokens.length <= 10^4`
- `tokens[i]` is either an operator: `"+"`, `"-"`, `"*"`, or `"/"`, or an integer in the range `[-200, 200]`.

---

### 🛠 Approaches Used (150)

| Function | Approach | Time | Space | Description |
|----------|----------|------|--------|-------------|
| `evalRPNBrute` | Iterative Array Manipulation | O(n^2) | O(1) extra | Process tokens iteratively, replacing operator and operands with result using array splice. |
| `evalRPNOptimal` | Stack-Based | O(n) | O(n) | Use a stack to push operands and pop for operations. |

---

## 🧠 Key Learnings

- Using stacks for evaluating postfix expressions
- Handling different operators and integer division
- Trade-offs between iterative and stack-based approaches