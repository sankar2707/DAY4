const numbers = [2,7,8,17,15,22,11];
const odds = [];
for (const num of numbers) {
    if (num % 2 === 1) {
        odds.push(num);
    }
}
console.log("Odd Numbers:", odds);
