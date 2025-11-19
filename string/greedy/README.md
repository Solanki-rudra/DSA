# 🧮 String + Greedy Problems

This folder includes problems where **Greedy techniques** are applied on **strings**  
to convert, compare, or evaluate them efficiently without using extra space.

---

## 📂 Files

| File | Problem | Description |
|------|----------|-------------|
| [`13_roman_to_int.js`](./13_roman_to_int.js) | LeetCode #13 — Roman to Integer | Convert a Roman numeral string into an integer using a greedy approach. |

---

## 🧩 Problem Summaries

### 🔡 **13 Roman to Integer**
**Goal:** Convert a Roman numeral string into its integer value.

Roman numerals follow rules where a smaller value before a larger value means **subtraction**, otherwise **addition**.

| Function | Approach | Time | Space | Description |
|-----------|-----------|------|--------|-------------|
| `romanToInt` | Greedy | O(n) | O(1) | Add values normally; subtract when a smaller numeral appears before a larger one. |

---

## ▶️ How to Run
```bash
node 13_roman_to_int.js
