//Find the average of all elements in an array

function findAverage(arr) {
    if (arr.length === 0) return null; // Handle empty array case
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}
console.log(findAverage([3, 1, 4, 1, 5, 9])); // Output: 3.8333333333333335
