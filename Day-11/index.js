// formula of simple interest = (principle amount * rate * time)/100
function simpleInterest(principle, rate, time) {
    if(typeof principle !== "number" || typeof rate !== "number" || typeof time !== "number") {
        console.log("Invalid input");
        
    }
    return (principle * rate * time) / 100;
}
console.log(simpleInterest(10000,6,10));
// or
