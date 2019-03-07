// Challenge 1
// This is a helper function to get the sum of values in an array of integers
const addNumbers = (a, b) => a + b


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

getSumOfSequence(4, 10, 5) //?