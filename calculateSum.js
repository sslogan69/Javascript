//Calculate the sum of the elements of the array


function calculateSum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(calculateSum([3, 1, 4, 1, 5, 9])); // Output: 23
