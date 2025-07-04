let bigString = "The BIG big brown fox jumped over the big log in the big forest, wearing a big hat and carrying a big bag full of big dreams."
let word = "big"

function findAllOccurences (str,word){

 const result = []
   let index = str.toLowerCase().indexOf(word.toLowerCase()) 
   while(index !== -1){
  result.push(index)
  index = str.toLowerCase().indexOf(word.toLowerCase(), index + 1)

}
return result

}

console.log(findAllOccurences( bigString,word));
