// defining the main function
const isPrime = (num) => {
    // Prime numbers are greater than 1
    if (num <= 1) return false;

    // Checking if num is divisible by any number from 2 to its square root
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // If num is divisible by any number, it's not prime
        }
    }
    return true; // If num is not divisible by any number, it's prime
}

function filterPrimes(numbers) {
    // Filter the input array to get only prime numbers
    return numbers.filter(num => isPrime(num));
}

// console.log(filterPrimes([10, 23, 31, 45, 51, 61, 79, 83, 90, 1201]));