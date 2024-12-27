//Find the second smallest and second largest element in an array
function findSecondSmallestAndLargest(arr) {
    if (arr.length < 2) {
        throw new Error("Array must contain at least two elements");
    }
    arr = [...new Set(arr)]; // Remove duplicates
    if (arr.length < 2) {
        throw new Error("Array must contain at least two unique elements");
    }
    arr.sort((a, b) => a - b);
    return {
        secondSmallest: arr[1],
        secondLargest: arr[arr.length - 2]
    };
}
console.log(findSecondSmallestAndLargest([3, 1, 4, 1, 5, 9])); // Output: { secondSmallest: 3, secondLargest: 5 }
console.log(findSecondSmallestAndLargest([3, 1])); // Output: { secondSmallest: 1, secondLargest: 3 }
console.log(findSecondSmallestAndLargest([3, 1, 4, 1, 5, 9, 2, 6])); // Output: { secondSmallest: 2, secondLargest: 6 }
console.log(findSecondSmallestAndLargest([3, 1, 4, 1, 5, 9, 2, 6, 5, 3])); // Output: { secondSmallest: 2, secondLargest: 6 }
console.log(findSecondSmallestAndLargest([3])); // Error: Array must contain at least two elements
console.log(findSecondSmallestAndLargest([3, 3])); // Error: Array must contain at least two unique elements
console.log(findSecondSmallestAndLargest([])); // Error: Array must contain at least two elements
console.log(findSecondSmallestAndLargest([3, 3, 3])); // Error: Array must contain at least two unique elements