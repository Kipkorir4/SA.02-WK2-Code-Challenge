// defining the main function 
const caseSwapper = (inputString) => {
    // creating an empty variable for the new swapped string to be stored in
    let swappedString = "";
    // starting a for loop that iterates over each character of the input string
    for (let i = 0; i < inputString.length; i++) {
        // retrieving the character at the current index i from the input string inputString and assigning it to the variable char
        let char = inputString[i];
        // checking if the current character char is already in uppercase
        if (char === char.toUpperCase()) {
            // converting the current character char to lowercase using the toLowerCase() method and appending it to the swappedString
            swappedString += char.toLowerCase();
            // executing the else statement if the condition char === char.toUpperCase() evaluates to false
        } else {
            //  converting the current character char to uppercase using the toUpperCase() method and appending it to the swappedString
            swappedString += char.toUpperCase();
        }
    }
    // returning the final swapped string 
    return swappedString;
}

// console.log(caseSwapper("Mr gIDEON"));