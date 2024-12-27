//Remove duplicates from a sorted array
function removeDuplicatesSorted(arr) {
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[index]) {
            index++;
            arr[index] = arr[i];
        }
    }
    return arr.slice(0, index + 1);
}
console.log(removeDuplicatesSorted([1, 1, 3, 4, 4, 5])); // Output: [1, 3, 4, 5]
console.log(removeDuplicatesSorted([1, 1, 2, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicatesSorted([1, 2, 3, 4, 5])); // Output: [1, 2, 3, 4, 5]
// Time Complexity: O(n), where n is the length of the input array. We are iterating over the array only once.
// Space Complexity: O(1). We are using a constant amount of space.