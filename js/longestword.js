function findLongestWord(string) {
  const stringArray = string.split(' ');
  console.log(stringArray);
  let longestWord = stringArray[0];
  console.log(longestWord);
  for (let i = 0; i < stringArray.length; i += 1) {
    if (stringArray[i].length > longestWord.length) {
      longestWord = stringArray[i];
      console.log(longestWord);
    }
  }
  return longestWord;
}
findLongestWord('The quick brown fox jumped over the lazy dog');
findLongestWord('Google do a roll');
findLongestWord('May the force be with you');
