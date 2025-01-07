function reverseWords(str) {
    const words = str.split(' '); // Split the string into words using spaces
    const reversedWords = words.map(word => word.split('').reverse().join('')); // Reverse each word and store it in a new array
    return reversedWords.join(' '); // Join the reversed words back into a single string
}

const inputString = "This is a sample sentence"; // Sample input
const reversedString = reverseWords(inputString);
console.log(reversedString); // Output the result: "sihT si a elpmas ecnetnes"
// Explanation: The input string is split into words, each word is reversed, and then the reversed words are joined back into a single string.


// Method 2: Using Array.map() and Array.reverse() methods
// The Array.map() method is used to create a new array by applying a function to each element of the original array.
// The Array.reverse() method is used to reverse the elements of an array in place.
// The Array.join() method is used to join the elements of an array into a single string.
let input = "one two three four five";
let result = input.split(' ').map(word => word.split('').reverse().join('')).join(' ');
console.log(result);  // Output: "eno owt eerht ruof evif"
// Explanation: The input string is split into words, each word is reversed, and then the reversed words are joined back into a single string.
