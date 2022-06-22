DEMO: Recursion Sum
---

## Challenge

Write a function that finds the sum of the first n natural numbers. **Make your function recursive**.

```js
function sum(n) {
    let sumArray = [];
    for (let i = 1, i >= n, i++ ) {
        sumArray.push(i);
    }
    return sumArray.reduce((acc, int) => acc + int, 0);
}
```

> **You can assume valid inputs**

## Test Cases

Input | Output
---|---
5 | 15  (// 1 + 2 + 3 + 4 + 5 = 15)
1 | 1 
12 | 78
