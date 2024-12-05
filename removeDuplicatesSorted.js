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
