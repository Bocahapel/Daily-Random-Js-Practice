const num = Math.ceil(Math.random() * 10);

console.log(num);

console.log("Guess the number from 1 to 10");

const testNum = 5;

if (testNum == num) {
  console.log("You are correct!");
} else {
  console.log(`Wrong answer, the number is ${num}`);
}
