console.log("TUSK_3");
const findLongestWord = function (string) {
  let wordslist = string.split(" ");
  let longest = "";
  for (let i = 0; i < wordslist.length; i++) {
    if (wordslist[i].length > longest.length) {
      longest = wordslist[i];
    }
    return longest;
  }
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
//   ********* НЕ ДОДЕЛАНО *********
