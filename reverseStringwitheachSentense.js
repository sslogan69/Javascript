function reverseWords(str) {
    const words = str.split(' '); // Split the string into words using spaces
    const reversedWords = words.map(word => word.split('').reverse().join('')); // Reverse each word and store it in a new array
    return reversedWords.join(' '); // Join the reversed words back into a single string
}

const inputString = "This is a sample sentence"; // Sample input
const reversedString = reverseWords(inputString);
console.log(reversedString); // Output the result: "sihT si a elpmas ecnetnes"
// Explanation: The input string is split into words, each word is reversed, and then the reversed words are joined back into a single string.
