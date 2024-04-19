function convertToTitleCaps(arr) {
    return arr.map((str) => {
      return str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    });
  }
  
  const inputArray = ["hello world", "this is a title caps test", "in javascript"];
  const titleCaseArray = convertToTitleCaps(inputArray);
  
  console.log(titleCaseArray);
  