/*
const ap = ["user1", "user 2", 66 - 90, false, [1, 2, 3]];

const temp = [];

// for (let i = 0; i < ap.length; i++) {
//   console.log(ap[i], typeof ap[i]);

//   temp.push(ap[i]);
// }

// console.log(temp);

console.log("===Backward===");

for (let i = ap.length; i >= 0; i--) {
  console.log(ap[i], typeof ap[i]);

  temp.push(ap[i]);
}

console.log(temp);
*/

console.log("===DICE===");

let dice = Math.trunc(Math.random() * 6) + 1;
let i = 0;

while (dice !== 6) {
  console.log(`Dice Roled: ${dice}`);
  i++;
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loop End");
  }
}
console.log(`Roled ${i + 1} times`);
