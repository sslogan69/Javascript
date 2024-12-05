
//Find all repeating elements in an array
function findRepeatingElements(arr) {
    const freqMap = {};
    const repeats = [];
    for (let num of arr) {
        if (freqMap[num]) {
            repeats.push(num);
        }
        freqMap[num] = (freqMap[num] || 0) + 1;
    }
    return repeats;
}
console.log(findRepeatingElements([3, 1, 4, 1, 5, 9])); // Output: [1]
