// defining the main function
const generateArray = (start, end) => {
    // Initialize an empty array to store the generated numbers
    let result = [];
    
    // Check if the range is from smaller to larger numbers
    if (start <= end) {
        // If true, iterate from start to end
        for (let i = start; i <= end; i++) {
            // Push each number to the result array
            result.push(i);
        }
    } else {
        // If false, iterate from start to end in reverse
        for (let i = start; i >= end; i--) {
            // Push each number to the result array
            result.push(i);
        }
    }
    
    // Return the generated array
    return result;
}

// console.log(generateArray(-6, 7));