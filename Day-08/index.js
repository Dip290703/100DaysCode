//count vowels and consonent in string
console.log("day-8");

function countVowelsConsonent(string) {
  let vowelCount = 0;
  let consonentCount = 0;
  let vowels = "aeiou";
  let consonent = "bcdfghjklmnpqrstvwxyz";
 string = string.toLowerCase()
 string = string.replace(" ","")

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      vowelCount++;
    } else if(consonent.includes(string[i])) {
      consonentCount++;
    }
  }
  console.log(vowelCount,consonentCount);
}
countVowelsConsonent("hello g");
