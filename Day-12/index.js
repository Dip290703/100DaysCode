// prime number
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
