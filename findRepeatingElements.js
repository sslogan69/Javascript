//Find all repeating elements in an array
function findRepeatingElements(arr) {
    const freqMap = {};
    const repeats = [];
    const added = new Set(); // Track elements already added to repeats
    for (let num of arr) {
        if (freqMap[num]) {
            if (!added.has(num)) { // Check if already added
                repeats.push(num);
                added.add(num); // Mark as added
            }
        }
        freqMap[num] = (freqMap[num] || 0) + 1;
    }
    return repeats;
}
console.log(findRepeatingElements([3, 1, 4, 1, 5, 9, 3])); // Output: [1, 3]
