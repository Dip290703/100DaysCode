// leap year  or not
// leap year = 366 days, every 4 years except for years that are divisible by 100 but not by 400

function isLeapYear() {
  let year = parseInt(prompt("Enter a year :"));
  if (typeof year !== "Number") {
    console.log("Please enter a valid number");
    return false;
  }
  // if(year % 4 ===0 )
  // {
  //     return true
  // }
  // return false
  return year % 4 === 0 ? true : false;
}
let LeapYear = isLeapYear();
console.log(LeapYear);

//calculate the sum of digit of given number
function sumOfDigits() {
  let number = parseInt(prompt("Enter a number: "));
  let sum = 0;

  for (let i = 0; i < number.toString().length; i++) {
    sum = sum + parseInt(number.toString()[i]);
  }
  console.log("Sum of digits is: " + sum);
}

sumOfDigits();
