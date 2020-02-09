// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // My Solution
  if (stringA.length !== stringB.length) return false;
  const anagrams = [stringA, stringB];
  const result = anagrams.map(str => {
    return str
      .toLowerCase()
      .split("")
      .sort()
      .join();
  });
  return result[0] === result[1] ? true : false;
}

module.exports = anagrams;
