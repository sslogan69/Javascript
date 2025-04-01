function areAnagrams(str1, str2) {
    // Remove spaces and convert both strings to lowercase
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();

    // If lengths are different, they can't be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort the characters of both strings and compare
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Example usage
console.log(areAnagrams("listen heart race", "silent earth care")); // true
console.log(areAnagrams("hello", "world"));   // false
