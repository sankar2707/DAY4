const num = [1, 2, 3, 4, 5];
const sum = (() => {
  return num.reduce((acc, curr) => acc + curr, 0);
})();

console.log(`Sum of all numbers is: ${sum}`);
