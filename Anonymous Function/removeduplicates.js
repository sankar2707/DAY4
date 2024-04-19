let arr = ["car", "bike", "world", "car", "bike", "world"]

function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}

console.log(removeDuplicates(arr))
