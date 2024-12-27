// Rearrange the array in increasing-decreasing order
function rearrangeArray(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
    let left = 0, right = arr.length - 1;
    let result = [];
    // Use two pointers to rearrange the array
    while (left <= right) {
        if (left === right) {
            // If pointers meet, push the remaining element
            result.push(arr[left]);
        } else {
            // Alternately push the smallest and largest remaining elements
            result.push(arr[left++]);
            result.push(arr[right--]);
        }
    }
    return result;
}
// Example usage
console.log(rearrangeArray([3, 1, 4, 1, 5, 9])); // Output: [1, 9, 1, 5, 3, 4]
