// act == cat
//pool  = loop

function isAnagram(string1, string2) {
    const sortedString1 = string1.split('').sort().join('');
    const sortedString2 = string2.split('').sort().join('');
    return sortedString1 === sortedString2;
}
 console.log(isAnagram('act', 'cat')); // true
 

 function isAnagram2 (string1, string2) {
    const charS1 = {}
    for(let char of string1){
        if(!charS1[char]){
            charS1[char] = 0;
        }
        charS1[char] = charS1[char] + 1;
    }
    console.log(charS1);
    
      const charS2 = {}
    for(let char of string2){
        if(!charS2[char]){
            charS2[char] = 0;
        }
        charS2[char] = charS2[char] + 1;
    }
    console.log(charS2);

    for(let key in charS1){
        if(charS1[key] !== charS2[key]){
            return false;
        }
    }
    
    return true;
 }
 isAnagram2('act', 'cat'); // true
 console.log(isAnagram2('pool', 'loop')); // true
 console.log(isAnagram2('pool', 'lo'))
 