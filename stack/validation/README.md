# 🔗 Stack Validation Problems

This folder contains **Stack problems** that focus on  
**validation techniques** using stacks, such as checking balanced structures.

These problems help you understand:
- Using stacks for matching and validation
- Handling different types of brackets/parentheses
- Stack-based parsing and error detection
- LIFO principle in validation scenarios

---

## 📂 Files

| File | Problem | Description |
|------|--------|-------------|
| [`20_valid_parentheses.js`](./20_valid_parentheses.js) | LeetCode #20 — Valid Parentheses | Determine if a string with parentheses is valid using a stack. |

---

## 🧩 Problem Summaries

---

### 🔍 **LeetCode #20 — Valid Parentheses**

**Goal:**  
Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

**Constraints:**
- 1 ≤ s.length ≤ 10^4
- s consists of parentheses only `'()[]{}'`

---

### 🛠 Approaches Used (20)

| Function | Approach | Time | Space | Description |
|----------|----------|------|--------|-------------|
| `isValid` | Stack-based Validation | O(n) | O(n) | Use a stack to track opening brackets and match them with closing brackets. |

---

## 🧠 Key Learnings

- Using stacks for matching and validation
- Handling different types of brackets/parentheses
- Stack-based parsing and error detection
- LIFO principle in validation scenarios

---

## ▶️ How to Run

```bash
node 20_valid_parentheses.js
```