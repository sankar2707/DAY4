const words = ["level", "hello", "madam", "python", "racecar", "civic"]

const palindromes = (() => {
  return words.filter(word => word === word.split('').reverse().join(''))
})()

console.log("Palindromes in the array:")
console.log(palindromes)
