console.log("Day 3: JavaScript Basics");
function factorial(num){
    if(num<0 || typeof(num) !== "Number"){
       alert('number should be psoitve and number')
        
    }
for(let i = num -1 ;i >0 ;i--){
    num = num * i
}
return num
}
console.log(factorial(5)); // Output:
console.log(factorial("hiii"));

