function findDuplicates(input) {
    const charCount = new Map();
    const duplicates = [];
    for (let char of input) {    // Count occurrences of each character
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    for (let [char, count] of charCount) {     // Collect characters that appear more than once

        if (count > 1) {
            duplicates.push(char);
        }
    }
    return duplicates;
}
const duplicates = findDuplicates("programming");
console.log(duplicates); // Output: ['r', 'g', 'm']