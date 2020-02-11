// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  //   my solution: not sure what to do with spaces strings
  //   for (let i = 1; i <= n; i++) {
  //     let floor = [];
  //     for (let x = 0; x < i; x++) {
  //       floor.push("#");
  //     }
  //     while (floor.length !== n) {
  //       floor.push(" ");
  //     }
  //     console.log(floor.join(" "));
  //   }


  //   recursion
  // first step of recursion is thinking about base case
  // meaning when to stop the recursive function
  // if I need to print from n to 0, base case is: 0if(n === 0) return
  // when we call the function again, make sure the args have changed


  
}

module.exports = steps;
