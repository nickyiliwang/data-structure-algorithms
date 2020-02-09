// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return (
    str
      .split(" ") //split by space
      // during the mapping, we take the first letter with charAt(0), cap it, and add it together with the rest of the word by doing slice(1).
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
}

module.exports = capitalize;
