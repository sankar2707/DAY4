const arr = [1, 2, 3, 4, 5];

function sumOfArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

const totalSum = sumOfArray(arr);
console.log(`The sum of all numbers is: ${totalSum}`);
