// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reverseIntWithoutSign = () => {
    return parseInt(
      n
        .toString()
        .split("")
        .reverse()
        .join("")
    );
  };

  // Math.sign checks if the sign is pos or neg
  if (Math.sign(n) === 1) {
    return reverseIntWithoutSign();
  }

  if (Math.sign(n) === -1) {
    // Math.abs returns the number without sign, if it had it before
    return -Math.abs(reverseIntWithoutSign());
  }
  if (n === 0) {
    return 0;
  }
}

module.exports = reverseInt;
