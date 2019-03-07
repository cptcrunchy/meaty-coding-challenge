# Break it Down

**I'll use this page to break down each question into smaller logic components so that we
can better understand what the question is asking and how to best set up our functions**

## Question 1

Write a function that returns the SUM of a sequence of numbers. This sequence
is determined by three variables: start, finish, and step. The sequence begins
at start, ends at finish, and goes up by step until it reaches finish or a number
that when increased by step would go past finish.

---

### Question 1 Break Down

      So this question wants the SUM or (start + step) until the total is either equal to or
      greater than finish. My thought process on this is to save the value of "start" at each
      iteraction to an array. Then I can use the reduce method to get the sum of the values in
      the array.
   ---

### Example Question 1

   **Input**: start = 1, finish = 4, step = 1

   ```javascript
   start + step = total
   1     + 1    = 2
   2     + 1    = 3
   3     + 1    = 4
   1 + 2 + 3 + 4 = 10
   ```

   **Input**: start = 4, finish = 10, step = 5

   ```javascript
   start + step = total
   4     + 5    = 9
   9     + 5    = 14
   4 + 9 = 13
   ```

## Question 2

Given a string of any length with any characters in it, write a function to determine
whether or not the string contains the whole word "english". The order of chracters/spelling is important, a string "agkjnenglishsad" would return `true` BUT "asdneglihsth" would return `false`. Upper and lower case does not matter. Return values should be booleans (`true/false`).

---

### Question 2 Break Down

---
      So my first thought is to stick with lower case ASCII characters since casing does not
      matter. Also we can only go through the string once since any type of reverse look up
      for all the characters of "english" will / should return a `false` value. It even says
      'The order of characters/spelling is important'. So my initial approach would be to use
      a regular expression to test against the string. Then if the string contains the word
      'english', disregarding casing, it should return true, otherwise return false.

      For this question i'll be using [Regexr](https://regexr.com/)
---

### Question 2 Example

   **Input**: "FaagdnglishAGG"
   **Output**: false

   **Input**: "SMFEnglishasnD"
   **Output**: true

## Question 3

Given an array of integers, write a function that returns an array of 2 integers. The first
integer will be the count of the positive integers, and the second integer will be the sum of
the negative integers. If the input is empty or null, return an empty array.

---

### Question 3 Break Down

---
    So this question we need to separate the array into two different arrays. One array with
    all the positive numbers and the other with all the negative numbers. We can then reuse
    the helper function that adds up the numbers from Question 1 for each new array.

    Then we create a new array from the SUM of the total from the previous 2 arrays.

    The trick here is to use a method that can help determine whether a number is positive
    or negative. We will compare each number and determine if it is greater than or less than
    0. We can also use another array helper function: [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
---

### Question 3 Example

   **Input**: "FaagdnglishAGG"
   **Output**: false

   **Input**: "SMFEnglishasnD"
   **Output**: true