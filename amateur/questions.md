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

3) Given an array of integers, write a function that returns an array of 2 integers. The
   first integer will be the count of the positive integers, and the second integer will
   be the sum of the negative integers. If the input is empty or null, return an empty array.

   **Example**

   **Input**: [1,-6,5,4,3,-7,-10,201,-3]
   **Output**: [5, -26]

   **Input**: null
   **Output**: []

4) Write a function that translats an input string by replacing each character with a number
   representing the amount of times that character appears in the string. Then separate each
   individual number with a different character.

   **Example**

   **Input**: "hello world" "-"
   **Output**: "1-1-3-3-2-1-1-2-1-3-1"

   **Input**: "challenge" "/"
   **Output**: "1/1/1/2/2/2/1/1/2"