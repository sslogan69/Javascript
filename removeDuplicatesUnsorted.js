//Remove duplicates from an unsorted array using the `removeDuplicatesUnsorted` function. The function utilizes a `Set` to filter out duplicate values and returns a new array with unique elements.

function removeDuplicatesUnsorted(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicatesUnsorted([1, 2, 3, 2, 1, 4])); // Output: [1, 2, 3, 4]
console.log(removeDuplicatesUnsorted([1, 2, 3, 2, 1, 4, 5, 4, 6, 7, 8, 9])); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]