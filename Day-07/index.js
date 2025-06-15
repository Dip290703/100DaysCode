
//palindrome

function isPalindrome (input){
   
    for (let i = 0; i < input.length ; i++){
  if(input[i] === input[input.length-1-i]){
    return true
  }
  return false}

//    let reverse = input.split('').reverse().join('')
//    if(input === reverse){
//     return true
//    }
//    return false
}
console.log(isPalindrome('kjbnvgj'));
console.log(isPalindrome('madam'));
console.log(isPalindrome('level'));
  

// base to the power of exponent

function  exponent (base,exponent){
  let result = 1
        for (let i = 1 ; i <= exponent ; i++){
             result = base * result
        }
        return result
}

console.log(exponent(2,4));
