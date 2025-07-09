//perfexct number 

function isperfectnumber (number){
let sum = 0 
for(let i =1; i < number; i++){
    if(number % i === 0){
        sum +=i
    }

}
return sum === number
}
console.log(isperfectnumber(9));
