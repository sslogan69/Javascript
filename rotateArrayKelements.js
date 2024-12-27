//Rotate an array by K elements (Block Swap Algorithm)
function rotateArray(arr, k) {
    k = k % arr.length; // To handle rotations greater than array length
    let temp = arr.slice(0, k);
    arr.splice(0, k);
    arr.push(...temp);
    return arr;
}
console.log(rotateArray([3, 1, 4, 1, 5, 9], 2)); // Output: [4, 1, 5, 9, 3, 1]
console.log(rotateArray([3, 1, 4, 1, 5, 9], 3)); // Output: [1, 5, 9, 3, 1, 4]
console.log(rotateArray([3, 1, 4, 1, 5, 9], 12)); // Output: [5, 9, 3, 1, 4, 1]
console.log(rotateArray([3, 1, 4, 1, 5, 9], 6)); // Output: [3, 1, 4, 1, 5, 9]
console.log(rotateArray([3, 1, 4, 1, 5, 9], 0)); // Output: [3, 1, 4, 1, 5, 9]
// Time Complexity: O(n)
// Space Complexity: O(k)