const arr = ["title caps", "this is a another test", "javascript"]

const titleCaseArray = (() => {
  return arr.map((str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  })
})()

console.log(titleCaseArray)
