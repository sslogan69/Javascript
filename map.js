const num = [1, 2, 3, 4, 5];

// Use the map function to create a new array with doubled values
const dob = num.map((num) => {
    return num * 2; // Multiply each element by 2
});

console.log(dob); // Output: [2, 4, 6, 8, 10]

// Use the map function to create a new array with squared values
const sqr = num.map((num) => {
    return num * num; // Square each element
});

console.log(sqr); // Output: [1, 4, 9, 16, 25]

// Use the map function to create a new array with odd/even numbers
const oddEven = num.map((num) => {
    return num % 2 === 0 ? 'Even' : 'Odd'; // Check if the number is odd or even
});

console.log(oddEven); // Output: ['Odd', 'Even', 'Odd', 'Even', 'Odd']