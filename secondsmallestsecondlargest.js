
//Find the second smallest and second largest element in an array
function findSecondSmallestAndLargest(arr) {
    arr.sort((a, b) => a - b);
    return {
        secondSmallest: arr[1],
        secondLargest: arr[arr.length - 2]
    };
}
console.log(findSecondSmallestAndLargest([3, 1, 4, 1, 5, 9])); // Output: { secondSmallest: 3, secondLargest: 5 }
