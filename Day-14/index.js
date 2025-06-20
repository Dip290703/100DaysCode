function celsiusToFaherniet(input){
let fahrenheit = (input * 9/5) + 32;
return fahrenheit;
}

console.log(celsiusToFaherniet(45));
function fahrenheitToCelsius(input){
    let celsius = (input - 32) * 5/9;
    return celsius;
}
console.log(fahrenheitToCelsius(113));

//swappinig with extra variable

let a = 5 
let b = 4
let c 
c=a 
a= b
b=c
console.log(a);
console.log(b);
