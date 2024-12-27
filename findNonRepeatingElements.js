// Function to find all non-repeating elements in an array
function findNonRepeatingElements(arr) {
    const freqMap = {}; // Object to store the frequency of each element
    const nonRepeats = []; // Array to store non-repeating elements

    // Populate the frequency map
    for (let num of arr) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    // Identify non-repeating elements
    for (let num in freqMap) {
        if (freqMap[num] === 1) {
            nonRepeats.push(Number(num));
        }
    }

    return nonRepeats; // Return the array of non-repeating elements
}

// Example usage
console.log(findNonRepeatingElements([3, 1, 4, 1, 5, 9])); // Output: [3, 4, 5, 9]
console.log(findNonRepeatingElements([5, 5, 5, 5, 5, 5])); // Output: []
console.log(findNonRepeatingElements([3, 3, 3, 3, 3, 3])); // Output: []
console.log(findNonRepeatingElements([3, 1, 4, 1, 5, 9, 5, 3])); // Output: [4, 9]
console.log(findNonRepeatingElements([1, 1, 2, 2, 3, 3])); // Output: []
console.log(findNonRepeatingElements([1, 2, 3, 4, 5])); // Output: [1, 2, 3, 4, 5]