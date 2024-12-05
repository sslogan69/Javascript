//Rearrange the array in increasing-decreasing order
function rearrangeArray(arr) {
    arr.sort((a, b) => a - b);
    let left = 0, right = arr.length - 1;
    let result = [];
    while (left <= right) {
        if (left === right) {
            result.push(arr[left]);
        } else {
            result.push(arr[left++]);
            result.push(arr[right--]);
        }
    }
    return result;
}
console.log(rearrangeArray([3, 1, 4, 1, 5, 9])); // Output: [1, 9, 1, 5, 3, 4]
