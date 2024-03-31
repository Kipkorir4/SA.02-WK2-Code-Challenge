// defining the main function
const generateArray = (start, end) => {
    // initializing an empty array to store the generated numbers
    let result = [];
    
    // checking if the range is from smaller to larger numbers
    if (start <= end) {
        // if true, iterate from start to end
        for (let i = start; i <= end; i++) {
            // pushing each number to the result array
            result.push(i);
        }
    } else {
        // if false, iterate from start to end in reverse
        for (let i = start; i >= end; i--) {
            // pushing each number to the result array
            result.push(i);
        }
    }
    
    // returning the generated array
    return result;
}

// console.log(generateArray(-6, 7));