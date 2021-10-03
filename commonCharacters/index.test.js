/**
 * Write a function `commonCharacters(str1, str2)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `str1`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

const commonCharacters = (str1, str2) => {
  // TODO
  let obj = {};
  let arr = [];

  for(let i = 0; i < str1.length; i++) {
    if(!obj[str1[i]]) {
      obj[str1[i]] = 1;
    } else {
      obj[str1[i]] += 1;
    }
  }

  for(let i = 0; i < str2.length; i++) {
    if(obj[str2[i]] === 1) {
      arr.push(str2[i]);
    }
  }
  return arr.join("");
}
