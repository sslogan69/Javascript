//Find all non-repeating elements in an array
function findNonRepeatingElements(arr) {
    const freqMap = {};
    const nonRepeats = [];
    for (let num of arr) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }
    for (let num in freqMap) {
        if (freqMap[num] === 1) {
            nonRepeats.push(Number(num));
        }
    }
    return nonRepeats;
}
console.log(findNonRepeatingElements([3, 1, 4, 1, 5, 9])); // Output: [3, 4, 5, 9]
