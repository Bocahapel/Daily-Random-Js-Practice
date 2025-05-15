/*
const num = Math.ceil(Math.random() * 10);

console.log(num);

console.log("Guess the number from 1 to 10");

const testNum = 5;

if (testNum == num) {
  console.log("You are correct!");
} else {
  console.log(`Wrong answer, the number is ${num}`);
}

//reverse string number function
function reverseNum(n) {
  n = n + "";

  return n.split("").reverse().join("");
}

console.log(Number(reverseNum(12345)));

*/

//async await tutorial
/*fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((res) => res.json())
  .then((json) => console.log(json));*/

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await res.json();
  console.log(data);

  return data;
}

/*
const todo = getTodos(); //called async function
console.log(todo); <= this will return promise
*/

getTodos(); //This will run the function

console.log("First msg");
console.log("Second msg");
