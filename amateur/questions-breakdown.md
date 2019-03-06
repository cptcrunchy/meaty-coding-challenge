# Break it Down

**I'll use this page to break down each question into smaller logic components so that we
can better understand what the question is asking and how to best set up our functions**

## Question 1

1) Write a function that returns the SUM of a sequence of numbers. This sequence
   is determined by three variables: start, finish, and step. The sequence begins
   at start, ends at finish, and goes up by step until it reaches finish or a number
   that when increased by step would go past finish.

---

### Break Down

    So this function wants the SUM or (start + step) until the total is either equal to or greater than finish.
---
   **Example**
   **Input**: start = 1, finish = 4, step = 1

```javascript
start + step = total
1     + 1    = 2
2     + 1    = 3
3     + 1    = 4
1 + 2 + 3 + 4 = 10
```

   **Output**: 10

   **Input**: start = 4, finish = 10, step = 5

```javascript
start + step = total
4     + 5    = 9
9     + 5    = 14
4 + 9 = 13
```

   **Output**: 13
