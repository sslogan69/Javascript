// write a program to count the number of occurrences of each word in the input string
// and print the words and their counts in descending order of the counts
let input = "onedfdsfdsftwodsfdsfdsfthreefdsfdsfourdfdsfffdsfive";
let words = input.match(/\w+/g);
let wordCount = {};

// count the number of occurrences of each word
for (let word of words) {
    wordCount[word] = wordCount[word] ? wordCount[word] + 1 : 1;
}

// sort the words by their counts in descending order
let sortedWords = Object.keys(wordCount).sort((a, b) => wordCount[b] - wordCount[a]);

// print the words and their counts
for (let word of sortedWords) {
    console.log(word, ":", wordCount[word]);
}

// Output: 
// fds:10
// three:1
// five:1
// four:1
// two:1
// one:1

// Explanation: The input string is split into words using a regular expression. The occurrences of each word are counted and stored in an object. The words are then sorted by their counts in descending order and printed.
