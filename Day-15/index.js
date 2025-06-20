console.log("hiii");
function myFunction(num) {
  let digits = [];
  let number = num;
  let sum = 0
  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  let length = digits.length
  for(let i = 0 ; i <digits.length;i++){
     sum = sum +Math.pow(digits[i],length)
  }
  if(number === sum){
    console.log("Armstrong Number");
  }else{
    console.log("Not an Armstrong Number");
  }
}
myFunction(8208)
