//counting words in sentence
// let words = "gljklglkdjglkjdklj gfhgt"
// let split = words.split(" ")
// console.log(split);

function countWords (sentence){
    let sentences = sentence.trim()
    let splitsen = sentences.split(" ")
    console.log(splitsen);
    
    let words = splitsen.filter((word) => word !== "")
    console.log(words);
    
    return words.length

}
console.log(countWords("this   is a test"))


function countletter(input){
    let letters = input.split("");
    let count = letters.filter((letter) => letter !== " ")
    console.log(letters);
    return count.length

}
console.log(countletter("kgnk kngkt "));
