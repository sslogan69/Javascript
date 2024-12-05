//Find the median of the given array


function findMedian(arr) {
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
}
console.log(findMedian([3, 1, 4, 1, 5, 9])); // Output: 3
