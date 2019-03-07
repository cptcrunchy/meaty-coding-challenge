# Amateur Coding Challenges 2-28-2019

1) Write a function that returns the SUM of a sequence of numbers. This sequence
   is determined by three variables: start, finish, and step. The sequence begins
   at start, ends at finish, and goes up by step until it reaches finish or a number
   that when increased by step would go past finish.

   **Example**

   **Input**: start = 1, finish = 4, step = 1
   **Output**: 10

   **Input**: start = 4, finish = 10, step = 5
   **Output**: 13

2) Given a string of any length with any characters in it, write a function to determine
   whether or not the string contains the whole word "english". The order of chracters/spelling is important, a string "agkjnenglishsad" would return `true` BUT "asdneglihsth" would return `false`. Upper and lower case does not matter. Return values should be booleans (`true/false`).

   **Example**

   **Input**: "FaagdnglishAGG"
   **Output**: false

   **Input**: "SMFEnglishasnD"
   **Output**: true