// Calculate the sum of the elements of the array

function calculateSum(arr) {
    // Use the reduce method to sum up the elements of the array
    return arr.reduce((sum, num) => sum + num, 0);
}

// Example usage
console.log(calculateSum([3, 1, 4, 1, 5, 9])); // Output: 23
