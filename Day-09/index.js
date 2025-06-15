// factor of number :- if divided 4  by 2 and remainder is 0 then 2 is factor of 4.
//given number is divided by any number and remainder is 0 then that number is factor of given number.
function getFactor(num) {


  if (num < 1 || typeof(num) !== "number") {
    console.log("number should be greate than 0");
  }
  let factor = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factor.push(i);
    }
  }
  return factor
}
console.log(getFactor(20));


