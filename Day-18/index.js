// Qu:1
function calAreaOfReactangle(){
    let Length = parseInt(prompt("Enter the Length of Rectangle: "));
    let Width = parseInt(prompt("Enter the Width of Rectangle: "));
    let Area = Length * Width;
    return Area
}
// console.log("Area of Rectangle is: " + calAreaOfReactangle());

// Qu:2
 function isOddEven () {
    let number = parseInt(prompt("Enter a number: "));
    if(number% 2 === 0){
        console.log(`${number} is an Even number`);
        
    }else{
        console.log(`${number} is an Odd number`);
    }
 }
// isOddEven();

// Qu:3

function smallestNumber() {
    let num1 = parseInt(prompt("Enter first number: "));
    let num2 = parseInt(prompt("Enter second number: "));
    let num3 = parseInt(prompt("Enter third number: "));

    if (num1 < num2 && num1 < num3) {
        console.log(`${num1} is the smallest number`);
    } else if (num2 < num1 && num2 < num3) {
        console.log(`${num2} is the smallest number`);
    } else {
        console.log(`${num3} is the smallest number`);
    }
}   
// smallestNumber();
function smallestBiggest (){
    let num = []
    let n = parseInt(prompt("Enter the number of elements: "));
    for(let i = 0;i < n;i++){
        num.push(parseInt(prompt(`Enter number ${i + 1}: `)));
    }
    console.log(num);
    let small = num[0];
    for(let i= 1 ; i<n;i++) {
        if(num[i]<small){
            small = num[i];
        }
    }
    console.log(`The smallest number is: ${small}`);

    let big = num[0];
    for(let i= 1 ; i<n;i++) {
        if(num[i]>big){
            big = num[i];
        }
    }
    console.log(`The largest number is: ${big}`);
}
// smallestBiggest();

// Qu:4

function reverseString (string) {
    let reversed = ''
    for (let i = string.length-1 ; i >= 0 ; i --){
        reversed += string[i];
    }
    return reversed;
}
//console.log(reverseString("Hello World"));

function reverseString2 (string) {
    let reversed = string.split('').reverse().join('');
    return reversed;
}
//console.log(reverseString2("Hello World"));

// Qu:5

function factorial(n){
    let factorial = 1
    if(n === 0 || n === 1){
        return factorial;
    }
    for (let i = 1; i<=n;i++){
        factorial = factorial * i;
    }
    return factorial;
}
//console.log(factorial(1)); // 120

// Qu:6

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}

// isLeapYear(1900); // Output: 1900 is not a leap year
// isLeapYear(2000); // Output: 2000 is a leap year
// isLeapYear(2024)

//Qu:7

function sumOfDigits (number){
    let sum = 0
    for(let i = 0 ; i < number.length; i++){
        sum += parseInt(number[i]);
    }
    return sum;
}
//console.log(sumOfDigits("12345")); // Output: 15 number pass as a string

function sumOfDigits2 (number){
    let sum = 0
    for(let i = 0 ; i < number.toString().length;i++){
        sum = sum + parseInt(number.toString()[i]);
    }
    console.log(sum);
    
} 
//sumOfDigits2(12345); // Output: 15 number pass as a number

// Qu:8

function tableOfNUmber (number){
    for(let i =1 ; i <= 10;i++){
        console.log(`${number} * ${i} = ${number * i}`);
    }
}
 //tableOfNUmber(5); // Output: 5 * 1 = 5, 5 * 2 = 10, ..., 5 * 10 = 50

 // Qu:9

 function isPalindrome (string){
    let reversed = string.split('').reverse().join('');
    if (reversed === string) {
        console.log(`${string} is a palindrome`);
    } else {
        console.log(`${string} is not a palindrome`);
    }
 }
    //isPalindrome("madam"); // Output: madam is a palindrome
    //isPalindrome("hello"); // Output: hello is not a palindrome

    function isPalindrome2 (string){
        for(let i = 0 ; i < string.length ; i ++){
            if(string[i]=== string[string.length -1 - i]){
                return true;
            }else
            {
                return false;
            }
        }
    }
    //console.log(isPalindrome2("Dipanhf")); // Output: true

    //Qu:10
   function exponentiation(base, exponent) {
        let result = 1;
        for (let i = 0; i < exponent; i++) {
            result *= base;
        }
        return result;
    }
    console.log(exponentiation(2, 3)); // Output: 8 (2^3 = 8)


    //Qu:11

    function isPrime(inputNumber) {
  let result = true;
  if(inputNumber === 2){
    result = true;
  }
  else if (inputNumber % 2 === 0) {
    result = false;
  }

  if (result === true) {
    for (let i = 3; i < inputNumber; i += 2) {
      if (inputNumber % i === 0) {
        result = false;
        break;
      }
    }
  }
  return result;
}

console.log(isPrime(2));