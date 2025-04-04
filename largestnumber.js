//Find the largest number in an array
function findLargest(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findLargest([3, 1, 4, 1, 5, 9])); // Output: 9
console.log(findLargest([3, 14, 15, 92, 6, 53, 58, 97, 93, 23, 84])); // Output: 97
console.log(findLargest([3, 1, 4, 15, 9, 2, 6, 5, 3, 5, 9])); // Output: 15
console.log(findLargest([3, 1, 4, 1, 5, 9])); // Output: 9
console.log(findLargest([3, 14, 15, 92, 6, 53, 58, 97, 93, 23, 84])); // Output: 97
console.log(findLargest([3, 1, 4, 15, 9, 2, 6, 5, 3, 5, 9])); // Output: 15

// Method 2: Using Math.max() and the spread operator
// The Math.max() function is used to find the largest number in an array.
// The spread operator (...) is used to pass the elements of the array as arguments to the Math.max() function.

function findLargest(arr) {
    return Math.max(...arr);
}

console.log(findLargest([3, 1, 4, 1, 5, 9])); // Output: 9
console.log(findLargest([3, 14, 15, 92, 6, 53, 58, 97, 93, 23, 84])); // Output: 97
console.log(findLargest([3, 1, 4, 15, 9, 2, 6, 5, 3, 5, 9])); // Output: 15
