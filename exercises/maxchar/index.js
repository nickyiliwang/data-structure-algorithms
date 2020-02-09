// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // I'm trying to create the chars object with each key value pairs containing the string and repeated counts.

  //   My Initial Way
  //   str.split("").forEach(char => {
  //     if (chars.hasOwnProperty(char)) {
  //       chars = { ...chars, [char]: chars[char] + 1 };
  //     } else {
  //       chars = { ...chars, [char]: 1 };
  //     }
  //   });

  // Stephen's way
  let chars = {};
  let max = 0;
  let maxChar = "";

  // or for(let char of str) ...
  // building a character map
  str.split("").forEach(char => {
    // insanely short
    // chars[char] = chars[char] + 1 || 1;
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  });

  // looping through the object with for in
  // if the value in each pair is bigger than max
  // max will be that value and maxChar will take the key
  // return the key with the highest repeating value(max)
  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
