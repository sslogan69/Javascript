//Search for an element in an array

function searchElement(arr, target) {
    return arr.includes(target);
}
console.log(searchElement([3, 1, 4, 1, 5, 9], 4)); // Output: true
console.log(searchElement([3, 1, 4, 1, 5, 9], 10)); // Output: false
console.log(searchElement(['a', 'b', 'c'], 'a')); // Output: true
console.log(searchElement(['a', 'b', 'c'], 'd')); // Output: false