// Check if an array is a subset of another array
function isSubset(arr1, arr2) {
    const set1 = new Set(arr1); // Convert the first array to a Set for efficient lookups
    return arr2.every(item => set1.has(item)); // Check if every element in the second array exists in the Set
}

// Test cases
console.log(isSubset([3, 1, 4], [1, 4])); // Output: true
console.log(isSubset([3, 1, 4], [1, 5])); // Output: false
console.log(isSubset([3, 1, 4], [1, 3, 4])); // Output: true
console.log(isSubset([3, 1, 4], [1, 3, 4, 5])); // Output: false
console.log(isSubset([3, 1, 4], [])); // Output: true
console.log(isSubset([3, 1, 4], [3, 1, 4])); // Output: true