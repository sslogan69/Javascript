// Function to find the smallest number in an array
function findSmallest(arr) {
    // Initialize the minimum value with the first element of the array
    let min = arr[0];
    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // If the current element is smaller than the current minimum, update the minimum
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    // Return the smallest number found
    return min;
}

// Test the function with an example array
console.log(findSmallest([3, 1, 4, 1, 5, 9])); // Output: 1
console.log(findSmallest([5, 3, 1, 4, 1, 5, 9])); // Output: 1
console.log(findSmallest([9, 5, 3, 1, 4, 1, 5, 9])); // Output: 1