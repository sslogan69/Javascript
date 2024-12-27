function twoSum(nums, target) {
    const numToIndex = new Map();  // Create a map to store number and index pairs
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];  // Calculate the complement
        if (numToIndex.has(complement)) {     // Check if the complement exists in the map
            return [numToIndex.get(complement), i]; // Return indices if found
        }
        numToIndex.set(nums[i], i); // Store the current number and its index
    }
    return null;  // Return null if no solution is found (not expected per problem statement)
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9));   // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));        // Output: [1, 2]
console.log(twoSum([3, 3], 6));           // Output: [0, 1]
console.log(twoSum([3, 2, 3], 6));        // Output: [0, 2]
console.log(twoSum([2, 5, 5, 11], 10));   // Output: [1, 2]
console.log(twoSum([2, 5, 5, 11], 16));   // Output: [1, 3]
console.log(twoSum([1, 2, 3, 4, 5], 9));  // Output: [3, 4]
console.log(twoSum([1, 2, 3, 4, 5], 10)); // Output: null
console.log(twoSum([1, 2, 3, 4, 5], 11)); // Output: null
console.log(twoSum([1, 2, 3, 4, 5], 12)); // Output: null
console.log(twoSum([], 0));               // Output: null
console.log(twoSum([1], 1));              // Output: null
console.log(twoSum([1, 2], 1));           // Output: null
console.log(twoSum([1, 2], 3));           // Output: [0, 1]
console.log(twoSum([1, 2, 3], 5));        // Output: [1, 2]
console.log(twoSum([1, 2, 3], 6));        // Output: null
console.log(twoSum([1, 2, 3], 4));        // Output: [0, 2]
console.log(twoSum([1, 2, 3, 4], 5));     // Output: [0, 3]
console.log(twoSum([1, 2, 3, 4], 6));     // Output: [1, 3]
console.log(twoSum([1, 2, 3, 4], 7));     // Output: null
console.log(twoSum([1, 2, 3, 4], 8));     // Output: null
console.log(twoSum([1, 2, 3, 4], 9));     // Output: null