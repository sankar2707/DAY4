const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

((arr) => {
  const oddNumbers = arr.filter((x) => x % 2 !== 0);
  console.log(`Odd numbers in the array: ${oddNumbers}`);
})(numbers);
