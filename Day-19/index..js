//console.log('a'.charCodeAt(0));
function isAlphabeticOrder (string){
    let input = string.toLowerCase();
    input = input.replace(/\s/g, '');
    console.log(input);
    let result = false
    
    for(let i =0 ;i<input.length-1;i++){
        if(input[i]>input[i+1]){
           // return false;
           result = false;
           //console.log("Not in Alphabetic Order");
           
        }else{
            result = true;
            //console.log("In Alphabetic Order");
        }
    }
    //return true;
    console.log(result);
    
}
    console.log(isAlphabeticOrder('abcdGF'));
    