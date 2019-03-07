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

const doesStringContainKeyWord = (str) => {
    const PhraseRegex = /(english)+/gi;
    return PhraseRegex.test(str)
}

// doesStringContainKeyWord("SMFEnglishasnD")//?
// doesStringContainKeyWord("asdneglihsth")//?


const getArraySumOfPositiveAndNegativeNums = (arrayOfNums) => {
    const [posNum, negNum] = arrayOfNums.reduce(([p,n], e) => (e > 0 ? [[...p,e],n] : [p,[...n, e]]), [[],[]])
    const countOfPosNums = posNum.length , sumOfNegNums = negNum.reduce(addNumbers)
    return [countOfPosNums,sumOfNegNums]
}

getArraySumOfPositiveAndNegativeNums([1,-6,5,4,3,-7,-10,201,-3])//?
