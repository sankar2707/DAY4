const num = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1
}
const primeNumbers = num.filter(isPrime)
console.log(`Prime numbers in the array: ${primeNumbers}`)
