let input = "one two three four five";
let result = "";
let inputSplit = input.split(' '); // Split the input string into words

for (let word of inputSplit) {
    let res = "";
    for (let i = word.length - 1; i >= 0; i--) { // Reverse each word
        res += word[i];
    }
    result += res + " "; // Append the reversed word to the result
}

console.log(result.trim());  // Output: "eno owt eerht ruof evif"
// Explanation: The input string is split into words, each word is reversed, and then the reversed words are joined back into a single string.

// Time Complexity: O(n*m) where n is the number of words in the input string and m is the average length of each word. 
// Space Complexity: O(n*m) as we are storing the reversed words in the result string.
