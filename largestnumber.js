//Find the largest number in an array
function findLargest(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findLargest([3, 1, 4, 1, 5, 9])); // Output: 9
