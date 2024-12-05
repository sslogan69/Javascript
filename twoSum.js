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
