//Find the median of the given array

function findMedian(arr) {
    if (arr.length === 0) return null; // Handle empty array case
    if (arr.length === 1) return arr[0]; // Handle single element array case
    arr =
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
}
console.log(findMedian([3, 1, 4, 1, 5, 9])); // Output: 3
console.log(findMedian([3, 1, 4, 1, 5])); // Output: 3.5
console.log(findMedian([])); // Output: null
console.log(findMedian([1])); // Output: 1
console.log(findMedian([2, 4])); // Output: 3