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
const duplicates = findDuplicates("programming");
console.log(duplicates); // Output: ['r', 'g', 'm']