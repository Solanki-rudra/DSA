# 🔗 String Backtracking Problems

This folder contains **String problems** that focus on  
**backtracking techniques**, such as generating combinations or permutations.

These problems help you understand:
- Backtracking algorithms for exhaustive search
- Pruning invalid paths to optimize
- Recursion with state management
- Generating all possible solutions

---

## 📂 Files

| File | Problem | Description |
|------|--------|-------------|
| [`22_generate_parentheses.js`](./22_generate_parentheses.js) | LeetCode #22 — Generate Parentheses | Generate all combinations of well-formed parentheses for n pairs. |

---

## 🧩 Problem Summaries

---

### 🔍 **LeetCode #22 — Generate Parentheses**

**Goal:**  
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

**Constraints:**
- 1 ≤ n ≤ 8

---

### 🛠 Approaches Used (22)

| Function | Approach | Time | Space | Description |
|----------|----------|------|--------|-------------|
| `generateParenthesis` | Backtracking | O(4^n / sqrt(n)) | O(n) recursion, O(4^n) output | Use backtracking to build valid parentheses combinations by tracking open and close counts. |

---

## 🧠 Key Learnings

- Backtracking for generating combinations
- Ensuring validity through constraints (e.g., close <= open)
- Time complexity analysis for exponential problems
- Recursion stack management

---

## ▶️ How to Run

```bash
node 22_generate_parentheses.js
```