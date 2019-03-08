/*
    You may notice that I have //? after I invoke each function.
    I'm using a VSCode plugin called Quokka. https://quokkajs.com/
    Its free to use and great when you have to evaluate your code
    and you don't want to use console.log on everything.
*/

// This is a helper function to get the sum of values in an array of integers
const addNumbers = (a, b) => a + b


// Challenge 1
const getSumOfSequence = (start, finish, step) => {
    // we use an empty array to be able to collect the value
    // of start as it increases   
    let sum = []
       do {
           sum.push(start)
           start = start + step
        // we continue the loop while the value of start is
        // less than or equal to finish
       } while (start <= finish);
       return sum.reduce(addNumbers)//?
}

// getSumOfSequence(4, 10, 5) //?

// Challenge 2
const doesStringContainKeyWord = (str) => {
    const PhraseRegex = /(english)+/gi;
    return PhraseRegex.test(str)
}

// doesStringContainKeyWord("SMFEnglishasnD")//?
// doesStringContainKeyWord("asdneglihsth")//?

// Challenge 3
const getArraySumOfPositiveAndNegativeNums = (arrayOfNums) => {
    // First check if parameter is an array
    if (!Array.isArray(arrayOfNums)) return []

    /*  
        We are using the rest and spread operator for line 47, 49 & 51.
        The reduce method uses a callback function which passes an array with 2 values, p (short for positive) and n (short for negative)
        And each value in the arrayOfNums to be evaluated.
    */
    const [posNum, negNum] = arrayOfNums.reduce(([p,n], e) => (e > 0 ? 
        // If the value is greater than 0 then we add it to the posNum array
        [[...p,e],n] :
        // Else we add it to the negNum array. We then initiate them with a two dimensional array or an array of arrays.
        [p,[...n, e]]), [[],[]])
    /*  
        The quesion wants the count of positive numbers and the SUM of the negative numbers.
        If you got this question wrong, it was because of this simple oversight.
    */
    const countOfPosNums = posNum.length , sumOfNegNums = negNum.reduce(addNumbers)
    return [countOfPosNums,sumOfNegNums]
}

getArraySumOfPositiveAndNegativeNums([-1,1,2,-3,5,2,-10])//?


