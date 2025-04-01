function ArrayString(arr){
    return arr.reverse();
}
let val=['a','b','c','d','e']
console.log(ArrayString(val))


let inputs="one two three four five";
let input = inputs.split(' ');
let results="";
for(let word of input){
let res="";
for(let i=word.length-1; i>=0; i--){
    res +=word[i];
}
results +=res + " ";

}
console.log(results.trim());


let inputsplit ="one two three four five";
let result ="";
for(let i=inputsplit.length-1; i>=0; i--){
    result +=inputsplit[i]+ "" ;
} 
console.log(result.trim());
