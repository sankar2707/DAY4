
const array = ["Racecar", "radar", "stats", "eye", "Mom"];

const palindromes = array.filter(s => s === s.split('').reverse().join(''));

console.log("Palindromes in the array:", palindromes);
