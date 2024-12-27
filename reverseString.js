function reverseString(str) {
    return str.split('').reverse().join(''); // Split the string into an array of characters, reverse the array, and then join it back into a string
}

const inputString = "this is the sample Program"; // Sample input
const reversedString = reverseString(inputString);
console.log(reversedString); // Output the result: "margorP elpmas eht si siht"
// Explanation: The input string is split into characters, reversed, and then joined back into a single string.

