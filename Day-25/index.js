function tipCalculator (){
    let bill = parseFloat(prompt("Enter the bill amount:"));
    let tip = parseFloat(prompt("Enter the tip percentage:"));  
    let total = (bill * tip) / 100 + bill;
    console.log(`Total bill is ${total.toFixed(2)}`);
    let tipAmount = (bill * tip) / 100;
    console.log(`Tip is ${tipAmount.toFixed(2)}`);
   

    
}
tipCalculator()