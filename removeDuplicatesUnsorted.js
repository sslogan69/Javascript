//Remove duplicates from an unsorted array


function removeDuplicatesUnsorted(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicatesUnsorted([1, 2, 3, 2, 1, 4])); // Output: [1, 2, 3, 4]
