//Count the frequency of each element in an array
function countFrequency(arr) {
    const freqMap = {};
    for (let num of arr) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }
    return freqMap;
}
console.log(countFrequency([3, 1, 4, 1, 5, 9])); // Output: { '3': 1, '1': 2, '4': 1, '5': 1, '9': 1 }

function countFrequencyWithSet(arr) {
    const uniqueElements = new Set(arr);
    const freqMap = {};
    uniqueElements.forEach(element => {
        freqMap[element] = arr.filter(item => item === element).length;
    });
    return freqMap;
}

console.log(countFrequencyWithSet([3, 1, 4, 1, 5, 9])); // Output: { '3': 1, '1': 2, '4': 1, '5': 1, '9': 1 }
