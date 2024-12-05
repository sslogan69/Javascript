//Check if an array is a subset of another array

function isSubset(arr1, arr2) {
    const set1 = new Set(arr1);
    return arr2.every(item => set1.has(item));
}
console.log(isSubset([3, 1, 4], [1, 4])); // Output: true
console.log(isSubset([3, 1, 4], [1, 5])); // Output: false
