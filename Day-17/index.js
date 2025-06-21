

function countCharacter (input){
    const result ={}
    let string = input.replace(/\s/g,"").toLowerCase()
    for(let i =0 ; i < string.length;i++){
        if(!result[string[i]]){
            result[string[i]] = 0
        }
        result[string[i]] ++
    }
    console.log(result);
    
}
countCharacter("Dipanshu Anil Vishwakarma")