// Filter the array to include only numbers greater than 2
const num = [1, 2, 3, 4, 5, 2, 3, 1];
const nums = num.filter(num => num > 2);
console.log(nums); // Output: [3, 4, 5, 3]

// Foreach with 3 rows result
const colorss = ["red", "green", "blue"];
colorss.forEach((color) => {
    console.log(color); // Output: red, green, blue (each on a new line)
});

// For with single rows result
const colors = ["red", "green", "blue"];
let result = '';
for (const index in colors) {
    result += colors[index] + ' ';
}
console.log(result.trim());  // Output: red green blue

// Foreach with single rows result
const colos = ["red", "green", "blue"];
let results = '';
colos.forEach((color) => {
    results += color + ' ';
});
console.log(results.trim());  // Output: red green blue

// Join with single rows result
const colo = ["red", "green", "blue"];
console.log(colo.join(' '));  // Output: red green blue
