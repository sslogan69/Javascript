// /smallest number in an array
function findSmallest(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(findSmallest([3, 1, 4, 1, 5, 9])); // Output: 1
