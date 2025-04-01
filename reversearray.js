// Reverse a given array
function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray([3, 1, 4, 1, 5, 9])); // Output: [9, 5, 1, 4, 1, 3]
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
console.log(reverseArray([1, 2, 3])); // Output: [3, 2, 1]
// Explanation: The reverse() method is used to reverse the elements of the array in place.


// Reverse an array of characters
function arrayReverseChar(arr) {
    return arr.reverse();
}
console.log(arrayReverseChar(['a', 'b', 'c', 'd', 'e', 'f', 'g'])); // Output: [ 'g', 'f', 'e', 'd', 'c', 'b', 'a' ]

// Reverse an array of strings
// without using reverse method
function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}
console.log(reverseArray([3, 1, 4, 1, 5, 9])); // Output: [9, 5, 1, 4, 1, 3]
// Explanation: The function iterates from the end of the array to the beginning, pushing each element to a new array.
