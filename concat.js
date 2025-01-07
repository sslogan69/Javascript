console.log(1 + '2' + '2'); // 122
// Explanation: 1 is coerced to a string and concatenated with '2' and '2'

console.log(1 + +'2' + '2'); // 32
// Explanation: +'2' converts '2' to a number, so the expression becomes 1 + 2 + '2' which results in '32'

console.log(1 + -'1' + '2'); // 02
// Explanation: -'1' converts '1' to -1, so the expression becomes 1 - 1 + '2' which results in '02'

console.log(+'1' + '1' + '2'); // 112
// Explanation: +'1' converts '1' to a number, so the expression becomes 1 + '1' + '2' which results in '112'

console.log(+'1' + 1 + '1' + '2'); // 212
// Explanation: +'1' converts '1' to a number, so the expression becomes 1 + 1 + '1' + '2' which results in '212'

console.log('A' - 'B' + "2"); // NaN2
// Explanation: 'A' - 'B' results in NaN (Not a Number), so the expression becomes NaN + '2' which results in 'NaN2'

console.log('A' - 'B' + 2); // NaN
// Explanation: 'A' - 'B' results in NaN (Not a Number), so the expression becomes NaN + 2 which results in NaN

console.log(3 + "4" - "2" + "1"); // 321
// Explanation: 3 + "4" results in "34", then "34" - "2" converts "34" to a number and subtracts 2 resulting in 32, 
// then 32 + "1" results in "321"

console.log(10 + ""); // 10
// Explanation: 10 + "" results in "10" because the number 10 is coerced to a string and concatenated with an empty string.