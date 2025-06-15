function average (num){
let result =0
for (let i = 0 ; i < num.length ; i ++){
   result = result + num[i]
}
return result/num.length

}
console.log(average([1,3,34]));

function calAverage (numArray){
    if(Array.isArray(numArray) !== true ){
        console.log("Invalid input");
        
    } 
    let sum = 0

    for (let i = 0 ; i < numArray.length ; i++){
        sum += numArray[i]
    }
    let average = sum / numArray.length
    return average
}
console.log(calAverage([1,23,4,5,6]));
