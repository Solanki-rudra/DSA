# 🧮 Array + Prefix–Suffix Problems

This folder includes problems where **Prefix** and **Suffix** computations are used  
to efficiently build results for each index without repeatedly scanning the array.

This pattern avoids division and allows solving problems in **O(n)** time.

---

## 📂 Files

| File | Problem | Description |
|------|----------|-------------|
| [`238_product_of_array_except_self.js`](./238_product_of_array_except_self.js) | LeetCode #238 — Product of Array Except Self | Return a result array where each element is the product of all other elements except itself. |

---

## 🧩 Problem Summaries

### 🔢 **238 Product of Array Except Self**
**Goal:** Given an array `nums`, return an array `answer` where  
`answer[i] = product of all nums except nums[i]` — without using division.

| Function | Approach | Time | Space | Description |
|-----------|-----------|------|--------|-------------|
| `productExceptSelfBrute` | Brute Force | O(n²) | O(n) | For each index, multiply all other elements. |
| `productExceptSelfBetter` | Prefix + Postfix Arrays | O(n) | O(n) | Build prefix & postfix arrays and multiply them. |
| `productExceptSelfOptimal` | Optimized Prefix–Suffix | O(n) | O(1) extra | Build prefix in result array, multiply using postfix pass. |

---

## ▶️ How to Run
```bash
node 238_product_of_array_except_self.js
