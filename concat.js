console.log(1 + '2' + '2'); // 122
// Explanation: 1 is coerced to a string and concatenated with '2' and '2'

console.log(1 + +'2' + '2'); // 32
// Explanation: +'2' converts '2' to a number, so the expression becomes 1 + 2 + '2' which results in '32'

console.log(1 + -'1' + '2'); // 02
// Explanation: -'1' converts '1' to -1, so the expression becomes 1 - 1 + '2' which results in '02'

console.log(+'1' + '1' + '2'); // 112
// Explanation: +'1' converts '1' to a number, so the expression becomes 1 + '1' + '2' which results in '112'

console.log('A' - 'B' + "2"); // NaN2
// Explanation: 'A' - 'B' results in NaN (Not a Number), so the expression becomes NaN + '2' which results in 'NaN2'

console.log('A' - 'B' + 2); // NaN
// Explanation: 'A' - 'B' results in NaN (Not a Number), so the expression becomes NaN + 2 which results in NaN

// 4. What is the output of the following code?