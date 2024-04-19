const FindMedian = (ar1, ar2) => {
    const merged = [...ar1, ...ar2].sort((a, b) => a - b)
    const n = merged.length
    const mid = Math.floor(n / 2)

    if (n % 2 === 0) {
        
        return (merged[mid - 1] + merged[mid])
    } else {
        return merged[mid]
    }
}

const ar1 = [1, 12, 15, 26, 38]
const ar2 = [2, 13, 17, 30, 45]

const median = FindMedian(ar1, ar2)
console.log(`Median is ${median}`)
