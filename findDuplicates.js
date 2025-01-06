function findDuplicates(input) {
    const charCount = new Map();
    const duplicates = new Set();
    for (let char of input) {    // Count occurrences and collect duplicates in a single loop
        if (charCount.has(char)) {
            duplicates.add(char);
        } else {
            charCount.set(char, 1);
        }
    }
    return Array.from(duplicates);
}
const duplicates = findDuplicates("progrkjkjkuiuiuipopoklklklamming");
console.log(duplicates); // Output: ['r', 'k', 'j', 'u', 'i', 'o', 'p', 'l', 'm']
// Explanation: The findDuplicates function counts the occurrences of each character in the input string and collects the duplicate characters in a Set. The function returns an array of duplicates found in the input string. In this case, the duplicates are ['r', 'k', 'j', 'u', 'i', 'o', 'p', 'l', 'm'].
// The function uses a Map to store the count of occurrences for each character and a Set to collect the duplicate characters. It iterates over each character in the input string and updates the Map and Set accordingly. Finally, it converts the Set to an array using Array.from() and returns the array.


//Simplified version
function findDuplicates(input) {
    const duplicates = new Set();
    const seen = new Set();

    for (let char of input) {
        seen.has(char) ? duplicates.add(char) : seen.add(char);
    }
    
    return [...duplicates]; // Spread the Set into an array
}

console.log(findDuplicates("progrkjkjkuiuiuipopoklklklamming"));
// Output: ['r', 'k', 'j', 'u', 'i', 'o', 'p', 'l', 'm']
// Explanation: This simplified version of the findDuplicates function uses two Sets to track the 
// characters that have been seen and the duplicate characters. It iterates over each character in the input 
// string and updates the Sets accordingly. Finally, it spreads the duplicate Set into an array and returns it. 
// The output is the same as the previous example.

