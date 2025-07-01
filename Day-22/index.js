function perfectNumber(n) {
  if (n < 1) return false;
  let sum = 0;
  //console.log(n/2);
  
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum === n;
}
console.log(perfectNumber(7)); // true


function perfectNumber2(input){
if(typeof input !== 'number' || input < 1) return false;

let sum = 0
for (let i = 1;i < input;i++){
    if(input%i === 0){
        sum += i
    }
}
return sum === input;

}
console.log(perfectNumber2(6)); // true